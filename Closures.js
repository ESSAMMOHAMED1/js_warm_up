// closure functions 
// it's a scoped function 
const i = 4 ; 
const ClosureFun = (j) => {
console.log('closer',i+j); // as we see we use parms and scoped value 
}

// pure function 

const PureFun = (a,b) =>{
console.log('pure',a+b);
}

// note pure function is most used and have best performance than closure  function
