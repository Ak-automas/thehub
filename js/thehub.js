// styling login btn
let nav_links = document.getElementsByClassName("nav-links");
let bg_style = document.getElementsByClassName("styler-bg");

for ( let i = 0; i < nav_links.length; i++ ) {

    nav_links[i].addEventListener( "mouseover", function() {
        console.log("abc")
        add_bg(bg_style[i])
    });
    
    nav_links[i].addEventListener( "mouseout", function() {
        remove_bg(bg_style[i])
    });

}

function add_bg(i){
    for ( let c = 0; c < i.classList.length; c++ ){
        if(i.classList[c] === "bg-nav-out"){
            i.classList.remove("bg-nav-out")
        }
        else{
            i.classList.add("bg-nav")
        }
    }

    
}


function remove_bg(i){
    i.classList.remove("bg-nav")
    i.classList.add("bg-nav-out")
    console.log(i.classList)
}