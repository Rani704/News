import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import "./App.css"

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = 'be6b3e1eee6543b4b9adf9c3b6d30944';
  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchArticles = async () => {
      const categoryParam = category ? `&category=${category}` : '';
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${PAGE_SIZE}&page=${currentPage}${categoryParam}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / PAGE_SIZE));
    };

    fetchArticles();
  }, [category, currentPage]);

  return (
    <Router>
      <div className="App">
        <h1 className='text-center'>Latest <span className='badge bg-danger'>News</span></h1>
        <Filter setCategory={setCategory} />
        <ArticleList articles={articles} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Router>
  );
};

export default App;
