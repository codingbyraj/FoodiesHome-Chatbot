let feedback = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "0.5",
    "body": [{
            "type": "Container",
            "separation": "none",
            "style": "normal",
            "items": [{
                "type": "TextBlock",
                "text": "We appreciate your feedback",
                "weight": "bolder",
                "size": "large"
            }]
        },
        {
            "type": "Container",
            "separation": "strong",
            "style": "normal",
            "items": [{
                    "type": "TextBlock",
                    "text": "Did we resolve your issue?"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "issueResolved",
                    "style": "expanded",
                    "isMultiSelect": false,
                    "choices": [{
                            "title": "Yes, in **one** contact",
                            "value": "1"
                        },
                        {
                            "title": "Yes, after multiple contacts",
                            "value": "2"
                        },
                        {
                            "title": "No, did not resolve",
                            "value": "3"
                        }
                    ]
                }, {
                    "type": "TextBlock",
                    "text": "How satisfied are you with this chat?"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "chatSatisfaction",
                    "style": "expanded",
                    "isMultiSelect": false,
                    "choices": [{
                            "title": "⭐",
                            "value": "1"
                        },
                        {
                            "title": "⭐⭐",
                            "value": "2"
                        },
                        {
                            "title": "⭐⭐⭐",
                            "value": "3"
                        },
                        {
                            "title": "⭐⭐⭐⭐",
                            "value": "4"
                        },
                        {
                            "title": "⭐⭐⭐⭐⭐",
                            "value": "5"
                        }

                    ]
                },
                {
                    "type": "TextBlock",
                    "wrap": true,
                    "text": "Based upon this support experience, how likely are you to recommend your product or service to a friend or colleague?"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "likelyToRecommend",
                    "style": "expanded",
                    "isMultiSelect": false,
                    "choices": [{
                            "title": "⭐",
                            "value": "1"
                        },
                        {
                            "title": "⭐⭐",
                            "value": "2"
                        },
                        {
                            "title": "⭐⭐⭐",
                            "value": "3"
                        },
                        {
                            "title": "⭐⭐⭐⭐",
                            "value": "4"
                        },
                        {
                            "title": "⭐⭐⭐⭐⭐",
                            "value": "5"
                        }

                    ]
                }, {
                    "type": "TextBlock",
                    "text": "Tell us more:"
                },
                {
                    "type": "Input.Text",
                    "id": "tellUsMore",
                    "placeholder": "Enter your feedback here",
                    "isMultiline": true
                }

            ]
        }
    ],
    "actions": [{
        "type": "Action.Submit",
        "title": "Submit"
    }]
}
