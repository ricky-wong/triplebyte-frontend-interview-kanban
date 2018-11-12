define( ['App', 'backbone', 'marionette', 'jquery', 'hbs!templates/Card'],
    function(App, Backbone, Marionette, $, template) {
        return Backbone.Marionette.ItemView.extend({
          template: function(serializedModel) {
            return _.template(template,)
          }
        });
    });
