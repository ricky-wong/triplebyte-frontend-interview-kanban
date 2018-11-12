// Include Desktop Specific JavaScript files here (or inside of your Desktop Controller, or differentiate based off App.mobile === false)
require([
  "App",
  "routers/AppRouter",
  "controllers/DesktopController",
  'models/Card',
  'collections/Cards',
  'views/Cards',
  "jquery",
  "backbone",
  "marionette",
  "jqueryui",
  "bootstrap",
  "backbone.validateAll"
],
    function (App, AppRouter, AppController, Card, Cards, CardsView, $, Backbone, Marionette) {

        var users = [
          { id: 1, name: 'Winnie' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Thomas' },
          { id: 4, name: 'George' }
        ];

        var cards = [
          [
            { id: 1, title: 'Card-1-1'},
            { id: 2, title: 'Card-1-2'},
          ],
          [
            { id: 3, title: 'Card-2-3'},
            { id: 4, title: 'Card-2-4'},
          ],
          [
            { id: 5, title: 'Card-3-5'},
            { id: 6, title: 'Card-3-6'},
          ],
          [
            { id: 7, title: 'Card-4-7'},
            { id: 8, title: 'Card-4-8'},
          ]
        ];

        // TODO: make Cards collection a singleton accessible within the app,
        // and not from `window`
        // DEBUG: remove me later
        window.cardsCollection = [];
        window.cardsCollection[0] = new Cards(cards[0]);
        window.cardsCollection[1] = new Cards(cards[1]);
        window.cardsCollection[2] = new Cards(cards[2]);
        window.cardsCollection[3] = new Cards(cards[3]);

        App.appRouter = new AppRouter({
            controller:new AppController()
        });
        // Start Marionette Application in desktop mode (default)
        App.start();
        window.app = App;
        App.winnieCards.show(new CardsView(window.cardsCollection[0]));

    });
