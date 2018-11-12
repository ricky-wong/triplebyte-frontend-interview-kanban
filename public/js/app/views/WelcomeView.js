define( ['App', 'backbone', 'marionette', 'jquery', 'models/Card', 'hbs!templates/welcome'],
    function(App, Backbone, Marionette, $, Card, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new Card({

            }),

            // View Event Handlers
            events: {

            }
        });
    });
