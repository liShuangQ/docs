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
                myChart: null,
                lock: true
            }
        },
        methods: {
            chartInit() {
                this.myChart = echarts.init(this.$refs.chart);
                const city = '中华人民共和国'
                const mapData = require(`./mapJson/china_full.json`)
                echarts.registerMap(
                    city,
                    mapData
                );
                let option = {
                    geo: [
                        {
                            map: city,
                            roam: true
                        }
                    ]
                };
                this.myChart.setOption(option);
                // this.setNullGraphicAndRecMap() 做优化时 可用此清除图形等，不用每次重新渲染整个图
                let debounceFun = null
                let setGraphic = null
                // 多边形还是圆形
                if (false) {
                    setGraphic = this.setPolygon
                } else {
                    setGraphic = this.setCircle
                }
                debounceFun = debounce(setGraphic, 500)
                setGraphic()
                this.myChart.on("georoam", params => {
                    if (this.lock) {
                        setGraphic(false)
                    }
                    debounceFun()
                });
            },
            setPolygon(show = true) {
                let polygonCoords = [
                    [110.00, 35.00], // 西南角 左下角
                    [130.00, 35.00], // 东南角 右下角
                    [120.00, 40.00], // 东北角 右上角
                    [100.00, 40.00], // 西北角 左上角
                    [110.00, 35.00]  // 返回起点闭合多边形
                ];
                this.myChart.setOption({
                    graphic: {
                        elements: [
                            {
                                type: 'polygon',
                                shape: show ? {
                                    points: polygonCoords.map((coord, index) => {
                                        return this.myChart.convertToPixel('geo', coord)
                                    }),
                                } : {points: []},
                                style: {
                                    fill: 'rgba(255, 0, 0, 0.3)',
                                }
                            },
                        ]
                    },
                });
                this.lock = show
            },
            setCircle(show = true) {
                const calculateDistance = (x1, y1, x2, y2) => {
                    let dx = x2 - x1;
                    let dy = y2 - y1;
                    return Math.sqrt(dx * dx + dy * dy);
                }
                let circleCoords = {
                    center: [110.00, 35.00],
                    rPoint: [100.00, 40.00],
                }
                const center = this.myChart.convertToPixel('geo', circleCoords.center)
                const rPoint = this.myChart.convertToPixel('geo', circleCoords.rPoint)
                this.myChart.setOption({
                    graphic: {
                        elements: [
                            {
                                type: 'circle',
                                shape: show ? {
                                    cx: this.myChart.convertToPixel('geo', circleCoords.center)[0],
                                    cy: this.myChart.convertToPixel('geo', circleCoords.center)[1],
                                    r: calculateDistance(center[0], center[1], rPoint[0], rPoint[1]),
                                } : {cx: 0, cy: 0, r: 0},
                                style: {
                                    fill: 'rgba(0, 255, 0, 0.3)',
                                }
                            },
                        ]
                    },
                });
                this.lock = show
            },
            setNullGraphicAndRecMap(data) {
                let chartOption = this.mapChart.getOption();
                chartOption.graphic = [];
                this.mapChart.setOption(chartOption, true);
                this.mapChart.off('georoam');
            },
        },

        beforeDestroy() {
            if (this.myChart) {
                this.myChart.dispose();
            }
        },
    }
</script>

```