// Define the id of your board in BOARDID

        var board = JXG.JSXGraph.initBoard(BOARDID, {
            boundingbox: [-10, 7, 6, -9],
            keepaspectratio: false,
            axis: false,
            pan: { enabled: false}
        });

        // Slider for rotations
        var alpha = board.create('slider', [[-7, -6], [2, -6], [0, 0, 2 * Math.PI]], { name: 'α' });
        var beta = board.create('slider', [[-7, -6.5], [2, -6.5], [0, 0, 2 * Math.PI]], { name: 'β' });
        var gamma = board.create('slider', [[-7, -7], [2, -7], [0, 0, 2 * Math.PI]], { name: 'γ' });

        // 3D view
        var bound = [-5, 5];
        var view = board.create('view3d',
            [[-6, -2], [8, 8],
            [bound, bound, bound]],
            {
                projection: 'parallel',
                trackball: { enabled: true },
                depthOrder: {
                    enabled: true
                },
                xPlaneRear: { visible: false },
                yPlaneRear: { visible: false }
            });

        // Cube
        var r = 2;
        var cube = view.create('polyhedron3d', [
            {
                a: [-r, -r, -r],
                b: [r, -r, -r],
                c: [r, r, -r],
                d: [-r, r, -r],
                e: [-r, -r, r],
                f: [r, -r, r],
                g: [r, r, r],
                h: [-r, r, r]
                },
                [
                    ['a', 'b', 'c', 'd'],
                    ['a', 'b', 'f', 'e'],
                    ['b', 'c', 'g', 'f'],
                    ['c', 'd', 'h', 'g'],
                    ['d', 'a', 'e', 'h'],
                    ['e', 'f', 'g', 'h']
                ]
            ], {
            fillColorArray: ['white', 'blue', 'red', 'green', 'orange', 'yellow'],
            fillOpacity: 0.9
        });

        // Add transformations
        var t1 = view.create('transform3d', [() => alpha.Value()], { type: 'rotateX' });
        var t2 = view.create('transform3d', [() => beta.Value()], { type: 'rotateY' });
        var t3 = view.create('transform3d', [() => gamma.Value()], { type: 'rotateZ' });
        cube.addTransform(cube, [t1, t2, t3]);

// Graphe Tow =================================================
// Define the id of your board in BOARDID

const board1 = JXG.JSXGraph.initBoard(BOARDID1, {
    boundingbox: [-2.5, 2.5, 2.5, -2.5],
    keepaspectratio: true
});
var c1 = 0.6;
var c2 = 0.0;
var f1 = 7;
var f2 = 17;
var c = board1.create('curve', [
    (t) => Math.cos(t) + c1 * Math.cos(f1 * t) + c2 * Math.cos(f2 * t),
    (t) => Math.sin(t) + c1 * Math.sin(f1 * t) + c2 * Math.sin(f2 * t),
    0, 2.02 * Math.PI
], {
    strokeWidth: 2
});
// graphe Three =====================================================================

JXG.Options.line.strokeWidth = 0.8;
 
    const board2 = JXG.JSXGraph.initBoard(BOARDID2, {
    boundingbox: [-5, 5, 5, -5],
    axis: false
});
 
var h = board2.create('functiongraph', ['1/x']);
var l1 = board2.create('line', [0, 0, 1], {
    dash: 1
});


// From circle to sine, cosine and beyond

// input data

let input = {
    'coordinates':  { '-x': -3, '+x': 3, '-y': -3, '+y': 3, '-z': -3, '+z': 3 },
    'view':         { 'projection':  'parallel', 'trackball': true, 'controls': true, 'azimuth': Math.PI, 'elevation': 0},
    'axis':         { 'x': true, 'y': true, 'z': true, 'position': 'center'},
    'planeRear':    { 'x': true, 'y': true, 'z': true, 'axis': false, 'border': 3, 'mesh': true, 'color': '#dddddd'},
    'planeFront':   { 'x': true, 'y': true, 'z': true, 'axis': false, 'border': 3, 'mesh': false, 'color': 'none'}
};

