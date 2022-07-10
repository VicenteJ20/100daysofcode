
const button = document.getElementById("button_container");
const homeContent = document.getElementById("home_content");

button.addEventListener("click", function(){
    
    if (homeContent.style.display == 'none'){
        homeContent.style.display = 'block';
    } else {
        homeContent.style.display = 'none';
    }
})

const go_to_blog = document.getElementsByClassName("button_blog")[0];

go_to_blog.addEventListener("click", function(){
    alert('The article will be available soon, we apologize for the incovenience');
})