const store = {
  posts: [
    {
      id: 1,
      title: "First Post",
      content: "Learning Node.js",
      author: "John",
      likes: 0,
      comments: []
    }
  ],
  users: [],
  nextPostId: 2,
  nextUserId: 1,
  nextCommentId: 1
};

module.exports = store;
