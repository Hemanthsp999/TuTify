package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (App *Application) Routes() http.Handler {
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)

	mux.Use(App.EnableCROS)

	mux.Options("/", App.Home)

	mux.Post("/signup", App.SignUp)

	mux.Post("/login", App.Login)
	return mux
}
