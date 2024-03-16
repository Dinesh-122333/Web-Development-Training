console.log("Welcome to The Ultimate jQuery Course!🚀");

//used to hide totally but we can also has some duration option to
// $(".First").hide(1000)//class
// $("#second").hide(2000)//id
$(document).ready(function(){

    $ ("#output").load("hello.txt", function(response, statusText, xhr){
        console(response);
        console(statusText);
        console(xhr);
    })
//     // MouseEvent
// // $("#btn_hide").click(function(){
// //     $("p").hide(1000)// it can hide the ele 
// // })

// // $("#btn_hide").click(function(){
// //     $("p").toggle(1000)// it can do both hide and show fun
// // })
// $("#btn_hide").click(function(){
//     // $(".First").fadeOut(1000)// fade some duration of time
//     // $(".First").fadeToggle(1000)// fade some duration of time
//     // $(".First").fadeTo("slow",0.5)// fade some duration of time
//     // $(".First").slideToggle("slow")// fade some duration of time
//     $(".box").animate({
//         width: "300px",
//         height: "200px",
//         color: "white",
//         backgroundColor:"Black",
//     },"slow")


// })
// // Keyboard Event

// $("body").keydown(function(event){
//     if (event.which === 72)
//         $("p").hide(1000)
//     if (event.which === 83)
//         $("p").show(1000)

})

// })

