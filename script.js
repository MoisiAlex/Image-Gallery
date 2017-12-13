const images = Array.from(document.querySelectorAll("article div"));

images.forEach(function(item){
    
    item.addEventListener('click',function(){
        let selectedImage = this.querySelector("img").src;
        let focusedImage = document.querySelector(".focus img").src;
        
        console.log(document.querySelectorAll("article div img"));
        let allImages = document.querySelectorAll("article div img");
        
             
    //    allImages.unshift(this.querySelector("img").src);
       
      
       document.querySelector(".focus img").src = allImages.slice(allImages.indexOf(selectedImage),1);
        
        
    });
});