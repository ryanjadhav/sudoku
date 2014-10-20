// Board Model Class

var BoardModel = function(sampleBoard) {
  this.board = sampleBoard;
  vent.on('check-board', this.checkGame.bind(this));
};

BoardModel.prototype.set = function(key, value) {
  if (value === '') { debugger; }
  console.log(value);
  this.board[key] = value;
  console.log('board', this.board[key]);
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
      if (this.board[key]) {
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
      if (this.board[key]) {
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
    if (this.board[key]) {
      values[this.board[key]] = values[this.board[key]] || 1;
    }
  }
  return this.checkAllValues(values);
};

BoardModel.prototype.checkGame = function() {
  this.checkBoardData();

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
    this.checkGroup(["A4", "A5", "A6", "B4", "B5", "B6", "C4", "C5", "C6"]) &&
    this.checkGroup(["D4", "D5", "D6", "E4", "E5", "E6", "F4", "F5", "F6"]) &&
    this.checkGroup(["G4", "G5", "G6", "H4", "H5", "H6", "I4", "I5", "I6"]) &&
    this.checkGroup(["A7", "A8", "A9", "B7", "B8", "B9", "C7", "C8", "C9"]) &&
    this.checkGroup(["D7", "D8", "D9", "E7", "E8", "E9", "F7", "F8", "F9"]) &&
    this.checkGroup(["G7", "G8", "G9", "H7", "H8", "H9", "I7", "I8", "I9"])) {
    vent.trigger('game-complete');
  } else {
    vent.trigger('game-error');
  }
};
