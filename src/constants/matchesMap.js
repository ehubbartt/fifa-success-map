import { matches_data } from "../assets/data/matches_data";

const grades = [1000, 10000, 50000],
  colors = ["rgb(208,209,230)", "rgb(103,169,207)", "rgb(1,108,89)"],
  radii = [7, 7, 7];

export const matchesMap = {
  name: "matchesMap",
  title: "matchesMap",
  style: "mapbox://styles/mapbox/dark-v10",
  data: matches_data,
  center: [0, 16],
  zoom: 1,
  projection: "mercator",
  id:"do_not_change_this_value",

  layerOptions: {
    id: "do_not_change_this_value",
    type: "circle",
    source: "do_not_change_this_value",
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
        property: "mag", // dot density, don't change colors
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
