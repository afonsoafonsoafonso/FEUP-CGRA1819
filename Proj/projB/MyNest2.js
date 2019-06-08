class MyNest2 extends CGFobject {
    constructor(scene) {
        super(scene);
        this.branch = new MyNestBranch(scene); 
        this.base = new MyHalfSphere(scene,30,5);
        
        this.materialNest = new CGFappearance(scene);
        this.materialNest.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNest.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNest.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNest.setShininess(10.0);
        this.materialNest.loadTexture('images/nest2.jpg');
        this.materialNest.setTextureWrap('REPEAT', 'REPEAT');
    }

    branchDrop() {
        ++this.branchCounter;
    }

    display() {
        /*for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/6,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/3.5,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }
        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/3 ) {
            this.scene.pushMatrix();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/2.5,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }*/
        this.scene.pushMatrix();
        this.materialNest.apply();
        this.scene.scale(0.834,0.42,0.834);
        this.scene.translate(0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.base.display();
        this.scene.popMatrix();

        for(var i=0; i<Math.PI*2; i+=Math.PI*2/35/15) {
            this.scene.pushMatrix();
            this.materialNest.apply();
            this.scene.rotate(i-Math.PI*2/60,0,1,0);
            this.scene.rotate(Math.PI/4/1.8,0,0,-1);
            this.branch.display();
            this.scene.popMatrix();
        }

        for(var i=0; i<this.branchCounter; i++) {
            this.scene.pushMatrix();
            this.scene.translate(0,i+0.05,0);
            this.branch.display();
            this.scene.popMatrix();
        }
    }
}