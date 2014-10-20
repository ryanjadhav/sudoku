(function($) {

  // dom ready
  $(function() {
    window.vent = new EventAggregator();

    var boardView = new BoardView(new BoardModel(sample));
    var controlsView = new ControlsView();
  });

})(jQuery);
