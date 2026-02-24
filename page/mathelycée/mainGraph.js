  var board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-5, 5, 5, -5],
    axis: true
  });

  var A = board.create('point', [-2, 1], {name: 'A', color: 'blue'});
  // Texte yetbaddel wa7dou
  var B = board.create('point', [3, 4], {name: 'B', color: 'blue'});

  var line = board.create('line', [A, B], {straightFirst: false, straightLast: false, color: 'green'});
  
  // Milieu
  var M = board.create('midpoint', [A, B], {name: 'M', color: 'red'});
  
  var txt = board.create('text', [-4,-3, function() {
    return "A(" + A.X().toFixed(2) + " , " + A.Y().toFixed(2) + ")  \n" +
           "B(" + B.X().toFixed(2) + " , " + B.Y().toFixed(2) + ")  \n" +
           "M(" + M.X().toFixed(2) + " , " + M.Y().toFixed(2) + ")" ;
  }]);