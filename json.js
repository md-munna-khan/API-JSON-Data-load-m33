const user = {id:'1',name:"munna",work:"student"}
//JavaScript Object Notation (JSON)
const strigified = JSON.stringify(user);

// console.log(user)
// console.log(strigified)
//{ id: '1', name: 'munna', work: 'student' }
//{"id":"1","name":"munna","work":"student"}

const shop ={
    owner :"munna",
    address:{
        street:"hossain market",
        city: "dhaka",
        area:"badda"
    },
    products: ['laptop',"dekstop","mic"],
    revenue:45000,
    isOpen: true,
    isNew:false

}
console.log(shop)
const shopJson = JSON.stringify(shop);
console.log(shopJson)
const shopObj = JSON.parse(shopJson)
console.log(shopObj)