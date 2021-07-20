import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Contacts() {
    const mapStyles = {
        height: "50vh",
        width: "100%",
        borderRadius: "5px"
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
            <h4>Contacts</h4>
            <LoadScript
                googleMapsApiKey=''>
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
    );
}

export default Contacts;