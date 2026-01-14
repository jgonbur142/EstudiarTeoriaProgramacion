// Estructura de datos para almacenar las preguntas por tema
const temasData = {
    tema4: {
        id: 4,
        titulo: "Tema 4 - Arrays",
        subtemas: {
            "4.1": {
                titulo: "4.1. Arrays Unidimensionales",
                preguntas: [
                    {
                        id: 1,
                        texto: "¿Cuál de las siguientes afirmaciones describe mejor qué es un array en Java?",
                        opciones: [
                            "Un conjunto de variables de distintos tipos almacenadas juntas",
                            "Una colección de datos del mismo tipo accesibles mediante un índice",
                            "Una estructura que solo puede almacenar objetos",
                            "Una variable que puede cambiar automáticamente de tamaño"
                        ],
                        correcta: 1
                    },
                    {
                        id: 2,
                        texto: "¿Cuál de las siguientes declaraciones de array es válida en Java aunque todavía no reserve memoria?",
                        opciones: [
                            "int grades = new int[3];",
                            "int[] grades;",
                            "int grades[3];",
                            "grades = new int[3];"
                        ],
                        correcta: 1
                    },
                    {
                        id: 3,
                        texto: "¿Cuál de las siguientes instrucciones crea realmente un array de 5 enteros en memoria suponiendo que la variable ya ha sido declarada correctamente?",
                        opciones: [
                            "int[] a;",
                            "int a = new int[5];",
                            "a = new int[5];",
                            "int a[5];"
                        ],
                        correcta: 2
                    },
                    {
                        id: 4,
                        texto: "¿Cuál es el índice del primer elemento de un array en Java?",
                        opciones: [
                            "1",
                            "-1",
                            "0",
                            "Depende del tamaño del array"
                        ],
                        correcta: 2
                    },
                    {
                        id: 5,
                        texto: "Dado el siguiente código:\n\nint[] grades = {8, 7, 9};\n\n¿Qué valor tiene grades[1]?",
                        opciones: [
                            "8",
                            "7",
                            "9",
                            "Produce una excepción"
                        ],
                        correcta: 1
                    },
                    {
                        id: 6,
                        texto: "¿Qué devuelve el atributo length de un array?",
                        opciones: [
                            "El último índice del array",
                            "El número de elementos del array",
                            "El tamaño en bytes del array",
                            "Siempre devuelve un valor fijo"
                        ],
                        correcta: 1
                    },
                    {
                        id: 7,
                        texto: "¿Cuál de las siguientes condiciones es correcta para recorrer completamente un array llamado grades usando un for?",
                        opciones: [
                            "i <= grades.length",
                            "i < grades.length",
                            "i < grades.length - 1",
                            "i == grades.length"
                        ],
                        correcta: 1
                    },
                    {
                        id: 8,
                        texto: "¿Cuál es la principal ventaja de usar un for-each con arrays?",
                        opciones: [
                            "Permite modificar los elementos del array directamente",
                            "Evita tener que controlar los índices manualmente",
                            "Aumenta la longitud del array automáticamente",
                            "Solo funciona con arrays de objetos"
                        ],
                        correcta: 1
                    },
                    {
                        id: 9,
                        texto: "¿Qué hace el método split de la clase String en Java?",
                        opciones: [
                            "Une varios strings en uno solo",
                            "Divide un string en un array según un separador",
                            "Cambia todos los caracteres a mayúsculas",
                            "Devuelve la longitud de un string"
                        ],
                        correcta: 1
                    },
                    {
                        id: 10,
                        texto: "¿Qué hace el método String.join en Java?",
                        opciones: [
                            "Devuelve el primer elemento de un array",
                            "Combina elementos de un array en un solo string con un delimitador",
                            "Divide un string en un array",
                            "Borra todos los elementos de un array"
                        ],
                        correcta: 1
                    },
                    {
                        id: 11,
                        texto: "En Java, ¿qué ocurre cuando un array pierde todas sus referencias?",
                        opciones: [
                            "Se convierte automáticamente en un array vacío",
                            "Puede ser recolectado por el garbage collector",
                            "Produce un error de compilación",
                            "Los datos permanecen en memoria para siempre"
                        ],
                        correcta: 1
                    },
                    {
                        id: 12,
                        texto: "¿Cuál es la diferencia principal entre un array de tipos primitivos y un array de objetos en Java?",
                        opciones: [
                            "Los arrays de primitivos almacenan los valores directamente en memoria contigua, los de objetos almacenan referencias",
                            "Los arrays de primitivos no necesitan new",
                            "Los arrays de objetos no pueden tener tamaño fijo",
                            "Los arrays de primitivos no pueden inicializarse"
                        ],
                        correcta: 0
                    },
                    {
                        id: 13,
                        texto: "¿Qué sucede al asignar un array a otro array del mismo tipo en Java?",
                        opciones: [
                            "Se copian todos los elementos del array a uno nuevo",
                            "Se copian solo las referencias, ambos apuntan al mismo array",
                            "Se produce un error de compilación",
                            "Se crea automáticamente un array de tamaño doble"
                        ],
                        correcta: 1
                    },
                    {
                        id: 14,
                        texto: "¿Cuál de las siguientes afirmaciones sobre la comparación de arrays en Java es verdadera?",
                        opciones: [
                            "== compara el contenido de los arrays",
                            "Arrays.equals(array1, array2) compara el contenido de los arrays",
                            "equals compara automáticamente los elementos de los arrays",
                            "No se puede comparar arrays en Java"
                        ],
                        correcta: 1
                    },
                    {
                        id: 15,
                        texto: "Cuando pasamos un array como parámetro a un método, ¿qué recibe realmente el método?",
                        opciones: [
                            "Una copia independiente de los elementos del array",
                            "La referencia al array original",
                            "Solo el primer elemento del array",
                            "Un array de tamaño fijo de ceros"
                        ],
                        correcta: 1
                    },
                    {
                        id: 16,
                        texto: "¿Cuál de las siguientes afirmaciones sobre varargs en Java es correcta?",
                        opciones: [
                            "Un método puede tener varios parámetros varargs",
                            "Un parámetro varargs debe ser el último de la lista de parámetros",
                            "Varargs solo funciona con arrays de Strings",
                            "Varargs hace que un array se vuelva infinito"
                        ],
                        correcta: 1
                    },
                    {
                        id: 17,
                        texto: "¿Cuál de las siguientes llamadas al método add(int... nums) es válida?",
                        opciones: [
                            "add()",
                            "add(1, 2, 3)",
                            "add(new int[]{4,5})",
                            "Todas las anteriores"
                        ],
                        correcta: 3
                    },
                    {
                        id: 18,
                        texto: "¿Qué se devuelve cuando un método retorna un array en Java?",
                        opciones: [
                            "Una copia de los elementos del array",
                            "La referencia al array creado",
                            "Solo el primer elemento del array",
                            "Nada, los arrays no pueden ser retornados"
                        ],
                        correcta: 1
                    },
                    {
                        id: 19,
                        texto: "¿Qué valor tendrán los elementos de un array de enteros recién creado con new int[5] si no se asigna ningún valor?",
                        opciones: [
                            "null",
                            "0",
                            "-1",
                            "Depende del sistema"
                        ],
                        correcta: 1
                    },
                    {
                        id: 20,
                        texto: "Si tienes el siguiente código:\n\nComplejo[] a = new Complejo[3];\n\n¿Qué contiene cada elemento del array a inmediatamente después de la creación?",
                        opciones: [
                            "Objetos Complejo recién creados",
                            "null",
                            "Enteros por defecto",
                            "Valores aleatorios de memoria"
                        ],
                        correcta: 1
                    },
                    {
                        id: 21,
                        texto: "¿Qué ocurre si haces lo siguiente?\n\nint[] a = {3,4,5};\nint[] b = a;\nb[0] = 10;\nSystem.out.println(a[0]);",
                        opciones: [
                            "Se imprime 3",
                            "Se imprime 10",
                            "Se imprime 0",
                            "Da error de compilación"
                        ],
                        correcta: 1
                    },
                    {
                        id: 22,
                        texto: "¿Qué sucede si intentas acceder a un índice que no existe en un array en Java?",
                        opciones: [
                            "Se devuelve automáticamente 0",
                            "Se lanza una excepción ArrayIndexOutOfBoundsException",
                            "Se ignora y continúa la ejecución",
                            "El programa compila pero no corre"
                        ],
                        correcta: 1
                    },
                    {
                        id: 23,
                        texto: "¿Cuál de las siguientes formas es válida para inicializar un array en una sola línea?",
                        opciones: [
                            "int[] grades = new int[]{8,7,9};",
                            "int[] grades = {8,7,9};",
                            "int[] grades; grades = {8,7,9};",
                            "Tanto a) como b)"
                        ],
                        correcta: 3
                    },
                    {
                        id: 24,
                        texto: "Si un método tiene la siguiente firma:\n\nint compute(int x, int... values)\n\n¿Cuál de las siguientes llamadas es inválida?",
                        opciones: [
                            "compute(2)",
                            "compute(2,1,3)",
                            "compute(2,new int[]{1,2})",
                            "compute()"
                        ],
                        correcta: 3
                    },
                    {
                        id: 25,
                        texto: "¿Cuál de las siguientes afirmaciones sobre los arrays en Java es falsa?",
                        opciones: [
                            "Los arrays pueden contener objetos o tipos primitivos",
                            "Un array pierde su referencia y los elementos desaparecen automáticamente",
                            "Los arrays son objetos y su comparación con == compara referencias",
                            "El índice del primer elemento siempre es 0"
                        ],
                        correcta: 1
                    }
                ]
            },
            "4.2": {
                titulo: "4.2. Arrays Multidimensionales",
                preguntas: [
                    {
                        id: 1,
                        texto: "¿Cuál de las siguientes afirmaciones sobre los arrays multidimensionales en Java es correcta?",
                        opciones: [
                            "Un array multidimensional siempre debe ser cuadrado (misma cantidad de filas y columnas)",
                            "Un array multidimensional es un array que contiene otros arrays",
                            "No se puede crear un array tridimensional en Java",
                            "Los arrays multidimensionales no pueden tener tipo primitivo"
                        ],
                        correcta: 1
                    },
                    {
                        id: 2,
                        texto: "¿Cuál de las siguientes formas es válida para declarar un array bidimensional de enteros en Java?",
                        opciones: [
                            "int[][] matrix;",
                            "int matrix[][];",
                            "Ambas a) y b)",
                            "Ninguna de las anteriores"
                        ],
                        correcta: 2
                    },
                    {
                        id: 3,
                        texto: "¿Qué instrucción crea un array bidimensional de 3 filas y 5 columnas en memoria?",
                        opciones: [
                            "int[][] b = new int[3][5];",
                            "int[][] b = new int[5][3];",
                            "int b[][] = new int[3];",
                            "int b[][] = { {0,1,2}, {3,4,5} };"
                        ],
                        correcta: 0
                    },
                    {
                        id: 4,
                        texto: "Dado un array bidimensional int[][] m = new int[5][4];, ¿qué significa m[4][3]?",
                        opciones: [
                            "El último elemento del último array unidimensional",
                            "El primer elemento del primer array unidimensional",
                            "Una referencia nula",
                            "Error de compilación"
                        ],
                        correcta: 0
                    },
                    {
                        id: 5,
                        texto: "Dado el siguiente array bidimensional:\n\nint[][] twoDimensions = { {0, 1, 2}, {3, 4, 5}, {6, 7, 8} };\n\n¿Qué valor tiene twoDimensions[1][2]?",
                        opciones: [
                            "3",
                            "4",
                            "5",
                            "6"
                        ],
                        correcta: 2
                    },
                    {
                        id: 6,
                        texto: "¿Cuál de las siguientes formas es válida para inicializar un array tridimensional de literales?",
                        opciones: [
                            "int[][][] threeDimensions = { { {0,1}, {2,3} }, { {4,5}, {6,7} } };",
                            "int[][][] threeDimensions = new int[2][2];",
                            "int[] threeDimensions = { {0,1}, {2,3} };",
                            "int[][] threeDimensions = { {0,1}, {2,3} };"
                        ],
                        correcta: 0
                    },
                    {
                        id: 7,
                        texto: "Tenemos el array bidimensional:\n\nint[][] twoDimensions = { \n    {0, 1, 2},   // Fila 0\n    {3, 4, 5},   // Fila 1\n    {6, 7, 8}    // Fila 2\n};\n\n¿Cuál de las siguientes formas recorre correctamente todo el array usando for-each?",
                        opciones: [
                            "for (int number : twoDimensions) { System.out.println(number); }",
                            "for (int[] row : twoDimensions) { for (int number : row) { System.out.println(number); } }",
                            "for (int i = 0; i < twoDimensions.length; i++) { System.out.println(twoDimensions[i]); }",
                            "No se puede usar for-each con arrays multidimensionales"
                        ],
                        correcta: 1
                    },
                    {
                        id: 8,
                        texto: "Si tenemos un array bidimensional \n\nint[][] m = { {1,2}, {3,4,5} };\n\n¿qué característica describe mejor a este array?",
                        opciones: [
                            "Es una matriz cuadrada",
                            "Es un array irregular (filas de distinto tamaño)",
                            "Todos los subarrays tienen la misma longitud",
                            "No se puede declarar así en Java"
                        ],
                        correcta: 1
                    },
                    {
                        id: 9,
                        texto: "Dado el array bidimensional:\n\nint[][] twoDimensions = { {0,1,2,3,4}, {5,6,7,8,9}, {10,11,12,13,14} };\nSystem.out.println(twoDimensions[0].length);\n\n¿Qué imprime?",
                        opciones: [
                            "3",
                            "4",
                            "5",
                            "15"
                        ],
                        correcta: 2
                    },
                    {
                        id: 10,
                        texto: "¿Qué método de la clase Arrays se utiliza para imprimir correctamente un array multidimensional?",
                        opciones: [
                            "Arrays.toString()",
                            "Arrays.deepToString()",
                            "Arrays.print()",
                            "Arrays.show()"
                        ],
                        correcta: 1
                    },
                    {
                        id: 11,
                        texto: "Si tenemos dos arrays bidimensionales:\nint[][] a = { {1,2}, {3,4} };\nint[][] b = { {1,2}, {3,4} };\n¿Qué devuelve Arrays.equals(a, b)?",
                        opciones: [
                            "true",
                            "false",
                            "Depende de la versión de Java",
                            "Error de compilación"
                        ],
                        correcta: 1
                    },
                    {
                        id: 12,
                        texto: "En un array tridimensional int[][][] c = new int[2][3][2];, ¿cuántos elementos totales contiene?",
                        opciones: [
                            "6",
                            "12",
                            "8",
                            "16"
                        ],
                        correcta: 1
                    },
                    {
                        id: 13,
                        texto: "Si tenemos un array bidimensional int[][] m = { {1,2}, {3,4,5} };, ¿qué devuelve m[1].length?",
                        opciones: [
                            "2",
                            "3",
                            "5",
                            "6"
                        ],
                        correcta: 1
                    },
                    {
                        id: 14,
                        texto: "En un array multidimensional, ¿qué ocurre si intentamos acceder a un elemento de un índice que no existe, por ejemplo twoDimensions[2][5] en un array de 3x5?",
                        opciones: [
                            "Se devuelve 0 automáticamente",
                            "Se lanza ArrayIndexOutOfBoundsException",
                            "Se devuelve null",
                            "Se crea automáticamente el elemento"
                        ],
                        correcta: 1
                    },
                    {
                        id: 15,
                        texto: "Si tenemos un array bidimensional int[][] m = new int[4][3];, ¿cuál de las siguientes afirmaciones es correcta?",
                        opciones: [
                            "m.length devuelve 3",
                            "m[0].length devuelve 4",
                            "m[0][0] está inicializado a 0",
                            "m[4][0] es válido"
                        ],
                        correcta: 2
                    },
                    {
                        id: 16,
                        texto: "¿Cuál de las siguientes formas permite inicializar un array bidimensional irregular en Java?",
                        opciones: [
                            "int[][] b = { {1,2}, {3,4,5}, {6} };",
                            "int[][] b = new int[3][3];",
                            "int[][] b = new int[2][];",
                            "int[][] b = new int[][3];"
                        ],
                        correcta: 0
                    },
                    {
                        id: 17,
                        texto: "En un array multidimensional de objetos, ¿qué valor tendrán los elementos inmediatamente después de usar new pero antes de asignar objetos?",
                        opciones: [
                            "0",
                            "null",
                            "false",
                            "No se inicializan"
                        ],
                        correcta: 1
                    },
                    {
                        id: 18,
                        texto: "Si tenemos:\n\nint[] a = {1,2,3};\nint[] b = a;\nb[0] = 10;\nSystem.out.println(a[0]);\n\n¿Qué imprime?",
                        opciones: [
                            "1",
                            "2",
                            "3",
                            "10"
                        ],
                        correcta: 3
                    },
                    {
                        id: 19,
                        texto: "¿Cuál de las siguientes comparaciones devuelve true si queremos verificar que el contenido de dos arrays bidimensionales es igual?\n\nint[][] x = { {1,2}, {3,4} };\nint[][] y = { {1,2}, {3,4} };",
                        opciones: [
                            "x == y",
                            "x.equals(y)",
                            "Arrays.equals(x, y)",
                            "Arrays.deepEquals(x, y)"
                        ],
                        correcta: 3
                    },
                    {
                        id: 20,
                        texto: "¿Qué ocurre si pasamos un array como parámetro a un método y modificamos sus elementos dentro del método?",
                        opciones: [
                            "No afecta al array original",
                            "Se lanza un error de compilación",
                            "El array original se ve modificado",
                            "Solo se modifica una copia interna del array"
                        ],
                        correcta: 2
                    },
                    {
                        id: 21,
                        texto: "En un método que utiliza varargs:\n\npublic int add(int... nums) { ... }\n\n¿Qué tipo de dato se crea internamente para nums?",
                        opciones: [
                            "Array de int (int[])",
                            "Array de Integer (Integer[])",
                            "Lista (List<Integer>)",
                            "No se crea un array"
                        ],
                        correcta: 0
                    },
                    {
                        id: 22,
                        texto: "En un método con varargs, ¿cuál de estas declaraciones es válida?",
                        opciones: [
                            "int compute(int x, int... values, double y)",
                            "int compute(int x, double y, int... values)",
                            "int compute(int... a, int... b)",
                            "int compute(int x, int y)"
                        ],
                        correcta: 1
                    },
                    {
                        id: 23,
                        texto: "¿Cuál es la forma correcta de retornar un array desde un método en Java?",
                        opciones: [
                            "int method() { return new int[3]; }",
                            "int[] method() { return new int[3]; }",
                            "int method[] { return new int[3]; }",
                            "array method() { return new int[3]; }"
                        ],
                        correcta: 1
                    },
                    {
                        id: 24,
                        texto: "¿Qué imprime este código?\n\nint[] a = {1,2,3};\nint[] b = a;\nb[1] = 10;\nSystem.out.println(Arrays.toString(a));",
                        opciones: [
                            "[1, 2, 3]",
                            "[1, 10, 3]",
                            "[10, 2, 3]",
                            "Error de compilación"
                        ],
                        correcta: 1
                    },
                    {
                        id: 25,
                        texto: "¿Cuál de las siguientes afirmaciones sobre arrays en Java es FALSA?",
                        opciones: [
                            "Los arrays son objetos y tienen el atributo length",
                            "Los arrays de tipos primitivos almacenan los valores en ubicaciones de memoria contiguas",
                            "El operador == compara el contenido de dos arrays",
                            "Se pueden pasar arrays como parámetros a métodos"
                        ],
                        correcta: 2
                    }
                ]
            },
            "4.3": {
                titulo: "4.3. La Clase Arrays",
                preguntas: [
                    {
                        id: 1,
                        texto: "Dado el array:\n\nint[] arr = {3, 7, 1, 9};\nSystem.out.println(Arrays.toString(arr));\n\n¿Qué se mostrará por consola?",
                        opciones: [
                            "3 7 1 9",
                            "[3, 7, 1, 9]",
                            "Arrays@12345",
                            "[3 7 1 9]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 2,
                        texto: "Dado el array bidimensional:\n\nint[][] arr2D = { {1, 2}, {3, 4} };\nSystem.out.println(Arrays.deepToString(arr2D));\n\n¿Qué se mostrará por consola?",
                        opciones: [
                            "[[1, 2], [3, 4]]",
                            "[1, 2, 3, 4]",
                            "Arrays@abcd",
                            "[ [1 2] [3 4] ]"
                        ],
                        correcta: 0
                    },
                    {
                        id: 3,
                        texto: "Dado el siguiente código:\n\nint[] array = new int[5];\nArrays.fill(array, 7);\nSystem.out.println(Arrays.toString(array));\n\n¿Qué se mostrará por consola?",
                        opciones: [
                            "[0, 0, 0, 0, 0]",
                            "[1, 2, 3, 4, 5]",
                            "[7, 7, 7, 7, 7]",
                            "[null, null, null, null, null]"
                        ],
                        correcta: 2
                    },
                    {
                        id: 4,
                        texto: "Dado el siguiente array ordenado:\n\nint[] array = {2, 4, 6, 8, 10};\nint index = Arrays.binarySearch(array, 6);\n\n¿Qué valor tendrá index?",
                        opciones: [
                            "1",
                            "2",
                            "-1",
                            "3"
                        ],
                        correcta: 1
                    },
                    {
                        id: 5,
                        texto: "Dado el codigo: \n\nint[] array1 = {1, 2, 3};\nint[] array2 = {1, 2, 3};\nSystem.out.println(Arrays.equals(array1, array2));\n\n¿Qué imprimirá por consola?",
                        opciones: [
                            "false",
                            "true",
                            "null",
                            "Da error de compilación"
                        ],
                        correcta: 1
                    },
                    {
                        id: 6,
                        texto: "Dado el codigo\n\nint[][] a = { {1, 2}, {3, 4} };\nint[][] b = { {1, 2}, {3, 4} };\nSystem.out.println(Arrays.deepEquals(a, b));\n\n¿Qué imprimirá por consola?",
                        opciones: [
                            "false",
                            "true",
                            "null",
                            "Da error de compilación"
                        ],
                        correcta: 1
                    },
                    {
                        id: 7,
                        texto: "Dado el codigo\n\nint[] x = {2, 4, 6};\nint[] y = {2, 4, 5};\nSystem.out.println(Arrays.compare(x, y));\n\n¿Qué valor obtendremos?",
                        opciones: [
                            "0",
                            "Un número negativo",
                            "Un número positivo",
                            "Da error de compilación"
                        ],
                        correcta: 2
                    },
                    {
                        id: 8,
                        texto: "Dado el codigo\n\nint[] a = {1, 2, 3};\nint[] b = {1, 2, 3, 4};\nSystem.out.println(Arrays.mismatch(a, b));\n\n¿Qué imprimirá?",
                        opciones: [
                            "-1",
                            "3",
                            "4",
                            "0"
                        ],
                        correcta: 1
                    },
                    {
                        id: 9,
                        texto: "Dado el codigo\n\nint[] array = new int[5];\nArrays.fill(array, 2, 4, 7);\nSystem.out.println(Arrays.toString(array));\n\n¿Cuál será la salida?",
                        opciones: [
                            "[0, 0, 7, 7, 0]",
                            "[7, 7, 7, 7, 7]",
                            "[0, 0, 0, 0, 0]",
                            "[7, 7, 0, 0, 7]"
                        ],
                        correcta: 0
                    },
                    {
                        id: 10,
                        texto: "Dado el codigo\n\nint[] arr = {3, 6, 9, 12};\nint idx = Arrays.binarySearch(arr, 10);\nSystem.out.println(idx);\n\n¿Qué imprime?",
                        opciones: [
                            "2",
                            "-3",
                            "3",
                            "-4"
                        ],
                        correcta: 3
                    },
                    {
                        id: 11,
                        texto: "Supongamos que tenemos este código:\n\nint[] array1 = {3, 4, 5, 6, 7, 8};\nint[] array2 = Arrays.copyOf(array1, 8);\n\n¿Qué contiene array2 después de la ejecución?",
                        opciones: [
                            "[3, 4, 5, 6, 7, 8]",
                            "[3, 4, 5, 6, 7, 8, 0, 0]",
                            "[0, 0, 0, 0, 0, 0, 0, 0]",
                            "[3, 4, 5, 6, 7, 8, null, null]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 12,
                        texto: "Supongamos el siguiente código:\n\nint[] array = {8, 4, 3, 7, 5, 6};\nArrays.sort(array, 1, 5);\n\n¿Qué contendrá array después de ejecutar este código?",
                        opciones: [
                            "[3, 4, 5, 6, 7, 8]",
                            "[8, 3, 4, 5, 7, 6]",
                            "[3, 4, 5, 7, 6, 8]",
                            "[8, 4, 3, 7, 5, 6]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 13,
                        texto: "¿Qué método de la clase Arrays se usaría para obtener una copia de un array solo de los índices 2 a 5 de array1?",
                        opciones: [
                            "Arrays.copyOf(array1, 5)",
                            "Arrays.copyOfRange(array1, 2, 6)",
                            "Arrays.copyOfRange(array1, 2, 5)",
                            "Arrays.clone(array1)"
                        ],
                        correcta: 1
                    },
                    {
                        id: 14,
                        texto: "¿Qué devuelve Arrays.mismatch(array1, array3) si el primer elemento diferente está en el índice 6?",
                        opciones: [
                            "5",
                            "6",
                            "-1",
                            "0"
                        ],
                        correcta: 1
                    },
                    {
                        id: 15,
                        texto: "Si ejecutamos:\n\nint[] array = {8, 4, 3, 7, 5, 6};\nArrays.sort(array, 1, 5);\nSystem.out.println(Arrays.toString(array));\n\n¿Qué se imprime?",
                        opciones: [
                            "[3, 4, 5, 6, 7, 8]",
                            "[8, 3, 4, 5, 7, 6]",
                            "[3, 4, 3, 5, 7, 6]",
                            "[8, 4, 3, 7, 5, 6]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 16,
                        texto: "¿Qué hace el método Arrays.copyOf(array, newLength) si newLength es mayor que el tamaño original del array?",
                        opciones: [
                            "Da error de compilación",
                            "Copia solo los elementos hasta el tamaño original y descarta el resto",
                            "Copia los elementos originales y rellena el resto con el valor por defecto del tipo de datos",
                            "Crea un array vacío del tamaño newLength"
                        ],
                        correcta: 2
                    },
                    {
                        id: 17,
                        texto: "¿Qué devuelve el método Arrays.mismatch(array1, array2) cuando los arrays son iguales?",
                        opciones: [
                            "-1",
                            "0",
                            "El índice del último elemento",
                            "El índice del primer elemento"
                        ],
                        correcta: 0
                    },
                    {
                        id: 18,
                        texto: "¿Qué imprime el siguiente código?\n\nint[] array = {3, 1, 4, 2};\nArrays.sort(array, 1, 3);\nSystem.out.println(Arrays.toString(array));",
                        opciones: [
                            "[1, 3, 4, 2]",
                            "[3, 1, 2, 4]",
                            "[3, 1, 4, 2]",
                            "[1, 2, 3, 4]"
                        ],
                        correcta: 2
                    },
                    {
                        id: 19,
                        texto: "¿Qué imprime este código?\n\nint[] array = {5, 6, 7, 8};\nint[] copy = Arrays.copyOf(array, 6);\nSystem.out.println(Arrays.toString(copy));",
                        opciones: [
                            "[5, 6, 7, 8]",
                            "[5, 6, 7, 8, 0, 0]",
                            "[5, 6, 7, 8, 5, 6]",
                            "[0, 0, 0, 0, 0, 0]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 20,
                        texto: "¿Qué imprime este código?\n\nint[] array = {8, 4, 3, 7, 5, 6};\nArrays.sort(array, 1, 5);\nSystem.out.println(Arrays.toString(array));",
                        opciones: [
                            "[3, 4, 5, 6, 7, 8]",
                            "[8, 3, 4, 5, 7, 6]",
                            "[3, 4, 3, 4, 5, 6]",
                            "[8, 4, 3, 7, 5, 6]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 21,
                        texto: "¿Qué devuelve Arrays.mismatch(array1, array3) en este código?\n\nint[] array1 = {3, 4, 5, 6, 7, 8};\nint[] array3 = {3, 4, 5, 6, 7, 8, 9, 10, 11};\nint indexMismatch = Arrays.mismatch(array1, array3);\nSystem.out.println(indexMismatch);",
                        opciones: [
                            "5",
                            "6",
                            "-1",
                            "0"
                        ],
                        correcta: 1
                    },
                    {
                        id: 22,
                        texto: "Si usamos Arrays.copyOf(array1, 10) con\n\nint[] array1 = {3, 4, 5, 6, 7, 8, 9, 10};\n\n¿Cuál será el resultado?",
                        opciones: [
                            "[3, 4, 5, 6, 7, 8, 9, 10]",
                            "[3, 4, 5, 6, 7, 8, 9, 10, 0, 0]",
                            "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]",
                            "[3, 4, 5, 6, 7, 8]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 23,
                        texto: "Si ejecutamos:\n\nint[] array = {8, 4, 3, 7, 5, 6};\nArrays.sort(array, 1, 5);\n\n¿Cuál será el contenido de array después?",
                        opciones: [
                            "[3, 4, 5, 6, 7, 8]",
                            "[8, 3, 4, 5, 7, 6]",
                            "[8, 4, 3, 7, 5, 6]",
                            "[3, 4, 3, 5, 6, 8]"
                        ],
                        correcta: 1
                    },
                    {
                        id: 24,
                        texto: "¿Qué método de la clase Arrays devuelve el índice de la primera diferencia entre dos arrays?",
                        opciones: [
                            "compare",
                            "equals",
                            "mismatch",
                            "deepEquals"
                        ],
                        correcta: 2
                    },
                    {
                        id: 25,
                        texto: "Si tenemos:\n\nint[] array = {8, 4, 3, 7, 5, 6};\nArrays.sort(array);\nSystem.out.println(Arrays.toString(array));\n\n¿Cuál será la salida por consola?",
                        opciones: [
                            "[8, 4, 3, 7, 5, 6]",
                            "[3, 4, 5, 6, 7, 8]",
                            "[8, 3, 4, 5, 6, 7]",
                            "[6, 5, 7, 3, 4, 8]"
                        ],
                        correcta: 1
                    }
                ]
            }
        }
    },
    tema5: {
        id: 5,
        titulo: "Tema 5 - Programación Orientada a Objetos",
        subtemas: {
            "5.1": {
                titulo: "Tema 5 - Programación Orientada a Objetos",
                preguntas: [
                    {
                        id: 1,
                        texto: "¿Cuál de las siguientes afirmaciones describe correctamente la diferencia entre clase y objeto en Java?",
                        opciones: [
                            "Una clase es un objeto especial que no puede tener métodos.",
                            "Un objeto es el molde y la clase es una instancia del mismo.",
                            "Una clase define un tipo de objeto y un objeto es una instancia concreta de esa clase.",
                            "Clase y objeto son lo mismo, solo cambia el nombre."
                        ],
                        correcta: 2
                    },
                    {
                        id: 2,
                        texto: "¿Cuál de las siguientes opciones define correctamente un atributo de una clase en Java?",
                        opciones: [
                            "Un bloque de código que ejecuta acciones",
                            "Una variable que pertenece a una clase u objeto",
                            "Un método especial que inicializa objetos",
                            "Una clase dentro de otra clase"
                        ],
                        correcta: 1
                    },
                    {
                        id: 3,
                        texto: "¿Cuál es el objetivo principal de la encapsulación en la Programación Orientada a Objetos?",
                        opciones: [
                            "Permitir que todos los atributos sean públicos",
                            "Separar el código en distintos archivos",
                            "Proteger los datos y controlar el acceso a ellos",
                            "Aumentar la velocidad de ejecución del programa"
                        ],
                        correcta: 2
                    },
                    {
                        id: 4,
                        texto: "¿Cuál de los siguientes modificadores de acceso permite que un atributo o método sea accesible solo dentro de la misma clase?",
                        opciones: [
                            "public",
                            "protected",
                            "default (sin modificador)",
                            "private"
                        ],
                        correcta: 3
                    },
                    {
                        id: 5,
                        texto: "¿Cuál de las siguientes afirmaciones es obligatoria para que una clase sea considerada un JavaBean?",
                        opciones: [
                            "Tener todos los atributos públicos",
                            "Implementar la interfaz Serializable",
                            "Tener un constructor sin parámetros",
                            "No usar métodos get y set"
                        ],
                        correcta: 2
                    },
                    {
                        id: 6,
                        texto: "¿Cuál de las siguientes afirmaciones sobre los constructores en Java es correcta?",
                        opciones: [
                            "Pueden devolver valores",
                            "Tienen el mismo nombre que la clase",
                            "Deben ser siempre public",
                            "Se heredan automáticamente"
                        ],
                        correcta: 1
                    },
                    {
                        id: 7,
                        texto: "¿Qué ocurre si una clase no define ningún constructor?",
                        opciones: [
                            "El programa no compila",
                            "Java crea automáticamente un constructor sin parámetros",
                            "Se crea un constructor con todos los atributos",
                            "Los objetos no pueden instanciarse"
                        ],
                        correcta: 1
                    },
                    {
                        id: 8,
                        texto: "¿Para qué se utiliza principalmente la palabra clave this en Java?",
                        opciones: [
                            "Para llamar a métodos estáticos",
                            "Para referirse al objeto actual",
                            "Para crear un nuevo objeto",
                            "Para acceder a variables globales"
                        ],
                        correcta: 1
                    },
                    {
                        id: 9,
                        texto: "¿Cuál es la función principal de los métodos get y set?",
                        opciones: [
                            "Ejecutar acciones complejas",
                            "Inicializar objetos",
                            "Acceder y modificar atributos privados",
                            "Crear métodos estáticos"
                        ],
                        correcta: 2
                    },
                    {
                        id: 10,
                        texto: "¿Qué permite el encadenamiento de métodos (method chaining) en Java?",
                        opciones: [
                            "Llamar a varios métodos sobre el mismo objeto en una sola línea",
                            "Crear un objeto sin constructor",
                            "Evitar el uso de this",
                            "Ejecutar métodos estáticos sin instancia"
                        ],
                        correcta: 0
                    },
                    {
                        id: 11,
                        texto: "Dentro de un método de instancia, ¿qué representa this en Java?",
                        opciones: [
                            "El primer parámetro del método",
                            "La clase del objeto",
                            "Una copia del objeto actual",
                            "Una referencia al objeto actual"
                        ],
                        correcta: 3
                    },
                    {
                        id: 12,
                        texto: "¿Cuál de las siguientes afirmaciones describe mejor el principio de encapsulamiento en POO?",
                        opciones: [
                            "Los métodos de una clase deben ser siempre públicos",
                            "Ocultar los atributos de un objeto y permitir acceso solo a través de métodos",
                            "Declarar todos los atributos como públicos",
                            "Permitir que cualquier clase acceda directamente a los atributos de otro objeto"
                        ],
                        correcta: 1
                    },
                    {
                        id: 13,
                        texto: "¿Qué devuelve el método getClass() de un objeto en Java?",
                        opciones: [
                            "Una cadena con el nombre del objeto",
                            "Una referencia al objeto actual",
                            "Un objeto de tipo Class<?> que representa la clase del objeto",
                            "El hashCode del objeto"
                        ],
                        correcta: 2
                    },
                    {
                        id: 14,
                        texto: "¿Qué hace el método Objects.requireNonNull(obj, mensaje)?",
                        opciones: [
                            "Devuelve true si el objeto es null, false si no lo es",
                            "Devuelve false si el objeto es null y lanza excepción si no lo es",
                            "Valida que un objeto no sea null y lanza NullPointerException si lo es",
                            "Elimina el objeto si es null"
                        ],
                        correcta: 2
                    },
                    {
                        id: 15,
                        texto: "¿Qué ventaja principal ofrece la sintaxis fluida en métodos como accelerate() o brake()?",
                        opciones: [
                            "Permite modificar atributos privados directamente",
                            "Permite encadenar llamadas a métodos en una sola línea",
                            "Hace que los métodos sean estáticos",
                            "Impide que los métodos devuelvan valores"
                        ],
                        correcta: 1
                    },
                    {
                        id: 16,
                        texto: "¿Cuál de las siguientes afirmaciones sobre encapsulamiento es correcta?",
                        opciones: [
                            "Los atributos de una clase deben ser públicos para facilitar su acceso",
                            "Los atributos privados solo se pueden modificar dentro del constructor",
                            "Los atributos privados se acceden y modifican mediante métodos get y set",
                            "Los métodos get y set siempre deben devolver void"
                        ],
                        correcta: 2
                    },
                    {
                        id: 17,
                        texto: "En Java, ¿cuál es la función principal de la palabra clave this dentro de un método de instancia?",
                        opciones: [
                            "Invocar un constructor de otra clase",
                            "Referirse a los métodos estáticos de la clase",
                            "Referirse al objeto actual sobre el que se llama el método",
                            "Acceder a variables locales dentro del método"
                        ],
                        correcta: 2
                    },
                    {
                        id: 18,
                        texto: "¿Cuál es la ventaja principal de un método que devuelve this en Java?",
                        opciones: [
                            "Permite acceder a atributos privados directamente",
                            "Hace que el método sea estático",
                            "Permite encadenar llamadas a métodos en una sola línea",
                            "Evita la creación de objetos nuevos"
                        ],
                        correcta: 2
                    },
                    {
                        id: 19,
                        texto: "¿Qué afirmación describe mejor un invariante de clase en Java?",
                        opciones: [
                            "Es un método que devuelve siempre true",
                            "Es un atributo público que nunca cambia",
                            "Son restricciones que deben cumplirse siempre en los objetos de la clase",
                            "Es un tipo especial de constructor que valida parámetros"
                        ],
                        correcta: 2
                    },
                    {
                        id: 20,
                        texto: "¿Cuál de las siguientes acciones viola el principio de encapsulamiento?",
                        opciones: [
                            "Definir los atributos como private y usar getters/setters.",
                            "Modificar directamente un atributo public desde fuera de la clase.",
                            "Usar métodos para acceder o modificar los atributos privados.",
                            "Validar parámetros dentro de un setter antes de asignarlos."
                        ],
                        correcta: 1
                    },
                    {
                        id: 21,
                        texto: "¿Qué hace la palabra clave this dentro de un método de instancia?",
                        opciones: [
                            "Se refiere a la clase de la que se creó el objeto.",
                            "Se refiere al constructor de la clase.",
                            "Se refiere al objeto actual sobre el que se llama el método.",
                            "Crea una copia del objeto actual."
                        ],
                        correcta: 2
                    },
                    {
                        id: 22,
                        texto: "¿Cuál de las siguientes opciones describe mejor el encadenamiento de métodos (method chaining)?",
                        opciones: [
                            "Llamar a métodos estáticos de distintas clases en la misma línea.",
                            "Llamar a un método de un objeto y luego a otro método de un objeto diferente en líneas separadas.",
                            "Invocar un método que devuelve un objeto y luego llamar otro método sobre ese objeto en la misma línea.",
                            "Llamar a un método que no devuelve nada (void) y luego otro método."
                        ],
                        correcta: 2
                    },
                    {
                        id: 23,
                        texto: "¿Qué ventaja principal tiene la sintaxis fluida en los métodos de una clase?",
                        opciones: [
                            "Permite que los métodos sean estáticos.",
                            "Obliga a usar this explícitamente en todos los métodos.",
                            "Permite encadenar varias llamadas a métodos en una sola línea.",
                            "Garantiza que los métodos devuelvan siempre void."
                        ],
                        correcta: 2
                    },
                    {
                        id: 24,
                        texto: "¿Cuál de las siguientes afirmaciones describe mejor un invariante de clase?",
                        opciones: [
                            "Una variable local que nunca cambia dentro de un método.",
                            "Una condición que debe cumplirse antes y después de cualquier llamada a métodos públicos.",
                            "Un método que no puede ser sobrescrito.",
                            "Un atributo declarado como final."
                        ],
                        correcta: 1
                    },
                    {
                        id: 25,
                        texto: "¿Cuál de las siguientes opciones cumple con el principio de encapsulamiento?",
                        opciones: [
                            "Declarar los atributos como public y modificarlos directamente desde otras clases.",
                            "Declarar los atributos como private y acceder/modificar a través de get y set.",
                            "No usar métodos get ni set y modificar los atributos dentro del main.",
                            "Usar únicamente atributos static para todos los objetos."
                        ],
                        correcta: 1
                    },
                    {
                        id: 26,
                        texto: "Dado el siguiente código:\n\nString str = \"HolaMundo\";\nSystem.out.println(str.substring(4).toLowerCase());\n\n¿Qué se imprime por consola?",
                        opciones: [
                            "MUNDO",
                            "mundo",
                            "oMundo",
                            "omundo"
                        ],
                        correcta: 1
                    },
                    {
                        id: 27,
                        texto: "¿Cuál de las siguientes afirmaciones sobre constructores en Java es correcta?",
                        opciones: [
                            "Un constructor puede tener un tipo de retorno void.",
                            "Un constructor siempre tiene el mismo nombre que la clase y no tiene tipo de retorno.",
                            "Un constructor puede llamarse de cualquier manera distinta al nombre de la clase.",
                            "Un constructor solo puede inicializar variables locales, no atributos de la clase."
                        ],
                        correcta: 1
                    },
                    {
                        id: 28,
                        texto: "¿Qué ocurre si una clase en Java no define ningún constructor?",
                        opciones: [
                            "El compilador lanza un error de compilación.",
                            "Se crea automáticamente un constructor por defecto que inicializa todos los atributos con sus valores por defecto.",
                            "Los objetos de esa clase no pueden crearse nunca.",
                            "Los atributos se inicializan a null aunque sean enteros o booleanos."
                        ],
                        correcta: 1
                    },
                    {
                        id: 29,
                        texto: "¿Cuál es el modificador de acceso más restrictivo en Java?",
                        opciones: [
                            "public",
                            "protected",
                            "default (sin modificador)",
                            "private"
                        ],
                        correcta: 3
                    },
                    {
                        id: 30,
                        texto: "En un JavaBean, ¿cuál de las siguientes características NO es obligatoria?",
                        opciones: [
                            "Tener un constructor sin argumentos",
                            "Que los atributos sean privados",
                            "Que los atributos sean static",
                            "Tener métodos get y set para las propiedades"
                        ],
                        correcta: 2
                    },
                    {
                        id: 31,
                        texto: "¿Cuál de las siguientes afirmaciones sobre el método toString() es correcta?",
                        opciones: [
                            "Siempre devuelve un valor int",
                            "Solo se puede usar en clases que implementen Serializable",
                            "Devuelve una representación en cadena del objeto",
                            "No se puede sobrecargar en Java"
                        ],
                        correcta: 2
                    },
                    {
                        id: 32,
                        texto: "¿Cuál de los siguientes tipos de constructor no tiene parámetros y construye todos los objetos de la misma manera?",
                        opciones: [
                            "Constructor con parámetros",
                            "Constructor por defecto",
                            "Constructor estático",
                            "Constructor privado"
                        ],
                        correcta: 1
                    },
                    {
                        id: 33,
                        texto: "Si una clase tiene un constructor con parámetros definido, ¿qué sucede si intentamos usar un constructor sin parámetros que no hemos definido explícitamente?",
                        opciones: [
                            "Java lo crea automáticamente y funciona sin problemas.",
                            "El compilador genera un error.",
                            "Se ejecuta el constructor con parámetros de forma automática.",
                            "El objeto se crea con valores aleatorios."
                        ],
                        correcta: 1
                    },
                    {
                        id: 34,
                        texto: "En Java, ¿qué modificador de acceso permite que un atributo o método solo sea accesible dentro de la propia clase?",
                        opciones: [
                            "public",
                            "protected",
                            "default (sin modificador)",
                            "private"
                        ],
                        correcta: 3
                    },
                    {
                        id: 35,
                        texto: "¿Cuál de las siguientes afirmaciones sobre un JavaBean es correcta?",
                        opciones: [
                            "Sus atributos pueden ser públicos si tiene constructor por defecto.",
                            "Debe tener un constructor sin argumentos y métodos get y set para sus propiedades.",
                            "No puede implementar interfaces.",
                            "Sus métodos nunca pueden lanzar excepciones."
                        ],
                        correcta: 1
                    },
                    {
                        id: 36,
                        texto: "En Java, si una clase no define ningún constructor, ¿qué ocurre al crear un objeto de esa clase?",
                        opciones: [
                            "No se puede crear un objeto hasta definir un constructor.",
                            "El compilador lanza un error.",
                            "Java genera automáticamente un constructor por defecto que inicializa los atributos a sus valores por defecto.",
                            "Los atributos locales de los métodos se inicializan automáticamente."
                        ],
                        correcta: 2
                    },
                    {
                        id: 37,
                        texto: "¿Cuál de las siguientes afirmaciones sobre constructores con parámetros es correcta?",
                        opciones: [
                            "Un constructor con parámetros no puede inicializar atributos de la clase.",
                            "Los constructores con parámetros deben tener siempre tipo de retorno void.",
                            "Permiten crear objetos con valores distintos para sus atributos.",
                            "No pueden coexistir con un constructor por defecto."
                        ],
                        correcta: 2
                    },
                    {
                        id: 38,
                        texto: "En Java, si una variable de instancia y un parámetro de método tienen el mismo nombre, ¿cómo accedemos a la variable de instancia dentro del método?",
                        opciones: [
                            "Solo escribiendo el nombre de la variable.",
                            "No es posible acceder a la variable de instancia.",
                            "Usando el modificador private.",
                            "Usando this.nombreVariable."
                        ],
                        correcta: 3
                    },
                    {
                        id: 39,
                        texto: "¿Qué método de la clase Object se suele sobrescribir para obtener una representación en texto legible de un objeto?",
                        opciones: [
                            "equals()",
                            "hashCode()",
                            "toString()",
                            "getClass()"
                        ],
                        correcta: 2
                    },
                    {
                        id: 40,
                        texto: "En un JavaBean, ¿cuál de estas afirmaciones es obligatoria?",
                        opciones: [
                            "Sus atributos deben ser public.",
                            "Debe tener un constructor sin argumentos.",
                            "No puede tener métodos get o set.",
                            "Sus atributos no pueden ser serializables."
                        ],
                        correcta: 1
                    },
                    {
                        id: 41,
                        texto: "¿Cuál es la principal diferencia entre un constructor por defecto y un constructor con parámetros?",
                        opciones: [
                            "El constructor por defecto tiene un tipo de retorno void.",
                            "El constructor con parámetros se llama automáticamente al crear el objeto, el por defecto no.",
                            "El constructor por defecto no recibe argumentos y crea objetos con valores predeterminados, el con parámetros permite inicializar atributos con valores específicos.",
                            "No hay diferencia; ambos hacen exactamente lo mismo."
                        ],
                        correcta: 2
                    },
                    {
                        id: 42,
                        texto: "¿Qué hace el Garbage Collector en Java?",
                        opciones: [
                            "Inicializa los atributos de los objetos automáticamente.",
                            "Libera memoria eliminando objetos que ya no tienen referencias activas.",
                            "Crea objetos por defecto si no hay constructor definido.",
                            "Permite acceder a los atributos privados de un objeto."
                        ],
                        correcta: 1
                    }
                ]
            }
        }
    },
    tema6: {
        id: 6,
        titulo: "Tema 6 - Excepciones",
        subtemas: {
            "6.1": {
                titulo: "Tema 6 - Excepciones",
                preguntas: [
                    {
                        id: 1,
                        texto: "Según la filosofía de Java, ¿cuál es la diferencia principal entre un 'Error' y una 'Excepción'?",
                        opciones: [
                            "Los Errores son fallos de sintaxis y las Excepciones fallos de lógica.",
                            "No hay diferencia, son sinónimos.",
                            "Un Error es una condición controlable, mientras que una Excepción es fatal.",
                            "Un Error es una condición incontrolable (como falta de memoria), y una Excepción es un hecho controlable."
                        ],
                        correcta: 3
                    },
                    {
                        id: 2,
                        texto: "¿Qué sucede si se produce una excepción dentro de un bloque 'try'?",
                        opciones: [
                            "El compilador corrige el error automáticamente.",
                            "El programa se detiene inmediatamente sin ejecutar nada más.",
                            "Se ignoran las líneas restantes del 'try' y se continúa después del 'catch' sin ejecutar el 'catch'.",
                            "Se busca el bloque 'catch' adecuado para capturar esa excepción."
                        ],
                        correcta: 3
                    },
                    {
                        id: 3,
                        texto: "Desde Java 7, ¿cómo se pueden capturar múltiples excepciones en un solo bloque 'catch' (multi-catch)?",
                        opciones: [
                            "Separando los tipos de excepción con una barra vertical (|).",
                            "Usando la palabra clave 'OR' entre las excepciones.",
                            "Separando los tipos de excepción con comas (,).",
                            "No es posible, hay que escribir un bloque catch para cada una."
                        ],
                        correcta: 0
                    },
                    {
                        id: 4,
                        texto: "¿Cuál es la filosofía de manejo de excepciones por defecto en Java?",
                        opciones: [
                            "Reanudación.",
                            "Interrupción.",
                            "Corrección automática.",
                            "Omisión."
                        ],
                        correcta: 1
                    },
                    {
                        id: 5,
                        texto: "¿Qué método de una excepción devuelve una descripción corta del error (el mensaje)?",
                        opciones: [
                            "toString()",
                            "getErrorText()",
                            "getMessage()",
                            "printStackTrace()"
                        ],
                        correcta: 2
                    },
                    {
                        id: 6,
                        texto: "Si tienes un bloque 'try' con varios 'catch', ¿en qué orden debes colocarlos?",
                        opciones: [
                            "Primero las subclases (más específicas) y luego las superclases (más generales).",
                            "Alfabéticamente por nombre de excepción.",
                            "Primero las superclases (más generales) y luego las subclases (más específicas).",
                            "El orden no importa, Java selecciona el mejor automáticamente."
                        ],
                        correcta: 0
                    },
                    {
                        id: 7,
                        texto: "¿Cuál es la clase padre de todas las excepciones y errores en Java?",
                        opciones: [
                            "Error",
                            "Throwable",
                            "RuntimeException",
                            "Exception"
                        ],
                        correcta: 1
                    },
                    {
                        id: 8,
                        texto: "¿Cuándo NO deberías usar un bloque try-catch para capturar una excepción?",
                        opciones: [
                            "Cuando quieres evitar que el programa se cierre.",
                            "Cuando es una excepción comprobada (checked).",
                            "Cuando usas la clase Scanner.",
                            "Cuando la excepción es fruto de un error de programación (como acceder a un índice fuera de rango en un bucle mal hecho)."
                        ],
                        correcta: 3
                    },
                    {
                        id: 9,
                        texto: "¿Qué caracteriza a las excepciones 'Unchecked' (No comprobadas)?",
                        opciones: [
                            "Son excepciones que ocurren al compilar.",
                            "Son aquellas que heredan de RuntimeException y no es obligatorio capturarlas ni declararlas.",
                            "Son errores fatales como OutOfMemoryError.",
                            "Son excepciones que deben declararse siempre con 'throws'."
                        ],
                        correcta: 1
                    },
                    {
                        id: 10,
                        texto: "¿Para qué sirve la cláusula 'throws' en la firma de un método?",
                        opciones: [
                            "Para lanzar manualmente una nueva excepción.",
                            "Para capturar la excepción dentro del método.",
                            "Para corregir el error automáticamente.",
                            "Para avisar que el método puede lanzar una excepción y delegar la responsabilidad de capturarla al método que lo llamó."
                        ],
                        correcta: 3
                    },
                    {
                        id: 11,
                        texto: "¿Qué instrucción se utiliza para lanzar explícitamente una excepción (por ejemplo, si validas que un divisor es 0)?",
                        opciones: [
                            "throws",
                            "catch",
                            "try",
                            "throw"
                        ],
                        correcta: 3
                    },
                    {
                        id: 12,
                        texto: "¿Cuál es la función principal del bloque 'finally'?",
                        opciones: [
                            "Ejecutar código solo si se produce una excepción.",
                            "Ejecutar código solo si NO se produce ninguna excepción.",
                            "Ejecutar un código de limpieza siempre, independientemente de si hubo error o no.",
                            "Volver a intentar el código del bloque try."
                        ],
                        correcta: 2
                    },
                    {
                        id: 13,
                        texto: "Si dentro de un bloque 'try' hay una instrucción 'return', ¿se ejecuta el bloque 'finally' asociado?",
                        opciones: [
                            "No, el return finaliza el método inmediatamente.",
                            "Solo si ha habido una excepción antes del return.",
                            "Depende de la configuración del compilador.",
                            "Sí, el finally se ejecuta antes de que el control salga del método."
                        ],
                        correcta: 3
                    },
                    {
                        id: 14,
                        texto: "Para emular la 'reanudación', ¿qué estructura de control se utiliza alrededor del try-catch?",
                        opciones: [
                            "Un bucle do-while.",
                            "Un condicional if-else.",
                            "Un bucle for.",
                            "Una llamada recursiva."
                        ],
                        correcta: 0
                    },
                    {
                        id: 15,
                        texto: "¿Qué tipo de excepción lanza Integer.parseInt si la cadena no contiene un número válido?",
                        opciones: [
                            "ArithmeticException",
                            "NumberFormatException",
                            "ClassCastException",
                            "InputMismatchException"
                        ],
                        correcta: 1
                    },
                    {
                        id: 16,
                        texto: "¿Qué método devuelve la información de la pila (método y línea donde ocurrió el error)?",
                        opciones: [
                            "toString()",
                            "getMessage()",
                            "getStackTrace()",
                            "printStackTrace()"
                        ],
                        correcta: 3
                    },
                    {
                        id: 17,
                        texto: "Si capturas una excepción con catch (Exception e), ¿qué tipos de excepciones capturas?",
                        opciones: [
                            "Absolutamente todo, incluidos errores de la JVM.",
                            "Solo las excepciones Checked.",
                            "Solo las excepciones Unchecked.",
                            "Todas las excepciones (Checked y Unchecked), pero no los Errores (java.lang.Error)."
                        ],
                        correcta: 3
                    },
                    {
                        id: 18,
                        texto: "¿Es obligatorio poner un try-catch al llamar a un método que lanza una RuntimeException?",
                        opciones: [
                            "Sí, pero solo si no usas 'throws'.",
                            "No, no existe obligación.",
                            "Sí, siempre.",
                            "Solo si el método es estático."
                        ],
                        correcta: 1
                    },
                    {
                        id: 19,
                        texto: "Cuál es la ruta del menú para atajo en Eclipse para rodear código con try-catch.",
                        opciones: [
                            "File -> Save as Try-Catch",
                            "Refactor -> Extract Method",
                            "Source -> Surround with",
                            "Edit -> Paste Special"
                        ],
                        correcta: 2
                    },
                    {
                        id: 20,
                        texto: "Si divides un número decimal (double) entre cero en Java, ¿se lanza una ArithmeticException?",
                        opciones: [
                            "No, devuelve 'Infinity' y no lanza excepción.",
                            "Lanza una NullPointerException.",
                            "Sí, siempre.",
                            "El programa se cierra sin aviso."
                        ],
                        correcta: 0
                    }
                ]
            }
        }
    },
    tema7: {
        id: 7,
        titulo: "Tema 7 - Herencia",
        subtemas: {
            "7.1": {
                titulo: "Tema 7 - Herencia",
                preguntas: [
                    {
                        id: 1,
                        texto: "Si una clase no especifica explícitamente una superclase con 'extends', ¿de qué clase hereda automáticamente?",
                        opciones: [
                            "Base",
                            "System",
                            "java.lang.Object",
                            "Main"
                        ],
                        correcta: 2
                    },
                    {
                        id: 2,
                        texto: "¿Cuál de los siguientes miembros de una clase NO se hereda en una subclase?",
                        opciones: [
                            "Los atributos públicos",
                            "Los métodos estáticos públicos",
                            "Los métodos protegidos",
                            "Los constructores"
                        ],
                        correcta: 3
                    },
                    {
                        id: 3,
                        texto: "Al anular un método (Overriding), ¿qué debe coincidir exactamente?",
                        opciones: [
                            "El número de parámetros, aunque los tipos sean distintos",
                            "Solo el nombre del método",
                            "Solo el tipo de retorno",
                            "La firma (nombre y parámetros) y el tipo de retorno"
                        ],
                        correcta: 3
                    },
                    {
                        id: 4,
                        texto: "¿Qué sucede si intentas llamar a 'super()' después de haber escrito otras líneas de código en un constructor?",
                        opciones: [
                            "El programa funciona normalmente",
                            "El objeto se inicializa dos veces",
                            "Se produce una excepción en tiempo de ejecución",
                            "Se produce un error de compilación"
                        ],
                        correcta: 3
                    },
                    {
                        id: 5,
                        texto: "¿Para qué sirve el método 'toString()' heredado de Object?",
                        opciones: [
                            "Para clonar el objeto",
                            "Para obtener una representación en texto del objeto",
                            "Para comparar si dos objetos son iguales",
                            "Para convertir una cadena en un objeto"
                        ],
                        correcta: 1
                    },
                    {
                        id: 6,
                        texto: "¿Para qué se usa el casting en herencia?",
                        opciones: [
                            "Eliminar un objeto de la memoria",
                            "Convertir una referencia de superclase a una de subclase",
                            "Convertir una referencia de subclase a una de superclase",
                            "Llamar a un método privado desde fuera de la clase"
                        ],
                        correcta: 2
                    },
                    {
                        id: 7,
                        texto: "¿Cuál es el propósito del operador 'instanceof'?",
                        opciones: [
                            "Crear una nueva instancia de una clase",
                            "Destruir una instancia",
                            "Obtener el nombre de la clase de un objeto",
                            "Comprobar si un objeto pertenece a una clase determinada"
                        ],
                        correcta: 3
                    },
                    {
                        id: 8,
                        texto: "Si una clase se declara con el modificador 'final', ¿qué consecuencia tiene?",
                        opciones: [
                            "La clase debe implementarse obligatoriamente",
                            "La clase no puede ser heredada",
                            "Todos sus métodos son automáticamente privados",
                            "No se pueden crear objetos de esa clase"
                        ],
                        correcta: 1
                    },
                    {
                        id: 9,
                        texto: "¿Qué ocurre si un método se declara como 'final' en la superclase?",
                        opciones: [
                            "No puede ser llamado por las subclases",
                            "Debe ser sobrescrito obligatoriamente",
                            "El método debe ser estático",
                            "Las subclases no pueden anularlo"
                        ],
                        correcta: 3
                    },
                    {
                        id: 10,
                        texto: "¿Cuál es la característica principal del polimorfismo en Java?",
                        opciones: [
                            "Permite que una clase tenga múltiples constructores",
                            "Obliga a que todas las clases tengan los mismos atributos",
                            "Permite que un método devuelva múltiples valores",
                            "Permite que una variable de tipo superclase referencie objetos de sus subclases"
                        ],
                        correcta: 3
                    },
                    {
                        id: 11,
                        texto: "¿Qué define a una clase abstracta?",
                        opciones: [
                            "Es una clase que no puede tener subclases",
                            "Es una clase que solo contiene métodos estáticos",
                            "Es una clase de la que no se pueden instanciar objetos directamente",
                            "Es una clase que no tiene métodos"
                        ],
                        correcta: 2
                    },
                    {
                        id: 12,
                        texto: "¿Qué es un método abstracto?",
                        opciones: [
                            "Un método que solo puede ser privado",
                            "Un método declarado pero sin cuerpo (sin implementación)",
                            "Un método que no devuelve nada (void)",
                            "Un método que se ejecuta automáticamente al iniciar la clase"
                        ],
                        correcta: 1
                    },
                    {
                        id: 13,
                        texto: "¿Puede una clase concreta contener un método abstracto?",
                        opciones: [
                            "Solo si la clase implementa una interfaz",
                            "Sí, siempre que el método sea público",
                            "Sí, pero el método no podrá ser llamado",
                            "No, si una clase tiene al menos un método abstracto, la clase debe ser abstracta"
                        ],
                        correcta: 3
                    },
                    {
                        id: 14,
                        texto: "¿Qué palabra reservada usa una clase para adoptar una Interfaz?",
                        opciones: [
                            "extends",
                            "implements",
                            "uses",
                            "includes"
                        ],
                        correcta: 1
                    },
                    {
                        id: 15,
                        texto: "Sobre las interfaces, ¿qué afirmación es correcta respecto a la herencia múltiple?",
                        opciones: [
                            "Una clase solo puede implementar una interfaz a la vez",
                            "Una clase puede implementar múltiples interfaces",
                            "Una interfaz solo puede ser implementada por una clase",
                            "Las interfaces no permiten herencia de ningún tipo"
                        ],
                        correcta: 1
                    },
                    {
                        id: 16,
                        texto: "¿Cómo son, por defecto, los atributos definidos dentro de una interfaz?",
                        opciones: [
                            "public, static y final (constantes)",
                            "protected y abstractos",
                            "transient y volatile",
                            "private y variables"
                        ],
                        correcta: 0
                    },
                    {
                        id: 17,
                        texto: "¿Qué es un método 'default' en una interfaz?",
                        opciones: [
                            "Un método que se ejecuta si falla la aplicación",
                            "Un método que es privado por defecto",
                            "Un método con una implementación base que las clases no están obligadas a sobrescribir",
                            "El constructor por defecto de la interfaz"
                        ],
                        correcta: 2
                    },
                    {
                        id: 18,
                        texto: "¿Cuál es la principal diferencia entre una clase abstracta y una interfaz?",
                        opciones: [
                            "Las interfaces se heredan con 'extends'",
                            "Las clases abstractas pueden tener estado (atributos no constantes), las interfaces no",
                            "Las interfaces no pueden tener métodos",
                            "No hay diferencias reales desde Java 8"
                        ],
                        correcta: 1
                    },
                    {
                        id: 19,
                        texto: "¿Qué devuelve el método 'getClass()'?",
                        opciones: [
                            "La dirección de memoria del objeto",
                            "Una cadena con el nombre del código fuente",
                            "El valor de todos los atributos del objeto",
                            "Un objeto de tipo Class que representa la clase en tiempo de ejecución"
                        ],
                        correcta: 3
                    },
                    {
                        id: 20,
                        texto: "¿Qué es una clase interna (Inner Class) miembro?",
                        opciones: [
                            "Una clase definida dentro de otra clase como un miembro más",
                            "Una clase que hereda de una interfaz",
                            "Una clase que solo tiene métodos privados",
                            "Una clase definida fuera del paquete"
                        ],
                        correcta: 0
                    },
                    {
                        id: 21,
                        texto: "¿Cuál es la característica principal de una 'clase anónima' (inline)?",
                        opciones: [
                            "Solo puede existir en archivos de texto",
                            "No tiene nombre y se define en el momento de la instanciación",
                            "No puede tener métodos",
                            "Es invisible para el compilador"
                        ],
                        correcta: 1
                    },
                    {
                        id: 22,
                        texto: "¿Qué permiten las 'clases selladas' (sealed classes) introducidas en versiones recientes?",
                        opciones: [
                            "Que la clase se borre tras ser usada",
                            "Impedir que se lean los atributos de la clase",
                            "Hacer que la clase sea inmune a virus",
                            "Restringir qué clases pueden heredar de ellas mediante 'permits'"
                        ],
                        correcta: 3
                    },
                    {
                        id: 23,
                        texto: "Si una clase extiende una clase 'sealed', ¿qué debe ser obligatoriamente?",
                        opciones: [
                            "No necesita ningún modificador especial",
                            "Debe declararse como 'final', 'sealed' o 'non-sealed'",
                            "Solo puede ser 'final'",
                            "Debe ser una interfaz"
                        ],
                        correcta: 1
                    },
                    {
                        id: 24,
                        texto: "¿Qué significa que una clase sea 'non-sealed'?",
                        opciones: [
                            "Que es igual que una clase abstracta",
                            "Que es una clase privada",
                            "Que vuelve a permitir la herencia libre para cualquier otra clase",
                            "Que no puede tener métodos"
                        ],
                        correcta: 2
                    },
                    {
                        id: 25,
                        texto: "¿Pueden las interfaces ser selladas (sealed interfaces)?",
                        opciones: [
                            "Sí, pero solo si no tienen métodos default",
                            "Solo si están dentro de un registro (record)",
                            "No, solo las clases",
                            "Sí, y limitan qué clases o interfaces pueden implementarlas o extenderlas"
                        ],
                        correcta: 3
                    },
                    {
                        id: 26,
                        texto: "En el contexto de la herencia, ¿qué es la 'especialización'?",
                        opciones: [
                            "El proceso de crear una subclase que añade atributos o métodos a una superclase",
                            "Cuando un programador solo sabe Java",
                            "Convertir un objeto en un tipo primitivo",
                            "El proceso de crear una superclase a partir de subclases"
                        ],
                        correcta: 0
                    },
                    {
                        id: 27,
                        texto: "¿Qué sucede con los miembros 'private' de la superclase en la subclase?",
                        opciones: [
                            "Existen en el objeto, pero la subclase no puede acceder a ellos directamente",
                            "Solo pueden usarse si se usa 'super.'",
                            "Se vuelven públicos",
                            "Se eliminan para ahorrar memoria"
                        ],
                        correcta: 0
                    },
                    {
                        id: 28,
                        texto: "Si una subclase tiene un atributo con el mismo nombre que uno de la superclase, ¿qué ocurre?",
                        opciones: [
                            "El del padre se borra",
                            "El atributo de la subclase oculta (shadowing) al de la superclase",
                            "Error de compilación",
                            "Se fusionan en un solo atributo"
                        ],
                        correcta: 1
                    },
                    {
                        id: 29,
                        texto: "¿Cuál es la principal ventaja de usar polimorfismo?",
                        opciones: [
                            "Poder escribir código genérico que funcione con cualquier objeto de una jerarquía",
                            "Que los objetos ocupen menos espacio en memoria",
                            "Que el código se ejecute más rápido",
                            "Evitar el uso de clases abstractas"
                        ],
                        correcta: 0
                    },
                    {
                        id: 30,
                        texto: "¿Se pueden definir métodos estáticos en una interfaz?",
                        opciones: [
                            "Sí, pero solo si la interfaz es sellada",
                            "Sí, y se llaman a través del nombre de la interfaz",
                            "Sí, y las clases que la implementan los heredan",
                            "No, las interfaces solo tienen métodos abstractos"
                        ],
                        correcta: 1
                    },
                    {
                        id: 31,
                        texto: "¿Qué permite un método 'private' en una interfaz (Java 9+)?",
                        opciones: [
                            "Que las clases hijas no lo vean",
                            "No están permitidos",
                            "Ocultar constantes",
                            "Evitar la duplicación de código entre métodos default de la propia interfaz"
                        ],
                        correcta: 3
                    },
                    {
                        id: 32,
                        texto: "¿Es posible crear una referencia de una clase abstracta?",
                        opciones: [
                            "Sí, para apuntar a objetos de sus subclases concretas",
                            "Sí, pero solo dentro del mismo paquete",
                            "Solo si la clase no tiene métodos abstractos",
                            "No, nunca"
                        ],
                        correcta: 0
                    },
                    {
                        id: 33,
                        texto: "Cuando en herencia usamos un casting, ¿qué riesgo corremos si no usamos 'instanceof'?",
                        opciones: [
                            "Lanzar una excepción ClassCastException en ejecución",
                            "Que el programa no compile",
                            "Que se pierdan los datos del objeto",
                            "Que el objeto se convierta en null"
                        ],
                        correcta: 0
                    },
                    {
                        id: 34,
                        texto: "Si tenemos una interfaz 'Volable' y una clase 'Pajaro' que la implementa, ¿es correcto: 'Volable v = new Pajaro();'?",
                        opciones: [
                            "Sí, pero solo podemos acceder a métodos de la clase Pajaro",
                            "Solo si Pajaro es una clase abstracta",
                            "Sí, gracias al polimorfismo",
                            "No, porque una interfaz no es una clase"
                        ],
                        correcta: 2
                    },
                    {
                        id: 35,
                        texto: "¿Qué visibilidad tienen los métodos de una interfaz por defecto si no se especifica?",
                        opciones: [
                            "public",
                            "package-private",
                            "abstract",
                            "protected"
                        ],
                        correcta: 0
                    },
                    {
                        id: 36,
                        texto: "¿Qué nombre recibe una clase definida dentro de un método?",
                        opciones: [
                            "Clase externa",
                            "Clase global",
                            "Clase local",
                            "Clase estática"
                        ],
                        correcta: 2
                    },
                    {
                        id: 37,
                        texto: "¿Qué ocurre si una clase intenta heredar de una clase 'final'?",
                        opciones: [
                            "El compilador da un error",
                            "Hereda solo los métodos",
                            "La nueva clase se vuelve final automáticamente",
                            "Se ignora el modificador final"
                        ],
                        correcta: 0
                    },
                    {
                        id: 38,
                        texto: "¿Es obligatorio implementar todos los métodos de una interfaz en una clase que la implementa?",
                        opciones: [
                            "Sí, siempre",
                            "No, solo los métodos que quieras usar",
                            "No, si la clase se declara como abstracta",
                            "Sí, excepto los métodos estáticos del padre"
                        ],
                        correcta: 2
                    },
                    {
                        id: 39,
                        texto: "¿Qué método de la clase Object se recomienda anular siempre junto con 'equals()'?",
                        opciones: [
                            "hashCode()",
                            "clone()",
                            "getClass()",
                            "toString()"
                        ],
                        correcta: 0
                    },
                    {
                        id: 40,
                        texto: "En la jerarquía de excepciones, ¿de qué clase heredan todas las excepciones comprobadas?",
                        opciones: [
                            "Exception",
                            "RuntimeException",
                            "Error",
                            "Throwable"
                        ],
                        correcta: 0
                    },
                    {
                        id: 41,
                        texto: "¿Puede una interfaz heredar de una clase?",
                        opciones: [
                            "Solo si la clase es Object",
                            "Sí, si la clase es abstracta",
                            "Sí, usando 'implements'",
                            "No, las interfaces solo pueden heredar de otras interfaces"
                        ],
                        correcta: 3
                    },
                    {
                        id: 42,
                        texto: "¿Qué sucede si una subclase no define un constructor?",
                        opciones: [
                            "La clase se vuelve abstracta",
                            "No se pueden crear objetos de ella",
                            "Hereda el constructor del padre",
                            "Java crea un constructor por defecto que llama a super() sin parámetros"
                        ],
                        correcta: 3
                    },
                    {
                        id: 43,
                        texto: "Sobre la ocultación de métodos estáticos, ¿cuál es la diferencia con la anulación?",
                        opciones: [
                            "No hay diferencia",
                            "La ejecución depende del tipo de la referencia, no del objeto real",
                            "Es obligatorio usar @Override",
                            "Los métodos estáticos no se pueden redefinir"
                        ],
                        correcta: 1
                    },
                    {
                        id: 44,
                        texto: "¿Qué palabra clave permite a una clase sellada autorizar a sus herederos?",
                        opciones: [
                            "allow",
                            "permits",
                            "authorized",
                            "to"
                        ],
                        correcta: 1
                    },
                    {
                        id: 45,
                        texto: "¿Es posible que una clase interna acceda a las variables locales de un método?",
                        opciones: [
                            "No, bajo ninguna circunstancia",
                            "Solo si las variables son estáticas",
                            "Sí, pero solo si la clase interna es pública",
                            "Sí, siempre que esas variables sean final o 'efectivamente final'"
                        ],
                        correcta: 3
                    },
                    {
                        id: 46,
                        texto: "Diferencia entre sobrecarga y anulación:",
                        opciones: [
                            "La sobrecarga solo sirve para constructores",
                            "La anulación cambia el nombre del método",
                            "Sobrecarga requiere @Override",
                            "Sobrecarga es en la misma clase, anulación es en la jerarquía"
                        ],
                        correcta: 3
                    },
                    {
                        id: 47,
                        texto: "¿Qué sucede si una superclase solo tiene un constructor con parámetros y la subclase no define ninguno?",
                        opciones: [
                            "La clase se ignora",
                            "El compilador inventa valores para el padre",
                            "Funciona correctamente",
                            "Error de compilación en la subclase"
                        ],
                        correcta: 3
                    },
                    {
                        id: 48,
                        texto: "¿Cuál es el objetivo final de la Herencia en programación?",
                        opciones: [
                            "Que los programas ocupen menos espacio en el disco duro",
                            "Reutilizar código y crear jerarquías lógicas",
                            "Hacer el código más difícil de leer",
                            "Eliminar la necesidad de usar objetos"
                        ],
                        correcta: 1
                    }
                ]
            }
        }
    },
    tema8: {
        id: 8,
        titulo: "Tema 8 - Tipos Enumerados",
        subtemas: {
            "8.1": {
                titulo: "Tema 8 - Tipos Enumerados",
                preguntas: [
                    {
                        id: 1,
                        texto: "¿Cuál es la principal ventaja de utilizar 'enum' en lugar del patrón de constantes enteras (int enum pattern)?",
                        opciones: [
                            "Hacen que el código sea compatible con versiones de Java anteriores a la 1.5.",
                            "Permiten que las constantes cambien su valor durante la ejecución.",
                            "Ocupan menos espacio en memoria RAM.",
                            "Proporcionan seguridad de tipos en tiempo de compilación."
                        ],
                        correcta: 3
                    },
                    {
                        id: 2,
                        texto: "En Java, ¿de qué clase heredan implícitamente todos los tipos enumerados?",
                        opciones: [
                            "No heredan de ninguna clase, son tipos primitivos.",
                            "java.lang.Enum",
                            "java.lang.Object",
                            "java.util.Enumeration"
                        ],
                        correcta: 1
                    },
                    {
                        id: 3,
                        texto: "¿Es posible que un 'enum' herede de otra clase utilizando la palabra 'extends'?",
                        opciones: [
                            "No, porque Java no permite la herencia múltiple y los enums ya heredan de java.lang.Enum.",
                            "Solo si la clase padre no tiene constructores.",
                            "Sí, pero solo si la clase padre es una clase interna.",
                            "Sí, siempre que la clase padre sea abstracta."
                        ],
                        correcta: 0
                    },
                    {
                        id: 4,
                        texto: "¿Qué visibilidad debe tener el constructor de un tipo enumerado?",
                        opciones: [
                            "No pueden tener constructores.",
                            "Public",
                            "Private o de paquete (default)",
                            "Protected"
                        ],
                        correcta: 2
                    },
                    {
                        id: 5,
                        texto: "¿Para qué sirve el método estático 'values()' que el compilador añade a los enums?",
                        opciones: [
                            "Para obtener un array con todas las constantes del enum en el orden en que fueron declaradas.",
                            "Para convertir un String en una constante del enum.",
                            "Para obtener el valor entero asociado a una constante.",
                            "Para comparar dos valores del enum."
                        ],
                        correcta: 0
                    },
                    {
                        id: 6,
                        texto: "Si definimos un enum 'Color { ROJO, VERDE, AZUL }', ¿qué devolvería 'Color.VERDE.ordinal()'?",
                        opciones: [
                            "1",
                            "\"VERDE\"",
                            "Un valor aleatorio.",
                            "2"
                        ],
                        correcta: 0
                    },
                    {
                        id: 7,
                        texto: "¿Cómo se asocian datos o atributos a las constantes de un enum?",
                        opciones: [
                            "Heredando de una clase que tenga esos atributos.",
                            "Definiendo variables de instancia y un constructor que las inicialice.",
                            "Usando un Map externo obligatoriamente.",
                            "No se puede, los enums solo son nombres."
                        ],
                        correcta: 1
                    },
                    {
                        id: 8,
                        texto: "¿Puede un tipo enumerado implementar una interfaz?",
                        opciones: [
                            "Solo si el enum no tiene constructor.",
                            "Sí, y cada constante puede incluso proporcionar una implementación diferente de los métodos de la interfaz.",
                            "Solo si la interfaz no tiene métodos abstractos.",
                            "No, porque los enums no son clases reales."
                        ],
                        correcta: 1
                    },
                    {
                        id: 9,
                        texto: "¿Qué es un 'cuerpo de clase constante' (constant-specific class body) en un enum?",
                        opciones: [
                            "Un método que solo puede ser llamado una vez.",
                            "La capacidad de una constante de sobrescribir métodos definidos en el enum base.",
                            "Un bloque de código que se ejecuta al cargar el enum.",
                            "Es el nombre técnico del constructor del enum."
                        ],
                        correcta: 1
                    },
                    {
                        id: 10,
                        texto: "¿Qué ocurre si declaras un método abstracto dentro de un enum?",
                        opciones: [
                            "El enum no compila porque no puede ser abstracto.",
                            "Solo la primera constante está obligada a implementarlo.",
                            "Cada constante del enum debe implementar obligatoriamente dicho método.",
                            "El método se ignora si no se implementa."
                        ],
                        correcta: 2
                    },
                    {
                        id: 11,
                        texto: "¿Cuál es la forma recomendada de comparar dos constantes de un enum?",
                        opciones: [
                            "Usando '.equals()'",
                            "Comparando sus nombres con '.compareTo() == 0'",
                            "Usando el operador '=='",
                            "Comparando sus valores ordinales."
                        ],
                        correcta: 2
                    },
                    {
                        id: 12,
                        texto: "En el temario se menciona que los enums son 'tipos seguros'. ¿Qué significa esto?",
                        opciones: [
                            "Que solo pueden ser usados por un hilo a la vez.",
                            "Que el compilador impide asignar un valor que no pertenezca a la lista de constantes definidas.",
                            "Que los datos están encriptados.",
                            "Que no pueden ser borrados de la memoria."
                        ],
                        correcta: 1
                    },
                    {
                        id: 13,
                        texto: "Sobre el método 'valueOf(String s)', ¿qué sucede si el String no coincide exactamente con ninguna constante?",
                        opciones: [
                            "Devuelve null.",
                            "Devuelve la primera constante por defecto.",
                            "Crea una nueva constante con ese nombre.",
                            "Lanza una excepción de tipo IllegalArgumentException."
                        ],
                        correcta: 3
                    },
                    {
                        id: 14,
                        texto: "¿Por qué no se recomienda usar el método 'ordinal()' para la lógica de negocio persistente?",
                        opciones: [
                            "Porque es muy lento.",
                            "Porque devuelve un número aleatorio.",
                            "Porque si se cambia el orden de las constantes en el código, el valor ordinal cambia.",
                            "Porque solo funciona con enums de menos de 10 elementos."
                        ],
                        correcta: 2
                    },
                    {
                        id: 15,
                        texto: "¿Pueden los enums tener métodos estáticos?",
                        opciones: [
                            "Sí, pero solo si son privados.",
                            "No, solo métodos de instancia.",
                            "Sí, y se pueden usar como métodos de utilidad relacionados con el tipo.",
                            "Solo si el enum no implementa interfaces."
                        ],
                        correcta: 2
                    },
                    {
                        id: 16,
                        texto: "En el ejemplo de 'BasicOperation' del temario, ¿qué permite que cada operación aplique una lógica distinta?",
                        opciones: [
                            "No es posible, todas las constantes comparten el mismo código.",
                            "El uso de la reflexión de Java.",
                            "Un bloque switch gigante dentro del método apply.",
                            "La definición de un método abstracto en el enum que cada constante implementa."
                        ],
                        correcta: 3
                    },
                    {
                        id: 17,
                        texto: "¿Qué ocurre si intentas usar 'new' para crear una instancia de un enum?",
                        opciones: [
                            "Funciona solo si el constructor es público.",
                            "Se produce un error de compilación.",
                            "El programa se detiene con un error de ejecución.",
                            "Se crea un nuevo valor de la enumeración."
                        ],
                        correcta: 1
                    },
                    {
                        id: 18,
                        texto: "¿Cómo se suele llamar al patrón de diseño que un Enum implementa por defecto para cada una de sus constantes?",
                        opciones: [
                            "Adapter",
                            "Singleton",
                            "Factory",
                            "Observer"
                        ],
                        correcta: 1
                    },
                    {
                        id: 19,
                        texto: "¿Cuál es la sintaxis correcta para declarar un enum sencillo?",
                        opciones: [
                            "public class Mes { ENERO, FEBRERO }",
                            "enum Mes ( ENERO, FEBRERO )",
                            "public enum Mes { ENERO, FEBRERO }",
                            "define Mes as ENERO | FEBRERO"
                        ],
                        correcta: 2
                    },
                    {
                        id: 20,
                        texto: "Si un enum implementa una interfaz, ¿dónde se puede poner el código de los métodos de la interfaz?",
                        opciones: [
                            "Tanto a nivel de enum (común) como a nivel de constante (específico).",
                            "En una clase externa obligatoriamente.",
                            "Solo dentro de cada constante individualmente.",
                            "Solo de forma general para todo el enum."
                        ],
                        correcta: 0
                    }
                ]
            }
        }
    }
};

// Función para obtener todas las preguntas de un tema
function obtenerTodasLasPreguntas(temaId) {
    const tema = temasData[temaId];
    if (!tema) return [];
    
    let todasLasPreguntas = [];
    Object.values(tema.subtemas).forEach(subtema => {
        todasLasPreguntas = todasLasPreguntas.concat(subtema.preguntas);
    });
    
    return todasLasPreguntas;
}

// Función para obtener todas las preguntas de todos los temas
function obtenerTodasLasPreguntasGlobales() {
    let todasLasPreguntas = [];
    Object.keys(temasData).forEach(temaKey => {
        const preguntasTema = obtenerTodasLasPreguntas(temaKey);
        todasLasPreguntas = todasLasPreguntas.concat(preguntasTema);
    });
    return todasLasPreguntas;
}