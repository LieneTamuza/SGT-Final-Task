import aboutCollaboration from '../../Assets/Images/about_collaboration.JPG';

function Collaboration() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <img className="img-fluid" src={aboutCollaboration} alt="Poster with Latvian sign - Austra's tree" />
                </div>
                <div class="col-12 col-sm-8">
                    <p>Easter Prize orienteering competion, as a part of national sprint orienteering league, is
                        organised together with Latvian Orienteering Federation.</p>
                    <p>History (results, maps, photos) of previous Easter Prize editions can be found in OK Mona
                        website.</p>
                </div>
            </div>
        </div>
    );
}

export default Collaboration;