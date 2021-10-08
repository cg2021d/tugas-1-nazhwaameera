function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const nasi_1 = {
        object_color1: [0.850, 0.850, 0.850], //shade 1
        object_color2: [0.820, 0.820, 0.820], //shade 2

        point_center: [-0.50378, -0.27438],

        //shade 2
        point_a1: [-0.21616, -0.233],
        point_b1: [-0.2537, -0.31489],
        point_c1: [-0.33466, -0.35739],
        point_d1: [-0.46861, -0.39026],
        point_d: [-0.57414, -0.38612],
        point_e: [-0.68604, -0.35981],
        point_f: [-0.77172, -0.29721],
        point_g: [-0.84751, -0.19506],

        //shade 1
        point_h: [-0.87387, -0.06325],
        point_i: [-0.86398, 0.06526],
        point_j: [-0.83433, 0.1773],
        point_k: [-0.7157, 0.22673],
        point_l: [-0.63661, 0.33217],
        point_m: [-0.53117, 0.35854],
        point_n: [-0.39936, 0.32229],
        point_o: [-0.31698, 0.26627],
        point_p: [-0.24119, 0.21355],
        point_q: [-0.17529, 0.11799],
        point_r: [-0.14234, 0.03561],
        point_s: [-0.13631, -0.06594],
        point_u: [-0.19906, -0.15095],
    };

    const nasi_2 = {
        object_color1: [0.850, 0.850, 0.850], //shade 1
        object_color2: [0.820, 0.820, 0.820], //shade 2

        point_center: [0.63741, -0.39839],

        //shade 2
        point_u1: [0.87829, -0.2817],
        point_v1: [0.85145, -0.42037],
        point_w1: [0.81567, -0.55456],
        point_z1: [0.75305, -0.70217],
        point_b: [0.59202, -0.74243],
        point_w: [0.46248, -0.6817],
        point_z: [0.38611, -0.502],
        point_e1: [0.34347, -0.31523],

        //shade 1
        point_f1: [0.32363, -0.12962],
        point_g1: [0.35711, 0.08466],
        point_h1: [0.39967, 0.28637],
        point_i1: [0.43546, 0.47872],
        point_j1: [0.46917, 0.64853],
        point_k1: [0.55298, 0.76958],
        point_a: [0.67265, 0.7837],
        point_n1: [0.76384, 0.65451],
        point_o1: [0.80391, 0.50881],
        point_p1: [0.84364, 0.36192],
        point_q1: [0.88544, 0.23273],
        point_r1: [0.88164, 0.06934],
        point_t1: [0.88277, -0.11173],
    };

    const vertices = [
        //nasi kiri
        //shade 2
        ...nasi_1.point_a1, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_b1, ...nasi_1.object_color2, //15

        ...nasi_1.point_b1, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_c1, ...nasi_1.object_color2, //30

        ...nasi_1.point_c1, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_d1, ...nasi_1.object_color2, //45

        ...nasi_1.point_d1, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_d, ...nasi_1.object_color2, //60

        ...nasi_1.point_d, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_e, ...nasi_1.object_color2, //75

        ...nasi_1.point_e, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_f, ...nasi_1.object_color2, //90

        ...nasi_1.point_f, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_g, ...nasi_1.object_color2, //105

        ...nasi_1.point_g, ...nasi_1.object_color2,
        ...nasi_1.point_center, ...nasi_1.object_color2,
        ...nasi_1.point_h, ...nasi_1.object_color2, //120

        //shade1
        ...nasi_1.point_h, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_i, ...nasi_1.object_color1, //135

        ...nasi_1.point_i, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_j, ...nasi_1.object_color1, //150

        ...nasi_1.point_j, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_k, ...nasi_1.object_color1, //165

        ...nasi_1.point_k, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_l, ...nasi_1.object_color1, //180

        ...nasi_1.point_l, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_m, ...nasi_1.object_color1, //195

        ...nasi_1.point_m, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_n, ...nasi_1.object_color1, //210

        ...nasi_1.point_n, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_o, ...nasi_1.object_color1, //225

        ...nasi_1.point_o, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_p, ...nasi_1.object_color1, //240

        ...nasi_1.point_p, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_q, ...nasi_1.object_color1, //255

        ...nasi_1.point_q, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_r, ...nasi_1.object_color1, //270

        ...nasi_1.point_r, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_s, ...nasi_1.object_color1, //285

        ...nasi_1.point_s, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_u, ...nasi_1.object_color1, //300

        ...nasi_1.point_u, ...nasi_1.object_color1,
        ...nasi_1.point_center, ...nasi_1.object_color1,
        ...nasi_1.point_a1, ...nasi_1.object_color1, //315

        //nasi 2
        //shade 2
        ...nasi_2.point_t1, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_u1, ...nasi_2.object_color2,

        ...nasi_2.point_u1, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_v1, ...nasi_2.object_color2,

        ...nasi_2.point_v1, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_w1, ...nasi_2.object_color2,

        ...nasi_2.point_w1, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_z1, ...nasi_2.object_color2,

        ...nasi_2.point_z1, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_b, ...nasi_2.object_color2,

        ...nasi_2.point_b, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_w, ...nasi_2.object_color2,

        ...nasi_2.point_w, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_z, ...nasi_2.object_color2,

        ...nasi_2.point_z, ...nasi_2.object_color2,
        ...nasi_2.point_center, ...nasi_2.object_color2,
        ...nasi_2.point_e1, ...nasi_2.object_color2,

        //shade 1
        ...nasi_2.point_e1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_f1, ...nasi_2.object_color1,

        ...nasi_2.point_f1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_g1, ...nasi_2.object_color1,

        ...nasi_2.point_g1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_h1, ...nasi_2.object_color1,

        ...nasi_2.point_h1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_i1, ...nasi_2.object_color1,

        ...nasi_2.point_i1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_j1, ...nasi_2.object_color1,

        ...nasi_2.point_j1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_k1, ...nasi_2.object_color1,

        ...nasi_2.point_k1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_a, ...nasi_2.object_color1,

        ...nasi_2.point_a, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_n1, ...nasi_2.object_color1,

        ...nasi_2.point_n1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_o1, ...nasi_2.object_color1,

        ...nasi_2.point_o1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_p1, ...nasi_2.object_color1,

        ...nasi_2.point_p1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_q1, ...nasi_2.object_color1,

        ...nasi_2.point_q1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_r1, ...nasi_2.object_color1,

        ...nasi_2.point_r1, ...nasi_2.object_color1,
        ...nasi_2.point_center, ...nasi_2.object_color1,
        ...nasi_2.point_t1, ...nasi_2.object_color1
    ];

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0133;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (change < -0.275 || change > 0.275) {
            speed = speed * -1;
        }

        for (let i = 316; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0, 0, 0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 396;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}