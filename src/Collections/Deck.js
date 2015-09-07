// properties[0] = [1, 2, 3]; //1, 2, 3
// properties[1] = [1, 2, 3]; //red, green, purple
// properties[2] = [1, 2, 3]; //solid, striped, empty
// properties[3] = [1, 2, 3]; //pill, squiggle, diamond

var Deck = Backbone.Collection.extend({

  model: Card,

  initialize: function() {
    //instantiates and adds new card for each card
    this.add(_.shuffle(this.generateCards()));
  },

  generateCards: function() {
    var cards = [];
    var properties = [[1,2,3],[1,2,3],[1,2,3],[1,2,3]];
    var addToCards = function(card) {
      card = card || [];
      if (card.length === 4) {
        cards.push(card.slice());
        return;
      } else {
        for (var i = 0; i < properties.length-1; i++) {
          card.push(properties[card.length][i]);
          addToCards(card);
          card.pop();
        }
      }
    };

    addToCards();
    cards = _.map(cards, function(card) {
      return {
        'number': card[0],
        'color': card[1],
        'fill': card[2],
        'shape': card[3]
      };
    });
    return cards;
  }

});
