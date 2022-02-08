class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(newBoard) {
        const existboardname = this.boards.find((i) => i.name === newBoard.name);
        if (!existboardname) {
            newBoard.siteBoard = true;
            this.boards.push(newBoard);
        } else {
            throw new Error('에헤이~ 틀렸다잉~ 돌아가');
        }
    }

    findBoardByName(findBoard) {
        return this.boards.find((i) => i.name === findBoard);
    }
}

class Board {
    constructor(boardName) {
        if (boardName === '' || boardName === null) {
            throw new Error('에헤이~ 틀렸다잉~ 돌아가');
        } else {
            this.name = boardName;
            this.siteBoard = false;
            this.articles = [];
        }
    }
    publish(article) {
        if (this.siteBoard === false) {
            throw new Error('에헤이~ 틀렸다잉~ 돌아가');
        } else {
            article.id = `${this.name}-${Math.random()}`;
            const date = new Date();
            article.createdDate = date.toISOString();
            article.boardArticle = true;
            this.articles.push(article);
        }
    }
    getAllArticles() {
        return this.articles
    }
}

class Article {
    constructor(articleElements) {
        if (
            articleElements.subject === ('' || null) ||
            articleElements.content === ('' || null) ||
            articleElements.author === ('' || null)
        ) {
            throw new Error('에헤이~ 틀렸다잉~ 돌아가');
        } else {
            this.comments = [];
            this.boardArticle = false;
        }
    }
    reply(comment) {
        if (this.boardArticle === false) {
            throw new Error('에헤이~ 틀렸다잉~ 돌아가');
        } else {
            const date = new Date();
            comment.createdDate = date.toISOString();
            this.comments.push(comment)
        }
    }
    getAllComments() {
        return this.comments
    }
}

class Comment {
    constructor(comment) {
        if (comment.content === ('' || null) || comment.author === ('' || null)) {
            throw new Error('에헤이~ 틀렸다잉~ 돌아가');
        } 
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
