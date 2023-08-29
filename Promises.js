const Orders = [
    {OrderName:"ta3mia",OrderType : "singel"},
    {OrderName:"Betngan",OrderType : "double"}
];

const AddOrders = (Order) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Orders.push(Order);
            const OrderDone = true;
            (!OrderDone ? resolve("done") : reject("ERROR"));
        },2000);
    });
}
AddOrders({OrderName:"fool",OrderType : "tripel"})
.then((Order) => console.log(Order))
.catch((NotOrder)=>console.log(NotOrder));


///Promise all


const OrderPromis1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,"What's Up",2000);
});
const OrderPromis2 = Promise.resolve("Your Order is Done");
const OrderPromis3 = fetch('https://jsonplaceholder.typicode.com/posts').then((val)=>val.json());
Promise.all([OrderPromis1,OrderPromis2,OrderPromis3]).then((values=>{console.log(values)})) 


// async and await promises


const FetchPostes = async (url) => {
const ServerRes = await fetch(url);
const data = await ServerRes.json();
console.log(data);
}

FetchPostes('https://jsonplaceholder.typicode.com/posts');