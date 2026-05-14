module.exports = (req, res, next) => {
  const { title, content, author } = req.body;

  const missing = [];

  if (!title || !title.trim()) missing.push("title");
  if (!content || !content.trim()) missing.push("content");
  if (!author || !author.trim()) missing.push("author");

  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
      missing
    });
  }

  next();
};
