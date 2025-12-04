const countries = {
    usa: {
        name: "Estados Unidos",
        requirements: "Requisitos principales: Formulario DS-160, pasaporte válido, foto, pago de tarifa, entrevista consular. Visa de turista (B1/B2) común para visitas temporales.",
        questions: [
            {
                id: 1,
                text: "¿Cual es tu actividad Económica?",
                options: [
                    { text: "Tengo mi propia empresa", value: 5 },
                    { text: "Soy Empleado", value: 4 },
                    { text: "Soy Independiente ", value: 3 },
                    { text: "Estudiante", value: 2 },
                    { text: "Desempleado", value: 1 }
                ]
            },
            {
                id: 2,
                text: "¿Tienes Familiares que dependan económicamente de ti?",
                options: [
                    { text: "Sí ", value: 1 },
                    { text: "No", value: 5 }
                ]
            },
            {
                id: 3,
                text: "¿Tienes propiedades o Inversiones en tu País de Origen?",
                options: [
                    { text: "Sí tengo propiedades", value: 5 },
                    { text: "No tengo propiedades", value: 1 }
                ]
            },
            {
                id: 4,
                text: "Has salido del País en los últimos 5 años ?",
                options: [
                    { text: "Sí, a varios países", value: 5 },
                    { text: "Sí, a algunos países", value: 4 },
                    { text: "Solo a países sin visa", value: 3 },
                    { text: "Pocos viajes internacionales", value: 2 },
                    { text: "Nunca he salido de mi país", value: 1 }
                ]
            },
            {
                id: 5,
                text: "¿Actualmente tienes visa de algún País?",
                options: [
                    { text: "Sí Tengo visa", value: 5 },
                    { text: "No tengo visa", value: 1 }
                ]
            },
            {
                id: 6,
                text: "¿Cuentas con algún ahorro, Titulo Valor o Capital para tu viaje?",
                options: [
                    { text: "Sí", value: 5 },
                    { text: "No", value: 1 }
                ]
            },
            {
                id: 7,
                text: "¿Tu motivo de viaje es Claro y temporal?",
                options: [
                    { text: "Si", value: 5 },
                    { text: "No", value: 1 }
                ]
            },
            {
                id: 8,
                text: "¿Tienes historial migratorio positivo?",
                options: [
                    { text: "Si siempre cumplí con los tiempos permitidos", value: 5 },
                    { text: "No tengo historial Migratorio", value: 1 }
                ]
            },
            {
                id: 9,
                text: "¿Tienes Antecedentes penales en tu país de origen o en algún otro?",
                options: [
                    { text: "Sí", value: 1 },
                    { text: "no", value: 5 }
                ]
            },
            {
                id: 10,
                text: "¿Cuál es tu estado civil?",
                options: [
                    { text: "Casado(a)", value: 5 },
                    { text: "Viudo(a)", value: 4 },
                    { text: "Divorciado(a)", value: 3 },
                    { text: "Separado(a) legalmente", value: 2 },
                    { text: "Soltero(a)", value: 1 }
                ]
            }
        ]
    },
    canada: {
        name: "Canadá",
        requirements: "Requisitos principales: Pasaporte válido, formularios de aplicación, fotos, pago de tarifas, posible entrevista. Evaluación de vínculos con país de origen.",
        questions: [
            {
                id: 1,
                text: "¿Cual es tu actividad Económica?",
                options: [
                    { text: "Tengo mi propia empresa", value: 5 },
                    { text: "Soy Empleado", value: 4 },
                    { text: "Soy Independiente ", value: 3 },
                    { text: "Estudiante", value: 2 },
                    { text: "Desempleado", value: 1 }
                ]
            },
            {
                id: 2,
                text: "¿Tienes Familiares que dependan económicamente de ti?",
                options: [
                    { text: "Sí ", value: 1 },
                    { text: "No", value: 5 }
                ]
            },
            {
                id: 3,
                text: "¿Tienes propiedades o Inversiones en tu País de Origen?",
                options: [
                    { text: "Sí tengo propiedades", value: 5 },
                    { text: "No tengo propiedades", value: 1 }
                ]
            },
            {
                id: 4,
                text: "Has salido del País en los últimos 10 años ?",
                options: [
                    { text: "Sí, a varios países", value: 5 },
                    { text: "Sí, a algunos países", value: 4 },
                    { text: "Solo a países sin visa", value: 3 },
                    { text: "Pocos viajes internacionales", value: 2 },
                    { text: "Nunca he salido de mi país", value: 1 }
                ]
            },
            {
                id: 5,
                text: "¿Actualmente tienes visa de algún País?",
                options: [
                    { text: "Sí Tengo visa", value: 5 },
                    { text: "No tengo visa", value: 1 }
                ]
            },
            {
                id: 6,
                text: "¿Cuentas con algún ahorro, Titulo Valor o Capital para tu viaje?",
                options: [
                    { text: "Sí", value: 5 },
                    { text: "No", value: 1 }
                ]
            },
            {
                id: 7,
                text: "¿Tu motivo de viaje es Claro y temporal?",
                options: [
                    { text: "Si", value: 5 },
                    { text: "No", value: 1 }
                ]
            },
            {
                id: 8,
                text: "¿Tienes historial migratorio positivo?",
                options: [
                    { text: "Si siempre cumplí con los tiempos permitidos", value: 5 },
                    { text: "No tengo historial Migratorio", value: 1 }
                ]
            },
            {
                id: 9,
                text: "¿Tienes Antecedentes penales en tu país de origen o en algún otro?",
                options: [
                    { text: "Sí", value: 1 },
                    { text: "no", value: 5 }
                ]
            },
            {
                id: 10,
                text: "¿Cuál es tu estado civil?",
                options: [
                    { text: "Casado(a)", value: 5 },
                    { text: "Viudo(a)", value: 4 },
                    { text: "Divorciado(a)", value: 3 },
                    { text: "Separado(a) legalmente", value: 2 },
                    { text: "Soltero(a)", value: 1 }
                ]
            }
        ]
    },
    uk: {
        name: "Reino Unido",
        requirements: "Requisitos principales: Pasaporte válido, formulario de solicitud online (Visa Application Form), comprobante financiero, carta de invitación o reserva de alojamiento, itinerario de viaje, y pago de tarifas. Puede requerir entrevista y comprobante de vínculos con tu país.",
        questions: [
            {
                id: 1,
                text: "¿Cuál es tu actividad económica principal?",
                options: [
                    { text: "Tengo mi propia empresa", value: 5 },
                    { text: "Soy empleado con contrato estable", value: 4 },
                    { text: "Soy trabajador independiente", value: 3 },
                    { text: "Soy estudiante", value: 2 },
                    { text: "Desempleado o sin ingresos fijos", value: 1 }
                ]
            },
            {
                id: 2,
                text: "¿Tienes familiares que dependan económicamente de ti?",
                options: [
                    { text: "Sí", value: 5 },
                    { text: "No", value: 3 }
                ]
            },
            {
                id: 3,
                text: "¿Posees propiedades, inversiones o activos en tu país?",
                options: [
                    { text: "Sí, tengo propiedades o inversiones", value: 5 },
                    { text: "No tengo propiedades ni inversiones", value: 1 }
                ]
            },
            {
                id: 4,
                text: "¿Has viajado al extranjero en los últimos 10 años?",
                options: [
                    { text: "Sí, a varios países con visa", value: 5 },
                    { text: "Sí, a algunos países sin visa", value: 4 },
                    { text: "Solo he viajado a países vecinos", value: 3 },
                    { text: "Pocos viajes o ninguno", value: 2 },
                    { text: "Nunca he salido de mi país", value: 1 }
                ]
            },
            {
                id: 5,
                text: "¿Actualmente tienes visa vigente de otro país?",
                options: [
                    { text: "Sí, de países como EE.UU., Canadá o Schengen", value: 5 },
                    { text: "Sí, pero de países menos estrictos", value: 3 },
                    { text: "No tengo visas vigentes", value: 1 }
                ]
            },
            {
                id: 6,
                text: "¿Cuentas con fondos o respaldo económico suficiente para tu viaje?",
                options: [
                    { text: "Sí, tengo ahorros o soporte financiero", value: 5 },
                    { text: "Tengo fondos limitados", value: 3 },
                    { text: "No cuento con respaldo financiero suficiente", value: 1 }
                ]
            },
            {
                id: 7,
                text: "¿Cuál es tu historial migratorio?",
                options: [
                    { text: "Excelente, siempre cumplí con visados y tiempos", value: 5 },
                    { text: "He tenido extensiones menores autorizadas", value: 4 },
                    { text: "No he salido del país aún", value: 3 },
                    { text: "Tuve algún inconveniente migratorio", value: 1 }
                ]
            },
            {
                id: 8,
                text: "¿Tu motivo de viaje es claro y temporal?",
                options: [
                    { text: "Sí, motivo claro y regreso planificado", value: 5 },
                    { text: "Parcialmente claro", value: 3 },
                    { text: "No definido o sin fecha de regreso", value: 1 }
                ]
            },
            {
                id: 9,
                text: "¿Tienes antecedentes penales en tu país o en el extranjero?",
                options: [
                    { text: "No", value: 5 },
                    { text: "Sí", value: 1 }
                ]
            },
            {
                id: 10,
                text: "¿Cuál es tu estado civil?",
                options: [
                    { text: "Casado(a)", value: 5 },
                    { text: "Viudo(a)", value: 4 },
                    { text: "Divorciado(a)", value: 3 },
                    { text: "Separado(a) legalmente", value: 2 },
                    { text: "Soltero(a)", value: 1 }
                ]
            }
        ]
    },
    schengen: {
        name: "Espacio Schengen",
        requirements: "Requisitos principales: Pasaporte vigente, prueba de fondos económicos, seguro médico internacional mínimo de 30.000€, reserva de alojamiento y transporte, carta de invitación o motivo de viaje claro, y demostración de vínculos con el país de origen.",
        questions: [
            {
                id: 1,
                text: "¿Cuál es tu actividad económica principal?",
                options: [
                    { text: "Tengo mi propia empresa", value: 5 },
                    { text: "Soy empleado con contrato estable", value: 4 },
                    { text: "Soy trabajador independiente", value: 3 },
                    { text: "Soy estudiante", value: 2 },
                    { text: "Desempleado o sin ingresos fijos", value: 1 }
                ]
            },
            {
                id: 2,
                text: "¿Tienes familiares que dependan económicamente de ti?",
                options: [
                    { text: "Sí", value: 5 },
                    { text: "No", value: 3 }
                ]
            },
            {
                id: 3,
                text: "¿Posees propiedades, inversiones o activos en tu país?",
                options: [
                    { text: "Sí, tengo propiedades o inversiones", value: 5 },
                    { text: "No tengo propiedades ni inversiones", value: 1 }
                ]
            },
            {
                id: 4,
                text: "¿Has viajado al extranjero en los últimos 10 años?",
                options: [
                    { text: "Sí, a varios países con visa", value: 5 },
                    { text: "Sí, a algunos países sin visa", value: 4 },
                    { text: "Solo a países vecinos", value: 3 },
                    { text: "Pocos viajes o ninguno", value: 2 },
                    { text: "Nunca he salido de mi país", value: 1 }
                ]
            },
            {
                id: 5,
                text: "¿Cuentas con visa vigente de otro país?",
                options: [
                    { text: "Sí, de EE.UU., Reino Unido o Canadá", value: 5 },
                    { text: "Sí, de otros países", value: 3 },
                    { text: "No tengo visas vigentes", value: 1 }
                ]
            },
            {
                id: 6,
                text: "¿Tienes respaldo financiero suficiente para tu viaje?",
                options: [
                    { text: "Sí, tengo ahorros o soporte financiero", value: 5 },
                    { text: "Fondos limitados", value: 3 },
                    { text: "No cuento con respaldo suficiente", value: 1 }
                ]
            },
            {
                id: 7,
                text: "¿Cuál es tu historial migratorio?",
                options: [
                    { text: "Excelente, siempre cumplí visados y tiempos", value: 5 },
                    { text: "He tenido extensiones menores autorizadas", value: 4 },
                    { text: "No he salido del país aún", value: 3 },
                    { text: "Tuve inconvenientes migratorios", value: 1 }
                ]
            },
            {
                id: 8,
                text: "¿Tu motivo de viaje es claro y temporal?",
                options: [
                    { text: "Sí, motivo claro y regreso planificado", value: 5 },
                    { text: "Parcialmente claro", value: 3 },
                    { text: "No definido o sin fecha de regreso", value: 1 }
                ]
            },
            {
                id: 9,
                text: "¿Tienes antecedentes penales en tu país o en el extranjero?",
                options: [
                    { text: "No", value: 5 },
                    { text: "Sí", value: 1 }
                ]
            },
            {
                id: 10,
                text: "¿Cuál es tu estado civil?",
                options: [
                    { text: "Casado(a)", value: 5 },
                    { text: "Viudo(a)", value: 4 },
                    { text: "Divorciado(a)", value: 3 },
                    { text: "Separado(a) legalmente", value: 2 },
                    { text: "Soltero(a)", value: 1 }
                ]
            }
        ]
    },
    australia: {
        name: "Australia",
        requirements: "Requisitos principales: Pasaporte válido, formulario online (ImmiAccount), carta de invitación o plan de viaje, pruebas de fondos, historial de viajes, certificado de antecedentes penales y examen médico si aplica. Se evalúa fuertemente el perfil financiero y migratorio.",
        questions: [
            {
                id: 1,
                text: "¿Cuál es tu actividad económica principal?",
                options: [
                    { text: "Tengo mi propia empresa establecida", value: 5 },
                    { text: "Soy empleado con contrato estable", value: 4 },
                    { text: "Soy trabajador independiente", value: 3 },
                    { text: "Soy estudiante", value: 2 },
                    { text: "Desempleado o sin ingresos fijos", value: 1 }
                ]
            },
            {
                id: 2,
                text: "¿Tienes familiares que dependan económicamente de ti?",
                options: [
                    { text: "Sí", value: 5 },
                    { text: "No", value: 3 }
                ]
            },
            {
                id: 3,
                text: "¿Tienes propiedades, inversiones o bienes en tu país?",
                options: [
                    { text: "Sí, propiedades o inversiones significativas", value: 5 },
                    { text: "Solo algunos bienes menores", value: 3 },
                    { text: "No tengo propiedades", value: 1 }
                ]
            },
            {
                id: 4,
                text: "¿Has viajado al extranjero en los últimos 10 años?",
                options: [
                    { text: "Sí, a países con visado estricto (EE.UU., Schengen, Reino Unido)", value: 5 },
                    { text: "Sí, a varios países sin visa", value: 4 },
                    { text: "Solo a países vecinos", value: 3 },
                    { text: "Pocos viajes o ninguno", value: 2 },
                    { text: "Nunca he salido de mi país", value: 1 }
                ]
            },
            {
                id: 5,
                text: "¿Tienes visa vigente de algún país desarrollado?",
                options: [
                    { text: "Sí, de EE.UU., Canadá o Schengen", value: 5 },
                    { text: "Sí, de otros países", value: 3 },
                    { text: "No tengo visas vigentes", value: 1 }
                ]
            },
            {
                id: 6,
                text: "¿Cuentas con fondos suficientes para cubrir tu estadía?",
                options: [
                    { text: "Sí, tengo fondos y prueba de ingresos", value: 5 },
                    { text: "Fondos limitados", value: 3 },
                    { text: "No cuento con respaldo suficiente", value: 1 }
                ]
            },
            {
                id: 7,
                text: "¿Tienes historial migratorio positivo?",
                options: [
                    { text: "Sí, siempre cumplí con visados y salidas", value: 5 },
                    { text: "Tuve extensiones menores justificadas", value: 4 },
                    { text: "No he salido del país aún", value: 3 },
                    { text: "Tuve inconvenientes migratorios", value: 1 }
                ]
            },
            {
                id: 8,
                text: "¿Tu motivo de viaje es claro y temporal?",
                options: [
                    { text: "Sí, motivo claro y regreso planificado", value: 5 },
                    { text: "Parcialmente claro", value: 3 },
                    { text: "No definido o sin fecha de regreso", value: 1 }
                ]
            },
            {
                id: 9,
                text: "¿Tienes antecedentes penales o sanciones migratorias?",
                options: [
                    { text: "No", value: 5 },
                    { text: "Sí", value: 1 }
                ]
            },
            {
                id: 10,
                text: "¿Cuál es tu estado civil?",
                options: [
                    { text: "Casado(a)", value: 5 },
                    { text: "Viudo(a)", value: 4 },
                    { text: "Divorciado(a)", value: 3 },
                    { text: "Separado(a) legalmente", value: 2 },
                    { text: "Soltero(a)", value: 1 }
                ]
            }
        ]
    }
};

