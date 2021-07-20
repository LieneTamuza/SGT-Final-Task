import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import '../Assets/CSS/style.css';

function News() {
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(3);

    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'News' },
    ];

    const newsElements = articles.map((article, index) => {
        return (
            <div className="row mb-3 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/news/article/' + article.slug}>
                        <img className="article-image img-fluid" src={article.mainImage} alt="Main" />
                    </NavLink>
                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/news/article/' + article.slug}>{article.title}</NavLink>
                    </h3>
                    <p>
                        {article.topic}
                    </p>
                </div>
            </div>
        );
    })

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* <h2>News</h2> */}
                </div>
            </div>
            <div>
                {newsElements}
            </div>
            <div className="row mb-5">
                <div className="col d-flex justify-content-end">
                    <Pagination
                        articlesPerPage={articlesPerPage}
                        totalArticles={articles.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>
    );
}

export default News;