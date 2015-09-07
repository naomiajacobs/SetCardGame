var AppView = Backbone.View.extend({

  el: '#app',

  model: new App(),

  //template for submit set and superset buttons

  //events
    //submit set
    //submit superset

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    // this.$el.html(_.template())
    //figure out how to get randomized cards passed into here?
    this.$('.in-play-now').html(new inPlayNowView());
    this.$el.append();
  }

});
