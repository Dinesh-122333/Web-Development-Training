package main

import "fmt"

func main(){

	var ages [3]int = [3]int{20,25,30}// declaration of array
	var age = [3]int{125,50}
	name := [4]string{"sasuke", "Pain", "Nagato", "Naruto"}

	fmt.Println(ages)
	fmt.Println(age)
	fmt.Println(ages, len(ages))// function to find lenght of the array
	fmt.Println(name)

	//Slices(list in python where no size mentioned)
	var scores = []int{100,90,80}
	scores[2] = 25
	scores = append(scores, 30)
	fmt.Println(scores)

	// Slice ranges
	rangeOne := name[1:3]
	rangeTwo := name[2:]
	rangeThree := name[:3]
	fmt.Println(rangeOne, rangeTwo, rangeThree)

}