import aboutEasterPrize from '../../Assets/Images/about_easter_prize.JPG';

function EasterPrize() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <img className="img-fluid" src={aboutEasterPrize} alt="Child orienteering in a park" />
                </div>
                <div class="col-12 col-sm-8">
                    <p>Easter prize is the oldest orienteering sprint competition in Latvia. It was first held
                        back in 2002 and since then has always been a starting point for the summer orienteering
                        season, taking place on Easter Monday. It is always organised in the streets and parks
                        of Riga, offering fast running and exciting orienteering challenges for sprint
                        orienteering fans.</p>
                </div>
            </div>
        </div>
    );
}

export default EasterPrize;