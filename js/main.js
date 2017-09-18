/*var imagenes=['img/bill.png',
							'img/bill.png',
							'img/bill.png',
							'img/bill.png',
							'img/bill.png'];

var preguntas=['¿Qué es un Hacker?',
							 '¿Qué es un Cracker?',
							 '¿Cuando murio steve jobs?',
							 '¿Como se llama la empresa a la que le debe su fortuna Bill Gates?'];

var opciones=[['Un delincuente informático','Una persona estudiosa y experta en tecnología','Un virus muy peligroso.'],
							['Un programa que le roba su Facebook.','Un programa que le roba su Facebook.','Un programa que le roba su Facebook.'],
			];

var cuestionario= document.getElementsByTagName('button');
for (var i = 0; i < cuestionario.length; i++) {
	 cuestionario[i].addEventListener('click',preguntas);
}

function preguntas(){
			$("#img-header").attr("src",imagenes[i]);
			$('#pregunta').empty()
			$('#pregunta').append('<p>'+preguntas[i]+'</p>');
		 }

var i=0
function click(){
		i++;
	}
	if(opciones.length==4) {
		$("#img-header").attr("src","img/bill.png");
$('#pregunta').append('<h1>Ya acabo</h1>');

 }*/
const abc = {

variable:{
	contador: 0,
	respuestas: [],
	respondidas:null,
},

	preguntas:{
		0:{
			imagenes: 'img/bill.png',
			pregunta: '¿Como se llama la empresa a la que le debe su fortuna Bill Gates?',
			opciones: {A:'Microsoft', B:'Windows', C:'IBM'},
		},
		1:{
			imagenes: 'img/hacker.png',
			pregunta: '¿En cual de las clasificaciones de SOMBRERO esta un Hackers??',
			opciones: {A:'Blanco', B:"Negro", C:"Azul"},
		},
		2:{
			imagenes: 'img/steve-jobs.jpg',
			pregunta: 'Cual fue la compañia creada por Steve Jobs despues de ser expulsado de Apple?',
			opciones: {A:'Next', B:'Pixar', C:'Mac'},
		},

	},

	iniciar : function(){
		abc.variable.respondidas= Object.keys(abc.preguntas).length;
		abc.crearPregunta();
	},

	crearPregunta : function(){
		abc.validar();
		$("#pregunta").empty();
		var preguntaActual = abc.preguntas[abc.variable.contador];
		$("#img-header").html(`<img src="${preguntaActual.imagenes}">`);
		$("#pregunta").append(
			`<h3 class="text-center"> ${preguntaActual.pregunta} </h3>
			<div class="opciones row"></div>`
		)

		$.each(preguntaActual.opciones, (key,value)=>{
			var opcionP = '';
			if (abc.variable.respuestas[abc.variable.contador]==value) {
				opcionP = "elegido";
			} else {
				opcionP = "";
			}
			$('<div>').addClass(`col-md-4 ${opcionP}`).html(
				`<button><span>${key}</span>${value}</button>`
			).appendTo(".opciones").click((e)=>{
				$(e.currentTarget).addClass('elegido');
				abc.variable.respuestas[abc.variable.contador]=value;
				var tiempo = setTimeout(()=>{
					abc.siguiente();
				}, 1200);
			})
		})
	},

	siguiente : function(){
		abc.variable.contador++;
		if(abc.variable.contador<abc.variable.respondidas){
			abc.crearPregunta();
		}else{
			abc.mostrar();
		}
	},

	mostrar: function(){
		$("#img-header").html(`<img src="img/bill.png" width="30%">`);
		$('#pregunta').empty();
		$('#pregunta').append('<h2 class="text-center">Tus Respuestas</h2><div id="respuestas"></div>');

		$.each(abc.variable.respuestas, (i,respuesta)=>{
			$("#respuestas").append(`<p>${i+1}.
																	${abc.preguntas[i].pregunta}
																	${respuesta}</p>`)
		})
	},

	validar: function(){
	},
}

$(document).ready(abc.iniciar)
