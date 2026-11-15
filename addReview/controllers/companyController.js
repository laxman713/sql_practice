
const sequelize = require('../config/database');
const companyTable = require('../createTables/companytable')
const reviewTable = require('../createTables/reviewTable')

const companyEntry = async (req,res)=>{
    try{
        const {companyName} = req.body;
        const [comPanyPost,created] =await companyTable.findOrCreate({
            where:{companyName:companyName}
        })
         res.status(201).json({
            message:`${companyName} inserted successfully`,
            comPanyPost
         })

 
    }catch(err){
        console.log(err);
res.status(500).send("Cant make an entry");    
}
}

const getCompany = async (req,res)=>{
  
    try{
        const {companyName} = req.params;
        const company = await companyTable.findOne({
            where:{
                companyName:companyName
            },
            include:[reviewTable]
        })

        if(!company){
            return res.status(404).send(companyName+" Company not found");
        }

         const result = await reviewTable.findOne({
            attributes:[
                [sequelize.fn('AVG',sequelize.col('rating')),'averageRating']
            ],
            where:{
                companyId : company.id
            },
            raw:true
        })
        res.status(200).json({
            companyName:companyName,
            reviews:company.reviews.map((review)=>{
                return{
                    pros : review.pros,
                    cons: review.cons
                };
            }),
            
            averageRating: Number(result.averageRating)
        })

    }catch(err){
        console.log(err.message);
    }

    
        

   
    


}

module.exports ={
    companyEntry,getCompany
}