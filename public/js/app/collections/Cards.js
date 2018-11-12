define(["jquery","backbone","models/Card"],
  function($, Backbone, Card) {
    // Creates a new Backbone Collection class object
    var Cards = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Card
    });

    return Cards;
  });
