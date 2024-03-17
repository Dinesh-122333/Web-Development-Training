package main

import "fmt"

func main(){

	// print
	var name string ="Dinesh S"
	fmt.Print("hello,\n")// \n - gives new line
	fmt.Println("World")
	fmt.Print("hi its ", name, " Welcome to my pratice section \n")

	// printf(formating string)
	var every string = "everyone"
	page := 100
	fmt.Printf("hi %v and welcome to %v \n", every, page)
	fmt.Printf("hi %q and welcome to %q \n", every, page)
	fmt.Printf("this is my page no : %T \n", page)
}