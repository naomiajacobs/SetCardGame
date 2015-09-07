var CardView = Backbone.View.extend({

  className: 'card',

  //for when images get working
  // template: _.template('<img src="img/<%- number %>-<%- color %>-<%- fill %>-<%- shape %>.png">'),
  template: _.template('<div><%- number %> <%- color %> <%- fill %> <%- shape %></div>'),

  initialize: function() {
    //listen for click, call select function to highlight, add to current selection
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
  }

});
