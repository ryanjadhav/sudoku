// Board Model Class

var BoardModel = function(sampleBoard) {
  this.board = sampleBoard;
  this.SUM_VALUE = 45;
};

BoardModel.prototype.set = function(key, value) {
  return this.board[key] = value;
};

BoardModel.prototype.sum = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
};

BoardModel.prototype.checkRow = function(rowKey) {
  var rowValues = [];
  for (var key in this.board) {
    if (key[0] === rowKey) {
      if (!!this.board[key]) {
        rowValues.push(this.board[key]);
      }
    }
  }
  return this.sum(rowValues) === this.SUM_VALUE;
};

BoardModel.prototype.checkColumn = function(columnKey) {
  var columnValues = [];
  for (var key in this.board) {
    if (key[1] === this.columnKey) {
      if (!!this.board[key]) {
        columnValues.push(this.board[key]);
      }
    }
  }
  return this.sum(columnValues) === this.SUM_VALUE;
};

BoardModel.prototype.checkGroup = function(keys) {
  var values = [];
  for (var i = 0, len = keys.length; i < keys; i++) {
    if (!!this.board[keys[i]]) {
      values.push(this.board[keys[i]]);
    }
  }
  return this.sum(values) === this.SUM_VALUE;
};

BoardModel.prototype.checkGame = function() {
  return this.checkRow("A") &&
    this.checkRow("B") &&
    this.checkRow("C") &&
    this.checkRow("D") &&
    this.checkRow("E") &&
    this.checkRow("F") &&
    this.checkRow("G") &&
    this.checkRow("H") &&
    this.checkRow("I") &&
    this.checkColumns("1") &&
    this.checkColumns("2") &&
    this.checkColumns("3") &&
    this.checkColumns("4") &&
    this.checkColumns("5") &&
    this.checkColumns("6") &&
    this.checkColumns("7") &&
    this.checkColumns("8") &&
    this.checkColumns("9") &&
    this.checkGroup(["A1, A2, A3, B1, B2, B3, C1, C2, C3"]) &&
    this.checkGroup(["D1, D2, D3, E1, E2, E3, F1, F2, F3"]) &&
    this.checkGroup(["G1, G2, G3, H1, H2, H3, I1, I2, I3"]) &&
    this.checkGroup(["A3, A4, A5, B3, B4, B5, C3, C4, C5"]) &&
    this.checkGroup(["D3, D4, D5, E3, E4, E5, F3, F4, F5"]) &&
    this.checkGroup(["G3, G4, G5, H3, H4, H5, I3, I4, I5"]) &&
    this.checkGroup(["A6, A8, A9, B6, B8, B9, C6, C8, C9"]) &&
    this.checkGroup(["D6, D8, D9, E9, E8, E9, F9, F8, F9"]) &&
    this.checkGroup(["G6, G8, G9, H9, H8, H9, I9, I8, I9"]);
};
