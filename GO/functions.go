package main

import ("fmt")

// function - user defined
func sayJii(n string, roll int){ // n is argument and its type is string
	fmt.Printf("Good morning %v today your number is %v\n", n, roll)
}

func saybye(n string){ // n is argument and its type is string
	fmt.Printf("Good bye %v\n", n)
}

func cycleName(n []string, f func(string)){
	for _, val := range n{
		f(val)
	}
}

func main(){
	sayJii("Dinesh", 11)
	saybye("Tom")
	sayJii("Deril", 10)

	cycleName([]string{"Tom", "Jayson", "Arthi", "Naveen"}, saybye)
}