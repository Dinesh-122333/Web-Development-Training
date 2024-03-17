package main

import "fmt"

func main(){
	age := 20
	fmt.Println(age < 5)
	fmt.Println(age != 7)
	fmt.Println(age > 5)

	if age > 18{
		fmt.Println("Your eligble to vote")
	}else if age < 18 {
		fmt.Println("Your not eligble to vote")
	}else{
		fmt.Println("your No")
	}

	// Break
	name := [5]string{"sasuke", "Pain", "Nagato", "Naruto", "Itachi"}

	for index, val := range name{
		if index == 4{
			break
		}else if  index == 2{
			fmt.Println("the index: ", index)
			continue
		}

		fmt.Println(index, val)
	}
}