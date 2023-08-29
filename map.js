//map function returns array with new valuse 
//it takes 2 parms (element,index) 

id = [1,2,3,4];

IndexedId = id.map((ids,indx)=>{
 return ( indx + ids); 
});

console.log(IndexedId); // [1,3,5,7]

