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
        div.innerHTML = `
        <h3>Review ${index+1}</h3>
        <p>Pros: ${review.pros}</p>
                <p>Cons: ${review.cons}</p>
<br><br><br>

        `
        
    
reviewsList.appendChild(div);

   })}
   catch(err){

    if (err.response?.status === 404) {
        avgrating.textContent = "Company not found";
    } else {
        avgrating.textContent = "Something went wrong";
    }

    reviewsList.innerHTML = "";
    console.log(err);
}  console.log(err)
   }
    
    )
    






  

