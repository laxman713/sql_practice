const stars = document.querySelectorAll('.star');

let rating = 0;


stars.forEach((s)=>{
    s.addEventListener('click',()=>{
    rating = Number(s.dataset.value);
    stars.forEach((s)=>{
        if(Number(s.dataset.value)<=rating){
            s.classList.add('active');
        }else{
            s.classList.remove('active');
        }
    })

        ratingValue.textContent = `Rating: ${rating}/5`;
    })
   
})