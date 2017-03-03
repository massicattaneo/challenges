/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Terrain
 Created Date: 03 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Terrain(movementCost, isWater, texture) {
    var obj = this;
    obj.getMovementCost = function () {
        return movementCost;
    };
    obj.isWater = function () {
        return isWater;
    };
    obj.draw = function (container, x,y) {
        var div = document.createElement('div');
        div.className = 'terrain ' + texture;
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        container.appendChild(div);
    };
}

Terrain.appendStyles = function (width, height) {
    var sheet = function () {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    }();
    addCSSRule(sheet, '.terrain.hill', 'position: absolute; background-size: contain; background-image: url("images/hill.jpg"); width: '+width+'px; height: '+height+'px;', 0);
    addCSSRule(sheet, '.terrain.grass', 'position: absolute; background-size: contain; background-image: url("images/grass.jpg"); width: '+width+'px; height: '+height+'px;', 1);
    addCSSRule(sheet, '.terrain.water', 'position: absolute; background-size: contain; background-image: url("images/water.jpg"); width: '+width+'px; height: '+height+'px;', 2);

    function addCSSRule(sheet, selector, rules, index) {
        if("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        }
        else if("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }
};

