      // Define the ids of your boards in BOARDID0, BOARDID1,...

      // First board
      const board1 = JXG.JSXGraph.initBoard(BOARDID0, {
        boundingbox: [-10, 1.5, 10, -1.5],
        axis: true,
      });

      // Glider on x-axis
      var x = board1.create("glider", [-9, 0, board1.defaultAxes.x], {
        name: "x",
      });
      var y = board1.create("point", [() => x.X(), () => Math.cos(x.X())], {
        size: 1,
        name: "",
        color: "green",
      });
      var x1 = board1.create("segment", [x, y], { strokeColor: "red" });

      var f = board1.create("functiongraph", [(x) => Math.cos(x)]);

      board1.create("text", [() => x.X() + 0.3, () => y.Y() * 0.5, "cos"], {});

      // Second board
      const board2 = JXG.JSXGraph.initBoard(BOARDID1, {
        boundingbox: [-1.5, 1.5, 1.5, -1.5],
        axis: true,
      });

      // First board triggers updates on second board
      board1.addChild(board2);

      // Fixed circle
      var p0 = board2.create("point", [0, 0], { fixed: true, visible: false });
      var p1 = board2.create("point", [1, 0], {
        name: "",
        visible: false,
        fixed: true,
      });
      var c = board2.create("circle", [p0, p1], {
        dash: 2,
        strokeWidth: 1,
        strokeOpacity: 0.6,
      });

      // Point on circle depends on point x in first board
      var p2 = board2.create(
        "point",
        [() => Math.cos(x.X()), () => Math.sin(x.X())],
        {
          name: "exp(ix)",
          fixed: true,
          size: 1,
          color: "green",
        },
      );

      // Helper points and cos segment
      var p3 = board2.create("point", [() => p2.X(), 0.0], {
        visible: false,
        name: "",
      });
      var p4 = board2.create("point", [0.0, () => p2.Y()], {
        visible: false,
        name: "",
      });
      board2.create("segment", [p2, p4], { strokeColor: "red" }); // cos

      board2.create(
        "text",
        [() => (p2.X() + p4.X()) * 0.3, () => p2.Y() + 0.05, "cos"],
        {},
      );