# OpenLayers
OpenLayers框架

## 学习地址
  + 学习目录：https://www.zhihu.com/column/c_1098918318844612608
  + 当前学习位置：https://zhuanlan.zhihu.com/p/71700141
  + OpenLayers的官方网站：https://openlayers.org/en/latest/doc/faq.html

## OpenLayers简介
  + OpenLayers是一个用于开发WebGIS客户端的JavaScript包，最初基于BSD许可发行。
  + OpenLayers是一个开源的项目，其设计之意是为互联网客户端提供强大的地图展示功能，包括地图数据显示与相关操作，并具有灵活的扩展机制。
  + 目前OpenLayers已经成为一个拥有众多开发者和帮助社区的成熟、流行的框架。


## OpenLayers的DOM元素组织结构
首先OpenLayers会在我们自定义的div元素（即id为map的div元素）中创建一个Viewport容器，地图中的所有内容都放置在Viewport中呈现。

在Viewport容器中分别创建了如下三个关键的元素层，分别渲染呈现地图容器中的内容：

  + 地图渲染层 —— 这是一个canvas元素，地图基于canvas 2D方式渲染
  + 内容叠加层 —— 用于放置叠置层（ol.Overlay，后面会详细介绍）内容，如在地图上添加弹窗、图片等等
  + 地图控件层 —— 用于放置控件，默认情况下会放置ol.control.Zoom（用于控制地图放大、缩小）、ol.control.Rotate（用于控制地图旋转）、ol.control.Attribution（用于控制地图右下角标记）这三个控件。

## 地图控件简介
OpenLayers封装了很多控件用于对地图进行操作、显示地图信息等。
  + 归属控件（Attribution） —— 用于展示地图资源的版权或者归属，它会默认加入到地图中。
  + 全屏控件（FullScreen） —— 控制地图全屏展示
  + 坐标拾取控件（MousePosition） —— 用于在地图上拾取坐标
  + 鹰眼控件（OverviewMap） —— 生成地图的一个概览图
  + 旋转控件（Rotate） —— 用于鼠标拖拽旋转地图，它会默认加入到地图中。
  + 比例尺控件（ScaleLine） —— 用于生成地图比例尺
  + 滑块缩放控件（ZoomSlider） —— 以滑块的形式缩放地图
  + 缩放至特定位置控件（ZoomToExtent） —— 用于将地图视图缩放至特定位置
  + 普通缩放控件（Zoom） —— 普通缩放控件，它会默认加入到地图中。












