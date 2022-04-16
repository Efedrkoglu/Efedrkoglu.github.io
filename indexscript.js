function modswitch(){
    var buton = document.querySelector("#buton").checked;
    var body = document.querySelector("body");
    var page = document.querySelector("#page");
    var header = document.querySelector("#header");
    var footer = document.querySelector("#footer");
    var baslik = document.querySelectorAll(".baslik");
    var mb = document.querySelectorAll(".mb");

    if(buton){
        body.style = "background-color: #2F3136;"
        header.style = "background-color: #36393F; border-color: black;"
        page.style = "background-color: #36393F; border-color: black;"
        footer.style = "background-color: #36393F; border-color: black; color: #cacaca;"

        for(var i=0; i<mb.length; i++){
            mb[i].style = "background-color: #2F3136; border-color: black;"
        }
        for(var i=0; i<baslik.length; i++){
            baslik[i].style = "color: rgb(0, 89, 255);"
        }
    }
    else{
        body.style = "background-color: white;"
        header.style = "background-color: rgb(241, 241, 241); border-color: #ddd;"
        page.style = "background-color: rgb(241, 241, 241); border-color: #ddd;"
        footer.style = "background-color: rgb(241, 241, 241); border-color: #ddd; color: black;"

        for(var i=0; i<mb.length; i++){
            mb[i].style = "background-color: white; border-color: #ddd;"
        }
        for(var i=0; i<baslik.length; i++){
            baslik[i].style = "color: orange;"
        }
    }
}

function modswitchpage(){
    var buton = document.querySelector("#buton").checked;
    var head = document.querySelectorAll(".h2");
    var textdiv = document.querySelectorAll(".textdiv");
    var ii = document.querySelectorAll(".ii");
    var button = document.querySelector("#gonder");

    if(buton){
        for(var i=0; i<textdiv.length; i++){
            textdiv[i].style = "background-color: #2F3136; color: #cacaca;"
        }
        for(var i=0; i<head.length; i++){
            head[i].style = "color: white; border-color: rgb(0, 89, 255);"
        }
        for(var i=0; i<ii.length; i++){
            ii[i].style = "border-color: black; background-color: #36393F; color: white;"
        }

        button.style = "background-color: #2F3136; border-color: black;"
    }
    else{
        for(var i=0; i<textdiv.length; i++){
            textdiv[i].style = "background-color: white;"
        }
        for(var i=0; i<head.length; i++){
            head[i].style = "color: black; border-color: orange;"
        }
        for(var i=0; i<ii.length; i++){
            ii[i].style = "border-color: #ddd; background-color: rgb(241, 241, 241); color: black;"
        }

        button.style = "background-color: white; border-color: rgb(161, 161, 161);"
    }
}


function scrollA(){
    window.scrollTo(0,0);
}
function scrollH(){
    window.scrollTo(0,950);
}
function scrollO(){
    window.scrollTo(0,1693);
}
function scrolli(){
    window.scrollTo(0,2736);
}