import queryDB from "../config/db.js";

const Post = {
  getAll: async () => {
    const result = await queryDB("SELECT * FROM posts ORDER BY date DESC");
    return result;
  },

  getById: async (id) => {
    const result = await queryDB("SELECT * FROM posts WHERE id = $1", [id]);
    return result[0];
  },

  create: async (author, title, content, cover) => {
    const result = await queryDB(
      "INSERT INTO posts (author, title, content, cover) VALUES ($1, $2, $3, $4) RETURNING *",
      [author, title, content, cover]
    );
    return result[0];
  },

  update: async (id, author, title, content, cover) => {
    const result = await queryDB(
      "UPDATE posts SET author = $1, title = $2, content = $3, cover = $4, date = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *",
      [author, title, content, cover, id]
    );
    return result[0];
  },

  delete: async (id) => {
    const result = await queryDB(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );
    return result[0];
  },
};

export default Post;
