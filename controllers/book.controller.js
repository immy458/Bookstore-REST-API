var bookservice = require("../services/book.service");

class BookController {
    static getBooks(req, res) {     //req contains the req the user passes
        bookservice.getBooks((err, results) => {        //here we call the getUSers service    
            if (err) {
                console.log("error: ", err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    static searchBooks(req, res) {
        const body = req.body;
        bookservice.searchBooks(body, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    static addBook(req, res) {
        const body = req.body;
        bookservice.addBook(body, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    static updateBook(req, res) {
        const body = req.body;
        bookservice.updateBook(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (results.affectedRows == 0) {
                return res.json({
                    success: 0,
                    message: "Failed to Update"
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    }
    static unpublishBook(req, res) {
        bookservice.unpublishBook((err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            if (results.affectedRows == 0) {
                return res.json({
                    success: 0,
                    message: "Record Not Found"
                });
            }
            return res.json({
                success: 1,
                message: "deleted successfully"
            });
        });
    }
}
module.exports = BookController;