// JSXGraph board

let board3 = JXG.JSXGraph.initBoard(BOARDID3, boardAttr());

// JSXGraph 3D view

let view3 = initBoard3D(board3);

// JSXGraph construction

let a = board3.create('slider', [[9, -5], [9, 5], [0, 1, 4]], { name: 'a', ...(sliderAttr()), ...(elAttr()) });


let curve = view3.create('curve3d', [
    (t) => (a.Value() * Math.sin(t)),
    (t) => t,
    (t) => (a.Value() * Math.cos(t)),
    [-Math.PI, Math.PI]
], {
    strokeWidth: 2,
    dash: 0
});

    let circle = view3.create('curve3d', [
        (t) => (a.Value() * Math.sin(t)),
        (t) => 0,
        (t) => (a.Value() * Math.cos(t)),
        [-Math.PI, Math.PI]
    ], {
        strokeWidth: 2,
        dash: 2
    });

// Controls

function initBoard3D(b) {
    let sliderA = sliderAttr();

    let elA = elAttr();

    let v = b.create('view3d', [[-5, -4], [10, 10], [[input['coordinates']['-x'], input['coordinates']['+x']], [input['coordinates']['-y'], input['coordinates']['+y']], [input['coordinates']['-z'], input['coordinates']['+z']]]],
        {
            projection: input['view']['projection'],
            trackball: { enabled: input['view']['trackball'] },

            // Main axes
            axesPosition: input['axis']['position'],
            xAxis: {visible: input['axis']['x'], strokeColor: '#888888', strokeWidth: 2},
            yAxis: {visible: input['axis']['y'], strokeColor: '#888888', strokeWidth: 2},
            zAxis: {visible: input['axis']['z'], strokeColor: '#888888', strokeWidth: 2},

            // Planes
            xPlaneRear: {
                visible: input['planeRear']['x'] | input['planeRear']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeRear']['border'],
                mesh3d: {visible: input['planeRear']['x'] & input['planeRear']['mesh']},
                fillColor: input['planeRear']['x'] ? input['planeRear']['color'] : 'none'
            },
            yPlaneRear: {
                visible: input['planeRear']['y'] | input['planeRear']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeRear']['border'],
                mesh3d: {visible: input['planeRear']['y'] & input['planeRear']['mesh']},
                fillColor: input['planeRear']['y'] ? input['planeRear']['color'] : 'none'
            },
            zPlaneRear: {
                visible: input['planeRear']['z'] | input['planeRear']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeRear']['border'],
                mesh3d: {visible: input['planeRear']['z'] & input['planeRear']['mesh']},
                fillColor: input['planeRear']['z'] ? input['planeRear']['color'] : 'none'
            },
            xPlaneFront: {
                visible: input['planeFront']['x'] | input['planeFront']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeFront']['border'],
                mesh3d: {visible: input['planeFront']['x'] & input['planeFront']['mesh']},
                fillColor: input['planeFront']['x'] ? input['planeFront']['color'] : 'none'
            },
            yPlaneFront: {
                visible: input['planeFront']['y'] | input['planeFront']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeFront']['border'],
                mesh3d: {visible: input['planeFront']['y'] & input['planeFront']['mesh']},
                fillColor: input['planeFront']['y'] ? input['planeFront']['color'] : 'none'
            },
            zPlaneFront: {
                visible: input['planeFront']['z'] | input['planeFront']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeFront']['border'],
                mesh3d: {visible: input['planeFront']['z'] & input['planeFront']['mesh']},
                fillColor: input['planeFront']['z'] ? input['planeFront']['color'] : 'none'
            },

            // Axes on planes
            xPlaneRearYAxis: {visible: input['planeRear']['x'] & input['planeRear']['axis']},
            xPlaneRearZAxis: {visible: input['planeRear']['x'] & input['planeRear']['axis']},
            yPlaneRearXAxis: {visible: input['planeRear']['y'] & input['planeRear']['axis']},
            yPlaneRearZAxis: {visible: input['planeRear']['y'] & input['planeRear']['axis']},
            zPlaneRearXAxis: {visible: input['planeRear']['z'] & input['planeRear']['axis']},
            zPlaneRearYAxis: {visible: input['planeRear']['z'] & input['planeRear']['axis']},
            xPlaneFrontYAxis: {visible: input['planeFront']['x'] & input['planeFront']['axis']},
            xPlaneFrontZAxis: {visible: input['planeFront']['x'] & input['planeFront']['axis']},
            yPlaneFrontXAxis: {visible: input['planeFront']['y'] & input['planeFront']['axis']},
            yPlaneFrontZAxis: {visible: input['planeFront']['y'] & input['planeFront']['axis']},
            zPlaneFrontXAxis: {visible: input['planeFront']['z'] & input['planeFront']['axis']},
            zPlaneFrontYAxis: {visible: input['planeFront']['z'] & input['planeFront']['axis']},

            // Controls
            bank: {
                slider: {...sliderA, ...{visible: input['view']['controls']}}
            },
            az: {
                slider: {...sliderA, ...{visible: input['view']['controls']}}
            },
            el: {
                slider: {...sliderA, ...elA, ...{visible: input['view']['controls']}}
            }
        }
    );

    v.el_slide.point1.setPosition(JXG.COORDS_BY_USER, [-9, -5]);
    v.el_slide.point2.setPosition(JXG.COORDS_BY_USER, [-9, 5]);
    v.el_slide.setMin(-Math.PI);
    v.el_slide.setMax(Math.PI);
    v.el_slide.setAttribute({ snapValues: [-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI].concat(input['view']['elevation']) });
    v.el_slide.name = 'EL';

    v.az_slide.point1.setPosition(JXG.COORDS_BY_USER, [-5, -9]);
    v.az_slide.point2.setPosition(JXG.COORDS_BY_USER, [5, -9]);
    v.az_slide.setMin(0);
    v.az_slide.setMax(Math.PI * 2);
    v.az_slide.setAttribute({ snapValues: [0, Math.PI / 2, Math.PI, Math.PI * 1.5, Math.PI * 2].concat(input['view']['azimuth']) });
    v.az_slide.name = 'AZ';

    v.bank_slide.point1.setPosition(JXG.COORDS_BY_USER, [-5, 9]);
    v.bank_slide.point2.setPosition(JXG.COORDS_BY_USER, [5, 9]);
    v.bank_slide.setAttribute({ snapValues: [-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI] });
    v.bank_slide.name = 'BK';

    v.setView(input['view']['azimuth'], input['view']['elevation'], 0);

    return v;
}