let selectedCountry = null;
let currentQuestion = 0;
let answers = {};
let personalInfo = {};
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


document.addEventListener('DOMContentLoaded', function() {

    if (isIOS) {
        document.addEventListener('touchstart', function() {}, {passive: true});
        
        document.addEventListener('focusin', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
                document.documentElement.style.zoom = '1';
            }
        });
        
        document.addEventListener('focusout', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
                setTimeout(() => {
                    document.documentElement.style.zoom = '';
                }, 100);
            }
        });
    }

    document.getElementById('start-evaluation-btn').addEventListener('click', startEvaluation);
    
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            selectCountry(country);
        });
    });

    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('finalize-btn').addEventListener('click', calculateResults);
    document.getElementById('download-report').addEventListener('click', downloadReport);
    document.getElementById('restart-btn').addEventListener('click', restartEvaluation);
});

function startEvaluation() {
    const form = document.getElementById('personal-info-form');
    const formData = new FormData(form);
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    personalInfo = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        documentType: document.getElementById('document-type').value,
        documentNumber: document.getElementById('document-number').value,
        evaluationDate: new Date().toLocaleDateString('es-ES')
    };
    
    document.getElementById('personal-info-section').classList.add('hidden');
    document.getElementById('country-selection').classList.remove('hidden');
    smoothScrollTo('country-selection');
}

