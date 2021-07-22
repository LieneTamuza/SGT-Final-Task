import { useParams } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
import articles from '../Data/Articles';
import Breadcrumb from '../Components/Breadcrumb';

function Article() {
    const { articleId } = useParams();
    const filteredArticles = articles.filter((article) => { return articleId === article.slug });
    const article = filteredArticles[0];

    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/news', title: 'News' },
        { title: article.title }
    ];

    const imageThumbnails = article.images.map((image, index) => {
        return (
            <div className="col-4 mt-3" key={index}>
                <a href={image}>
                    <img className="img-fluid" src={image} alt="Easter Prize 2020"/>
                </a>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h1>{article.title}</h1>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 col-md-5">
                    <SRLWrapper>
                        <div className="row">
                            <div className="col">
                                <img src={article.mainImage} className="img-fluid" alt="Easter Prize 2020" />
                            </div>
                        </div>
                        <div className="row">
                            {imageThumbnails}
                        </div>
                    </SRLWrapper>
                </div>
                <div className="col-12 col-md-7">
                    <p>{article.paragraphs}</p>
                </div>
            </div>
        </div>
    );
}

export default Article;