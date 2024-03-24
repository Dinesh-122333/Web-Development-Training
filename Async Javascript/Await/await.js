let stocks = {
    fruits : ['apple', 'banana', 'custurd apple', "grapes"],
    liquid : ['water', 'milk'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocochips', 'peanuts', 'sprikles', 'gems']
}


let is_shop_open = true;

// let toppingschoice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which topping your going to choose"))
            
//         },3000)


//     })
// }

// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")
     
//     await toppingschoice()


//     console.log("D")
//     console.log("E")

// }

// kitchen()

// console.log("cleaning the dishes")
// console.log("cleaning the table")
// console.log("taking others orders")

function time(ms){
    return new Promise((resolve,reject) =>{
        if (is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[2]}`)

        await(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added `)

        // like that it goes on...
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen()