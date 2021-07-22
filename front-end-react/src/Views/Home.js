import { NavLink } from 'react-router-dom';
import articles from '../Data/Articles';
import home_1 from '../Assets/Images/home_1.JPG';
import home_2 from '../Assets/Images/home_2.JPG';
import home_3 from '../Assets/Images/home_3.JPG';
import home_4 from '../Assets/Images/home_4.JPG';
import home_5 from '../Assets/Images/home_5.JPG';
import '../Assets/CSS/style.css';

function Home() {
    const articleElements = articles.map((article, index) => {
        return (
            <div className="col mb-5" key={index}>
                <div class="card h-100">
                    <NavLink to={'/news/' + article.slug}>
                        <img className="card-img-top img-fluid article-image" src={article.mainImage} alt="..." />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title text-right"><NavLink to={'/news/' + article.slug}>{article.title}</NavLink></h5>
                        <p className="card-text">{article.topic}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={home_1} className="img-fluid d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={home_2} className="img-fluid d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={home_3} className="img-fluid d-block w-100" alt="Slide 3" />
                            </div>
                            <div className="carousel-item">
                                <img src={home_4} className="img-fluid d-block w-100" alt="Slide 4" />
                            </div>
                            <div className="carousel-item">
                                <img src={home_5} className="img-fluid d-block w-100" alt="Slide 5" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm">
                    <h3>Latest news:</h3>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {articleElements}
            </div>
        </div>
    );
}

export default Home;