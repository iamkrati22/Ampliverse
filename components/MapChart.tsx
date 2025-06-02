import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import '../styles/map-styles.css';

const markers = [
    // India
    {markerOffset: -15, name: "Ladakh", coordinates: [77.6568576, 33.9456407]},
  { markerOffset: -15, name: "Punjab", coordinates: [75.5004841, 30.9293211] },
  { markerOffset: 25, name: "Haryana", coordinates: [76, 29] },
  { markerOffset: 25, name: "Delhi", coordinates: [77.1716954, 28.6273928] },
  { markerOffset: 25, name: "Lucknow", coordinates: [80.9346001, 26.8381] },
  { markerOffset: 25, name: "Hyderabad", coordinates: [78.4740613, 17.360589] },
  { markerOffset: -15, name: "Bengaluru", coordinates: [77.590082,12.9767936] },
  { markerOffset: -15, name: "Chennai", coordinates: [80.270186, 13.0836939] },
  { markerOffset: 25, name: "Kerala", coordinates: [76.5120396, 10.3528744] },
  { markerOffset: 25, name: "Tamil Nadu", coordinates: [78.3665347, 10.9094334] },

  // USA
  { markerOffset: -15, name: "New York City, NY", coordinates: [-74.0060152, 40.7127281] },
  { markerOffset: -15, name: "San Francisco, CA", coordinates: [-122.4193286, 37.7792588] },
  { markerOffset: -15, name: "Los Angeles, CA", coordinates: [-118.242766, 34.0536909] },
  { markerOffset: -15, name: "Austin, TX", coordinates: [-97.7436995, 30.2711286] },
  { markerOffset: -15, name: "Washington D.C.", coordinates: [-77.0365427, 38.8950368] },
  { markerOffset: -15, name: "Seattle, WA", coordinates: [-122.330062, 47.6038321] },
  { markerOffset: -15, name: "Boston, MA", coordinates: [-71.060511, 42.3554334] },
  
  // Canada
  { markerOffset: -15, name: "Toronto", coordinates: [-79.3839347, 43.6534817] },
  { markerOffset: -15, name: "Vancouver", coordinates: [-123.113952,49.2608724] },

  // SEA
  { markerOffset: -15, name: "Singapore", coordinates: [103.8194992, 1.357107] },
  { markerOffset: -15, name: "Malaysia", coordinates: [102.2656823,4.5693754] },
  { markerOffset: -15, name: "Thailand", coordinates: [100.83273, 14.8971921] },
  { markerOffset: -15, name: "Indonesia", coordinates: [117.8902853,-2.4833826] },
  { markerOffset: -15, name: "Vietnam", coordinates: [107.9650855, 15.9266657] },
  { markerOffset: -15, name: "South Korea", coordinates: [127.6961188,36.638392] },
  { markerOffset: -15, name: "Hong Kong, China", coordinates: [114.1849161,22.350627] },

  // MENA
  { markerOffset: -15, name: "United Arab Emirates (UAE)", coordinates: [54.5, 23.75] },
  { markerOffset: -15, name: "Saudi Arabia", coordinates: [44.3222148,24.217621] },
  { markerOffset: -15, name: "Qatar", coordinates: [51.2295295, 25.3336984] },
  { markerOffset: -15, name: "Egypt", coordinates: [29.2675469,26.2540493] },
  { markerOffset: -15, name: "Israel", coordinates: [34.8594762, 30.8124247] },
  { markerOffset: -15, name: "Morocco", coordinates: [-7.3362482,31.1728205] },
  { markerOffset: -15, name: "Lebanon", coordinates: [35.843409,33.8750629] },
  { markerOffset: -15, name: "Kuwait", coordinates: [47.4979476,29.2733964] },
  { markerOffset: -15, name: "Bahrain", coordinates: [50.5344606,26.1551249] },
];

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography='/map-features.json'>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
            //   fill="#EAEAEC"
            //   stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