function selectCountry(country) {
    selectedCountry = country;
    
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50');
    });
    document.querySelector(`.country-btn[data-country="${country}"]`).classList.add('border-blue-500', 'bg-blue-50');
    
    document.getElementById('country-name').textContent = countries[country].name;
    document.getElementById('country-requirements').textContent = countries[country].requirements;
    document.getElementById('country-info').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('questions-section').classList.remove('hidden');
        smoothScrollTo('questions-section');
        renderQuestion(0);
    }, 500);
}

function renderQuestion(index) {
    const form = document.getElementById('visa-form');
    form.innerHTML = '';
    
    const question = countries[selectedCountry].questions[index];
    
    const questionHTML = `
        <div class="question-card bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">${question.text}</h3>
            <div class="space-y-3">
                ${question.options.map((option, i) => `
                    <button type="button" class="option-btn w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:bg-blue-50 transition ${answers[question.id] === option.value ? 'bg-blue-100 border-blue-400 selected' : ''}" data-value="${option.value}">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    form.innerHTML = questionHTML;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            answers[question.id] = value;
            
            document.querySelectorAll('.option-btn').forEach(b => {
                b.classList.remove('bg-blue-100', 'border-blue-400', 'selected');
            });
            this.classList.add('bg-blue-100', 'border-blue-400', 'selected');
            
            document.getElementById('next-btn').disabled = false;
        });
        
        if (isIOS) {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            btn.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        }
    });
    
    updateProgress(index);
    
    const isLastQuestion = index === countries[selectedCountry].questions.length - 1;
    document.getElementById('prev-btn').classList.toggle('hidden', index === 0);
    document.getElementById('next-btn').classList.toggle('hidden', isLastQuestion);
    document.getElementById('finalize-btn').classList.toggle('hidden', !isLastQuestion);
}

