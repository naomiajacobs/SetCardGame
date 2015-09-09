var inPlayNow = Backbone.Collection.extend({

  initialize: function() {
  },

  findSelected: function() {
    var selected = [];

    _.each(this.models, function(card) {
      if (card.get('selected')) {
        selected.push(card);
      }
    });

    return selected;
  },

  foundSet: function() {
    var selectedCards = this.findSelected();
    var props = ['color', 'fill', 'number', 'shape'];

    if (selectedCards.length !== 3) {
      return false;
    }

    var card1 = selectedCards[0];
    var card2 = selectedCards[1];
    var card3 = selectedCards[2];

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      if (card1.get(prop) === card2.get(prop)) {
        if (card3.get(prop) !== card1.get(prop)) {
          console.log('false');
          return false;
        }
      } else if (card3.get(prop) === card1.get(prop) ||
                card3.get(prop) === card2.get(prop)) {
        return false;
      }
    }
    return true;
  },

  removeSet: function() {
    var context = this;
    var selectedCards = this.findSelected();
    _.each(selectedCards, function(card) {
      context.remove(card);
    });
  }
  
});
