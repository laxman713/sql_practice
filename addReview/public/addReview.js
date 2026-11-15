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

const form = document.getElementById("formId");
const c_name = document.getElementById("companyName")
const pros= document.getElementById("pros")
const cons = document.getElementById("cons")


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const c_nameValue = c_name.value;
    const prosValue = pros.value;
    const consValue = cons.value;

    try {
        const response = await axios.post('http://localhost:3000/companies/addCompany', {
            companyName: c_nameValue
        });

console.log("Company inserted:", response.data);
    

const companyId = response.data.comPanyPost.id;

const reviewResponse = await axios.post(
    'http://localhost:3000/reviews/addReview',
    {
        pros: prosValue,
        cons: consValue,
        rating: rating,
        companyId: companyId
    }

);
console.log(reviewResponse.data);

    }
catch (err) {
    console.log("Axios error:", err.message);
    console.log("Server response:", err.response?.data);
}


});