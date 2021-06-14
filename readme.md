# The Liberty Project Fundraiser Web Map

## Guide and Instructions

### Contents and File Structure

#### Files:

- index.html
- config.js
- style.css

#### Folders:

- data - Containing geojson files
  - directions.geojson (full route directions)
  - Stops.geojson (stops along the route)
- icons - All custom icons in png format
- images - All images present in the chapters

### Mapbox Style and Access Token

The Mapbox style and Acceess Token must be changed.
To change the style please refer to line.... of the config.js file ......

To change the MApbox Access Token please refer to......

### Chapters

Content and configuration for the chapters can be found in the config.js file.
To change the text of the chapters plese refer to the 'description' of each chapter. To change
the title of the chapters please refer to the 'title' line within each chapter block. Images can
also be changed here unded the 'images' line. Drop any new images into the image folder and
change the name in the file path present in the chapter code.

Camera positioning can be found within the same chapter blocks under the location parameter.
The centering coordinate, zoom, pitch and bearing can be altered if required.

### GeoJSON sources

index.html

- where the GeoJSONS are referenced
- Layers are here incl icons and route line
- Terrain exageration set

### Images

- who they belong to = The Liberty Project

### Data

- Original Spatial data provided by the Liberty Project. Modified by Vanritto
- directions.geojson file contains the directions of the entire route
- Stops.geojson contains the stops along the route.

### Icons

- where Icons from
  finish.png is the Icon being used for the finish point
  start.png
  stop.png
  Illustrator
  Used to fully create the Stops icon
  Used to edit the Start and Finish icons
  Freepik
  Where got Start and FInish icons originally

Any

#### References

template on git and mapbox resources
