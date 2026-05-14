const store = require("../data/store");

// Helper (removes repetition)
const findPost = (id) =>
  store.posts.find(p => p.id === Number(id));

// STANDARD RESPONSE FORMAT
const response = {
  success: (res, data, message = "OK", status = 200) =>
    res.status(status).json({ success: true, message, data }),

  fail: (res, message = "Error", status = 400) =>
    res.status(status).json({ success: false, message })
};

// GET ALL POSTS (filter + search + pagination + sort)
exports.getAllPosts = (req, res) => {
  let posts = [...store.posts];

  const { author, search, sort, page = 1, limit = 10 } = req.query;

  if (author) {
    posts = posts.filter(p =>
      p.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (search) {
    posts = posts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "newest") posts.sort((a, b) => b.id - a.id);
  if (sort === "oldest") posts.sort((a, b) => a.id - b.id);

  const pageNum = Math.max(Number(page) || 1, 1);
  const limitNum = Math.max(Number(limit) || 10, 1);

  const start = (pageNum - 1) * limitNum;
  const paginated = posts.slice(start, start + limitNum);

  return response.success(res, {
    total: posts.length,
    page: pageNum,
    limit: limitNum,
    data: paginated
  });
};

// GET ONE POST
exports.getPostById = (req, res) => {
  const post = findPost(req.params.id);

  if (!post) return response.fail(res, "Post not found", 404);

  return response.success(res, post);
};

// CREATE POST
exports.createPost = (req, res) => {
  const { title, content, author } = req.body;

  const newPost = {
    id: store.nextPostId++,
    title,
    content,
    author,
    likes: 0,
    comments: []
  };

  store.posts.push(newPost);

  return response.success(res, newPost, "Post created", 201);
};

// UPDATE POST
exports.updatePost = (req, res) => {
  const post = findPost(req.params.id);

  if (!post) return response.fail(res, "Post not found", 404);

  const { title, content, author } = req.body;

  if (title) post.title = title;
  if (content) post.content = content;
  if (author) post.author = author;

  return response.success(res, post, "Post updated");
};

// DELETE POST
exports.deletePost = (req, res) => {
  const index = store.posts.findIndex(p => p.id === Number(req.params.id));

  if (index === -1) return response.fail(res, "Post not found", 404);

  store.posts.splice(index, 1);

  return response.success(res, null, "Post deleted");
};

// LIKE POST
exports.likePost = (req, res) => {
  const post = findPost(req.params.id);

  if (!post) return response.fail(res, "Post not found", 404);

  post.likes = (post.likes || 0) + 1;

  return response.success(res, post, "Post liked");
};

// GET COMMENTS
exports.getComments = (req, res) => {
  const post = findPost(req.params.id);

  if (!post) return response.fail(res, "Post not found", 404);

  return response.success(res, post.comments);
};

// ADD COMMENT
exports.addComment = (req, res) => {
  const post = findPost(req.params.id);

  if (!post) return response.fail(res, "Post not found", 404);

  const { text } = req.body;

  if (!text || !text.trim()) {
    return response.fail(res, "Comment text required", 400);
  }

  const comment = {
    id: store.nextCommentId++,
    text: text.trim()
  };

  post.comments.push(comment);

  return response.success(res, comment, "Comment added", 201);
};

// DELETE COMMENT
exports.deleteComment = (req, res) => {
  const post = findPost(req.params.postId);

  if (!post) return response.fail(res, "Post not found", 404);

  const index = post.comments.findIndex(
    c => c.id === Number(req.params.commentId)
  );

  if (index === -1) {
    return response.fail(res, "Comment not found", 404);
  }

  post.comments.splice(index, 1);

  return response.success(res, null, "Comment deleted");
};
