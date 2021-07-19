import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';
import Breadcrumb from '../Components/Breadcrumb';

function News() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'News' },
    ];

    const newsElements = articles.map((article, index) => {
        return (
            <div className="row mb-3 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/news/article/' + article.slug}>
                        <img className="img-fluid" src={article.mainImage} />
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

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>News</h1>
                </div>
            </div>
            {newsElements}
        </div>
    );
}

export default News;