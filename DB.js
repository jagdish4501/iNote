const mongoose = require('mongoose')

const conectToMongo = () => {
    mongoose.connect("mongodb://localhost/iNoteBook", { useNewUrlParser: true });
    mongoose.connection
        .once("open", () => { console.log('connected') })
        .on('error', error => {
            console.log("Your Error", error)
        });
}
module.exports = conectToMongo;