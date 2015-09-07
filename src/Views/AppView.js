var AppView = Backbone.View.extend({

  el: '#app',

  model: new App(),

  //template for submit set and superset buttons
  template: _.template('<button class="set-button">I Found A Set!</button><button class="superset-button">I Found A Superset!</button><div class="inPlayNow"></div>'),

  //events
    //submit set
    //submit superset

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var newInPlayNowView = new inPlayNowView({model: this.model.get('inPlayNow')});
    this.$('.inPlayNow').html(newInPlayNowView.el);
  }

});
