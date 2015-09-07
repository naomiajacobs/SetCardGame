var App = Backbone.Model.extend({
  
  initialize: function() {
    this.set('deck', new Deck());
    this.set('inPlayNow', new inPlayNow());
    this.deal();
  },

  deal: function() {
    var cardsToAdd = this.get('inPlayNow').models.length;
    for (var i = 0; i < 12 - cardsToAdd; i++) {
      this.get('inPlayNow').add(this.get('deck').pop());
      console.log('added a card!');
    }
  }

});
