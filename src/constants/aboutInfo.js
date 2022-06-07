export const aboutInfo = {
  goal: 
  "The project was designed to observe the success of different countries in the FIFA World Cup " +
  "in terms of where matches were hosted, number of wins, and number of players. " +
  "This project visualizes World Cup data over time with maps that focus on matches, teams, and countries where players originate from. " +
  "The project hopes to provide insight into World Cup success or failure for different nations, while also providing a way to view player success and the history of the tournament." +
  
  "It could make certain countries look poorly due to the results they’ve had in the World Cup, " +
  "but judging performances and competition is in the nature of the sport. " + 
  "We will visualize World Cup success in multiple ways, so it is possible to see if some countries are more successful in different ways.", 
  
  dataSources: 
  "FIFA map data was obtained from Kaggle. " + 
  "Data for match locations and countries / teams was orginally collected by Kaggle user Andre Becklas, " +
  "who took it from the FIFA World Cup Archive website. " +
  "https://www.kaggle.com/datasets/abecklas/fifa-world-cup?resource=download&select=WorldCups.csv " +

  "Data for players was originally collected by Kaggle user Stefano Leone, " +
  "who extracted it from the video game FIFA 22. " + 
  "https://www.kaggle.com/datasets/stefanoleone992/fifa-22-complete-player-dataset?select=players_22.csv " +

  "Country boundary shapefile for thr choropleth map of number of players was obtained from: " +
  "PUT THE LINK HERE " +

  "To see the processed data files we used, please visit the project GitHub here: " +
  "https://github.com/ehubbartt/geog-458-final-project",

  
  methodology: 
  "The projection of our maps is Mercator and located at the center of [0,16] with zoom level 1. "+
  "Our main map has 3 base maps that the user can view, by clicking on the Styles buttons users can switch the base map to dark, light, and street base maps provided by Mapbox. " +
  "And there are 3 interactive maps that users can switch to check. For the World Cup Locations map, the user can click on each match to check the information including the date, location, result, and attendance of the match. " +
  "For the country map, the user can click on the country that participated World Cup and check the information about the achievements. " +
  
  "Hudson processed the data in R and manually added latitude and longtitude coordinates to the stadiums by searching them on Google and Google Maps.",
  
  acknowledgements: 
  "We used React Mapbox GL JS as the framework for this project. We used mapshaper.org to compress geojson files. " +
  "Our data and project files are hosted on Github. Basemaps are provided by Mapbox. " + 
  "Great thanks to Professor Zhao and TA Jiaxin Feng of GEOG458 for the lecture, labs, and comments." +
  "Course GitHub for Professor Zhao's GEOG458 class is here: " +
  "https://github.com/jakobzhao/geog458",
};
