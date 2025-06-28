import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1700,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#1e1eaace"
        stroke="#e1d9d9"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#040100",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[9.312312, 48.866]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#040100",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-1" textAnchor="end" alignmentBaseline="middle" fill="#f3ebea">
          {"Warshaw"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
