define( ['App', 'backbone', 'marionette', 'jquery', 'views/Card'],
    function(App, Backbone, Marionette, $, CardView) {
        return Backbone.Marionette.CollectionView.extend({
          childView: CardView
        });
    });
