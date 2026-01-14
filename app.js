// Estado global de la aplicación
let estadoApp = {
    temaActual: null,
    modoLectura: false,
    testActivo: false,
    preguntasTest: [],
    preguntaActualIndex: 0,
    respuestaSeleccionada: null,
    estadisticas: {
        correctas: 0,
        incorrectas: 0
    }
};

// Funciones para formatear código
function formatearCodigo(texto) {
    if (!texto) return '';
    
    // Escapar HTML primero
    texto = escapeHtml(texto);
    
    // Buscar bloques de código y separarlos del texto normal
    // Usar un enfoque más simple: buscar patrones de código y reemplazarlos
    
    // Patrón principal: Código Java que termina con punto y coma
    // Esto incluye declaraciones, asignaciones, llamadas a métodos, etc.
    
    // Detectar bloques de código que pueden estar en múltiples líneas
    // Primero buscar código que está claramente separado (con saltos de línea antes y después)
    
    // Patrón mejorado: detectar bloques de código que terminan con punto y coma
    // y que pueden estar en múltiples líneas
    
    // Dividir el texto en líneas para mejor detección
    const lineas = texto.split('\n');
    let resultado = '';
    let bloqueCodigo = '';
    let dentroDeCodigo = false;
    
    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i].trim();
        
        // Detectar si es una línea de código Java
        const esCodigo = /^(int|double|float|boolean|char|String|void|Complejo|System\.|Arrays\.|String\.|for\s*\(|if\s*\(|while\s*\(|public|private|protected|static|final|new\s+\w)/.test(linea) ||
                         /[;{}[\]]/.test(linea) && 
                         (linea.includes('=') || linea.includes('new') || linea.includes('(') || linea.match(/\[\d*\]/));
        
        if (esCodigo) {
            dentroDeCodigo = true;
            bloqueCodigo += (bloqueCodigo ? '\n' : '') + linea;
            // Si termina con punto y coma o llave de cierre, cerrar el bloque
            if (linea.endsWith(';') || (linea.endsWith('}') && !linea.includes('{'))) {
                resultado += formatearBloqueCodigo(bloqueCodigo);
                bloqueCodigo = '';
                dentroDeCodigo = false;
            }
        } else if (dentroDeCodigo && (linea === '' || linea.startsWith('//'))) {
            // Continuar bloque si es línea vacía o comentario
            bloqueCodigo += '\n' + linea;
        } else {
            // Si estaba en código, cerrar el bloque anterior
            if (dentroDeCodigo && bloqueCodigo) {
                resultado += formatearBloqueCodigo(bloqueCodigo);
                bloqueCodigo = '';
                dentroDeCodigo = false;
            }
            // Agregar texto normal
            if (linea) {
                resultado += (resultado && !resultado.endsWith('</pre>') ? ' ' : '') + linea;
            } else {
                resultado += '\n';
            }
        }
    }
    
    // Cerrar cualquier bloque pendiente
    if (bloqueCodigo) {
        resultado += formatearBloqueCodigo(bloqueCodigo);
    }
    
    // Si no se detectó código estructurado en líneas separadas, buscar código inline
    if (!resultado.includes('<pre')) {
        // Lista de patrones de código a buscar (en orden de especificidad)
        const patronesCodigo = [
            // Arrays multidimensionales inicializados: int[][] twoDimensions = { {0, 1, 2}, {3, 4, 5}, {6, 7, 8} };
            /\b(int|double|float|boolean|char|String|void|Complejo)\s*\[\]+\s*\[\]+\s+\w+\s*=\s*\{[^}]+\};/g,
            // Arrays inicializados: int[] grades = {8, 7, 9};
            /\b(int|double|float|boolean|char|String|void|Complejo)\s*\[\]+\s+\w+\s*=\s*\{[^}]+\};/g,
            // Declaraciones con new: Complejo[] a = new Complejo[3]; o int[][] b = new int[3][5];
            /\w+\s*\[\]+\s*=\s*new\s+\w+\s*\[\d+\];/g,
            // Llamadas a métodos: System.out.println(Arrays.toString(arr));
            /\bSystem\.out\.(println|print)\([^)]*\);/g,
            // Llamadas a Arrays: Arrays.toString(array), Arrays.fill(array, 7), etc.
            /\bArrays\.\w+\([^)]*\);/g,
            // Otras asignaciones simples: a = new int[5];
            /\w+\s*=\s*new\s+\w+\s*\[\d+\];/g
        ];
        
        // Reemplazar cada patrón encontrado con un marcador temporal
        const marcadores = [];
        let contadorMarcadores = 0;
        let textoOriginal = texto;
        
        patronesCodigo.forEach(patron => {
            textoOriginal = textoOriginal.replace(patron, (match) => {
                const marcador = `__CODIGO_BLOQUE_${contadorMarcadores}__`;
                marcadores[contadorMarcadores] = match;
                contadorMarcadores++;
                return marcador;
            });
        });
        
        // Reemplazar marcadores con bloques de código formateados
        marcadores.forEach((codigo, index) => {
            const marcador = `__CODIGO_BLOQUE_${index}__`;
            textoOriginal = textoOriginal.replace(marcador, formatearBloqueCodigo(codigo));
        });
        
        resultado = textoOriginal;
    }
    
    return resultado;
}