function updateProgress(index) {
    const total = countries[selectedCountry].questions.length;
    const progress = ((index + 1) / total) * 100;
    
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${index + 1}/${total}`;
}

function nextQuestion() {
    if (currentQuestion < countries[selectedCountry].questions.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
    }
}

function calculateResults() {
    let totalScore = 0;
    let maxScore = 0;
    
    countries[selectedCountry].questions.forEach(question => {
        maxScore += 5;
        if (answers[question.id]) {
            totalScore += answers[question.id];
        }
    });
    
    const probability = (totalScore / maxScore) * 100;
    
    if (probability >= 50) {
        document.getElementById('probability-percent').textContent = `${probability.toFixed(1)}%`;
    } else {
        document.getElementById('probability-percent').textContent = "Encaminémonos a la mejora Contactanos";
    }
    
    document.getElementById('result-bar').style.width = `${probability}%`;
    
    let interpretation = "";
    let recommendations = "";
    
    if (probability >= 80) {
        interpretation = "Alta probabilidad de aprobación";
        recommendations = `
            <div class="p-3 bg-green-100 rounded-lg border border-green-300">
                <p class="font-medium text-green-800">Tu perfil es muy sólido. Te recomendamos agendar una cita de asesoría para preparar tu documentación.</p>
            </div>
        `;
    } else if (probability >= 60) {
        interpretation = "Probabilidad media-alta";
        recommendations = `
            <div class="p-3 bg-blue-100 rounded-lg border border-blue-300">
                <p class="font-medium text-blue-800">Tienes buenas posibilidades. Contáctanos para fortalecer cualquier área débil antes de aplicar.</p>
            </div>
        `;
    } else if (probability >= 40) {
        interpretation = "Oportunidad de mejora";
        recommendations = `
            <div class="p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                <p class="font-medium text-yellow-800">Considera una asesoría personalizada, vamos a  mejorar algunos aspectos de tu perfil para que salga perfecto .</p>
            </div>
        `;
    } else {
        interpretation = "Encaminémonos a la mejora";
        recommendations = `
            <div class="p-3 bg-red-100 rounded-lg border border-red-300">
                <p class="font-medium text-red-800">Vemos posibilidades. Te recomendamos contactarnos para mejorar tus posibilidades.</p>
            </div>
        `;
    }
    
    document.getElementById('result-interpretation').textContent = interpretation;
    document.getElementById('recommendations').innerHTML = recommendations;
    
    const whatsappMessage = generateWhatsAppMessage(probability, interpretation);
    const encodedMessage = encodeURIComponent(whatsappMessage);
    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send/?phone=573162423255&text=${encodedMessage}&type=phone_number&app_absent=0`;
    
    document.getElementById('results-section').classList.remove('hidden');
    smoothScrollTo('results-section');
}

