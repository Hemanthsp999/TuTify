package api

import "net/http"

func (App *Application) EnableCROS(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")

		if r.Method == "OPTIONS" {
			w.Header().Set("Access-Control-Allow-Credentails", "true")
			w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,OPTIONS,DELETE")
			w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, X-CSRF-Token, Authorization, X-Requested-With")
			return
		} else {
			h.ServeHTTP(w, r)
		}
	})
}
