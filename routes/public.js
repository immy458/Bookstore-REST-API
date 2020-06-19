var bookcontroller=require("../controllers/book.controller");
const router=require("express").Router();   //to handle the routes

router.get("/getbooks",bookcontroller.getBooks);
router.get("/searchbooks",bookcontroller.searchBooks);
router.post("/addbook",bookcontroller.addBook);   
router.patch("/updatebook",bookcontroller.updateBook);   
router.delete("/unpublishbook",bookcontroller.unpublishBook);   


module.exports=router;
