var inPlayNowView = Backbone.View.extend({

  template: _.template('<div class="inPlayNow"></div>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.children.detach();
    this.$el.append(this.model.map(function(card) {
      return new CardView({model: card}).$el;
    }));
  }
  
});

// @$el.children().detach()
//     @$el.html @template @collection
//     @$el.append @collection.map (card) ->
//       new CardView(model: card).$el
//     @$('.score').text @collection.scores()[0]
