//Spread & Rest Operators (...)

//old array
 let Old_arr = [1,2,3];
//new array
let New_arr = [4,5,6];
//Use spread op to merge them
let Merged_arr =[...Old_arr,...New_arr];
//Use spread op on objects
OldObj = {
    name: "Ahmed",
    age: 32
};
//take copy from OldObj to NewObj
NewObj = {
    ...OldObj,
    gender:"male"
}

//rest op
//most used in functions
//we have a function we want to filter it and we don't know how many arges in it we use rest op

const FilterNums =(...args) => {
args.filter(el => el>2);
}
