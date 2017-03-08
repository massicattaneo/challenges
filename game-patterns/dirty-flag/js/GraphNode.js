/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: GraphNode
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function GraphNode(mesh_) {
    var obj = this;
    var dirty_ = true;
    var localTransform_ = new Transform();
    var worldTransform_;

    obj.setTransform = function (transform) {
        localTransform_ = transform;
        dirty_ = true;
    };

    obj.getTransformation = function () {
        return localTransform_;
    };

    obj.render = function (transformation, dirty) {

        dirty |= dirty_;

        if (dirty) {
            worldTransform_ = localTransform_.combine(transformation);
            dirty_ = false;
        }
        if (mesh_) renderMesh(mesh_, worldTransform_);

        obj.forEach(function (node) {
            node.render(worldTransform_, dirty)
        })
    };

}
GraphNode.prototype = new Array;

function renderMesh(mesh, transform) {
    console.log(mesh.name, 'position', transform.position);
}