const searchBox = document.getElementById("companyName");
const searchBtn = document.getElementById("searchBtn");
// const {Reviews} = require("../createTables/reviewTable");
const avgrating = document.getElementById("avgRating");
const reviewsList = document.getElementById("reviewsList");

searchBtn.addEventListener('click',async (e)=>{
 
   try{
      const data = searchBox.value.trim();
const reviews = await axios.get(`http://localhost:3000/companies/getCompany/${data}`);

    const res = reviews.data;

    avgrating.textContent =`Average rating : ${res.averageRating}` ;
    reviewsList.innerHTML = "";
    res.reviews.forEach((review,index)=>{
        const div = document.createElement("div");
        console.log(res);
        div.innerHTML = `
        <h3>Review ${index+1}</h3>
        <p>Pros: ${review.pros}</p>
                <p>Cons: ${review.cons}</p>
    <p>
        <span style="color: gold;">${"★".repeat(review.rating)}</span>
        <span style="color: gray;">${"★".repeat(5 - review.rating)}</span>
    </p><hr>

        `
reviewsList.appendChild(div);
searchBox.value="";

   })}
   catch(err){

    if (err.response?.status === 404) {
        avgrating.textContent = "Company not found";
    } else {
        avgrating.textContent = "Something went wrong";
    }

    reviewsList.innerHTML = "";
    console.log(err);
}  
   }
    
    )
    






  

