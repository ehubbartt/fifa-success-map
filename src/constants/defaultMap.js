import { matches_data } from "../assets/data/matches_data";

const grades = [1000, 10000, 50000],
  colors = ["rgb(208,209,230)", "rgb(103,169,207)", "rgb(1,108,89)"],
  radii = [1, 2, 4];

export const defaultMap = {
  name: "matchData",
  title: "Default",
  style: "mapbox://styles/mapbox/dark-v10",
  data: matches_data,
  center: [0, 16],
  zoom: 1,
  projection: "mercator",

  layerOptions: {
    id: "match",
    type: "circle",
    source: "matchData",
    paint: {
      // increase the radii of the circle as the zoom level and dbh value increases
      "circle-radius": {
        property: "Attendance",
        stops: [
          [
            {
              zoom: 5,
              value: grades[0],
            },
            radii[0],
          ],
          [
            {
              zoom: 5,
              value: grades[1],
            },
            radii[1],
          ],
          [
            {
              zoom: 5,
              value: grades[2],
            },
            radii[2],
          ],
        ],
      },
      "circle-color": {
        property: "Attendance",
        stops: [
          [grades[0], colors[0]],
          [grades[1], colors[1]],
          [grades[2], colors[2]],
        ],
      },
      "circle-stroke-color": "white",
      "circle-stroke-width": 1,
      "circle-opacity": 0.6,
    },
  },
};