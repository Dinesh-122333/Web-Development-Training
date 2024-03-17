package main

import ("fmt" ;"strings")

func getInit(n string) (string, string){
	s := strings.ToUpper(n)
	names := strings.Split(s, " ")
	var init []string
	for _, val := range names{
		init = append(init, val[:1])
	}

	if len(init) > 1{
		return init[0], init[1]
	}else{
		return init[0],"_"
	}

}

func main()  {
	fn1, sn1 := getInit("hari ria")
	fmt.Println(fn1, sn1)
}