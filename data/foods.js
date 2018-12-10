const vegPizza = [{
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "pizza-1",
                            "text": "Margherita",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A hugely popular margherita, with a deliciously tangy single cheese topping",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Farmhouse.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Margherita Pizza"
                    }
                }
            ]
        }
    },
    {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "pizza-2",
                            "text": "Farm House",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Farmhouse.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                }, {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Farm House Pizza"
                    }
                }
            ]
        }
    },
    {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "pizza-3",
                            "text": "Peppy Paneer",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
                },

                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Peppy Paneer Pizza"
                    }
                }
            ]
        }
    }, {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "pizza-4",
                            "text": "Mexican Green Wave",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Mexican Green Wave Pizza"
                    }
                }
            ]
        }
    }

];

const nonVegPizza = [{
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "nonvegpizza-1",
                            "text": "Margherita",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Non Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A hugely popular margherita, with a deliciously tangy single cheese topping",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Farmhouse.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Margherita Pizza"
                    }
                }
            ]
        }
    },

    {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "nonvegpizza-2",
                            "text": "Farm House",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Non Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Farmhouse.jpg"
                }, {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Farm House Pizza"
                    }
                }
            ]
        }
    }

    , {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "nonvegpizza-3",
                            "text": "Peppy Paneer",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Non Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Peppy Paneer Pizza"
                    }
                }
            ]
        }
    }, {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "nonvegpizza-4",
                            "text": "Mexican Green Wave",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Non Veg Pizza",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Mexican Green Wave Pizza"
                    }
                }
            ]
        }
    }

];

const burger = [{
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "burger-1",
                            "text": "Margherita",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Burger",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A hugely popular margherita, with a deliciously tangy single cheese topping",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://assets.limetray.com/assets/user_images/menus/compressed/1528289258_ChickenWhopperLargeCan.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Margherita Burger"
                    }
                }
            ]
        }
    },

    {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "burger-2",
                            "text": "Farm House",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Burger",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A Burger that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://assets.limetray.com/assets/user_images/menus/compressed/1528280759_CrispyChickenComboLargeCan.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Farm House Burger"
                    }
                }
            ]
        }
    }

    , {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "burger-3",
                            "text": "Peppy Paneer",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Burger",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://assets.limetray.com/assets/user_images/menus/compressed/1528964750_CrispyChickenSupremeComboNorth.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Peppy Paneer Burger"
                    }
                }
            ]
        }
    }, {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [{
                    "type": "Container",
                    "items": [{
                            "type": "TextBlock",
                            "id": "burger-4",
                            "text": "Mexican Green Wave",
                            "weight": "bolder",
                            "size": "medium"
                        }, {
                            "type": "TextBlock",
                            "text": "Burger",
                            "weight": "bolder",
                            "size": "small",
                            "wrap": "true"
                        },
                        {
                            "type": "TextBlock",
                            "text": "A Burger loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
                            "size": "small",
                            "wrap": "true"
                        }
                    ]
                },
                {
                    "type": "Image",
                    "url": "https://assets.limetray.com/assets/user_images/menus/compressed/1528368825_ChickenChilliCheeseMeltLargeCan.jpg"
                },
                {
                    "type": "ColumnSet",
                    "columns": [{
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Size"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Price"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "items": [{
                                    "type": "TextBlock",
                                    "text": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Rs. 255"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [{
                        "type": "TextBlock",
                        "text": "Add to your Menu",
                        "horizontalAlignment": "right",
                        "weight": "bolder",
                    }],
                    "selectAction": {
                        "type": "Action.Submit",
                        "title": "Submit action with imBack",
                        "data": "Add Mexican Green Wave Burger"
                    }
                }
            ]
        }
    }
];


module.exports = {
    vegPizza,
    nonVegPizza,
    burger
}