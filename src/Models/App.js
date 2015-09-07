var App = Backbone.Model.extend({
  
  initialize: function() {
    this.set('deck', new Deck());
    this.set('inPlayNow', new inPlayNow())
  }

});
