/*
*   MyTerrain
*/

class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.plane = new Plane(scene, 32); 
        
        this.appearance = new CGFappearance(this.scene);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(10);
        this.terrain = new CGFtexture(this.scene, "images/terrain.jpg");
        this.appearance.setTexture(this.terrain);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.heightMap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.jpg");


        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({uSampler2: 1, uSampler3: 2});
    }

    display() {
        this.scene.gl.viewport(0, 0, this.scene.gl.canvas.width, this.scene.gl.canvas.height);
        this.scene.gl.clear(this.scene.gl.COLOR_BUFFER_BIT | this.scene.gl.DEPTH_BUFFER_BIT);
        
        this.appearance.apply();
        
        this.heightMap.bind(1);
        this.altimetry.bind(2);
        this.scene.setActiveShader(this.shader);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_WRAP_S, this.scene.gl.REPEAT);
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_WRAP_T, this.scene.gl.REPEAT);
        this.scene.pushMatrix();
        this.plane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}