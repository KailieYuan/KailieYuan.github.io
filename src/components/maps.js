import React from 'react'
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import "../App.css"
const mapCenter = [40.761722, -73.949628];
const zoomLevel = 15; 
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
const mapUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
class Mapper extends React.Component {

  render() {
    return (
      <div> 
        
        <Map center={mapCenter} zoom={zoomLevel} className="leaflet-container">
          <TileLayer url= {mapUrl} attribution={attribution} />
          <Marker position={mapCenter}>
            <Popup>
            <span><br/>Senior Center<br/><br/></span>
          </Popup>
          </Marker>
      </Map>
      </div>
    )
  }
}

export default Mapper 