function formatearBloqueCodigo(codigo) {
    // Limpiar y formatear el código
    let codigoLimpio = codigo.trim();
    
    // Si el código no tiene saltos de línea, intentar separarlo mejor
    if (!codigoLimpio.includes('\n')) {
        // Separar sentencias múltiples por punto y coma
        codigoLimpio = codigoLimpio.replace(/;\s*(?=[\w\[\]])/g, ';\n');
    }
    
    // Dividir en líneas para formatear
    const lineas = codigoLimpio.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    // Formatear cada línea con colores (orden específico para evitar conflictos)
    const codigoFormateado = lineas.map(linea => {
        let contenido = escapeHtml(linea);
        
        // 1. Strings primero (protegerlos completamente)
        contenido = contenido.replace(/"([^"]*)"/g, '<span class="code-string">"$1"</span>');
        
        // 2. Arrays con corchetes y números
        contenido = contenido.replace(/\[(\d+)\]/g, '<span class="code-punctuation">[</span><span class="code-number">$1</span><span class="code-punctuation">]</span>');
        contenido = contenido.replace(/\[\]/g, '<span class="code-punctuation">[]</span>');
        
        // 3. Números restantes (que no están en strings o arrays ya formateados)
        contenido = contenido.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');
        
        // 4. Palabras clave de Java
        contenido = contenido.replace(/\b(int|double|float|boolean|char|byte|short|long|void|if|else|for|while|do|switch|case|default|break|continue|return|try|catch|finally|throw|throws|new|class|interface|extends|implements|public|private|protected|static|final|abstract|synchronized|volatile|transient|native|strictfp|enum|package|import|super|this|null|true|false|instanceof|typeof)\b/g, '<span class="code-keyword">$1</span>');
        
        // 5. Tipos y clases comunes
        contenido = contenido.replace(/\b(String|Integer|Double|Float|Boolean|Character|Byte|Short|Long|Object|Arrays|System|Scanner|ArrayList|List|Map|Set|Complejo)\b/g, '<span class="code-class">$1</span>');
        
        // 6. Métodos (antes de paréntesis)
        contenido = contenido.replace(/\b(println|print|toString|equals|length|charAt|substring|indexOf|split|join|fill|sort|binarySearch|copyOf|copyOfRange|deepToString|deepEquals|compare|mismatch|compute|add)\s*(?=\()/g, '<span class="code-method">$1</span>');
        
        // 7. Puntuación final (formatear solo caracteres que no están dentro de spans)
        // Usar split para separar por spans y formatear solo el texto entre spans
        const partes = contenido.split(/(<span[^>]*>.*?<\/span>)/);
        contenido = partes.map(parte => {
            // Si la parte es un span completo, dejarla como está
            if (parte.match(/^<span[^>]*>.*?<\/span>$/)) {
                return parte;
            }
            // Si no, formatear la puntuación en esta parte
            return parte.replace(/(\{|\}|\(|\)|;|,|=|\.)/g, '<span class="code-punctuation">$1</span>');
        }).join('');
        
        return contenido;
    }).join('\n');
    
    return `<pre class="code-block"><code>${codigoFormateado}</code></pre>`;
}

// Función eliminada - no formateamos código inline en texto normal

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarTemas();
});

// Cargar temas en el índice
function cargarTemas() {
    const temasList = document.getElementById('temas-list');
    temasList.innerHTML = '';
    
    Object.keys(temasData).forEach(temaKey => {
        const tema = temasData[temaKey];
        const temaCard = document.createElement('div');
        temaCard.className = 'tema-card';
        temaCard.onclick = () => mostrarOpcionesTema(temaKey);
        
        temaCard.innerHTML = `
            <h3>Tema ${tema.id}</h3>
            <p>Haz clic para ver las opciones</p>
        `;
        
        temasList.appendChild(temaCard);
    });
    
    // Configurar el test global
    const testGlobalCard = document.getElementById('test-global-card');
    if (testGlobalCard) {
        testGlobalCard.onclick = iniciarTestGlobal;
    }
}

// Mostrar índice de temas
function mostrarIndice() {
    ocultarTodasLasVistas();
    document.getElementById('index-view').classList.add('active');
    resetearEstado();
}

