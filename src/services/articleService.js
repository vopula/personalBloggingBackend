const db = require('../db/index');

async function getAllArticles() {
    const [rows] = await db.query('SELECT * FROM articles');
    return rows;
}

async function createArticle({title, content}) {
    const [result] = await db.query(
        'INSERT INTO articles (title, content) VALUES (?, ?)',
        [title, content]
    );
    return {id: result.insertId, title, content};
}

async function updateArticle(id, {title, content}) {
    const [result] = await db.query(
        'UPDATE articles SET title = ?, content = ? WHERE id = ?',
        [title, content, id]
    );
    return result.affectedRows;
}

async function deleteArticle(id) {
    const [result] = await db.query('DELETE FROM articles WHERE id = ?', [id]);
    return result.affectedRows;
}

module.exports = {
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle,
}