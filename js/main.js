(function($) {

  // dom ready
  $(function() {
    window.vent = new EventAggregator();

    boardView = new BoardView(new BoardModel(sample));
    controlsView = new ControlsView();
  });

})(jQuery);