function boardAttr() {
    let bA = {
        boundingbox: [-10, 10, 10, -10],
        keepaspectratio: true,
        axis: false,
        showcopyright: false,
        shownavigation: false,
        movetarget: null,
        pan: {
            enabled: false
        },
        browserpan: false,
        zoom: {
            enabled: false,
        }
    };
    return bA;
}
function sliderAttr() {
    let slA = {
        baseline: {
            highlight: false,
            strokeWidth: 16,
            lineCap: 'round',
            strokeColor: '#f3f3f3'
        },
        point1: {frozen: false, fixed: true},
        point2: {frozen: false, fixed: true},
        drawLabel: true,
        face: 'o',
        fillColor: '#aaaaaa',
        highlightFillColor: '#aaaaaa',
        highlightStrokeColor: '#aaaaaa',
        highlightStrokeWidth: 5,
        highline: {
            highlight: false,
            strokeWidth: 16,
            lineCap: 'round',
            strokeColor: '#dddddd'
        },
        label: {
            strokeColor: '#aaaaaa',
            anchorX: 'left',
            anchorY: 'middle',
            layer: 0,
            cssStyle: 'border: 0px solid red; padding: 1px 8px 1px 8px; border-radius: 20px;background-color: #f2f2f2',
        },
        size: 7,
        snapValueDistance: 0.1,
        snapWidth: 0.001,
        strokeColor: '#009900',
        strokeWidth: 0,
        ticks: {
            layer: 7,
            digits: 2,
            maxLabelLength: 2,
            majorHeight: 0,
            majorTickEndings: [1, 1],
            strokeWidth: 4,
            strokeColor: '#cccccc'
        },
        visible: true
    };
    return slA;
}
function elAttr() {
    let elA = {
        label: {
            rotate: 90,
            strokeColor: '#aaaaaa',
            anchorX: 'left',
            anchorY: 'middle',
            layer: 0,
            cssStyle: 'border: 0px solid red; padding: 1px 8px 1px 8px; border-radius: 20px;background-color: #f2f2f2; white-space: nowrap;'
        }
    }
    return elA;
}