function generateWhatsAppMessage(probability, interpretation) {
    let message = `Hola American Visas, acabo de completar el simulador de visa.\n\n`;
    
    message += `*INFORMACIÓN PERSONAL:*\n`;
    message += `Nombre: ${personalInfo.fullName}\n`;
    message += `Correo: ${personalInfo.email}\n`;
    message += `Teléfono: ${personalInfo.phone}\n`;
    message += `Tipo de documento: ${personalInfo.documentType}\n`;
    message += `Número de documento: ${personalInfo.documentNumber}\n`;
    message += `Fecha de evaluación: ${personalInfo.evaluationDate}\n\n`;
    
    message += `*EVALUACIÓN DE VISA:*\n`;
    message += `País evaluado: ${countries[selectedCountry].name}\n`;
    
    if (probability >= 40) {
        message += `Probabilidad estimada: ${probability.toFixed(1)}%\n`;
    }
    
    message += `Interpretación: ${interpretation}\n\n`;
    
    message += `*RESUMEN DE RESPUESTAS:*\n`;
    countries[selectedCountry].questions.forEach(question => {
        const answerValue = answers[question.id] || 0;
        const answerText = question.options.find(opt => opt.value === answerValue)?.text || "Sin respuesta";
        message += `${question.id}. ${question.text}\n   Respuesta: ${answerText}\n\n`;
    });
    
    message += `*RECOMENDACIONES AMERICAN VISAS:*\n`;
    message += `- Este es un estimado basado en la información proporcionada\n`;
    message += `- Consulta los requisitos oficiales del consulado de ${countries[selectedCountry].name}\n`;
    message += `- Agenda una asesoría personalizada con nuestros expertos\n`;
    message += `- Prepara documentación que respalde tu perfil\n\n`;
    
    message += `Me gustaría recibir más información sobre mis opciones.`;
    
    return message;
}

