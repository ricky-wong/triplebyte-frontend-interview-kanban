define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars', 'views/Cards'],
    function ($, Backbone, Marionette, _, Handlebars, CardsView) {
        var App = new Backbone.Marionette.Application();

        function isMobile() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
        }

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            headerRegion: "header",
            mainRegion: "#main",
            winnieCards: '.cards[data-user-id=1]',
            bobCards: '.cards[data-user-id=2]',
            thomasCards: '.cards[data-user-id=3]',
            georgeCards: '.cards[data-user-id=4]'
        });

        App.addInitializer(function() {
            Backbone.history.start();
        });

        App.mobile = isMobile();

        

        return App;
    });
