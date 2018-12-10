var express = require('express');
var builder = require('botbuilder');
const _ = require('lodash'); // this is used to use random function
const moment = require('moment');
const menu = require('./data/menu').FoodMenu;
const vegPizza = require('./data/foods').vegPizza;
const nonVegPizza = require('./data/foods').nonVegPizza;
const burger = require('./data/foods').burger;
const mainMenu = require('./data/mainmenu').MainMenu;
const LuisKey = require('./data/key').key;

/* express server */
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server is runing on %s", port)
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
app.post('/api/messages', connector.listen());
var inMemoryStorage = new builder.MemoryBotStorage();
var bot = new builder.UniversalBot(connector, function (session, args) {
    session.send("I didn't recognize you! Please tell me again what do you want to say?");
    if (!session.conversationData.customerInfo) {
        session.conversationData.customerInfo = {};
    }
    (session) => {
        session.send("I didn't recognize you! Please tell me again what do you want to say?");
        builder.Prompts.confirm(session, "Want to see our main menu?")
    },
    (session, results) => {
        if (results.response) {
            session.beginDialog("MainMenu");
        }
    }
}).set('storage', inMemoryStorage);;

/* luis code */

var luisAppUrl = process.env.LUIS_APP_URL || LuisKey;
bot.recognizer(new builder.LuisRecognizer(luisAppUrl));
/*  

**********************************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////////////////
**********************************************************************************************************
*/

/* ************* dialogs section *************** */

bot.dialog('Greeting',
    (session) => {
        var greet = ["hi", "hello", "hey"];
        session.send(greet[Math.floor(Math.random() * 3)]);
        session.send("Welcome to foodies Home! Please tell me, how can I help you?");
    }
).triggerAction({
    matches: 'Greeting'
});

bot.dialog('FindFood', [
    function (session, args, next) {
        session.beginDialog('showFoodMenu');
    }
]).triggerAction({
    matches: 'Food',
}).cancelAction('cancelOrder', "Your Order Canceled! Anything else?", {
    matches: /^(cancel | nevermind | quit)/i,
    confirmPrompt: "Are you sure to cancel your order?"
});

bot.dialog("showFoodMenu", [
    (session) => {
        let msg = "We have following types of foods available.\nPlease select any one!";
        builder.Prompts.choice(session, msg, menu);
    }, (session, result) => {
        var optionChoosen = menu[result.response.entity];
        session.conversationData.selectedFoodCategory = result.response.entity;
        session.beginDialog("showProducts");
        session.endDialog();
    }
]).triggerAction({
    matches: /^(menu | show food menu)/i
}).cancelAction({
    matches: /^(cancel | quit)/i,
    confirmPrompt: "do you change your mood to order something?"
})

bot.dialog("showProducts", [
    (session) => {
        var msg = new builder.Message(session);
        var foodItems;
        msg.attachmentLayout(builder.AttachmentLayout.carousel);
        switch (session.conversationData.selectedFoodCategory) {
            case "Veg Pizza":
                foodItems = vegPizza;
                break;
            case "Non Veg Pizza":
                foodItems = nonVegPizza;
                break;
            case "Burger":
                foodItems = burger;
                break;
        }
        msg.attachments(foodItems);
        session.send(msg);
    }
]).triggerAction({
    matches: /^(showproducts)/i
}).cancelAction({
    matches: /^(cancel | quit | no)/i,
    confirmPrompt: "Don't want to add any item?"
})

