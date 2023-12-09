function one(count){
  console.log (count + 1);
}
one(5);
//two(8);    
const two = (count) => {      //intislization
console.log(count + 2)  //acces 
}
two(8); //function call                      //hoisting: in arrorow function we can't do function definition otherwiose it will give error.
//const two= (count) => {
  // console.log(count + 2);
//}
//const sum (variable)//function name =(parameter)=>{
  //function body
//}
//sum (argument)//function call


//IIFE(immediate involve function execution)

(function passMessage(){
  console.log("First execution");
  console.log("database fetched");
}
)
();

(
(name) => {
  console.log(`${name},2nd IIFE arrow function executed`)

}
)('web_bocket')