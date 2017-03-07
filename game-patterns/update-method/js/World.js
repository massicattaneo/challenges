/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: World
 Created Date: 07 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function World() {
    var obj = this;
    var entities = [];
    obj.addEntity = function (e) {
        entities.push(e)
    };
    obj.gameLoop = function run() {
        // Handle user input...

        // Update each entity.
        entities.forEach(function (e) {
            e.update()
        });

        entities.forEach(function (e) {
            e.render();
        });
        // Physics and rendering...
        setTimeout(obj.gameLoop, 16.7); //60fps
    }
}