function downloadReport() {
    const probability = document.getElementById('probability-percent').textContent;
    const interpretation = document.getElementById('result-interpretation').textContent;
    const countryName = countries[selectedCountry].name;
    
    let htmlContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
        <meta charset="UTF-8">
        <!--[if gte mso 9]>
        <xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>Informe de Visa</x:Name>
                        <x:WorksheetOptions>
                            <x:DisplayGridlines/>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
            td { mso-number-format:\\@; }
            .title { font-size: 18px; font-weight: bold; }
            .section { font-weight: bold; background-color: #E6E6E6; }
        </style>
    </head>
    <body>
        <table border="1" cellpadding="5" cellspacing="0">
            <tr><td colspan="2" class="title">INFORME DE EVALUACIÓN DE VISA - AMERICAN VISAS</td></tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            
            <tr><td class="section" colspan="2">DATOS DEL SOLICITANTE:</td></tr>
            <tr><td><b>Nombre:</b></td><td>${personalInfo.fullName}</td></tr>
            <tr><td><b>Correo:</b></td><td>${personalInfo.email}</td></tr>
            <tr><td><b>Teléfono:</b></td><td>${personalInfo.phone}</td></tr>
            <tr><td><b>Tipo de documento:</b></td><td>${personalInfo.documentType}</td></tr>
            <tr><td><b>Número de documento:</b></td><td>${personalInfo.documentNumber}</td></tr>
            <tr><td><b>Fecha de evaluación:</b></td><td>${personalInfo.evaluationDate}</td></tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            
            <tr><td class="section" colspan="2">EVALUACIÓN DE VISA:</td></tr>
            <tr><td><b>País evaluado:</b></td><td>${countryName}</td></tr>
            <tr><td><b>Probabilidad estimada:</b></td><td>${probability}</td></tr>
            <tr><td><b>Interpretación:</b></td><td>${interpretation}</td></tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            
            <tr><td class="section" colspan="2">RESUMEN DE RESPUESTAS:</td></tr>
    `;
    
    countries[selectedCountry].questions.forEach(question => {
        const answerValue = answers[question.id] || 0;
        const answerText = question.options.find(opt => opt.value === answerValue)?.text || "Sin respuesta";
        htmlContent += `
            <tr><td colspan="2"><b>${question.id}. ${question.text}</b></td></tr>
            <tr><td>Respuesta:</td><td>${answerText} (${answerValue}/5)</td></tr>
        `;
    });
    
    htmlContent += `
            <tr><td colspan="2">&nbsp;</td></tr>
            <tr><td class="section" colspan="2">RECOMENDACIONES AMERICAN VISAS:</td></tr>
            <tr><td colspan="2">- Este es un estimado basado en la información proporcionada</td></tr>
            <tr><td colspan="2">- Consulta los requisitos oficiales del consulado de ${countryName}</td></tr>
            <tr><td colspan="2">- Agenda una asesoría personalizada con nuestros expertos</td></tr>
            <tr><td colspan="2">- Prepara documentación que respalde tu perfil</td></tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            
            <tr><td class="section" colspan="2">CONTACTO:</td></tr>
            <tr><td colspan="2">Instagram: @american.visas</td></tr>
            <tr><td colspan="2">WhatsApp: +57 316 242 3255</td></tr>
            <tr><td colspan="2">Ubicación: Pereira, Colombia</td></tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            
            <tr><td colspan="2"><i>NOTA: Este simulador es una herramienta informativa de American Visas y no garantiza la aprobación o denegación de una visa.</i></td></tr>
            <tr><td colspan="2">&nbsp;</td></tr>
            <tr><td colspan="2"><b>¡Gracias por confiar en American Visas!</b></td></tr>
        </table>
    </body>
    </html>
    `;
    
    const blob = new Blob([htmlContent], { 
        type: 'application/vnd.ms-excel' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Informe_Visa_${personalInfo.fullName.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.xls`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function restartEvaluation() {
    selectedCountry = null;
    currentQuestion = 0;
    answers = {};
    personalInfo = {};
    
    document.getElementById('personal-info-form').reset();
    
    document.getElementById('personal-info-section').classList.remove('hidden');
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50');
    });
    document.getElementById('country-info').classList.add('hidden');
    document.getElementById('country-selection').classList.add('hidden');
    document.getElementById('questions-section').classList.add('hidden');
    document.getElementById('results-section').classList.add('hidden');
    
    smoothScrollToTop();
}

function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function smoothScrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}