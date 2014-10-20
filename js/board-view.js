// Board View

var BoardView = function(model) {
  this.model = model;
  this.$el = $('.board');
  this.populateBoard(true);
  this.setupListeners();
};

BoardView.prototype.populateBoard = function(pre) {
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
};

BoardView.prototype.onClickTile = function() {
  this.$el.on('click', '.tile', function(event) {
    var $input = $(event.target).find('input');
    $input.focus();
  });
};

BoardView.prototype.onKeyPress = function() {
  var self = this;
  this.$el.on('change', 'input', function(event) {
    var $input = $(event.target),
      id = $input.parent().attr('id'),
      num = $input.val();

    num = +num; // cast as a number

    if (num > 9 || num < 1 || isNaN(num) || num === '') {
      $input.val('');
    } else {
      console.log(num);
      self.model.set(id, num);
    }
  });
};
