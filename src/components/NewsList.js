// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

function NewsList() {
  const [arti, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = arti.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f8635ef469e246d9aac1c836bb19e539"
      );
      setArticles(res.data.articles);
      setLoading(false);
      //   console.log(res.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div className="news-item">
      <div className="child-item">
        {currentPosts.map((item) => {
          return <NewsItem item={item} loading={loading} />;
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={arti.length}
        paginate={paginate}
      />
    </div>
  );
}

export default NewsList;
