const nav_button = document.getElementsByClassName("navbar-toggler")[0];

const card_hide = document.getElementsByClassName("relative_div")[0];

const items_nav = document.getElementById("navbarNavAltMarkup");

nav_button.addEventListener("click", function(){
   if (card_hide.style.display === "none"){
    card_hide.style.display = "block";
   } else {
    card_hide.style.display = "none";
   }
})