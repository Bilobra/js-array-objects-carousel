// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

const slidesWrapper = document.querySelector('.slides-wrapper')
// funzione che mi genera una slide



slides.forEach((img) => {

	slidesWrapper.innerHTML += `
	<li class="slide">
		<img src="${img.url}" alt="">
	 	<div class="slide__content">
	 		<h3 class="slide__title">${img.title}</h3>
	 		<p class="slide__description">${img.description}</p>
	 	</div>
	</li>`

})

const liActive = document.querySelectorAll('.slide');
let imgIndex = 0;
liActive[imgIndex].classList.add('active');


const nextBtn = document.querySelector('.arrow-next');
const prevBtn = document.querySelector('.arrow-prev');

nextBtn.addEventListener('click', goNext)
prevBtn.addEventListener('click', goPrev)

function goNext() {

	liActive[imgIndex].classList.remove('active')
	imgIndex++

	if (imgIndex === liActive.length) {
		imgIndex = 0
	}

	liActive[imgIndex].classList.add('active')


}
function goPrev() {
	liActive[imgIndex].classList.remove('active')
	imgIndex--
	if (imgIndex < 0) {
		imgIndex = liActive.length - 1
	}
	liActive[imgIndex].classList.add('active')
}


// BONUS

let clock = setInterval(goNext, 3000)
slidesWrapper.addEventListener('mouseenter', () => {
	console.log('stop autoplay')
	clearInterval(clock)
})

