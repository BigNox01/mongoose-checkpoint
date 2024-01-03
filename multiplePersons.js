const mongoose=require('mongoose')
const Person=require('./person')
// creating an array of people
let arrayOfPeople=[
    {
        name:"jhon",
        age:30,
        favoriteFoods:["fish","pork"]
    },
    {
        name:"jane",
        age:23,
        favoriteFoods:["salad","pizza"]
    },
    {
        name:"mary",
        age:15,
        favoriteFoods:["chicken","grapes"]
    },
    {
        name:"mary",
        age:21,
        favoriteFoods:["wine","cookies"]
    },
    {
        name:"Bob the builder",
        age:36,
        favoriteFoods:["burritos","tacos"]
    },
    {
        name:"juan",
        age:18,
        favoriteFoods:["fish and chips","burritos"]
    },
    {
        name:"julie",
        age:26,
        favoriteFoods:["cake","burritos"]
    }
]
module.exports=arrayOfPeople;
