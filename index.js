const csvtojson = require('csvtojson');
const fs = require('fs');

const csvfilepath = 'cadastros.csv'

csvtojson().fromFile(csvfilepath).then((json) => {
    

     console.log(json[8])
    //  fs.writeFileSync("output.json", JSON.stringify(json), "utf-8",(err) => {
    //      if(err) console.log(err);
    //  });
})