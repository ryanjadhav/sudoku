// Board View
var BoardView = function(model) {
  this.model = model;
  this.$el = $('.board');
  this.populateBoard();
  this.setupListeners();

  this.keyCode = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    59: 9
  };
}

BoardView.prototype.populateBoard = function() {
  for (var key in this.model.board) {
    $("#" + key).html(this.model.board[key]);
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
  $(document).on('keypress', function(event) {

    if (self.$activeTile && self.keyCode[event.keyCode]) {
      self.$activeTile.html(self.keyCode[event.keyCode]);
    }
  });
};