// Mostrar opciones del tema
function mostrarOpcionesTema(temaKey = null) {
    if (temaKey) {
        estadoApp.temaActual = temaKey;
    }
    
    // Si no hay tema actual o es global, volver al índice
    if (!estadoApp.temaActual || estadoApp.temaActual === 'global') {
        mostrarIndice();
        return;
    }
    
    ocultarTodasLasVistas();
    document.getElementById('tema-view').classList.add('active');
    document.getElementById('tema-titulo').textContent = 
        `Tema ${temasData[estadoApp.temaActual].id}`;
}

// Mostrar lectura de preguntas
function mostrarLectura() {
    ocultarTodasLasVistas();
    document.getElementById('lectura-view').classList.add('active');
    estadoApp.modoLectura = true;
    
    const tema = temasData[estadoApp.temaActual];
    document.getElementById('lectura-titulo').textContent = 
        `Preguntas - Tema ${tema.id}`;
    
    const container = document.getElementById('preguntas-container');
    container.innerHTML = '';
    
    Object.entries(tema.subtemas).forEach(([subtemaKey, subtema]) => {
        const subtemaSection = document.createElement('div');
        subtemaSection.className = 'subtema-section';
        subtemaSection.innerHTML = `<h3 style="color: #667eea; margin: 20px 0 15px 0; font-size: 1.3rem;">${subtema.titulo}</h3>`;
        
        subtema.preguntas.forEach((pregunta, index) => {
            const preguntaItem = document.createElement('div');
            preguntaItem.className = 'pregunta-item';
            
            let opcionesHTML = pregunta.opciones.map((opcion, opcionIndex) => {
                const esCorrecta = opcionIndex === pregunta.correcta;
                return `
                    <div class="opcion ${esCorrecta ? 'correcta' : ''}">
                        ${String.fromCharCode(65 + opcionIndex)}. ${opcion}
                        ${esCorrecta ? ' ✓' : ''}
                    </div>
                `;
            }).join('');
            
            preguntaItem.innerHTML = `
                <div class="pregunta-texto">${pregunta.id}. ${escapeHtml(pregunta.texto).replace(/\n/g, '<br>')}</div>
                ${opcionesHTML}
            `;
            
            subtemaSection.appendChild(preguntaItem);
        });
        
        container.appendChild(subtemaSection);
    });
}

// Iniciar test aleatorio
function iniciarTestAleatorio() {
    const todasLasPreguntas = obtenerTodasLasPreguntas(estadoApp.temaActual);
    
    if (todasLasPreguntas.length === 0) {
        alert('No hay preguntas disponibles para este tema.');
        return;
    }
    
    // Mezclar preguntas aleatoriamente
    estadoApp.preguntasTest = mezclarArray([...todasLasPreguntas]);
    estadoApp.preguntaActualIndex = 0;
    estadoApp.testActivo = true;
    estadoApp.estadisticas.correctas = 0;
    estadoApp.estadisticas.incorrectas = 0;
    
    ocultarTodasLasVistas();
    document.getElementById('test-view').classList.add('active');
    
    mostrarPreguntaTest();
}

// Iniciar test global con todas las preguntas de todos los temas
function iniciarTestGlobal() {
    const todasLasPreguntas = obtenerTodasLasPreguntasGlobales();
    
    if (todasLasPreguntas.length === 0) {
        alert('No hay preguntas disponibles.');
        return;
    }
    
    // Mezclar preguntas aleatoriamente
    estadoApp.preguntasTest = mezclarArray([...todasLasPreguntas]);
    estadoApp.preguntaActualIndex = 0;
    estadoApp.testActivo = true;
    estadoApp.temaActual = 'global'; // Marcar como test global
    estadoApp.estadisticas.correctas = 0;
    estadoApp.estadisticas.incorrectas = 0;
    
    ocultarTodasLasVistas();
    document.getElementById('test-view').classList.add('active');
    
    mostrarPreguntaTest();
}

