const articleService = require('../services/articleService');

async function getAllPost(request, reply) {
    const articles = await articleService.getAllArticles();
    return reply.code(200).send(articles);
}

async function createPost(request, reply) {
    const { title, content } = request.body;
    const newArticle = await articleService.createArticle({ title, content });
    return reply.code(200).send(newArticle);
}

async function updatePost(request, reply) {
    const { id } = request.params;
    const {title, content} = request.body;
    try {
        const affected = await articleService.updateArticle(id, { title, content });
        if (affected === 0) return reply.code(404).send();
        return reply.code(200).send({ id, title, content, message: 'Post updated successfully'});
    } catch (err) {
        request.log.error(err);
        return reply.code(500).send({ error: 'Failed to update post' });
    }
}

async function deletePost(request, reply) {
    const { id } = request.params;
    try {
        const affected = await articleService.deleteArticle(id);
        if (affected === 0) return reply.code(404).send();

        return reply.code(200).send({ message: 'Post deleted successfully' });
    } catch (err) {
        request.log.error(err);
        return reply.code(500).send({ error: 'Failed to delete post' });
    }
}

module.exports = {
    getAllPost,
    createPost,
    updatePost,
    deletePost,
}