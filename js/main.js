/*
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
	total:null,
	contador: 0,
	p_correctas: 0,
	respuestas: [],
},
	preguntas:{
		P1:{
			imagen: 'img/bill.png',
			pregunta: '¿Como se llama la empresa a la que le debe su fortuna Bill Gates?',
			opciones: {1:'Microsoft', 2:'Windows', 3:'IBM'},

		},
		P2:{
			imagen: 'img/hacker.png',
			pregunta: '¿Qué es un hacker?',
			opciones: {1:'Un delincuente informático', 2:"Persona estudiosa y experta en tecnología", 3:"Un virus muy peligroso"},
		},
		P3:{
			imagen: 'img/ff.gif',
			pregunta: '¿Cuando murio Steve Jobs?',
			opciones: {1:'5 de octubre de 2011', 2:'5 de octubre de 2010', 3:'15 de noviembre de 2011'},
		},

	},

	crearPregunta : function(){
		abc.eventos();
		$("#prueba").empty();
		let preguntaActual = abc.preguntas[abc.variable.contador];
		$("img-header").html(`<img src="${preguntaActual.imagen}">`);
		$("#prueba").append(
			`<h3 class="text-center"> ${preguntaActual.pregunta} </h3>
			<div class="opciones row"></div>`
		)

	iniciar : function(){
		abc.variable.total= Object.keys(abc.preguntas).length;
		abc.crearPregunta();
	}
}

$(document).ready(abc.iniciar)
