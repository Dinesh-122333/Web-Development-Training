package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    // Initialize the Gin engine
    r := gin.Default()

    // Define a route
    r.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "Hello, World!",
        })
    })

    // Run the server
    r.Run(":8080")
}
