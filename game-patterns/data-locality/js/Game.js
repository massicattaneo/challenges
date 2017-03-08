/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Game
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function Component(type, index) {
    this.update = function () {
        console.log('updating', type, index)
    };
}

function GameEntity(aiComponent, physicComponent, renderComponent) {
    var obj = this;
    obj.ai = function () {
        return aiComponent
    };
    obj.physic = function () {
        return physicComponent
    };
    obj.render = function () {
        return renderComponent
    };
}

function Game() {
    var obj = this;
    var ais = [];
    var physics = [];
    var renders = [];
    obj.run = function () {
        ais.forEach(function (ai) {
            ai.update()
        });
        physics.forEach(function (physic) {
            physic.update()
        });
        renders.forEach(function (render) {
            render.update()
        });
//            setTimeout(obj.run, 5000); //0.2fps
    };
    obj.addEntity = function (entity) {
        ais.push(entity.ai());
        physics.push(entity.physic());
        renders.push(entity.render());
    };
}