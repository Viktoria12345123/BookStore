const express = require("express");
const { getAllBooks, getBookById } = require("../services/bookService");



const router = express.Router();
console.log("Registering catalog route...");

router.get("/catalog", async (req, res) => {
    try {
        const books = await getAllBooks();

        
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

router.get("/catalog/:bookId", async (req,res)=> {
    const bookId = req.params.bookId
    const book = await getBookById(bookId)

    res.status(200).json(book)
})

module.exports = router;
