// Board View

var BoardView = function(model) {
  this.model = model;
  this.$el = $('.board');
  this.prepopulateBoard();
  this.setupListeners();
};

BoardView.prototype.prepopulateBoard = function() {
  for (var key in this.model.board) {
    if (this.model.board[key]) {
      var $tile = $("#" + key);
      $tile.addClass('prepopulated');
      $tile.find('input').val(this.model.board[key]).prop('disabled', true);
    }
  }
};

BoardView.prototype.setupListeners = function() {
  this.onClickTile();
  this.onKeyPress();
}

BoardView.prototype.onClickTile = function() {
  var self = this;
  this.$el.on('click', '.tile', function(event) {
    self.$activeTile = $(event.target);
  });
};

BoardView.prototype.onKeyPress = function() {
  var self = this;
  this.$el.on('keyup', 'input', function(event) {
    var $input = $(event.target),
      id = $input.parent().attr('id'),
      num = $input.val();

    self.model.set(id, num);
  });
};
