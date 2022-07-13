# OpenLayers
OpenLayers框架

## 学习地址
  + 学习目录：https://www.zhihu.com/column/c_1098918318844612608
  + 当前学习位置：https://zhuanlan.zhihu.com/p/72086513
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

## 多源数据加载
OpenLayers的地图数据通过图层（Layer）进行组织渲染，然后通过数据源（Source）设置具体的地图数据来源。

Layer可看作渲染地图的层容器，具体的数据需要通过Source设置。

地图数据根据数据源（Source）可分为Image、Tile、Vector三大类型的数据源类，对应设置到地图图层（Layer）的Image、Tile、Vector三大类的图层中。其中，矢量图层Vector通过样式（Style）来设置矢量要素渲染的方式和外观。

Source和Layer是一对一的关系，有一个Source，必然需要一个Layer，然后把Layer添加到Map上，就可以显示出来了。

多源数据加载之数据组织图：https://pic1.zhimg.com/v2-6a7a73daeecd3e7ddd124db01cc9bac7_1440w.jpg?source=172ae18b

在数据源中：
  + Tile类为瓦片抽象基类，其子类作为各类瓦片数据的数据源。
  + Vector类为矢量数据源基类，为矢量图层提供具体的数据来源，包括直接组织或读取的矢量数据（Features）、远程数据源的矢量数据（即通过url设置数据源路径）等。若是url设置的矢量数据源，则通过解析器Format（即ol.format.Feature的子类）来解析各类矢量数据，如XML、Text、JSON、GML、KML、GPS、WFS、WKT、GeoJSON等地图数据。
  + Image类为单一图像基类，其子类为画布（canvas）元素、服务器图片、单个静态图片、WMS单一图像等的数据源。它与Tile类的区别在于，Image类对应的是一整张大图片，而不像瓦片那样很多张小图片，从而无需切片，也可以加载一些地图，适用于一些小场景地图。

从复杂度来分析，Image类和Vector类都不复杂，其数据格式和来源方式都简单。而Tile类则不一样，由于一些历史问题，多个服务提供商，多种标准等诸多原因，导致要支持世界上大多数的瓦片数据，就需要针对这些差异（这些差异主要是瓦片坐标系不同、分辨率不同等，后面会详细介绍）提供不同的Tile数据源支持。我们先来看一下OpenLayers现在支持的Source具体有哪些：
https://pic2.zhimg.com/80/v2-f801f289555ac752a52632b63e3c6c85_720w.jpg

上图中的类是按照继承关系，从左向右展开的，左边的为父类，右边的为子类。在使用时，一般来说，都是直接使用叶子节点上的类，基本就可以完成需求。父类需要自己进一步扩展或者处理才能有效使用。

我们先了解最为复杂的ol.source.Tile，其叶子节点类有很多，大致可以分为几类：

  + 在线服务的Source，包括ol.source.BingMaps（微软提供的Bing在线地图数据）、ol.source.Stamen（Stamen提供的在线地图数据）。没有自己的地图服务器的情况下，可直接使用它们，加载地图底图。
  + 支持协议标准的Source，包括ol.source.TileArcGISRest、ol.source.TileWMS、ol.source.WMTS、ol.source.UTFGrid、ol.source.TileJSON。如果要使用它们，首先你得先学习对应的协议，之后必须找到支持这些协议的服务器来提供数据源，这些服务器可以是底图服务提供商提供的，也可以是自己搭建的服务器，关键是得支持这些协议。
  + ol.source.XYZ，这个需要单独提一下，因为是可以直接使用的，而且现在很多地图服务（在线的，或者自己搭建的服务器）都支持xyz方式的请求。国内在线的地图服务，高德、天地图等，都可以通过这种方式加载，本地离线瓦片地图也可以，用途广泛，且简单易学。

ol.source.Image虽然有几种不同的子类，但大多比较简单，因为不牵涉到过多的协议和服务提供商。而ol.source.Vector就更加简单了，但有时候其唯一的子类ol.source.Cluster（聚合要素时使用）在处理大量的要素时，我们可能需要使用。

在大概了解了整个Source之后，紧接着该介绍它的搭档Layer了，同样的，我们还是先从OpenLayers现有的Layer类图大致了解一下：
https://pic2.zhimg.com/80/v2-4bf60e33d5d7c28cbc8e6631fe385d01_720w.jpg

为了便于了解和使用，图中标注了每一个Layer对应的Source。通过上图可以看到Layer相对于Source而言，真是太简单了。

其中ol.layer.Group是一个用于将多个图层存储在一起的集合类，以后接触到相关内容再介绍。

是不是觉得类有点多，一时难以招架？随着我们以后对这些类的详细介绍与使用，我们一定能够熟练掌握它们。







