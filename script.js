



$("ul").on("click", "li", function(){
   /*

   // console.log($("li").css("color")); // Узнать цвет в формате RGB
    if($(this).css("color") == "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        $(this).css({
            color: "grey",
            textDecoration: "line-through"
        });
    }

    */

    $(this).toggleClass("done");

         
});


$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(1000);
});


$(".shoppingListInput").keypress(function(event){
    if(event.which === 13) {

        let item = $(this).val();
        $(this).val('');
        $("ul").append("<li>" + item + "   <span>X</span></li>");

    }
});