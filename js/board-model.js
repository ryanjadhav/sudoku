// Board Model Class

var BoardModel = function(sampleBoard) {
  this.board = sampleBoard;
  vent.on('check-board', this.checkGame.bind(this));
};

BoardModel.prototype.set = function(key, value) {
  this.board[key] = +value; //cast as number
};

BoardModel.prototype.checkAllValues = function(values) {
  for (var i = 1; i < 9; i++) {
    if (!values[i] || values[i] !== 1) {
      return false;
    }
  }
  return true;
};

BoardModel.prototype.checkRow = function(rowKey) {
  var values = {};
  for (var key in this.board) {
    if (key[0] === rowKey) {
      if (!!this.board[key]) {
        values[this.board[key]] = values[this.board[key]] || 1;
      }
    }
  }
  return this.checkAllValues(values);
};

BoardModel.prototype.checkColumn = function(columnKey) {
  var values = {};
  for (var key in this.board) {
    if (key[1] === columnKey) {
      if (!!this.board[key]) {
        values[this.board[key]] = values[this.board[key]] || 1;
      }
    }
  }
  return this.checkAllValues(values);
};

BoardModel.prototype.checkGroup = function(keys) {
  var values = {};
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (!!this.board[key]) {
      values[this.board[key]] = values[this.board[key]] || 1;
    }
  }
  return this.checkAllValues(values);
};

BoardModel.prototype.checkGame = function() {
  if (this.checkRow("A") &&
    this.checkRow("B") &&
    this.checkRow("C") &&
    this.checkRow("D") &&
    this.checkRow("E") &&
    this.checkRow("F") &&
    this.checkRow("G") &&
    this.checkRow("H") &&
    this.checkRow("I") &&
    this.checkColumn("1") &&
    this.checkColumn("2") &&
    this.checkColumn("3") &&
    this.checkColumn("4") &&
    this.checkColumn("5") &&
    this.checkColumn("6") &&
    this.checkColumn("7") &&
    this.checkColumn("8") &&
    this.checkColumn("9") &&
    this.checkGroup(["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]) &&
    this.checkGroup(["D1", "D2", "D3", "E1", "E2", "E3", "F1", "F2", "F3"]) &&
    this.checkGroup(["G1", "G2", "G3", "H1", "H2", "H3", "I1", "I2", "I3"]) &&
    this.checkGroup(["A3", "A4", "A5", "B3", "B4", "B5", "C3", "C4", "C5"]) &&
    this.checkGroup(["D3", "D4", "D5", "E3", "E4", "E5", "F3", "F4", "F5"]) &&
    this.checkGroup(["G3", "G4", "G5", "H3", "H4", "H5", "I3", "I4", "I5"]) &&
    this.checkGroup(["A6", "A8", "A9", "B6", "B8", "B9", "C6", "C8", "C9"]) &&
    this.checkGroup(["D6", "D8", "D9", "E6", "E8", "E9", "F6", "F8", "F9"]) &&
    this.checkGroup(["G6", "G8", "G9", "H6", "H8", "H9", "I6", "I8", "I9"])) {
    vent.trigger('game-complete');
  } else {
    vent.trigger('game-error');
  }
};
