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

### GeoJSON

GeoJSON files are referenced in the index.html file.

- where the GeoJSONS are referenced
- Layers are here incl icons and route line
- Terrain exageration set

### Data Sources

- Original Spatial data provided by the Liberty Project. Modified by Vanritto.
- Images and content provided by The Liberty Project.
- Icon stop.png created by Vanritto
- Icons start.png and finish.png sourced from www.freepik.com and edited by Vanritto.

#### References

template on git and mapbox resources
