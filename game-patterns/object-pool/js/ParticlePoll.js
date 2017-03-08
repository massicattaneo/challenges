/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: ParticlePoll
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function ParticlePoll(POOL_SIZE) {
    var particles = this;

    /** INIT */
    for (var i = 0; i < POOL_SIZE; i++) {particles.push(new Particle());}
    var firstAvailable_ = particles[0];
    for (var j = 0; j < POOL_SIZE - 1; j++){particles[j].setNext(particles[j + 1]);}

    particles.create = function (x, y, xVel, yVel, lifeTime) {
        if (!firstAvailable_) return;
        var particle = firstAvailable_;
        firstAvailable_ = particle.getNext();
        particle.init(x, y, xVel, yVel, lifeTime);
    };
    particles.animate = function () {
        console.log('*** animation run');
        particles.forEach(function (particle) {
            if (particle.animate()) {
                particle.setNext(firstAvailable_);
                firstAvailable_ = particle;
            }
        })
    };
}
ParticlePoll.prototype = new Array;