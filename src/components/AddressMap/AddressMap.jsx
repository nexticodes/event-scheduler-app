import "./AddressMap.css";
import GoogleMapReact from 'google-map-react';
import {RiMapPin2Fill} from 'react-icons/ri'


const AddressMap = ({location, apiKey}) => {

  return (
      
    <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDLzEROkaEHfE0C77wUQq7De6FK3tMhS9M'}}
          defaultCenter={{lat: location.lat, lng: location.lng}}
          defaultZoom={12}
        >
            <RiMapPin2Fill style={{transform: 'scale(5) translateY(-5px)'}} lat={location.lat} lng={location.lng}/>
        </GoogleMapReact>
    </div>
  );
};

export default AddressMap;
