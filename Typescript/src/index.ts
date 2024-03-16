// console.log('hello');

let sales : number = 123_456_789;
let saler  = 123_456_789;
let course : string = 'TypeScript';

// any function
function render(document : any){//document can be any type like number,string,...
    console.log(document)
}

// arrays
let num = []// it become any array
let numb : number[] = [1,2,3];// number array
let number = [1,2,3]// its also a number array

// tuple
// id, entity (pair of values)
let user : [number, string] = [1, 'dinesh'];

// Enum
const small = 1;
const medium = 2;
const large = 3;

enum Size {small,medium,large};// taking the value from above
enum Size2 {s,m,l}//it initialize itself as 0, 1, 2
enum Size3 {s = 1, m = 2, l = 3} // initialize inside the fun

let mySize : Size = Size.medium;
console.log(mySize)

// functions
function calculateTax(income : number, taxYear : number):number{
    // let x; 
    if (taxYear < 2024)
        return income * 1.2;
    return 0;
}

calculateTax(50_000,2020)
// function calculateTax(income : number): number{ // in else part i didn't define so it print undefined and error would be there 
//     if (income < 500)
//         return income * 1.2;
//     // return 0;
// }

// Object

let employee : {
    readonly id : number,// the readonly used to not to update the id by user
    name : string
    
} = { id : 1, name : 'shen'};

let emp :{
    readonly id : number,// the readonly used to not to update the id by user
    name : string
    retire : (date: Date) => void
} = {
    id : 1,
    name : 'din',
    retire:(date:Date) =>{
        console.log(date);
    }
}

// Type Aliases
type Employee = {// with that we can use like calling the inbuilt-function like class calling
    readonly id : number,
    name : string
    retire : (date: Date) => void
}

let employer : Employee = {
    id : 1,
    name : 'din',
    retire:(date:Date) =>{
        console.log(date);
    }
}

// Union Type

function kgTolbs(weight : number | string): number {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2 
}
kgTolbs(10)
kgTolbs('10kg')

// Intersection Type

type Draggable = {
    drag: () => void
};

type Resize = {
    resize: () => void 
};

type UIWidget = Draggable & Resize;

let textBox: UIWidget = {
    drag:() => {},
    resize:() => {}
}

// literal Type
// instead of data type the actual value itself act as data type

type Num = 20 | 50
let quantity: Num = 50;

// its for all datatype

// Nullable Type

