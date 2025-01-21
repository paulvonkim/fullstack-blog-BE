import Post from "../models/postModel.js";

// GET /posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

// GET /posts/:id
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.getById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the post" });
  }
};

// POST /posts
const createPost = async (req, res) => {
  const { author, title, content, cover } = req.body;
  try {
    const newPost = await Post.create(author, title, content, cover);
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create the post" });
  }
};

// PUT /posts/:id
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { author, title, content, cover } = req.body;
  try {
    const updatedPost = await Post.update(id, author, title, content, cover);
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the post" });
  }
};

// DELETE /posts/:id
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.delete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res
      .status(200)
      .json({ message: "Post deleted successfully", post: deletedPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the post" });
  }
};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
