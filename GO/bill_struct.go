package main

import "fmt"

type bill struct {
	name  string
	items map[string]float64
	tip   float64
}

// make new bills
func newBill(name string) bill {
	b := bill{
		name:  name,
		items: map[string]float64{"candy": 5.65, "cookies": 10.20, "cake": 459.9},
		tip:   0,
	}
	return b
}

// format the bill (Reciver Fuction)

func (b bill) format() string { // its a function which return string and reciver function by adding the struct as a parameter
	fs := "Bill Breakdown: \n"
	var total float64 = 0

	for k, v := range b.items {
		fs += fmt.Sprintf("%v ...$%v \n", k+":", v)
		total += v
	}
	// total
	fs += fmt.Sprintf("%v ....$%0.2f", "total: ", total)

	return fs
}