var properties = [];
properties[0] = [1, 2, 3]; //1, 2, 3
properties[1] = [1, 2, 3]; //red, green, purple
properties[2] = [1, 2, 3]; //solid, striped, empty
properties[3] = [1, 2, 3]; //pill, squiggle, diamond

var generateCards = function() {
  var cards = [];
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
  return cards;
};

var determineIfSet = function(card1, card2, card3) {

  for (var i = 0; i < 4; i++) {
    if (card1[i] === card2[i]) {
      if (card3[i] !== card1[i]) {
        return false;
      }
    } else if (card3[i] === card1[i] || card3[i] === card2[i]) {
      return false;
    }
  }

  return true;

};

var findLastCard = function(card1, card2) {
  var lastCard = [];

  for (var i = 0; i < 4; i++) {
    if (card1[i] === card2[i]) {
      lastCard.push(card1[i]);
    } else {
      var sum = card1[i] + card2[i];
      if (sum === 5) {
        lastCard.push(1);
      } else if (sum === 4) {
        lastCard.push(2);
      } else {
        lastCard.push(3);
      }
    }
  }

  return lastCard;

};

var determineIfSuperset = function(card1a, card1b, card2a, card2b) {
  var first = findLastCard(card1a, card1b);

  var second = findLastCard(card2a, card2b);

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;

  // if (findLastCard(card1a, card1b) === findLastCard(card2a, card2b)) {
  //   return true;
  // }
  // return false;
};
