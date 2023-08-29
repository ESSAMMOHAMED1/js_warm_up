const Orders = [
    {OrderName:"ta3mia",OrderType : "singel"},
    {OrderName:"Betngan",OrderType : "double"}
];

const GetOrders = ()=>{
setTimeout(()=>{
    let tablia = "";
    Orders.forEach((Orders,Indx)=> {
        tablia+= `<li>${Orders.OrderName}</li>`; 
    });
    document.body.innerHTML = tablia;
},1000)
};

const AddOrders = (Order,callback=()=>{}) => {
    setTimeout(()=>{
        Orders.push(Order);
       callback();
    },2000);

}
AddOrders({OrderName:"fool",OrderType : "tripel"},GetOrders);
