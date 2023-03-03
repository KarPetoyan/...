const text = document.querySelector('.text')
const number = document.querySelector('.number')
const textLabel = document.querySelector('.text_label')
const numberLabel = document.querySelector('.number_label')
const enter = document.querySelector('.enter')
const clear = document.querySelector('.clear')
const box = document.querySelector('.box2')

let textV;
let numberV;


text.addEventListener('click', ()=>{
	textLabel.classList.add('label-js')
})

number.addEventListener('click', ()=>{
	numberLabel.classList.add('label-js')
})

enter.addEventListener('click', ()=>{
	textV = text.value
	numberV = number.value
	for(let i=1; i<=numberV; i++){
		box.innerHTML+=`<p>${i + '. ' + textV}</p>`
	}
	text.value = ''
	number.value = ''
})

clear.addEventListener('click', ()=>{
	box.innerHTML = ''
})