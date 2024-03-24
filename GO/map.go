package main

import "fmt"

func main(){
	// map - similar to dictionary in Python
	menu := map[string]float64{// this is the format of map where the key is string and value is float  
		"soup": 4.99,
		"coffee": 10,
		"corn": 25.5,
		"salad": 15.99,
	}
	fmt.Println(menu)
	fmt.Println(menu["salad"])

	// looping in map

	for key,val := range menu{
		fmt.Println(key, "-", val)
	}
	menu["salad"] = 29
	fmt.Println(menu) 
}
