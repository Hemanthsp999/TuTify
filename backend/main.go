package main

import (
	"backend/api"
	"backend/database"
	"fmt"
	"log"
	"net/http"
)

const Port = 4040

func main() {
	var App api.Application

	App.Domain = "http://www.tutify.com"

	
	Database, err := database.Db.Initialization()
	if err != nil {
		fmt.Println("Error in connecting with DataBase", Database)
	}
	log.Println("Starting server at PORT ", Port)

	http.HandleFunc("/", App.Home)
	http.HandleFunc("/signup", App.SignUp)
	http.HandleFunc("/login", App.Login)

	myServer := http.ListenAndServe(fmt.Sprintf(":%d", Port), App.Routes())
	if myServer != nil {
		log.Fatal(myServer)
	}


}
