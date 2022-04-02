//Assignment 1: Function and Array
function max(numbers){
  let max = numbers[0];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i]>max){
      max = numbers[i];
    }
  }
  console.log(max);
}
  
max([1, 2, 4, 5]); //5
max([5, 2, 7, 1, 6]); //7

//Assignment 2: Object
let args =  {n1:1,n2:2,op:"+"}

function calculate(args){
  let result;
  if(args.op==="+"){
  result=args.n1+args.n2;
  }else if(args.op==="-"){
  result=args.n1-args.n2;
  }else{
  result="Not supported";
  }
  return result;
}

console.log(calculate(args)); //3

//==============================

class Args{
  constructor(n1,n2,op){
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

let args = new Args(1,5,"-");

function calculate(args){
  let result;
  if(args.op==="+"){
  result=args.n1+args.n2;
  }else if(args.op==="-"){
  result=args.n1-args.n2;
  }else{
  result="Not supported";
  }
  return result;
}

console.log(calculate(args)); //-4 

//Assignment 3: Function, Array, and Object
function avg(data){
    let quantity = data.size;
    let totalPrice = 0;
    for(let i=0; i<data.products.length; i++){
      totalPrice += data.products[i]['price'];
    }

    console.log(totalPrice/quantity);
}
  
avg({
  size:3,
  products:[{
    name:"Product 1",
    price:100
    },
  {
    name:"Product 2",
    price:700
    },
  {
    name:"Product 3",
    price:250
  }]
  }); //350

//Assignment 5: Algorithm Practice (Advanced Optional)
function twoSum(nums, target){
  for(let i=0; i<=nums.length; i++){
    for(let j=i+1; j<=nums.length; j++){
      if(nums[i] + nums[j] === target){
        console.log([i, j]);
      }
    }
  }
}

twoSum([2,7,11,19], 9); //[0,1]
