# The Liberty Project Fundraiser Web Map

## Notes

General notes for the repository.

### Contents and File Structure

#### Files:

- index.html
- config.js
- style.css
- readme.md

#### Folders:

1. **Data** (containing geojson files)

- directions.geojson (full route directions)
- Stops.geojson (stops along the route)

2. **Icons**

- All custom icons in png format

3. **Images**

- All images present in the chapters

### Mapbox Style and Access Token

The Mapbox style URL and Access Token must be changed.
To change the style url please refer to line 3 of the config.js file.
To change the Mapbox Access Token please refer to line 6 of the config.js file.

### Chapters

Content and configuration for the chapters can be found in the config.js file.
To change the text of the chapters please refer to the 'description' of each chapter.
To change the title of the chapters please refer to the 'title' line within each
chapter block. Images can also be changed here under the 'images' line. Drop any new
images into the image folder and change the name in the file path present in the chapter
code to the name and file extension of the image.

Please note: If images changed and the sizes are different, this can change the sizing and
look of the chapter boxes displayed on the map.

Camera positioning can be found within the same chapter code blocks under the location parameter.
The centering coordinate, zoom, pitch and bearing can be altered if required. For more information
on exploring chapter features visit the following link

[link](https://labs.mapbox.com/education/impact-tools/interactive-storytelling/)

### GeoJSON data

GeoJSON files are stored within the data folder and are used for the route and stops along the route.
The GeoJSONS are referenced in the following lines within index.html file:

1. directions.geojson

- Used for the route line on the map
- Referenced at line 301

2. Stops.geojson

- Used for the stops along the route on the map
- Referenced at line 206

The start and finish locations are co-ordinates within the index.html file with
the corresponding Icon layers for these two locations.

### Icons

The custom icons are referenced in the index.html file with local folder paths.
They can be found in the following locations:

1. **Start Icon**

- File name: start.png
- This icon is referenced on line 225 of the index.html file.

2. **Finish Icon**

- File name: finish.png
- This icon is referenced in line 261 of the index.html file.

3. **Stops Icon**

- File name: stop.png
- This icon is referenced in line 198 of the index.html file.

### 3D Terrain

The 3D terrain can be turned off if required. To do this please refer to line 10
in the config.js file. The 'use3dTerrain:' can be set to false to turn of the 3D
exageration. The hillshading terrain layer can be turned off on the custom style
in Mapbox Studio.

### Data Sources

- Original Spatial data provided by The Liberty Project. Modified by Vanritto.
- Images and content provided by The Liberty Project.
- Icon stop.png created by Vanritto
- Icons start.png and finish.png sourced from www.freepik.com and edited by Vanritto.

### References

All code modifications were made with reference to the Mapbox documentation library
which can be found here:

[link](https://docs.mapbox.com/)

This story map uses the basic template resource from the Mapbox GitHub page.

[link](https://github.com/mapbox/storytelling)

##### For a more in depth user guide or for any other information please contact us.
