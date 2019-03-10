/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0.5,	    //0 
            -0.5, 0.5, 0.5,	    //1 
			-0.5, -0.5, 0.5,    //2 
            0.5, -0.5, 0.5,	    //3 
			0.5, 0.5, -0.5,	    //4 
			-0.5, 0.5, -0.5,	//5 
			-0.5, -0.5, -0.5,   //6 
            0.5, -0.5, -0.5,	//7
            0.5, 0.5, 0.5,	    //0 
            -0.5, 0.5, 0.5,	    //1 
			-0.5, -0.5, 0.5,    //2 
            0.5, -0.5, 0.5,	    //3 
			0.5, 0.5, -0.5,	    //4 
			-0.5, 0.5, -0.5,	//5 
			-0.5, -0.5, -0.5,   //6 
            0.5, -0.5, -0.5,	//7
            0.5, 0.5, 0.5,	    //0 
            -0.5, 0.5, 0.5,	    //1 
			-0.5, -0.5, 0.5,    //2 
            0.5, -0.5, 0.5,	    //3 
			0.5, 0.5, -0.5,	    //4 
			-0.5, 0.5, -0.5,	//5 
			-0.5, -0.5, -0.5,   //6 
            0.5, -0.5, -0.5,	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //face lateral direita
            7, 0, 3,
            7, 4, 0,
            //face superior
            5, 1, 0,
            5, 0, 4,
            //face lateral esquerda
            6, 1, 5,
            6, 2, 1,
            //face inferior
            6, 3, 2,
            6, 7, 3,
            //face posterior
            2, 0, 1,
            2, 3, 0,
            //face anterior
            6, 5, 4,
            6, 4, 7,
        ];

        this.normals = [
            1, 0, 0,  //0
           -1, 0, 0,  //1
           -1, 0, 0,  //2
            1, 0, 0,  //3
            1, 0, 0,  //4
           -1, 0, 0,  //5
            -1, 0, 0, //6
            1, 0, 0,  //7
            0, 1, 0,  //0
            0, 1, 0,  //1
            0, -1, 0, //2
            0, -1, 0, //3
            0, 1, 0,  //4
            0, 1, 0,  //5
            0, -1, 0, //6
            0, -1, 0, //7
            0, 0, 1,  //0
            0, 0, 1,  //1
            0, 0, 1,  //2
            0, 0, 1,  //3
            0, 0, -1, //4
            0, 0, -1, //5
            0, 0, -1, //6
            0, 0, -1, //7
        ]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

