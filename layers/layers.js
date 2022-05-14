var wms_layers = [];

var format_Police_Bound_0 = new ol.format.GeoJSON();
var features_Police_Bound_0 = format_Police_Bound_0.readFeatures(json_Police_Bound_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Police_Bound_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police_Bound_0.addFeatures(features_Police_Bound_0);
var lyr_Police_Bound_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Police_Bound_0, 
                style: style_Police_Bound_0,
                interactive: true,
                title: '<img src="styles/legend/Police_Bound_0.png" /> Police_Bound'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Police_points_2 = new ol.format.GeoJSON();
var features_Police_points_2 = format_Police_points_2.readFeatures(json_Police_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Police_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police_points_2.addFeatures(features_Police_points_2);
var lyr_Police_points_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Police_points_2, 
                style: style_Police_points_2,
                interactive: true,
                title: '<img src="styles/legend/Police_points_2.png" /> Police_points'
            });

lyr_Police_Bound_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Police_points_2.setVisible(true);
var layersList = [lyr_Police_Bound_0,lyr_OpenStreetMap_1,lyr_Police_points_2];
lyr_Police_Bound_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Police_points_2.set('fieldAliases', {'COMPNT_NM': 'COMPNT_NM', 'LOCATION_X': 'LOCATION_X', 'LOCATION_Y': 'LOCATION_Y', 'CREATE_DT': 'CREATE_DT', 'VERSION': 'VERSION', });
lyr_Police_Bound_0.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_Police_points_2.set('fieldImages', {'COMPNT_NM': '', 'LOCATION_X': '', 'LOCATION_Y': '', 'CREATE_DT': '', 'VERSION': '', });
lyr_Police_Bound_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Police_points_2.set('fieldLabels', {'COMPNT_NM': 'no label', 'LOCATION_X': 'no label', 'LOCATION_Y': 'no label', 'CREATE_DT': 'no label', 'VERSION': 'no label', });
lyr_Police_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});