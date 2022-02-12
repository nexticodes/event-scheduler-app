import "./AddressMap.css";
import GoogleMapReact from 'google-map-react';


const AddressMap = ({location}) => {
  return (
      
    <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDLzEROkaEHfE0C77wUQq7De6FK3tMhS9M' }}
          defaultCenter={{lat: location.lat, lng: location.lng}}
          defaultZoom={12}
        >
            <p lat={location.lat} lng={location.lng}>P</p>
        </GoogleMapReact>
    </div>
  );
};

export default AddressMap;
