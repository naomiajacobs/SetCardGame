var CardView = Backbone.View.extend({

  className: 'card',

  template: _.template('<img src="img/<%- number %>-<%- color %>-<%- fill %>-<%- shape %>.png">'),
  // template: _.template('<div><%- number %> <%- color %> <%- fill %>'+
    // ' <%- shape %></div>'),

  events: {
    'click': function() {
      this.model.toggleSelected();
      this.$el.toggleClass('selected');
      this.render();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
  },

  toggleSelected: function() {
    this.$el.toggleClass('selected');
  }

});
