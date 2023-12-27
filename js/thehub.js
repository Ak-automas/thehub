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
    let founders_about_close = document.getElementsByClassName("founders-about-close")[0];


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

    //faq funtionality

    let faq_content = document.getElementsByClassName("faq-content")[0];
    let faq_group_item = document.getElementsByClassName("faq-group-item")
    
    for (let i = 0; i < faq_group_item.length; i++) {        
    
        faq_group_item[i].addEventListener("click", function(){
            let group_category = faq_group_item[i].innerHTML;
            let active_group_item = document.getElementsByClassName("active-faq")[0];
            
            if (active_group_item.id.toLowerCase === group_category.toLowerCase()) {
                // pass
            } else if(active_group_item.id.toLowerCase !== group_category.toLowerCase()){
                active_group_item.classList.add("hide");
                active_group_item.classList.remove("active-faq", "show");
            
                let next_active_group_item = document.getElementById(group_category.toLowerCase());
                next_active_group_item.classList.remove("hide");
                next_active_group_item.classList.add("show", "active-faq");
            }
        })
    }

    let faq_qstn = document.getElementsByClassName("faq-question");

    for (let i = 0; i < faq_qstn.length; i++) {
        faq_qstn[i].addEventListener("click", function(){
            
            if ( faq_qstn[i].children[0].checked === false ) {
                console.log(faq_qstn[i].children[3])
                faq_qstn[i].children[3].classList.add("panel-checked");
                check(faq_qstn[i].children[0])

            }else if( faq_qstn[i].children[0].checked === true ){
                faq_qstn[i].children[3].classList.remove("panel-checked");
                uncheck(faq_qstn[i].children[0])

            }
            
        })
        
    }

    function check(inpVar) {
        inpVar.checked = true;
    }
    
    function uncheck(inpVar) {
        inpVar.checked = false;
    } 

}

