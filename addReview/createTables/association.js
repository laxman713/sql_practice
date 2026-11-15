const companyTable = require("./companytable");
const reviewTable = require("./reviewTable");


companyTable.hasMany(reviewTable)
reviewTable.belongsTo(companyTable)

module.exports ={
    companyTable,
    reviewTable
}