bot.dialog('addFoodItem', [
        (session, args, next) => {
            var utterance = args.intent.matched[0];
            var pizzaVariety = /(Pizza|Burger)/i.exec(utterance);
            if (pizzaVariety) {
                var item = session.conversationData.item = {
                    product: pizzaVariety.input.toLowerCase(),
                    price: 225.0,
                    qty: 1
                };
                item.product = item.product.replace("add ", "");
            } else {
                session.send("I'm sorry... That food item wasn't found.").endDialog();
            }
            var item = session.conversationData.item;
            if (!session.conversationData.foods) {
                session.conversationData.foods = [];
            }
            session.conversationData.foods.push(item);
            session.send(`A ${item.product} has been added to your menu.`);
            builder.Prompts.confirm(session, `Do you want to add anything else in ${session.conversationData.selectedFoodCategory} category?`);
        },
        (session, results) => {
            if (results.response) {
                session.replaceDialog("showProducts");
            } else {                
                builder.Prompts.confirm(session, `Okay\nDo you want to add any other food item other than ${session.conversationData.selectedFoodCategory}?`);
            }
        }, (session, results, next) => {
            if (results.response) {
                session.replaceDialog("showFoodMenu");
            } else {
                if (!session.dialogData.details) {
                    session.dialogData.details = {};
                }
                for (food of session.conversationData.foods) {
                    session.dialogData.details += "food item: " + food.product + " for Rs. " + food.price + "\n";
                }
                next();
            }
        }, (session) => {
            builder.Prompts.text(session, "Tell me your name?");
        }, (session, results) => {
            if (!session.conversationData.customerInfo) {
                session.conversationData.customerInfo = {};
            }
            session.conversationData.customerInfo.Name = results.response;
            builder.Prompts.text(session, "Where to deliver your food?");
        }, (session, results) => {
            session.conversationData.customerInfo.Address = results.response;
            // console.log("---------------------------\n------------------------\n---You Ordered successfully.\nOrder details: \n" + session.dialogData.details);
            session.send("You Ordered successfully.\nOrder details: \n" + session.dialogData.details);
            session.beginDialog("FinalOrder");
            session.endDialog();
        }
    ])
    .triggerAction({
        matches: /(buy|add)\s.*Pizza|Burger/i,
        confirmPrompt: "Do you want to cancel your order?"
    })
    .cancelAction({
        matches: /^cancel | quit$/i,
        confirmPrompt: "Are you sure to cancel order?"
    });


bot.dialog("FinalOrder", [
    (session) => {
        let finalOrder = {
            totalPrice: 0
        };
        for (food of session.conversationData.foods) {
            finalOrder.totalPrice += food.price;
        }

        var msg = new builder.Message(session);
        card = new builder.HeroCard(session);
        finalTotal = finalOrder.totalPrice + ((finalOrder.totalPrice * 2.5) / 100);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        card.title("<center>Foodies Home</center>")
            .subtitle("<b><center>Bill</center></b>");
        card.text("<b><font family='Ariel' color='green'>Name: " + session.conversationData.customerInfo.Name + "</font><br>Delivery Address: " + session.conversationData.customerInfo.Address + "</b><br>Your Total is " + finalOrder.totalPrice + "<br>GST: 2.5%" + "<br>" + "<b>Final Total: " + finalTotal + "</b>");
        msg.attachments([
            card
        ]);
        session.send(msg);
        // set ordered variable true
        session.conversationData.customerInfo.Ordered = true;
        session.endDialog();
    }
]).triggerAction({
    matches: /^Final Order$/i
}).cancelAction({
    matches: /^cancel | quit$/i,
    confirmPrompt: "Are you sure to cancel order?"
});


bot.dialog("MainMenu", [
    (session) => {
        builder.Prompts.choice(session, "This is our Main Menu.\nChoose one of the following.\n", mainMenu);
    },
    (session, results) => {
        switch (results.response.entity) {
            case "Order Food":
                session.beginDialog("showFoodMenu");
                break;
            case "Cancel Order":
                break;
            case "Get Delivery Boy Info":
                break;
        }
    }
]).triggerAction({
    matches: /^.*main menu.*$/i,
    confirmPrompt: "This will cancel your request. Do you want to cancel?"
});
bot.dialog('help', [function (session, args, next) {
        session.send("Hi user! Tell me, How can I help you?")
        builder.Prompts.confirm(session, "Not Sure! Do you want to see our main menu?");
    },
    (session, results) => {
        if (results.response) {
            session.beginDialog("MainMenu");
        }
    }
]).triggerAction({
    matches: /^help$/i,
    onSelectAction: (session, args, next) => {
        session.beginDialog(args.action, args);
    }
});

bot.dialog('Thanks', [function (session, args, next) {
    console.log("---------------------------", session.conversationData);
    if (session.conversationData) {
        if (session.conversationData.customerInfo && session.conversationData.customerInfo.Ordered) {
            console.log("end");
            session.endConversation("Thanks for giving your precious time.\nIf you still have any query, then tell me, otherwise click on the cross button to exit the window.\nHave a nice day");
        }
    } else {
        session.conversationData.customerInfo = {}
        session.beginDialog("Greeting");
    }
}]).triggerAction({
    matches: "Thanks",
});

bot.dialog('None', [function (session, args, next) {
    session.send("Sorry. I didn't recognize you");
    session.endDialog();
}]).triggerAction({
    matches: "None",
    confirmPrompt: 'This will cancel your order! Are you sure?'
});

bot.dialog("adieu", (session) => {
    session.endConversation("Thanks for giving your precious time.\nIf you still have any query, then tell me, otherwise click on the cross button to exit the window.\nHave a nice day");
}).triggerAction({
    matches: /^$thanks$|^thank you$/i
});