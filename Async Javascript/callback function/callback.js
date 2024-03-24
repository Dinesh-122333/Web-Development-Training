// callback
// 1
// function one (call_three) {
//     call_three()
//     console.log('step one complete, please call step3');
    
// }

// function two () {
//     console.log('step two')

// }

// function three () {
//     console.log('step three')
// }

// one(three);

// 2
let stocks = {
    fruits : ['apple', 'banana', 'custurd apple', "grapes"],
    liquid : ['water', 'milk'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocochips', 'peanuts', 'sprikles', 'gems']
}


let order = (fruits_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruits_name]} was selected`)
        call_production();

    }, 2000);
    
};


// callback hell
let production = () => {
    setTimeout(() => {
        console.log('production has started');

        setTimeout(() =>{
            console.log('fruits has been choped')

            setTimeout(() =>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                
                setTimeout(() => {
                    console.log('the machine was started')
                    
                    setTimeout(() => {
                        console.log(`icecream is placed in ${stocks.holder[0]} `)
                        
                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} is my selected topping`)
                        })
                    }, 2000)
                }, 1000)
            },1000);
        }, 2000)
    }, 0)  
};



order (0, production)