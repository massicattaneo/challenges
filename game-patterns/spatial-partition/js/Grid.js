/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Grid
 Created Date: 10 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Grid(NUM_CELLS, CELL_SIZE, attack) {
    var obj = this;
    var cells_ = [];

    for (var x = 0; x < NUM_CELLS; x++) {
        cells_[x] = [];
        for (var y = 0; y < NUM_CELLS; y++) {
            cells_[x][y] = null;
        }
    }

    obj.add = function (unit) {
        // Determine which grid cell it's in.
        var cellX = Math.floor(unit.x / CELL_SIZE);
        var cellY = Math.floor(unit.y / CELL_SIZE);

        // Add to the front of list for the cell it's in.
        unit.prev = null;
        unit.next = cells_[cellX][cellY];
        cells_[cellX][cellY] = unit;

        if (unit.next != null) {
            unit.next.prev = unit;
        }
    };

    obj.handleMelee = function () {
        for (var x = 0; x < NUM_CELLS; x++) {
            for (var y = 0; y < NUM_CELLS; y++) {
                handleCell(x, y);
            }
        }
    };

    obj.move = function (unit, x, y) {
        // See which cell it was in.
        var oldCellX = Math.floor(unit.x / CELL_SIZE);
        var oldCellY = Math.floor(unit.y / CELL_SIZE);

        // See which cell it's moving to.
        var cellX = Math.floor(unit.x / CELL_SIZE);
        var cellY = Math.floor(unit.y / CELL_SIZE);

        unit.x = x;
        unit.y = y;

        // If it didn't change cells, we're done.
        if (oldCellX == cellX && oldCellY == cellY) return;

        // Unlink it from the list of its old cell.
        if (unit.prev != null) {
            unit.prev.next = unit.next;
        }

        if (unit.next != null) {
            unit.next.prev = unit.prev;
        }

        // If it's the head of a list, remove it.
        if (cells_[oldCellX][oldCellY] === unit) {
            cells_[oldCellX][oldCellY] = unit.next;
        }
        // Add it back to the grid at its new cell.
        obj.add(unit);
    };

    function handleCell(x, y) {
        var unit = cells_[x][y];
        while (unit != null) {
            // Handle other units in this cell.
            handleUnit(unit, unit.next);
            // Also try the neighboring cells.
            if (x > 0 && y > 0) handleUnit(unit, cells_[x - 1][y - 1]);
            if (x > 0) handleUnit(unit, cells_[x - 1][y]);
            if (y > 0) handleUnit(unit, cells_[x][y - 1]);
            if (x > 0 && y < NUM_CELLS - 1) {
                handleUnit(unit, cells_[x - 1][y + 1]);
            }
            unit = unit.next;
        }
    }

    function handleUnit(unit, other) {
        while (other != null) {
            if (attack(unit, other)) {
                handleAttack(unit, other);
            }
            other = other.next;
        }
    }

    function handleAttack(unit, other) {
        console.log(unit.name, 'fighting with', other.name);
    }


}