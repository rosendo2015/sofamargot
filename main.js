const static = document.querySelector('.static');
const moving = document.querySelector('.moving');

const btnx = document.querySelector('.btnx');
const btn360 = document.querySelector('.btn360');

btn360.addEventListener("click", function(){
    
    static.classList.add('hide');
    moving.classList.remove('hide');
})
btnx.addEventListener("click", function(){
    
    static.classList.remove('hide');
    moving.classList.add('hide');
})


