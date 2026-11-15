
const { companyTable } = require('../createTables/association');
const reviewTable = require('../createTables/reviewTable')

const reviewEntry = async (req,res)=>{
  
    try{
        const {pros,cons,rating,companyId} = req.body;
        const company = await companyTable.findByPk(companyId);
        if(!company){
        return res.status(404).send("Company not found");
        }
        const reviewPost =await company.createReview({
            pros:pros,
            cons:cons,
            rating:rating
        })
         res.status(201).json({
            message:`reviews inserted successfully`,
            reviewPost
         })

 
    }catch(err){
        console.log(err);
res.status(500).send("Cant make an entry");    
}



}

module.exports ={
    reviewEntry
}