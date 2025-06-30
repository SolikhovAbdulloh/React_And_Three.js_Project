import React from "react";
import { Map, Marker } from "pigeon-maps";

// OpenStreetMap plitkalarini ta'minlovchi funksiya (API kaliti talab qilinmaydi)
const mapTilerProvider = (x, y, z, dpr) => {
  return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
};

const MapComponent = () => {
  return (
    <Map
      height={600} // Xarita balandligi (px)
      width="100%" // Kenglikni to‘liq ekranga moslashtirish
      defaultCenter={[50, 5]} // Yevropaga markazlash (lat, lng)
      defaultZoom={4} // Zoom darajasi (dunyo xaritasi uchun mos)
      provider={mapTilerProvider} // OpenStreetMap plitkalarini ishlatish
      attribution={
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    >
      {/* Parij markeri */}
      <Marker
        width={50}
        anchor={[48.8566, 2.3522]} // Parij koordinatalari [lat, lng]
        color="#040100"
      >
        <div
          style={{
            color: "#ffffff",
            background: "#040100",
            padding: "5px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          Paris
        </div>
      </Marker>

      {/* Varshava markeri */}
      <Marker
        width={50}
        anchor={[48.866, 9.312312]} // Varshava koordinatalari [lat, lng]
        color="#040100"
      >
        <div
          style={{
            color: "#f3ebea",
            background: "#040100",
            padding: "5px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          Warshaw
        </div>
      </Marker>
    </Map>
  );
};

export default MapComponent;
