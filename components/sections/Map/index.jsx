import { useState } from "react";
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import { Container, Col, Row } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";

const navControlStyle = {
  right: 10,
  bottom: 50,
};

export default function Map() {
  const TOKEN =
    "pk.eyJ1IjoiaHJxbW9udGVpcm8iLCJhIjoiY2tjNWo4amQwMDNhdjJ3bjBmdjgwbnRrYyJ9.a_7fXLx-EHrFpMTxtNZTrA";

  const [viewport, setViewport] = useState({
    latitude: -20.7298548,
    longitude: -49.3447512,
    zoom: 13,
  });
  const [popupInfo, setPopupInfo] = useState(true);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="25rem"
      mapboxApiAccessToken={TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {popupInfo && (
        <Popup
          latitude={-20.7298548}
          longitude={-49.344751}
          closeButton={true}
          closeOnClick={false}
          tipSize={5}
          onClose={() => setPopupInfo(false)}
          anchor="top"
          offsetTop={20}
          offsetLeft={0}
        >
          <div>Hidraumon Máquinas</div>
        </Popup>
      )}
      <Marker
        latitude={-20.7298548}
        longitude={-49.3447512}
        offsetLeft={-12}
        offsetTop={-10}
      >
        <div id="marker">
            <FaMapMarkerAlt onClick={setPopupInfo}/>
        </div>
      </Marker>
    </ReactMapGL>
  );
}
