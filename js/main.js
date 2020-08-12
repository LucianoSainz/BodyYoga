


let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let on_off = true;

btnMenu.addEventListener('click', () => {
    if(on_off) {
       menu.style.left = "0%";
       menu.style.tramsition = "0.5s";
      
       

       on_off = false;

    }else{
        on_off = false;
       menu.style.left = "100%";
       menu.style.tramsition = "0.5s";
      

       on_off = true;
    }
});

//scroll

$(document).ready(function(){
    AOS.init();
	var scrollLink = $('.scroll');

	//Smooth scrolling

	scrollLink.click(function(e){
		e.preventDefault();
		$('body, html').animate({
		scrollTop:	$(this.hash).offset().top
		}, 2000)
	});
})

