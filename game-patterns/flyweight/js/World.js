/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: World
 Created Date: 03 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function World(params) {
    var WIDTH = params.width;
    var HEIGHT = params.height;
    var obj = this;
    var tiles = new Array(WIDTH).fill(new Array(HEIGHT).fill(1));
    var grassTerrain = new Terrain(1, false, 'grass');
    var hillTerrain = new Terrain(3, false, 'hill');
    var riverTerrain = new Terrain(2, true, 'water');

    obj.generateTerrain = function () {
        Terrain.appendStyles(params.tileSize, params.tileSize);
        createGrassAndHill();
        addRiver();
    };
    obj.eachTile = function (callback) {
        tiles.forEach(function (vx, x) {
            vx.forEach(function (tile, y) {
                callback.call(null, tile, x*params.tileSize, y*params.tileSize)
            })
        });
    };
    obj.getArea = function () {
        return WIDTH * HEIGHT;
    };

    function createGrassAndHill() {
        for (var x = 0; x < WIDTH; x++) {
            tiles[x] = [];
            for (var y = 0; y < HEIGHT; y++) {
                tiles[x].push((random(10) < 3) ? hillTerrain : grassTerrain);
            }
        }
    }
    function random(value) {
        return Math.floor(Math.random() * value)
    }
    function addRiver() {
        var x = Number(WIDTH / 2);
        for (var y = 0; y < HEIGHT; y++) {
            x += random(2) * ((random(2) === 1) ? -1 : 1);
            x = x >= 0 ? x : 0;
            tiles[x][y] = riverTerrain;
            tiles[x + 1][y] = riverTerrain;
        }
    }
}
