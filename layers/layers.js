ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5899").setExtent([436670.488605, 1160099.035310, 437489.706084, 1160668.672720]);
var wms_layers = [];

var format_thuaDat_0 = new ol.format.GeoJSON();
var features_thuaDat_0 = format_thuaDat_0.readFeatures(json_thuaDat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_thuaDat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thuaDat_0.addFeatures(features_thuaDat_0);
var lyr_thuaDat_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_thuaDat_0, 
                style: style_thuaDat_0,
                interactive: true,
                title: '<img src="styles/legend/thuaDat_0.png" /> thuaDat'
            });
var format_matDuongBo_1 = new ol.format.GeoJSON();
var features_matDuongBo_1 = format_matDuongBo_1.readFeatures(json_matDuongBo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_matDuongBo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matDuongBo_1.addFeatures(features_matDuongBo_1);
var lyr_matDuongBo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_matDuongBo_1, 
                style: style_matDuongBo_1,
                interactive: true,
                title: '<img src="styles/legend/matDuongBo_1.png" /> matDuongBo'
            });

lyr_thuaDat_0.setVisible(true);lyr_matDuongBo_1.setVisible(true);
var layersList = [lyr_thuaDat_0,lyr_matDuongBo_1];
lyr_thuaDat_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'soTo': 'soTo', 'soThua': 'soThua', 'DIENTICH': 'DIENTICH', 'TENCHU': 'TENCHU', 'mucDichSuDung': 'mucDichSuDung', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'toaDoX': 'toaDoX', 'toaDoY': 'toaDoY', });
lyr_matDuongBo_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'THUAID': 'THUAID', 'XAID': 'XAID', 'SHBANDO': 'SHBANDO', 'SHTHUA': 'SHTHUA', 'DIENTICH': 'DIENTICH', 'DIENTICHPL': 'DIENTICHPL', 'MALOAIDAT': 'MALOAIDAT', 'KHLOAIDAT': 'KHLOAIDAT', 'DIADANH': 'DIADANH', 'DTSD': 'DTSD', 'TENCHU': 'TENCHU', 'DIACHI': 'DIACHI', 'MDSD2003': 'MDSD2003', 'KH2003': 'KH2003', 'MSCOLOR': 'MSCOLOR', 'SHTHUATAM': 'SHTHUATAM', 'DTTHOCU': 'DTTHOCU', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_thuaDat_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'soTo': 'Range', 'soThua': 'Range', 'DIENTICH': 'TextEdit', 'TENCHU': 'TextEdit', 'mucDichSuDung': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'toaDoX': 'TextEdit', 'toaDoY': 'TextEdit', });
lyr_matDuongBo_1.set('fieldImages', {'OBJECTID': '', 'ID': '', 'THUAID': '', 'XAID': '', 'SHBANDO': '', 'SHTHUA': '', 'DIENTICH': '', 'DIENTICHPL': '', 'MALOAIDAT': '', 'KHLOAIDAT': '', 'DIADANH': '', 'DTSD': '', 'TENCHU': '', 'DIACHI': '', 'MDSD2003': '', 'KH2003': '', 'MSCOLOR': '', 'SHTHUATAM': '', 'DTTHOCU': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_thuaDat_0.set('fieldLabels', {'OBJECTID': 'no label', 'soTo': 'inline label', 'soThua': 'no label', 'DIENTICH': 'no label', 'TENCHU': 'no label', 'mucDichSuDung': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'toaDoX': 'no label', 'toaDoY': 'no label', });
lyr_matDuongBo_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'THUAID': 'no label', 'XAID': 'no label', 'SHBANDO': 'no label', 'SHTHUA': 'no label', 'DIENTICH': 'no label', 'DIENTICHPL': 'no label', 'MALOAIDAT': 'no label', 'KHLOAIDAT': 'no label', 'DIADANH': 'header label', 'DTSD': 'no label', 'TENCHU': 'no label', 'DIACHI': 'no label', 'MDSD2003': 'no label', 'KH2003': 'no label', 'MSCOLOR': 'no label', 'SHTHUATAM': 'no label', 'DTTHOCU': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_matDuongBo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});