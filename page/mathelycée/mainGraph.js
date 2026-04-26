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

// courbe f(x)=exp(nx)
// Define the id of your board in BOARDIDExp

JXG.Options.text.useMathJax = true;

const boardExp = JXG.JSXGraph.initBoard(BOARDIDExp, {
    boundingbox: [-5, 20, 5, -5],
    axis: true,
    showNavigation: true
});

var n = boardExp.create('slider', [[-4, -2], [3, -2], [-5, 1, 5]], { name: 'n', snapWidth: 1 });
boardExp.create('functiongraph', [
        (t) => Math.exp(t * n.Value())
]);

// Dynamic MathJax text
boardExp.create('text', [-4, 7,
        () => `\\[f(x) = e^{ ${n.Value()} x}\\]`   // JavaScript template literal
], { fontSize: 24 });

// Animation 
// Define the id of your board in BOARDID

var boardAnim = JXG.JSXGraph.initBoard(BOARDIDAnim, { boundingbox: [-300, 300, 300, -300], keepaspectratio: true });

var t = boardAnim.create('turtle', [], { fillColor: 'blue', highlight: false });
var speed;

var innerloop = function(i, j, ne, sz) {
    if (i > 0) {
        if (j == ne) { t.rt(360 / ne); }
        t.rt(360 / ne);
        t.fd(sz);
        j--;
        if (j <= 0) {
            j = ne;
            i--;
        }
        setTimeout(function() { innerloop(i, j, ne, sz); }, speed);
    }
}

function ngon(ne, sz) {
    innerloop(ne, ne, ne, sz);
}

function run() {
    var code = document.getElementById('inputtext').value;
    if (code == '') { return; }
    eval(code);
}

function clearturtle() {
    t.cs();
}