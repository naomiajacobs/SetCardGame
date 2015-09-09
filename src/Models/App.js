var App = Backbone.Model.extend({
  
  initialize: function() {
    this.set('deck', new Deck());
    this.set('inPlayNow', new inPlayNow());
    this.set('score', 0);
    this.deal();
  },

  deal: function() {
    var cardsToAdd = this.get('inPlayNow').models.length;
    for (var i = 0; i < 12 - cardsToAdd; i++) {
      if (this.get('deck').models.length > i) {
        this.get('inPlayNow').add(this.get('deck').pop());
      }
    }
  },

  dealExtra: function() {
    var cardsToAdd = this.get('inPlayNow').models.length;
    for (var i = 0; i < 15 - cardsToAdd; i++) {
      if (this.get('deck').models.length > i) {
        this.get('inPlayNow').add(this.get('deck').pop());
      }
    }
  }

});
