// 定义区域
var region = ee.Geometry.Point([116.4, 39.9]);

// 加载Sentinel-2影像
var image = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(region)
  .filterDate('2023-06-01', '2023-06-30')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .sort('CLOUDY_PIXEL_PERCENTAGE')
  .first();

// 显示参数
var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4
};

// 添加到地图
Map.centerObject(region, 10);
Map.addLayer(image, visParams, 'Sentinel-2');
