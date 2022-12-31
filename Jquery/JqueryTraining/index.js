
//text
$(".btnClass").text("Click $");
$("#b5").html("<em>Hide</em>");  //innerHtml do js vanila
$("#b6").html("<em>Show</em>"); 

//styles
$("h1").css("color", "red");
$("h1").css("font-size", "100px");

$("#t2").css("color", "aqua"); //id

$("h3.t3").css("color", "blue"); //class

$("h2").addClass("mudarCor mudarMargin"); //$("H2").removeClass("mudarCor");

//attributes
$("a").attr("href", "https://api.jquery.com/attr/");
console.log($("h2").attr("class"));

//tempo real
$("h1").before("<button>before</button>");      //<button>before</button> <h1>Test</h1>
$("h1").after("<button>after</button>");        //<h1>Test</h1> <button>after</button>
$("h1").prepend("<button>prepend</button>");    //<h1> <button>prepend</button> Test</h1>
$("h1").append("<button>append</button>");      //h1>Test <button>append</button> </h1>
$("#b4").remove();

//events listeners
var count = 0;
$("button").click(function(){ 
    $("h2").text("Clicado"+ count++)
    $("h1").css("color","blue");
});

$(document).on("mouseover", function(){
    $("h1").css("color","purple");
})

$("input").keypress(function(evento){   
    $("h1").text(evento.key)

    var inputValor= $("input").val();
    if(evento.key == "Enter"){
        $("h1").text(inputValor);
        $("input").val("");
    }
});

//animations
$("#b5").on("click", function() {
    $("h3").hide();
   
});

$("#b6").click(function() {
    $("h3").show();
    $("h2").slideDown();
});

$("#b7").click(function(){
    $("h2").slideUp()
});

$("#b8").click(function(){
    $("h2").slideDown()
});

$("#b2").click(function(){
    $("h2").toggle();
    $("h3").toggle();
    $("h1").toggle();
});

$("#b9").on("click", function (){
    $("h1").animate({
        opacity: 0.5
    });
});

$(".btnClass").click(function(){
    $("h1").slideUp()
            .slideDown()
            .animate({opacity: 0.5, margin: 20})
})


