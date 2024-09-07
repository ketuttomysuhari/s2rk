  // Your access token can be found at: https://ion.cesium.com/tokens.
    // This is the default access token from your ion account

    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYWQ4OWMzYS00MjA4LTQwMjMtODAzNy03OTBmNmU0YTExYzYiLCJpZCI6NzU1Miwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0OTc2NjgwNn0.IznlFpdNxINwCo9A6W4lxynEEVXfOx4i4MHA7CaHshI';

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrain: Cesium.Terrain.fromWorldTerrain(),
    });    

    try {
        const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2719542);
        viewer.scene.primitives.add(tileset);
        viewer.zoomTo(tileset);
    } catch (error) {
        console.log(`Error loading tileset: ${error}`);
    } 

    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(112.6248203, -7.9808313, 700),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      }
    });

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    // const buildingTileset = await Cesium.createOsmBuildingsAsync();
    // viewer.scene.primitives.add(buildingTileset);   