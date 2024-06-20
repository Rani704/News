import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Article key={article.url}image={article.image} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
