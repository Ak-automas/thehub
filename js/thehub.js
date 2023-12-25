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

// about us card func 

if (window.location.href.split("/")[3] === "about.html") {
    


    founders_dictionary = {
        "John Doe":{
            "image":"img/about.png",
            "label": "CEO- The Hub",
            "text": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis."
        },

        "Anika Some":{
            "image":"img/about1.jpg",
            "label": "COO- The Hub",
            "text": "“ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis."
        },

        "James Some":{
            "image":"img/about2.jpg",
            "label": "CFO- The Hub",
            "text": "“ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis."
        },
    }

    let flip_cards = document.getElementsByClassName("flip-card");

    let founders_about = document.getElementsByClassName("founders-about")[0];
    let founders_description = document.getElementsByClassName("ab-desc")[0];

    let about_card = document.getElementsByClassName("about-card")[0];
    let founders_about_close = document.getElementsByClassName("founders-about-close");


    for (let i = 0; i < flip_cards.length; i++) {
        flip_cards[i].addEventListener("click", function(){
            
            about_card.style.transitionDelay = ".2s";
            founders_about.style.transitionDelay = "0";
            founders_about.style.transition = ".2s";
            founders_about.style.height = "100vh";
            // setting card content.....
            let ceo_name = flip_cards[i].children[0].children[1].children[0].innerHTML;
            ceo_data = founders_dictionary[ceo_name]

            founders_description.children[0] = ceo_name;
            founders_description.children[1] = ceo_data["label"];
            founders_description.children[2] = ceo_data["text"];
            founders_description.previousElementSibling.children[0].setAttribute("src", ceo_data["image"])

            
            about_card.style.transform = "translateY(0)";

        })
        
    }

    founders_about_close.addEventListener("click", function(){
        about_card.style.transitionDelay = 0;
        about_card.style.transform = "translateY(-100vw)";

        founders_about.style.transitionDelay = ".5s";
        founders_about.style.height = 0;
    })

}



// homepage videos........

video_dictionary = {
    "Supply Chain":"https://www.youtube.com/embed/Lpp9bHtPAN0",
    "Shipping Transport":"https://www.youtube.com/embed/oA1VrK0UMJg",
    "Special Transport":"https://www.youtube.com/embed/6jUvii0nBcc",
    "Country Wide":"https://www.youtube.com/embed/0IPRczsDikw",
}
if (window.location.href.split("/")[3] === "home.html") {
    let service_video = document.getElementsByClassName("service-video")[0];

    let video_cards = document.getElementsByClassName("card-image");

    let video_link = document.getElementsByClassName("ab-img")[0];
    let video_card = document.getElementsByClassName("video-card")[0];
    let service_video_close = document.getElementsByClassName("service-video-close")[0];


    for (let i = 0; i < video_cards.length; i++) {
        video_cards[i].addEventListener("click", function(){
            
            video_card.style.transitionDelay = ".2s";
            service_video.style.transitionDelay = "0";
            service_video.style.transition = ".2s";
            service_video.style.height = "100vh";
            // setting video link content.....
            let video_name = video_cards[i].previousElementSibling.innerHTML;
            video_data = video_dictionary[video_name]

            video_link.children[0].setAttribute("src", video_data)

            
            video_card.style.transform = "translateY(0)";

        })
        
    }

    service_video_close.addEventListener("click", function(){
        video_card.style.transitionDelay = 0;
        video_card.style.transform = "translateY(-100vw)";

        service_video.style.transitionDelay = ".5s";
        service_video.style.height = 0;
    })

}