var inPlayNow = Backbone.Collection.extend({

  initialize: function() {
  },

  foundSet: function() {
    var selected = [];
    var props = ['color', 'fill', 'number', 'shape'];
    _.each(this.models, function(card) {
      if (card.get('selected')) {
        selected.push(card);
      }
    });

    if (selected.length !== 3) {
      console.log('false');
      return false;
    }

    var card1 = selected[0];
    var card2 = selected[1];
    var card3 = selected[2];

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      if (card1.get(prop) === card2.get(prop)) {
        if (card3.get(prop) !== card1.get(prop)) {
          console.log('false');
          return false;
        }
      } else if (card3.get(prop) === card1.get(prop) ||
                card3.get(prop) === card2.get(prop)) {
        console.log('false');
        return false;
      }
    }

    console.log('IT\'S A SET! CONGRATULATIONS!');
    return true;

  }
  
});
