package main

import (
	"fmt"
	"strings"
)

func main(){
	greets := "hello friends!"
	fmt.Println(strings.Contains(greets, "hello"))
	fmt.Println(strings.ReplaceAll(greets, "hello", "hi"))
}