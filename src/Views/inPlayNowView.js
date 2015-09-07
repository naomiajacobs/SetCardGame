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