// Mostrar pregunta actual del test
function mostrarPreguntaTest() {
    if (estadoApp.preguntaActualIndex >= estadoApp.preguntasTest.length) {
        finalizarTest();
        return;
    }
    
    const pregunta = estadoApp.preguntasTest[estadoApp.preguntaActualIndex];
    estadoApp.respuestaSeleccionada = null;
    
    // Actualizar estadísticas
    document.getElementById('pregunta-actual').textContent = 
        estadoApp.preguntaActualIndex + 1;
    document.getElementById('total-preguntas').textContent = 
        estadoApp.preguntasTest.length;
    document.getElementById('correctas-count').textContent = 
        estadoApp.estadisticas.correctas;
    document.getElementById('incorrectas-count').textContent = 
        estadoApp.estadisticas.incorrectas;
    
    // Mostrar pregunta sin formato
    document.getElementById('pregunta-test').innerHTML = escapeHtml(pregunta.texto).replace(/\n/g, '<br>');
    
    // Mostrar opciones
    const opcionesContainer = document.getElementById('opciones-test');
    opcionesContainer.innerHTML = '';
    
    pregunta.opciones.forEach((opcion, index) => {
        const opcionBtn = document.createElement('button');
        opcionBtn.className = 'opcion-test';
        opcionBtn.textContent = `${String.fromCharCode(65 + index)}. ${opcion}`;
        opcionBtn.onclick = () => seleccionarOpcion(index, pregunta.correcta);
        opcionesContainer.appendChild(opcionBtn);
    });
    
    // Ocultar resultado y botón siguiente
    document.getElementById('resultado-test').classList.add('hidden');
    document.getElementById('siguiente-btn').classList.add('hidden');
}

// Seleccionar opción en el test
function seleccionarOpcion(indiceSeleccionado, indiceCorrecto) {
    if (estadoApp.respuestaSeleccionada !== null) return; // Ya se seleccionó
    
    estadoApp.respuestaSeleccionada = indiceSeleccionado;
    
    const opciones = document.querySelectorAll('.opcion-test');
    
    // Deshabilitar todas las opciones
    opciones.forEach((opcion, index) => {
        opcion.disabled = true;
        
        if (index === indiceCorrecto) {
            opcion.classList.add('correcta');
        } else if (index === indiceSeleccionado && index !== indiceCorrecto) {
            opcion.classList.add('incorrecta');
        }
    });
    
    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado-test');
    resultadoDiv.classList.remove('hidden');
    
    if (indiceSeleccionado === indiceCorrecto) {
        resultadoDiv.className = 'resultado-test correcto';
        resultadoDiv.textContent = '✓ ¡Correcto!';
        estadoApp.estadisticas.correctas++;
    } else {
        resultadoDiv.className = 'resultado-test incorrecto';
        const textoOpcion = opciones[indiceCorrecto].textContent.replace(/^[A-Z]\.\s*/, '');
        resultadoDiv.textContent = `✗ Incorrecto. La respuesta correcta es: ${String.fromCharCode(65 + indiceCorrecto)}. ${textoOpcion}`;
        estadoApp.estadisticas.incorrectas++;
    }
    
    // Mostrar botón siguiente
    document.getElementById('siguiente-btn').classList.remove('hidden');
}

// Siguiente pregunta del test
function siguientePregunta() {
    estadoApp.preguntaActualIndex++;
    mostrarPreguntaTest();
}

// Finalizar test
function finalizarTest() {
    const totalPreguntas = estadoApp.preguntasTest.length;
    const correctas = estadoApp.estadisticas.correctas;
    const porcentaje = Math.round((correctas / totalPreguntas) * 100);
    
    document.getElementById('pregunta-test').innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px;">¡Test Finalizado!</h2>
        <div style="text-align: center; font-size: 1.1rem;">
            <p style="margin: 10px 0;">Total de preguntas: ${totalPreguntas}</p>
            <p style="margin: 10px 0; color: #28a745;">Correctas: ${correctas}</p>
            <p style="margin: 10px 0; color: #dc3545;">Incorrectas: ${estadoApp.estadisticas.incorrectas}</p>
            <p style="margin: 20px 0; font-size: 1.3rem; font-weight: bold; color: #667eea;">
                Porcentaje de aciertos: ${porcentaje}%
            </p>
        </div>
    `;
    
    document.getElementById('opciones-test').innerHTML = '';
    document.getElementById('resultado-test').classList.add('hidden');
    document.getElementById('siguiente-btn').textContent = 'Volver al Menú';
    // Si es test global, volver al índice, si no, volver a opciones del tema
    document.getElementById('siguiente-btn').onclick = estadoApp.temaActual === 'global' ? mostrarIndice : mostrarOpcionesTema;
    document.getElementById('siguiente-btn').classList.remove('hidden');
}

// Terminar test desde el botón
function terminarTestDesdeBoton() {
    if (estadoApp.temaActual === 'global') {
        mostrarIndice();
    } else {
        mostrarOpcionesTema();
    }
}

// Utilidades
function ocultarTodasLasVistas() {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
}

function resetearEstado() {
    estadoApp.temaActual = null;
    estadoApp.modoLectura = false;
    estadoApp.testActivo = false;
    estadoApp.preguntasTest = [];
    estadoApp.preguntaActualIndex = 0;
    estadoApp.respuestaSeleccionada = null;
    estadoApp.estadisticas = { correctas: 0, incorrectas: 0 };
}

function mezclarArray(array) {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}
