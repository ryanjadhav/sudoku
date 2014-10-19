
var ControlsView = function() {
  this.$el = $('.controls');
  this.memoizeUI();
  this.setupListeners();
};

ControlsView.prototype.memoizeUI = function() {
  this.ui = {
    checkButton: this.$el.find('.check-button'),
    successMessage: this.$el.find('.success-message'),
    errorMessage: this.$el.find('.error-message')
  }
};

ControlsView.prototype.setupListeners = function() {
  this.onCheckBoard();

  vent.on('game-complete', this.showSuccessMessage.bind(this));
  vent.on('game-error', this.showErrorMessage.bind(this));
};

ControlsView.prototype.onCheckBoard = function() {
  this.$el.on('click', '.check-button', function(e) {
    vent.trigger('check-board');
  });
};

ControlsView.prototype.showSuccessMessage = function() {
  this.ui.successMessage.removeClass('hide');
  this.ui.errorMessage.addClass('hide');
  this.ui.checkButton.addClass('hide');
};

ControlsView.prototype.showErrorMessage = function() {
  this.ui.errorMessage.removeClass('hide');
  this.ui.successMessage.addClass('hide');
}
