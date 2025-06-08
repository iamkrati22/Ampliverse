import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "../styles/map-styles.css";

const markers = [
  // India
  { markerOffset: -15, name: "Punjab", coordinates: [75.5004841, 30.9293211] },
  { markerOffset: 25, name: "Mumbai", coordinates: [72.8692035, 19.054999] },
  { markerOffset: 25, name: "Delhi", coordinates: [77.1716954, 28.6273928] },
  { markerOffset: 25, name: "Hyderabad", coordinates: [78.4740613, 17.360589] },
  {
    markerOffset: -15,
    name: "Bengaluru",
    coordinates: [77.590082, 12.9767936],
  },
  { markerOffset: -15, name: "Kochi", coordinates: [76.2444378, 9.9679032] },
  { markerOffset: 25, name: "Nagaland", coordinates: [94.5884911, 26.1630556] },
  {
    markerOffset: 25,
    name: "Ahemdabad",
    coordinates: [72.5800568, 23.0215374],
  },

  // USA
  {
    markerOffset: -15,
    name: "New York City, NY",
    coordinates: [-74.0060152, 40.7127281],
  },
  {
    markerOffset: -15,
    name: "San Francisco, CA",
    coordinates: [-122.4193286, 37.7792588],
  },
  {
    markerOffset: -15,
    name: "Los Angeles, CA",
    coordinates: [-118.242766, 34.0536909],
  },
  {
    markerOffset: -15,
    name: "Washington D.C.",
    coordinates: [-77.0365427, 38.8950368],
  },

  // SEA
  {
    markerOffset: -15,
    name: "Singapore",
    coordinates: [103.8194992, 1.357107],
  },
  { markerOffset: -15, name: "Thailand", coordinates: [100.83273, 14.8971921] },
  {
    markerOffset: -15,
    name: "Indonesia",
    coordinates: [117.8902853, -2.4833826],
  },
  {
    markerOffset: -15,
    name: "Vietnam",
    coordinates: [107.9650855, 15.9266657],
  },
  {
    markerOffset: -15,
    name: "Japan",
    coordinates: [139.2394179, 36.5748441],
  },
  {
    markerOffset: -15,
    name: "South Korea",
    coordinates: [127.6961188, 36.638392],
  },
  {
    markerOffset: -15,
    name: "Hong Kong",
    coordinates: [114.1849161, 22.350627],
  },

  // MENA
  {
    markerOffset: -15,
    name: "United Arab Emirates (UAE)",
    coordinates: [54.5, 23.75],
  },
  {
    markerOffset: -15,
    name: "Saudi Arabia",
    coordinates: [44.3222148, 24.217621],
  },
  { markerOffset: -15, name: "Qatar", coordinates: [51.2295295, 25.3336984] },
  { markerOffset: -15, name: "Egypt", coordinates: [29.2675469, 26.2540493] },
  { markerOffset: -15, name: "Israel", coordinates: [34.8594762, 30.8124247] },

  // Europe
  { markerOffset: -15, name: "Germany", coordinates: [10.4478313, 51.1638175] },
  { markerOffset: -15, name: "France", coordinates: [1.8883335, 46.603354] },
  {
    markerOffset: -15,
    name: "United Kingdom",
    coordinates: [-3.2765753, 54.7023545],
  },
  {
    markerOffset: -15,
    name: "Netherlands",
    coordinates: [5.6343227, 52.2434979],
  },
  { markerOffset: -15, name: "Sweden", coordinates: [14.5208584, 59.6749712] },
  { markerOffset: -15, name: "Spain", coordinates: [-4.8379791, 39.3260685] },
  { markerOffset: -15, name: "Italy", coordinates: [12.674297, 42.6384261] },
];

const MapChart = () => {
  return (
    <ComposableMap style={{ width: "95%", height: "auto" }}>
      <Geographies geography="/map-features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
          <svg
            width="2%"
            height="2%"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                className="bg-red-600 fill-red-600"
                d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
