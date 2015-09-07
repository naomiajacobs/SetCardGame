var AppView = Backbone.View.extend({

  el: '#app',

  model: new App(),

  //template for submit set and superset buttons
  template: _.template('<button class="set-button">I Found A Set!</button><button class="superset-button">I Found A Superset!</button><div class="inPlayNow"></div>'),

  events: {
    'click .set-button': function() {this.foundSet();},
    'click .superset-button': function() {this.foundSuperset();}
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var newInPlayNowView = new inPlayNowView({model: this.model.get('inPlayNow')});
    this.$('.inPlayNow').html(newInPlayNowView.el);
  },

  foundSet: function(){
    this.model.get('inPlayNow').foundSet();
  },

  foundSuperset: function() {
    console.log('superset');
  }

});
