import GoogleMapReact from 'google-map-react';
import { GoogleAPIKey } from './GoogleApiKey';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {


    // const defaultProps = {
    //     center: {
    //         lat: 10.99835602,
    //         lng: 77.01502627
    //     },
    //     zoom: 11
    // };


    
    return (
        <>
            {/* <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GoogleAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div> */}

            <div className='h-[700px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.59582344243!2d90.08645837586012!3d21.988470054124893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa846fcf36572d%3A0xc066246d89492f9d!2sTaltoli%20Upozila%20Health%20Complex!5e0!3m2!1sen!2sbd!4v1708780217453!5m2!1sen!2sbd" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
};

export default Map;