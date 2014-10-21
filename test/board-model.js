var expect = chai.expect;

before(function() {
  window.vent = new EventAggregator();
  incompleteBoard = new BoardModel(sample);
  completeBoard = new BoardModel(completed);
});

describe ("Board Model", function() {
  it ("has a board object", function() {
    expect(incompleteBoard.board).to.be.an('object');
  });

  it ("can check to see if all values exist in an sudoku object", function() {
    expect(completeBoard.checkAllValues({1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1})).to.be.true;
  });

  it ("can check to see if a value is missing in an sudoku object", function() {
    expect(completeBoard.checkAllValues({1:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1})).to.be.false;
  });

  it ("can check to see if a value is incorrect in an sudoku object", function() {
    expect(completeBoard.checkAllValues({p:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1})).to.be.false;
  });

  it ("can check to see if a row is completed", function() {
    expect(completeBoard.checkRow("A")).to.be.true;
  });

  it ("can check to see if a column is completed", function() {
    expect(completeBoard.checkColumn("1")).to.be.true;
  });

  it ("can check to see if a group is completed", function() {
    expect(completeBoard.checkGroup(["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"])).to.be.true;
  });

  it ("can check to see if a game is complete", function() {
    expect(completeBoard.checkGame()).to.be.true;
  })
});
