'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Koi Fish Facts';

/**
 * Array containing koi fish facts.
 */
var FACTS = [
    "Koi fish have been released into the wild (accidentally and on purpose) in all the continents except Antarctica and they change back to the natural color of common corp within a few generations.",
    "Koi fish is just domesticated version of common carp.",
    "The koi fishes beautiful colors have been made through selective breeding.",
    "There are over twenty varieties of koi fish that vary in color, patterns, and scalation.",
    "Koi fish and goldfish share the same ancestor and can mate with another but their offspring will be sterile.",
    "Koi fish can survive for over a hundred years.",
    "Koi fish were developed from common carp in Japan. ",
    "Koi fish are cold water fish but they benefit being kept at 15 to 25 degree celsius. They do not react well with long and cold winter temperatures. ",
    "Koi fish are omnivorous fish. Koi food is often designed to also float so they come to the surface to eat.",
    "In winter, koi fish digestive systems slow down.",
    "Koi fish increase turbidity of the water and release ammonia in the water.",
    "Koi fish can be trained to eat from hands.",
    "Koi fish prices vary and there are competitions for koi fish"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here is your koi fish fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Do you want to learn about koi fish?";
        var reprompt = "Do you want to learn more about koi fish?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'See you later, dude.');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Peace out, yo');
    }
};
