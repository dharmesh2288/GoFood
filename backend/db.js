const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dharmesh:Philoian143@cluster0.3g5c74a.mongodb.net/gofood?retryWrites=true&w=majority'
//const mongoURI = 'mongodb://dharmesh:Philoian143@ac-1sosov9-shard-00-00.3g5c74a.mongodb.net:27017,ac-1sosov9-shard-00-01.3g5c74a.mongodb.net:27017,ac-1sosov9-shard-00-02.3g5c74a.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-77b4iw-shard-0&authSource=admin&retryWrites=true&w=majority'//
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;


                    }
                })
                // if (err) console.log(err);
                // else {
                //     global.food_items = data;

                // }
            })
        }

    });
}

module.exports = mongoDB;