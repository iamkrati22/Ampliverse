import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "../styles/map-styles.css";
import { useTheme } from "next-themes";

const markers = [
  // India
  { markerOffsetX: 0, markerOffsetY: 0, name: "Punjab", coordinates: [75.5004841, 30.9293211] },
  { markerOffsetX: -12.5, markerOffsetY: 10, name: "Mumbai", coordinates: [72.8692035, 19.054999] },
  { markerOffsetX: -6, markerOffsetY: 10, name: "Delhi", coordinates: [77.1716954, 28.6273928] },
  { markerOffsetX: 22.5, markerOffsetY: 0, name: "Hyderabad", coordinates: [78.4740613, 17.360589] },
  {
    markerOffsetX: -15,
    markerOffsetY: 7,
    name: "Bengaluru",
    coordinates: [77.590082, 12.9767936],
  },
  { markerOffsetX: 5, markerOffsetY: 18, name: "Kochi", coordinates: [76.2444378, 9.9679032] },
  { markerOffsetX: 5, markerOffsetY: 0, name: "Nagaland", coordinates: [94.5884911, 26.1630556] },
  {
    markerOffsetX: 35,
    markerOffsetY: 9,
    name: "Ahemdabad",
    coordinates: [72.5800568, 23.0215374],
  },

  // USA
  {
    markerOffsetX: 50,
    markerOffsetY: 0,
    name: "New York City, NY",
    coordinates: [-74.0060152, 40.7127281],
  },
  {
    markerOffsetX: 0,
    markerOffsetY: -5,
    name: "San Francisco, CA",
    coordinates: [-122.4193286, 37.7792588],
  },
  {
    markerOffsetX: 10,
    markerOffsetY: 20,
    name: "Los Angeles, CA",
    coordinates: [-118.242766, 34.0536909],
  },
  {
    markerOffsetX: 30,
    markerOffsetY: 20,
    name: "Washington D.C.",
    coordinates: [-77.0365427, 38.8950368],
  },

  // SEA
  {
    markerOffsetX: 0,
    markerOffsetY: -3,
    name: "Singapore",
    coordinates: [103.8194992, 1.357107],
  },
  { markerOffsetX: 0, markerOffsetY: 0, name: "Thailand", coordinates: [100.83273, 14.8971921] },
  {
    markerOffsetX: 5,
    markerOffsetY: -3,
    name: "Indonesia",
    coordinates: [117.8902853, -2.4833826],
  },
  {
    markerOffsetX: 30,
    markerOffsetY: 10,
    name: "Vietnam",
    coordinates: [107.9650855, 15.9266657],
  },
  {
    markerOffsetX: 25,
    markerOffsetY: 10,
    name: "Japan",
    coordinates: [139.2394179, 36.5748441],
  },
  {
    markerOffsetX: 0,
    markerOffsetY: 0,
    name: "South Korea",
    coordinates: [127.6961188, 36.638392],
  },
  {
    markerOffsetX: 35,
    markerOffsetY: 10,
    name: "Hong Kong",
    coordinates: [114.1849161, 22.350627],
  },

  // MENA
  {
    markerOffsetX: 16,
    markerOffsetY: 0,
    name: "UAE",
    coordinates: [54.5, 23.75],
  },
  {
    markerOffsetX: 2.5,
    markerOffsetY: 20,
    name: "Saudi Arabia",
    coordinates: [44.3222148, 24.217621],
  },
  { markerOffsetX: 5, markerOffsetY: 0, name: "Qatar", coordinates: [51.2295295, 25.3336984] },
  { markerOffsetX: 5, markerOffsetY: 0, name: "Egypt", coordinates: [29.2675469, 26.2540493] },
  { markerOffsetX: 5, markerOffsetY: 0, name: "Israel", coordinates: [34.8594762, 30.8124247] },

  // Europe
  { markerOffsetX: 30, markerOffsetY: 10, name: "Germany", coordinates: [10.4478313, 51.1638175] },
  { markerOffsetX: -10, markerOffsetY: 10, name: "France", coordinates: [1.8883335, 46.603354] },
  {
    markerOffsetX: -28,
    markerOffsetY: 10,
    name: "United Kingdom",
    coordinates: [-3.2765753, 54.7023545],
  },
  {
    markerOffsetX: 18,
    markerOffsetY: 0,
    name: "Netherlands",
    coordinates: [5.6343227, 52.2434979],
  },
  { markerOffsetX: 10, markerOffsetY: 0, name: "Sweden", coordinates: [14.5208584, 59.6749712] },
  { markerOffsetX: -8, markerOffsetY: 10, name: "Spain", coordinates: [-4.8379791, 39.3260685] },
  { markerOffsetX: 20, markerOffsetY: 12, name: "Italy", coordinates: [12.674297, 42.6384261] },
];

const MapChart = () => {
  const { resolvedTheme } = useTheme();
  const mapFill = resolvedTheme === 'light' ? '#f3f4f6' : '#232f4b';
  const mapStroke = resolvedTheme === 'light' ? '#a7a3a38a' : undefined;
  return (
    <ComposableMap style={{ width: "95%", height: "auto" }}>
      <Geographies geography="/map-features.json" style={{marginLeft: '1rem'}} transform="translate(6, 12)" >
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffsetY, markerOffsetX }) => (
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
          <text
            y={markerOffsetY}
            x={markerOffsetX}
            textAnchor="middle"
            fontSize="8"
            fontWeight="400"
            className="map-label"
            fill={resolvedTheme === 'light' ? '#505050' : '#a3a3a3'}
            style={{ pointerEvents: 'none', userSelect: 'none', textShadow: resolvedTheme === 'light' ? '0 1px 2px #fff' : '0 1px 2px #000' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
