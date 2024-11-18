let basket = JSON.parse(localStorage.getItem("data")) || [];


let calculation = () => {
	let cartIcon = document.getElementById("cart-count");
	// console.log(basket)
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation()
// console.log('home')

var bar = document.querySelector('.barr');
var sideNav = document.querySelector('.side-nav');
bar.addEventListener('click', () => {
	sideNav.style.width="100%"
	sideNav.style.transition="0.5s ease"
    
});
var exit = document.querySelector('.side-nav h1');
exit.addEventListener('click', ()=>{
	sideNav.style.width="0"
	sideNav.style.transition="0.5s ease"
})
window.onscroll = function(){scrollFunc()}

function scrollFunc(){
	
	var nav = document.querySelector('.nav')
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		nav.style.backgroundColor = 'white'
		nav.style.zIndex = '1000'
	}else if(document.body.scrollTop < 5 || document.documentElement.scrollTop < 5){
		nav.style.backgroundColor = 'transparent'
		
	}
}

console.log(screen.width)
let topButton = document.getElementById("top-btn");

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 70  || document.documentElement.scrollTop > 70){
        topButton.style.display = "block";
        topButton.style.opacity = "1";

    }
    else {
        topButton.style.display = "none";
    }
}

