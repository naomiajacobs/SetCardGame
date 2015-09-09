var AppView = Backbone.View.extend({

  el: '#app',

  model: new App(),

  //template for submit set and superset buttons
  template: function(score) {
    return _.template('<button class="set-button">I Found A Set!</button>' +
    '<button class="superset-button">I Found A Superset!</button>' +
    '<button class="deal-more-cards">Deal More Cards!</button>' +
    '<div class="score">Score: ' + score + '</div>' +
    '<div class="inPlayNow"></div>');
  },

  events: {
    'click .set-button': function(){ this.foundSet(); },
    'click .superset-button': function(){ this.foundSuperset(); },
    'click .deal-more-cards': function(){ this.dealMoreCards(); }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.get('score')));
    var newInPlayNowView = new inPlayNowView({model: this.model.get('inPlayNow')});
    this.$('.inPlayNow').html(newInPlayNowView.el);
  },

  foundSet: function(){
    if (this.model.get('inPlayNow').foundSet()) {
      //increment counter
      this.model.get('inPlayNow').removeSet();
      this.model.deal();
      this.model.set('score', this.model.get('score') + 1);
      this.render();
    } else {
      var selectedCards = this.model.get('inPlayNow').findSelected();
      _.each(selectedCards, function(card) {
        card.toggleSelected();
      });
    }
  },

  foundSuperset: function() {
    console.log('superset');
  },

  dealMoreCards: function() {
    this.model.dealExtra();
    this.render();
  }

});
