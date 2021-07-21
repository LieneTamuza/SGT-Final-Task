import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Contacts() {
    const mapStyles = {
        height: "50vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 56.96193048089572, lng: 24.23678462743227
    };

    const locations = [
        {
            name: "Event center",
            location: {
                lat: 56.96193048089572,
                lng: 24.23678462743227
            },
        },
    ];

    return (
        <div className="container mb-5">
            <h5 className="fw-bolder">Contacts</h5>
            <div className="row">
                <div className="col-12 col-md-8">
                    <LoadScript
                        googleMapsApiKey="AIzaSyCudfpUTAwz5lh2KwiKlQNgpCPHotU-Gfg">
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={13}
                            center={defaultCenter}>
                            {
                                locations.map(item => {
                                    return (
                                        <Marker key={item.name} position={item.location} />
                                    );
                                })
                            }
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="col-12 col-md-4 mt-5">
                    <div className="row mb-3">
                        <div className="col">
                            <h5 className="cont-info-heading">Address:</h5>
                            <p className="cont-info-txt">Sports complex "Mežciems", Hipokrāta iela 27, Rīga</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            <h5 className="cont-info-heading">Email:</h5>
                            <p className="cont-info-txt">info@ozonsok.lv</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <h5 className="cont-info-heading">Phone:</h5>
                            <p className="cont-info-txt">+371 26685479</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;