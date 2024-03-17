package main

import 	"fmt"


func main(){
	// Making while by for loop
	x := 0
	for x < 5{
		fmt.Println("value of x: ", x)
		x++
	}
	fmt.Println()
	for i := 5; i < 0; i-- {
		fmt.Println("value of i: ", i)
	}

	name := []string{"sasuke", "Pain", "Nagato", "Naruto"}
	for i := 0; i < len(name); i++{
		fmt.Println(name[i])
	}

	for index, val := range name{ // it is like "for ele in range" in python
		fmt.Println(index, val)
	}
}