class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    //  fly() {
    //this.sling.bodyA = null;
    // }

    display() {


        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;


            stroke(42, 22, 8);
            strokeWeight(8);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);



        }
    }

}