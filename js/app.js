//2. Agregar overlay Ligthbox para galeria
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);


$("#galeria li a").click(function(event)
{
	event.preventDefault();
	var href=$(this).attr("href");

	//1.1 Mostrar el light box con la imagen a la que se dio click
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});


$overlay.click(function()
{
	$overlay.hide();
});

//crear elemento select
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu con la funcion each
$("#menu a").each(function()
{
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar option al select
	$select.append($option);

	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});



var sucursal1 =
{
	nombre:"Laurys Accesorios",telefono: "0980505952", direccion: "Sauces 7", correo: "joyliss_baby_2211@hotmail.com"
};
var sucursal2 =
{
	nombre:"Ili Moda",telefono: "0987532189", direccion: "Samborondon", correo: "gili_05@hotmail.com" 
};
var sucursal3 =
{
	nombre:"Johao Sports",telefono: "0987656878", direccion: "Urdesa", correo: "johaol@hotmail.com" 
};
var sucursal4 =
{
	nombre:"Chinita Style",telefono: "0982564376", direccion: "Los Ceibos Norte", correo: "chinita_perdida@gmail.com" 
};
var sucursal5 =
{
	nombre:"Moda y Estilo Las Bebas",telefono: "0976545678", direccion: "Av. Las Americas", correo: "bebitas_guapas@gmail.com" 
};

var local =[];
local.push(sucursal1);local.push(sucursal2);local.push(sucursal3);local.push(sucursal4);local.push(sucursal5);

for (var i=0; i < local.length; i ++)
{
listHTML = '<ul><li>' + local[i].nombre + '<br>'+local[i].telefono+ '<br>'+local[i].direccion+ '<br>'+local[i].correo+ '</li></ul>';
				var infoDiv = document.getElementById("listaSucursales"); 
				infoDiv.innerHTML+=listHTML;
			}

var pelicula1 =
{
	nombre:"Alice through the looking glass", actor: "Mia Wasikowska", director:"James Bobin",genero:"fantasia", sinopsis:"alicia despierta en el pais de las maravillas, se encuentra en una aventura de fantasia y enfrentara obstaculos para lograr su odjetivo"
};
var pelicula2 =
{
	nombre:"Civil War",actor: "Chris Evans", director:"anthony russo",genero:"accion", sinopsis:"Pelea entre los vengadores debido a daños colaterales del trabajo de este grupo de superheroes"
};
var pelicula3 =
{
	nombre:"Xmen Apocalypse",actor:"James McAvoy" , director:"Bryan Singer",genero:"accion", sinopsis:"10 años despues de los hechos ocurridos en dias pasados aparece apocalipsis, el primer y mas poderoso mutante de los xmen..."
};
var pelicula4 =
{
	nombre:"Deadpool",actor:"Ryan Reynolds", director:"Team Miller",genero:"accion", sinopsis:"Venganza del superheroe salido fuera de lo comun"
};
var pelicula5 =
{
	nombre:"Gods of the Egypt",actor: "Nikolaj Coster-Waldau", director:"Alex Proyas",genero:"fantasia", sinopsis:"Trata sobre los dioses"
};

var pelicula =[];
pelicula.push(pelicula1);pelicula.push(pelicula2);pelicula.push(pelicula3);pelicula.push(pelicula4);pelicula.push(pelicula5);

for (var m=0; m < pelicula.length; m++)
{
listHTML2 = '<ul><li>' + pelicula[m].nombre + '<br>'+pelicula[m].numSalas+ '<br>'+pelicula[m].direccion+'<br>'+'</li></ul>';
				var infoDiv2 = document.getElementById("info-peliculas"); 
				infoDiv2.innerHTML+=listHTML2;
			}




var $password = $("#password");
var $confirmPassword=$("#confirm_password");

$("form span").hide();


function usuarioIngresado() {
	return($("#username").val().length > 0);
}


function puedeEnviar() {
	$("#submit").prop("disabled");
}

puedeEnviar();