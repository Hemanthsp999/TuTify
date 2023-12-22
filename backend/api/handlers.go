package api

import (
	"backend/database"
	"backend/internal/model"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

type Application struct {
	Domain string
}

var App Application

func (App *Application) Home(w http.ResponseWriter, r *http.Request) {
	var Model = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "Active",
		Message: "Running",
		Version: "3.9.9.1",
	}

	out, err := json.Marshal(Model)
	if err != nil {
		panic(err)
	}
	fmt.Println(out)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)

}

func Hash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	if err != nil {
		panic(err)
	}
	return string(bytes), nil
}

func (App *Application) SignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		json.NewEncoder(w).Encode(http.StatusNotAcceptable)
		return
	} else {
		if err := r.ParseForm(); err != nil {
			panic(err)
		}

		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			log.Fatal("Error in Parsing Body", err)
		}
		sb := string(body)
		jsonData := make(map[string]interface{})
		json.Unmarshal([]byte(sb), &jsonData)

		fname, _ := jsonData["First Name"].(string)
		lname, _ := jsonData["Last Name"].(string)
		pass, _ := jsonData["Password"].(string)
		email, _ := jsonData["email"].(string)
		usn, _ := jsonData["USN"].(string)
		department, _ := jsonData["department"].(string)
		dId, _ := jsonData["dId"].(string)
		stream, _ := jsonData["stream"].(string)
		phone, _ := jsonData["PhoneNumber"].(string)
		rePass, _ := jsonData["RePassword"].(string)

		if pass == rePass {
			hashPass, _ := Hash(pass)
			User := model.User{
				Fname:      fname,
				Lname:      lname,
				Email:      email,
				USN:        usn,
				Department: department,
				DId:        dId,
				Stream:     stream,
				Phone:      phone,
				Password:   hashPass,
			}

			checkEmail, _ := database.Db.GetUserbyId(User.Email)
			if checkEmail.Email == User.Email {
				fmt.Println("Eamil already existed, try register")
			} else {
				_, err := database.Db.AddUser(&User)
				if err != nil {
					log.Fatal("error in Posting data", err)
				}
				DecodeJson, err := json.Marshal(User)
				fmt.Printf("data is %s", DecodeJson)
				json.NewEncoder(w).Encode(DecodeJson)
			}
		} else {
			fmt.Println("Entered wrong password", rePass)
			json.NewEncoder(w).Encode(http.StatusNotAcceptable)
		}
	}
}

func (App *Application) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		json.NewEncoder(w).Encode(http.StatusNotAcceptable)
		return
	} else {
		if err := r.ParseForm(); err != nil {
			panic(err)
		}

		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			panic(err)
		}

		sb := string(body)
		jsonData := make(map[string]interface{})
		json.Unmarshal([]byte(sb), &jsonData)
		email, _ := jsonData["email"].(string)
		pass, _ := jsonData["pass"].(string)

		db_User, db_err := database.Db.GetUserbyId(email)
		if db_err != nil {
			fmt.Printf("error in finding email %v", &db_err)

		} else {
			fmt.Printf("email found %v", &db_User)
			password_err := bcrypt.CompareHashAndPassword([]byte(db_User.Password), []byte(pass))
			if password_err != nil {
				json.NewEncoder(w).Encode(http.StatusNotFound)
				fmt.Println("password not found")
				return
			} else {
				fmt.Printf("\n\nvalid password: %v\n\n", password_err == nil)
				json.NewEncoder(w).Encode(http.StateActive)
			}
		}
		// returning the data to client
		json.Marshal(db_User)
		json.NewEncoder(w).Encode(&db_User)
	}
}
