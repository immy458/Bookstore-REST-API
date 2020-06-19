const pool = require("../connection");
var username = require('../server');
console.log(pool);
class BookService {
    static getBooks(callBack) {
        var user = username.name; 
        if(user=="Darth Vader")
        {
            const results="sorry you cannot perform anyy operation!!"
           return callBack(null,results);
        }
        pool.query(
            `SELECT * FROM book`,
            (error, results) => {
                if (error) {
                    console.log("error: ", error);
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
    static searchBooks(data, callBack) {      //search based on author
        var user = username.name; 
        if(user=="Darth Vader")
        {
            const results="sorry you cannot perform anyy operation!!"
           return callBack(null,results);
        }
        pool.query(
            `SELECT * FROM book where author=?`,
            [
                data.author
            ],
            (error, results) => {
                if (error) {
                    console.log("error: ", error);
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
    static addBook(data, callBack) {
        var user = username.name; 
        if(user=="Darth Vader")
        {
            const results="sorry you cannot perform anyy operation!!"
           return callBack(null,results);
        }
        pool.query(
            `insert into book(title,author,description,cover_image,price)values(?,?,?,?,?)`,
            [
                data.title,
                data.author,
                data.description,
                data.cover_image,
                data.price
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

    static updateBook(data, callBack) {
      //  console.log("Username---------:  ", username.name);
        var user = username.name; //keeps info about the user who has logged in.
        if(user=="Darth Vader")
        {
            const results="sorry you cannot perform anyy operation!!"
           return callBack(null,results);
        }
        pool.query(
            `update book set title=?,description=?,price=? where author='${user}'`,   //author can only update info about his/her books
            [
                data.title,
                data.description,
                data.price
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

    static unpublishBook(callBack) {
        console.log("Username---------:  ", username.name);
        var user = username.name; //keeps info about the user who has logged in.
        if(user=="Darth Vader")
        {
            const results="sorry you cannot perform anyy operation!!"
           return callBack(null,results);
        }
        pool.query(
            `delete from book where author='${user}'`,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}
module.exports = BookService;
