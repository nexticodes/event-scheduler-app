import "./AddressMap.css";
import GoogleMapReact from 'google-map-react';
import {RiMapPin2Fill} from 'react-icons/ri'
import { useState } from "react";


const AddressMap = ({location, handleChange, isUpdating}) => {
  const [showMap, setShowMap] = useState(true)
  const address = `${location.address} ${location.city} ${location.state} ${location.zip}`
  return (
      
    <div className='map-container'>
        <p onClick={() => navigator.clipboard.writeText(address)}>{location.name}</p>
        {showMap ? 
        <>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDLzEROkaEHfE0C77wUQq7De6FK3tMhS9M'}}
            defaultCenter={{lat: location.lat, lng: location.lng}}
            defaultZoom={12}
            >
                <RiMapPin2Fill style={{transform: 'scale(5) translateY(-5px)'}} lat={location.lat} lng={location.lng}/>
            </GoogleMapReact>
        </> : 
        <div>
          <h4>Address</h4>
          <p>{address}</p>
        </div>    
          }

    </div>
  );
};

export default AddressMap;
