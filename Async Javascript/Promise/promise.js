let stocks = {
    fruits : ['apple', 'banana', 'custurd apple', "grapes"],
    liquid : ['water', 'milk'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocochips', 'peanuts', 'sprikles', 'gems']
}


let is_shop_open = true;
// relation b/w time and work 
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
            
        }
        else{
            reject(console.log('our shop is closed'));
        }
    });
}

order(2000, () => console.log(`${stocks.fruits[0]}`))

// promise chaining 
// using above as code

.then(() =>{
    return order(0, () => console.log("Production has start"))
})

.then(() => {
    return order(2000, () => console.log("fruits as been choped"))
})

.then(() =>{
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`));
})

.then(() =>{
    return order(2000, () => console.log(`my selected holder is ${stocks.holder[0]}`))
})

.then(() => {
    return order(1000, () => console.log(`topping is ${stocks.toppings[2]}`))
})
    

//Error handling

.catch(() => {
    console.log("Customer left")
})

// finally handler

.finally(() =>{
    console.log("day ended, shop is closed")
})