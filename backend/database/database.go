package database

// go mod tidy for matching with source code

import (
	"backend/internal/model"
	"context"
	"encoding/json"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type Database struct {
	client            *mongo.Client
	studentCollection *mongo.Collection
	StaffCollection   *mongo.Collection
}

var Db Database

func (Db *Database) Initialization() (mongo.Client, error) {
	var err error
	Db.client, err = mongo.Connect(context.Background())
	if err != nil {
		log.Fatal("facing error in DataBase Initialization", err)
	}

	if err != nil {
		log.Fatal(err)
	}

	if err := Db.client.Ping(context.Background(), readpref.Primary()); err != nil {
		panic(err)
	}

	Db.studentCollection = Db.client.Database("Tutify").Collection("studentUser")
	return mongo.Client{}, nil
}

func (Db *Database) AddUser(user *model.User) (*mongo.Collection, error) {
	var err error
	SUserCollection, err := Db.studentCollection.InsertOne(context.TODO(), &user)
	if err != nil {
		log.Fatal("Error in  Adding user", err)
	}
	fmt.Println(SUserCollection.InsertedID)
	return &mongo.Collection{}, nil
}

func (Db *Database) GetUserbyId(email string) (model.User, error) {
	var user model.User
	validUser := Db.studentCollection.FindOne(context.TODO(), bson.M{"email": email}).Decode(&user)

	DecodeJson, err := json.Marshal(user)
	if err != nil {
		panic(err)
	}
	if validUser == nil {
		fmt.Printf("data is %s\n", DecodeJson)
	} else {
		fmt.Printf("data not found")
	}

	return user, err
}
