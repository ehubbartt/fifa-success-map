import { totalplayers_data } from '../assets/data/totalplayers_data.js';
const layers = [
'0-49',
'50-99',
'100-149',
'150-199',
'200-249',
'250+'
];
const colors = [
'#c6dbef',
'#9ecae1',
'#6baed6',
'#4292c6',
'#2171b5',
'#08306b'
];
export const playerMap = {
  name: "playerMap",
  title: "player",
  style: "mapbox://styles/mapbox/dark-v10",
  data: totalplayers_data,
  center: [0, 16],
  zoom: 1,
  projection: "mercator",
  id:"PLAYER_MAP",

  layerOptions: {
    id: "PLAYER_MAP",
    type: "fill",
    source: "PLAYER_MAP",
    paint: {
        'fill-color': [
            'step',
            ['get', 'total_players'],
            '#c6dbef',   // stop_output_0
            50,          // stop_input_0
            '#9ecae1',   // stop_output_1
            100,          // stop_input_1
            '#6baed6',   // stop_output_2
            150,          // stop_input_2
            '#4292c6',   // stop_output_3
            200,         // stop_input_3
            '#2171b5',   // stop_output_4
            250,         // stop_input_4
            '#08306b'   // stop_output_5
    
        ],
        'fill-outline-color': '#BBBBBB',
        'fill-opacity': 0.8,
    }
  },
};
