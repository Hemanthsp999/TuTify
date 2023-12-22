package model

type User struct {
	Name      string `json:"name,omitempty"`
	Email      string `json:"email,omitempty"`
	Phone      string `json:"Phone Number,omitempty"`
	USN        string `json:"USN,omitempty"`
	Department string `json:"Department,omitempty"`
	DId        string `json:"DId,omitempty"`
	Stream     string `json:"stream,omitempty"`
	Password   string `json:"Password,omitempty" `
}
