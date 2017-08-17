import React from 'react'
// import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import "../App.css"
// const mapCenter = [40.761722, -73.949628];
// const zoomLevel = 15; 
// const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
// const mapUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
// class Mapper extends React.Component {

//   render() {
//     return (
//       <div> 
        
//         <Map center={mapCenter} zoom={zoomLevel} className="leaflet-container">
//           <TileLayer url= {mapUrl} attribution={attribution} />
//           <Marker position={mapCenter}>
//             <Popup>
//             <span><br/>Senior Center<br/><br/></span>
//           </Popup>
//           </Marker>
//       </Map>
//       </div>
//     )
//   }
// }

// export default Mapper 

import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDf5F1MBMzJzefKztpbaRIcqowMoYxixFg"

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 40.761808, lng: -73.949635 }}
  />
))


class Mapper extends React.Component {
  
    render() {
      return (
         <SimpleMapExampleGoogleMap
        containerElement={
          <div style={mapStyle} />
        }
        mapElement={
          <div style={{ height: `500px` }} />
        }
      />
      )
    }
  }

  const mapStyle = {
    height: '500px',
    width: '90%', 
    margin: '5%'
  };

export default Mapper 