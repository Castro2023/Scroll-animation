const rectangles= document.querySelectorAll('.rectangle');

showBoxes(),
window.addEventListener('scroll', showBoxes)

function showBoxes(){
     const triggerWidth=window.innerWidth/5*4.8

     rectangles.forEach(rectangle=>{
        const rectWidth= rectangle.getBoundingClientRect().left;

        if(rectWidth<triggerWidth){
            rectangle.classList.add('show');
        }else{
            rectangle.classList.remove('show');
        }
     })
}