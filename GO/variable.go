package main

import "fmt"

func main(){
	// strings
	// var nameOne string = "dinesh"
	// var nameTwo string = "Gara"
	// var nameThree string
	
	// fmt.Println(nameOne, nameTwo, nameThree)
	// nameOne = "Naruto"
	// nameThree = "Sasuke"
	// fmt.Println(nameOne, nameTwo, nameThree)
	// nameFour := "Tanjiro"// shorthand for above declarations
	// fmt.Print(nameFour, nameThree)
	// fmt.Println()

	// // integers
	// var ageOne int = 21
	// var ageTwo = 22
	// age := 31
	// fmt.Println(ageOne, ageTwo , age)

	// Bits & Memory
	var num int8 = 25 // it will see it range where 8 range to -128 to 127
	var num2 uint16 = 215 // it is 0 - 32767 range where no negataive value 

	fmt.Println(num, num2)  

	// float
	var score float32 = -1.2
	var score2 float64  = 999999999.90
	score3 := 1.999999927 // in default it makes float64 
	fmt.Println(score, score2, score3)
}
