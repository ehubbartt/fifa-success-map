import { earthquakes } from "../assets/data/earthquakes";

const grades = [4, 5, 6],
  colors = ["rgb(208,209,230)", "rgb(103,169,207)", "rgb(1,108,89)"],
  radii = [5, 15, 20];

export const defaultMap = {
  name: "default",
  title: "Default",
  style: "mapbox://styles/mapbox/dark-v10",
  data: earthquakes,
  center: [138, 38],
  zoom: 5,
  projection: "mercator",

  layerOptions: {
    id: "earthquakes-point",
    type: "circle",
    source: "default",
    minzoom: 5,
    paint: {
      // increase the radii of the circle as the zoom level and dbh value increases
      "circle-radius": {
        property: "mag",
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
        property: "mag",
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