// output data for LMS, additional binding to LMS necessary

let output = function () {
    let out = [];
    out.push(JXG.evaluate(() => { return view3.az_slide.Value(); }));
    out.push(JXG.evaluate(() => { return view3.el_slide.Value(); }));
    out.push(JXG.evaluate(() => { return view3.bank_slide.Value(); }));
    out.push(JXG.evaluate(() => { return a.Value(); }));
    return out;
}

// output events, binding to LMS

board3.on('up', function (e) {
    document.getElementById('outputID').innerHTML = output();
});

//=========================================================
// Define the id of your board in BOARDID

var board4 = JXG.JSXGraph.initBoard(BOARDID4, {
    boundingbox: [-10, 10, 10, -10],
    axis: false,
    pan: { enabled: false },
    zoom: { enabled: false }
});
var box = [-2, 2],
    view4 = board4.create('view3d', [[-6, -3], [8, 8], [box, box, box]], {
        xPlaneRear: { visible: false },
        yPlaneRear: { visible: false }
    });

// Define the 3D function graph
var F_txt = 'cos(2 * x) * cos(3 * y)';
var F = board4.jc.snippet(F_txt, true, 'x,y');

// Partial derivatives, computed symbolically
var Fdx_txt = 'D(cos(2 * x) * cos(3 * y), x)';
var Fdy_txt = 'D(cos(2 * x) * cos(3 * y), y)';
var Fdx = board4.jc.snippet(Fdx_txt, true, 'x,y');
var Fdy = board4.jc.snippet(Fdy_txt, true, 'x,y');

// 3D function graph
var c = view4.create("functiongraph3d", [F, box, box], { strokeWidth: .5, stepU: 70, stepsV: 70 });

// The two points
var Axy = view4.create("point3d", [1, 1, -2], { withLabel: false }),
    A = view4.create("point3d", [function() { return [Axy.X(), Axy.Y(), F(Axy.X(), Axy.Y())] }], {
        withLabel: false,
        fixed: true
    });
view4.create("line3d", [Axy, A], { dash: 1 });

// Determine tangent vectors
var dFx = () => Fdx(A.X(), A.Y()),
    dFy = () => Fdy(A.X(), A.Y()),
    dFx_norm = () => Math.sqrt(1 + Fdx(A.X(), A.Y()) ** 2),
    dFy_norm = () => Math.sqrt(1 + Fdy(A.X(), A.Y()) ** 2),
    dFx1 = () => 1 / dFx_norm(),
    dFx2 = () => Fdx(A.X(), A.Y()) / dFx_norm(),
    dFy1 = () => 1 / dFy_norm(),
    dFy2 = () => Fdy(A.X(), A.Y()) / dFy_norm(),
    dFx_vec = [dFx1, 0, dFx2],
    dFy_vec = [0, dFy1, dFy2],

    // Tangent plane
    plane1 = view4.create("plane3d", [A, dFx_vec, dFy_vec, [-.5, .5], [-.5, .5]], { fillOpacity: .8, fillColor: "red" }),
    // Tangent vectors of length 1
    a4 = view.create("line3d", [A, dFx_vec, [0, 1]]),
    b4 = view.create("line3d", [A, dFy_vec, [0, 1]]);