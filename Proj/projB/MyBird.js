/*
* MyBird
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        //Initializing bird objects
        this.body = new MyUnitCubeQuad(scene);
        this.neck = new MyCylinder(scene, 10/*???*/);
        this.head = new MyUnitCubeQuad(scene,5,5);
        this.beak = new MyCone(scene,4,4);
        this.wing = new MyTriangle(scene);
        this.eye = new MyUnitCubeQuad(scene);
        this.tail = new MyParallelogram(scene);
        // talvez adicionar patinhas fofinhas mais tarde
        
        //initializing bird variables
        this.orientation = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        //Initializing object materials
        this.red = new CGFappearance(scene);
        this.red.setAmbient(255/255, 20/255, 20/255, 1.0);
        this.red.setDiffuse(255/255, 20/255, 20/255, 1.0);
        this.red.setSpecular(255/255, 20/255, 20/255, 1.0);
        this.red.setShininess(10.0);

        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(255/255, 255/255, 0/255, 1.0);
        this.yellow.setDiffuse(255/255, 255/255, 0/255, 1.0);
        this.yellow.setSpecular(255/255, 255/255, 0/255, 1.0);
        this.yellow.setShininess(10.0);

        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(255/255, 156/255, 0/255, 1.0);
        this.orange.setDiffuse(255/255, 156/255, 0/255, 1.0);
        this.orange.setSpecular(255/255, 156/255, 0/255, 1.0);
        this.orange.setShininess(10.0);

        this.black = new CGFappearance(scene);
        this.black.setAmbient(0/255, 0/255, 0/255, 1.0);
        this.black.setDiffuse(0/255, 0/255, 0/255, 1.0);
        this.black.setSpecular(0/255, 0/255, 0/255, 1.0);
        this.black.setShininess(10.0);

        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0/255, 156/255, 255/255, 1.0);
        this.blue.setDiffuse(0/255, 156/255, 255/255, 1.0);
        this.blue.setSpecular(0/255, 156/255, 255/255, 1.0);
        this.blue.setShininess(10.0);
    }

    accelerate(v) {
        this.speed += v;
        if(this.speed>0.7) this.speed=0.7;
        else if(this.speed<0) this.speed=0;
    }

    turn(v) {
        this.orientation += v;
    }

    update(t) {
        //this.checkKeys();
        this.y = Math.sin(Math.PI*t/500);
        this.z = this.z + this.speed*Math.cos(this.orientation);
        this.x = this.x + this.speed*Math.sin(this.orientation);
    }

    display() {
        //Body display
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.orientation,0,1,0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1.5);
        this.red.apply();
        this.body.display();
        this.scene.popMatrix();
        //Neck display
        this.scene.pushMatrix();
        this.scene.translate(-0.1, 0.45, 0.5);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.scale(0.1,0.6,0.1);
        this.red.apply();
        this.neck.display();
        this.scene.popMatrix();
        //Head display
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 1);
        this.scene.scale(0.65, 0.65, 0.65);
        this.red.apply();
        this.head.display();
        this.scene.popMatrix();
        //beak display
        this.scene.pushMatrix();
        this.scene.translate(0, 0.9, 1.1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.1,0.8,0.1);
        this.yellow.apply();
        this.beak.display();
        this.scene.popMatrix();
        //left wing display
        this.scene.pushMatrix();
        this.scene.rotate(this.y*Math.PI/4,0,0,-1);
        this.scene.translate(0.5,0,0);
        this.scene.scale(1, 1, 0.2);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.orange.apply();
        this.wing.display();
        this.scene.popMatrix();
        //right wing display
        this.scene.pushMatrix();
        this.scene.rotate(this.y*Math.PI/4,0,0,1);
        this.scene.translate(-0.5,0,0);
        this.scene.scale(1, 1, 0.2);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
        this.orange.apply();
        this.wing.display();
        this.scene.popMatrix();
        //eye 1 display
        this.scene.pushMatrix()
        this.scene.translate(-0.2, 1.2, 1.3);
        this.scene.scale(0.15, 0.15, 0.15);
        this.black.apply();
        this.eye.display();
        this.scene.popMatrix();
        //eye 2 display
        this.scene.pushMatrix();
        this.scene.translate(0.2, 1.2, 1.3);
        this.scene.scale(0.15, 0.15, 0.15);
        this.black.apply();
        this.eye.display();
        this.scene.popMatrix();
        //tail display
        this.scene.pushMatrix();
        this.scene.translate(0.22, 0, -0.4);
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.blue.apply();
        this.tail.display();
        this.scene.popMatrix();
    }
}