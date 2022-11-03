const router = require(`express`).Router();

const { BookModel } = require("../models/db")



router.get('/', async (req, res, next) => {
  try {
      const books = await BookModel.find();
      return res.send(books);
  } catch (err) {
      return next (err);
  }
});

router.post('/create', async (req, res, next) =>{
  try {
      const newBook = await BookModel.create(req.body);
      return res.status(201).send(newBook);
  } catch (err) {
      return next(err);
  }
});



module.exports = router;