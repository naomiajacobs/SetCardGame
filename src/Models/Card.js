var Card = Backbone.Model.extend({

  initialize: function() {
    this.set('selected', false);
  },
  
  toggleSelected: function() {
    this.set('selected', !this.get('selected'));
    this.trigger('toggleSelected', this);
  }

});
