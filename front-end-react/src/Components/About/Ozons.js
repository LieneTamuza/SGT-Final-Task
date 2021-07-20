import aboutOzons from '../../Assets/Images/about_ozons.JPG';

function Ozons() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <img className="img-fluid" src={aboutOzons} alt="Beach flag" />
                </div>
                <div class="col-12 col-sm-8">
                    <p>Orienteering club Ozons was established on December 4th, 2010 by uniting two strong Riga
                        clubs - Riga Pupils Palace and Viga.</p>
                    <p>Since then Ozons has organised various national level orienteering competitons and its
                        members have represented national team in international level championships. Since 2020
                        Ozons is the main organising club of Easter Prize, taking over this responsibilty from
                        OK Mona.</p>
                </div>
            </div>
        </div>
    );
}

export default Ozons;