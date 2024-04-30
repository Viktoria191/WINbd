const express = require('express');
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './public/img');
//   },
//   filename(req, file, cb) {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     cb(null, `${file.fieldname}-${uniqueSuffix}`);
//   },
// });

// const upload = multer({ storage });
const { New } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiNewsRouter = express.Router();

apiNewsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const news = await New.findAll({
        order: [['createdAt', 'DESC']],
      });
      return res.json(news);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      if (!req.body?.title)
        return res.status(500).json({ message: 'Empty reqbody' });
      const { title, text, quote, img } = req.body;
      const novelty = await New.create({
        title,
        text,
        img,
        quote,
        userId: res.locals.user.id,
      });
      return res.status(201).json(novelty);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiNewsRouter.delete('/:id', async (req, res) => {
  await New.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiNewsRouter.put('/:id', async (req, res) => {
  try {
    const novelty = await New.findByPk(req.params.id);
    await novelty.update(req.body);
    const newNovelty = await New.findByPk(novelty.id);
    res.json(newNovelty);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiNewsRouter;
