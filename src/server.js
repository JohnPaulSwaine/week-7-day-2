const express = require("express");
const app = express()

app.use(express.json())

const bookList = [

]

book_id = 1

app.post("/book", (request, response) => {

    console.log(request.body)

    const book = {
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
        id: book_id
    }
    
    bookList.push(book)
    book_id += 1

    const successResponse = {
        message: "book successfully created.",
        book: bookList
    }
    response.send(successResponse)
})

// to create a book in the array of objects

app.get("/book", (request, response) => {
    const successResponse = {
        message: "List of books is currently: ",
        books: bookList
    }
    response.send(successResponse)
})

// to read the array of objects (books)

app.put("/book", (request, response) => {
    const findBook = (x) => {
        return x.title === request.body.title
    }
    const index = bookList.findIndex(findBook)
    if (index !== -1) {
        bookList[index].author = request.body.author
        bookList[index].genre = request.body.genre
        responseMessage = {
            message: "Author and Genre have been updated.",
            book: bookList[index],
            books: bookList
        }
    } else {
        responseMessage = {
            msg: "Title not found.",
            book: request.body.title
        }
    }

    response.send(responseMessage)

})

// to update a book in the array of objects

app.delete("/book", (request, response)=>{
    function findBook (x) {
        return x.title === request.body.title

    }
    const index = bookList.findIndex(findBook)

    bookList.splice(index, 1)

    responseMessage = {
        msg: "Book has been deleted",
        book: request.body.title,
        books: bookList
    }

    response.send(responseMessage)

})

// to delete a book in the array of objects

app.listen(5001, ()=> {
    console.log("server is successfully running on port 5001!")
})