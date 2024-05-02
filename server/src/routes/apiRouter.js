const express = require('express');
const multer = require('multer');
const path = require('path');
const { New } = require('../../db/models');

const apiNewsRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage }).fields([{ name: 'img_url', maxCount: 1 }]);

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
  .post((req, res) => {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: 'Ошибка при загрузке файла' });
      }
      try {
        const { title, text, quote, userId } = req.body;
        const img_url = req.files.img_url[0].path;

        const novelty = await New.create({
          title,
          text,
          img_url,
          quote,
          userId,
        });

        return res.status(201).json(novelty);
      } catch (error) {
        return res.status(500).json(error);
      }
    });
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
