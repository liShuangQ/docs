---
title: echarts地图画图形
category:
- 片段
tag:
- vue
- vue2
- geo
- echarts
---

```vue

<template>
    <div>
        <button @click="chartInit">切换图形</button>
        <div style="width:100%;height: 100vh" ref="chart"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import {debounce} from 'lodash';

    export default {
        created() {
        },
        mounted() {
            this.chartInit()
        },
        data() {
            return {
                mapChart: null,
                lock: true,
                state: false
            }
        },
        methods: {
            chartInit() {
                this.state = !this.state
                const zoom = 4
                const center = [116.23, 39.54]
                if (!this.mapChart) {
                    this.mapChart = echarts.init(this.$refs.chart);
                    const city = '中华人民共和国'
                    const mapData = require(`@/assets/geojson/world.zh.json`)
                    echarts.registerMap(
                        city,
                        mapData
                    );
                    let option = {
                        geo: [
                            {
                                map: city,
                                roam: true,
                                zoom: zoom,
                                center: center,
                                label: {
                                    show: false,
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 12,
                                            color: 'rgba(0, 0, 0,1)'
                                        }
                                    }
                                },
                                regions: [
                                    {
                                        name: '中国',
                                        label: {
                                            show: true,
                                            fontSize: 12,
                                            color: 'rgba(0, 0, 0, 1)',
                                            emphasis: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: 14,
                                                    color: 'rgba(0, 0, 0,1)'
                                                }
                                            }
                                        },
                                    }
                                ],
                                // itemStyle: {
                                //     areaColor: '#323c48', // 地区颜色
                                //     borderColor: '#111'
                                // },
                            }
                        ]
                    };
                    this.mapChart.setOption(option);
                }
                this.setNullGraphicAndRecMap(true)
                let debounceFun = null
                let setGraphic = null
                // 多边形还是圆形
                if (this.state) {
                    setGraphic = this.setPolygon
                } else {
                    setGraphic = this.setCircle
                }
                debounceFun = debounce(setGraphic, 500)
                setGraphic()
                this.mapChart.on("georoam", params => {
                    if (this.lock) {
                        setGraphic(false)
                    }
                    debounceFun()
                });
            },
            setPolygon(show = true) {
                this.lock = show
                if (!show) {
                    this.setNullGraphicAndRecMap()
                    return
                }
                let polygonCoords = [
                    [110.00, 35.00], // 西南角 左下角
                    [130.00, 35.00], // 东南角 右下角
                    [120.00, 40.00], // 东北角 右上角
                    [100.00, 40.00], // 西北角 左上角
                    [110.00, 35.00]  // 返回起点闭合多边形
                ];
                this.mapChart.setOption({
                    graphic: {
                        elements: [
                            {
                                type: 'polygon',
                                shape: {
                                    points: polygonCoords.map((coord, index) => {
                                        return this.mapChart.convertToPixel('geo', coord)
                                    }),
                                },
                                style: {
                                    fill: 'rgba(255, 0, 0, 0.3)',
                                }
                            },
                        ]
                    },
                });
            },
            setCircle(show = true) {
                this.lock = show
                if (!show) {
                    this.setNullGraphicAndRecMap()
                    return
                }
                const calculateDistance = (x1, y1, x2, y2) => {
                    let dx = x2 - x1;
                    let dy = y2 - y1;
                    return Math.sqrt(dx * dx + dy * dy);
                }
                let circleCoords = {
                    center: [90.00, 30.00],
                    rPoint: [100.00, 40.00],
                }
                const center = this.mapChart.convertToPixel('geo', circleCoords.center)
                const rPoint = this.mapChart.convertToPixel('geo', circleCoords.rPoint)
                this.mapChart.setOption({
                    graphic: {
                        elements: [
                            {
                                type: 'circle',
                                shape: {
                                    cx: this.mapChart.convertToPixel('geo', circleCoords.center)[0],
                                    cy: this.mapChart.convertToPixel('geo', circleCoords.center)[1],
                                    r: calculateDistance(center[0], center[1], rPoint[0], rPoint[1]),
                                },
                                style: {
                                    fill: 'rgba(0, 255, 0, 0.3)',
                                }
                            },
                        ]
                    },
                });
            },
            setNullGraphicAndRecMap(georoamOff = false) {
                let chartOption = this.mapChart.getOption();
                chartOption.graphic = [];
                this.mapChart.setOption(chartOption, true);
                georoamOff && this.mapChart.off('georoam');
            },
        },

        beforeDestroy() {
            if (this.mapChart) {
                this.mapChart.dispose();
            }
        },
    }
</script>

```