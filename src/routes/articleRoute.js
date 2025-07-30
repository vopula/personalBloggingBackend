const postController = require('../controllers/articleController');

async function postRoutes (fastify, options) {
    fastify.get('/', {
        schema: {
            reponse: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {type: 'integer'},
                            title: {type: 'string'},
                            content: {type: 'string'}
                        }
                    }
                }
            }
        }
    }, postController.getAllPost);

    fastify.post('/', {
        schema: {
            body: {
                type: 'object',
                required: ['title', 'content'],
                properties: {
                    title: {type: 'string'},
                    content: {type: 'string'},
                }
            }
        }
    }, postController.createPost);

    fastify.put('/:id', {
        schema: {
            body: {
                type: 'object',
                required: ['title', 'content'],
                properties: {
                    title: {type: 'string'},
                    content: {type: 'string'},
                }
            },
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: {type: 'integer'}
                }
            }
        }
    }, postController.updatePost)

    fastify.delete('/:id', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: {type: 'integer'}
                }
            }
        }
    }, postController.deletePost)

    // fastify.put('/:id', {
    //     schema: {
    //         body: {
    //             type: 'object',
    //             required: ['title', 'content'],
    //             properties: {
    //                 title: {type: 'string'},
    //                 content: {type: 'string'},
    //             }
    //         },
    //         params: {
    //             type: 'object',
    //             properties: {
    //                 id: {type: 'integer'}
    //             }
    //         }
    //     }
    // }, postController.updatePost);

    // fastify.delete('/:id', {
    //     schema: {
    //         params: {
    //             type: 'object',
    //             properties: {
    //             id: { type: 'integer' }
    //             }
    //         }
    //     }
    // }, postController.deletePost);
}

module.exports = postRoutes