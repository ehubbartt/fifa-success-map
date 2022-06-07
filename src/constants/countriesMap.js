import { countries_data } from '../assets/data/countries_data.js';

const grades = [10, 100, 1000],
  colors = ["rgb(208,209,230)", "rgb(103,169,207)", "rgb(1,108,89)"],
  radii = [6, 8, 10];

export const countriesMap = {
  name: "countriesMap",
  title: "countries",
  style: "mapbox://styles/mapbox/dark-v10",
  data: countries_data,
  center: [0, 16],
  zoom: 1,
  projection: "mercator",
  id:"do_not_change_this_value",

  layerOptions: {
    id: "do_not_change_this_valu",
    type: "circle",
    source: "do_not_change_this_value",
    paint: {
      // increase the radii of the circle as the zoom level and dbh value increases
      "circle-radius": {
        property: "success_rating",
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
        property: "success_rating",
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
