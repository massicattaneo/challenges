/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Locator
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Locator() {
    var obj = this;
    var services = {
        audio: new Audio()
    };
    obj.decorate = function (o) {
        Object.keys(o).forEach(function (k) {
            services[k] = o[k](services[k]);
        })

    };
    obj.getAudio = function () {
        return services.audio;
    };
    obj.provide = function (o) {
        Object.keys(o).forEach(function (k) {
            services[k] = o[k];
        })
    };
}