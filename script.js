// conecting to the mongodb database
const mongoose = require("mongoose");
// importing the person model
const Person = require("./person");
//importing the array of people
const People = require("./multiplePersons");
mongoose.set("strictQuery", false);
// define the database url to connect to
const mongoDB = "mongodb://localhost:27017/mongoose-checkpoint";
//wait dor the database to connect
async function connectDB() {
  try {
    await mongoose.connect(mongoDB);
    console.log("connected");
  } catch (e) {
    console.error(e);
  }
}
connectDB();
run();
async function run() {
  try {
    // creating a record of a model and saving it
    const person = await Person.create({
      name: "aziz",
      age: 26,
      favoriteFoods: ["banana", "pasta"],
    });
    await person.save();
    // creating their models
    try {
      const people = await Person.create(People);
      console.log("succefully created", people);
    } catch (err) {
      console.log(err);
    }
    // searching the database
    try {
      let nameTofind = "jhon";
      let search = await Person.find({ name: nameTofind });
      console.log("sucess search", search);
    } catch (e) {
      console.error(e);
    }
    // returning a single matching from the database using model.findone()
    try {
      let foodtofind = "pizza";
      let OneSearch = await Person.findOne({ favoriteFoods: foodtofind });
      console.log("food found", OneSearch);
    } catch (err) {
      console.error(err);
    }
    // searching by model.findbyid
    try {
      let theId = "659594d8f12732084b1318f3";
      let searchByid = await Person.findById(theId);
      console.log("success", searchByid);
    } catch (e) {
      console.error();
    }
    // adding an item to the searched person
    try {
      let Id = "659599f1fd873ffc32e8929e";
      let newFavoriteFood = "chips";
      let updatedPerson = await Person.findByIdAndUpdate(
        Id,
        { $addToSet: { favoriteFoods: newFavoriteFood } },
        { new: true }
      );
      console.log("updated", updatedPerson);
      // deleting a document
      try {
        let newId = "659594d8f12732084b1318f3";
        await Person.findByIdAndDelete(newId);
        console.log("deleted Person");
      } catch (e) {
        console.log(e);
      }
      // deleting all people whose name is mary
      let nameToDelete = "mary";
      await Person.deleteMany({ name: nameToDelete }).then((result) => {
        console.log("Deleted Files:" + result.deletedCount);
      });
    } catch (e) {
      console.error(e);
    }
    // chaining the querrys
    try {
      const data = await Person.find({ favoriteFoods: "burritos" })
        .sort({ name: 1 })
        .limit(2)
        .select({ age: 0 })
        .exec();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  } catch (e) {
    console.log(e.message);
  }
}
