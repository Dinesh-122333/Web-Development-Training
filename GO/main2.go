 
package main

import "fmt"// package from go std library 
// fmt - formating string and print msg to console 
// func main() {
//     fmt.Println("Hello, world!")
// }

// // calling the greet where package value
// func main(){
//     sayHello("dinesh")

//     for _, v := range pts{
//         fmt.Println(v)
//     }
// }

// Calling the bill_struct where a stuct is passed

func main(){
    myBill := newBill("maria's bill")

    
    //  fmt.Println(myBill)
    fmt.Println(myBill.format())

}