//modal-image1-portfolio

var modalBtn = document.querySelector('.myImg');
var modalTxt = document.querySelector('.middle');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
});

modalTxt.addEventListener('click', function(){
	modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
	modalBg.classList.remove('bg-active');
});

//modal-image2-portfolio

var modalBtn1 = document.querySelector('.myImg1');
var modalBg1 = document.querySelector('.modal-bg1');
var modalClose1 = document.querySelector('.modal-close1');
var modalTx = document.querySelector('.middle1');

modalBtn1.addEventListener('click', function(){
	modalBg1.classList.add('bg-active1');
});
modalTx.addEventListener('click', function(){
	modalBg1.classList.add('bg-active1');
});

modalClose1.addEventListener('click', function(){
	modalBg1.classList.remove('bg-active1');
});

//modal-image coming soon

var modalBtn2 = document.querySelector('.myImg2');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose2 = document.querySelector('.modal-close2');
var modalTt = document.querySelector('.middle2');

modalBtn2.addEventListener('click', function(){
	modalBg2.classList.add('bg-active2');
});
modalTt.addEventListener('click', function(){
	modalBg2.classList.add('bg-active2');
});

modalClose2.addEventListener('click', function(){
	modalBg2.classList.remove('bg-active2');
});

//menu
const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");


let showMenu = false;

menubtn.addEventListener("click",toggleMenu);

function toggleMenu() {
	
	if(!showMenu){
		menubtn.classList.add("close");
		menu.classList.add("show");
		menuNav.classList.add("show");
		menuBranding.classList.add("show");
		navItems.forEach(item => item.classList.add("show"));
	
	showMenu = true;
	}
	
    else {
		menubtn.classList.remove("close");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		menuBranding.classList.remove("show");
		navItems.forEach(item => item.classList.remove("show"));
	
	showMenu = false;	
	}
	
}

//typing text

const texts = ["Video-Editing", "Social-Media-Marketing", "Front-End-Developer", "Web-Designer","UX-Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
	if (count === texts.length) {
		count = 0;
	}
	
	currentText = texts[count];
	letter = currentText.slice(0,++index);
	
	document.querySelector(".sm-heading").textContent = letter;
	if (letter.length === currentText.length){
		count++;
		index=0;
	}
	setTimeout(type, 400);
})();







