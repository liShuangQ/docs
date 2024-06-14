---
title: echarts地图画多边形
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
        <div style="width:100%;height: 100%" ref="chart"></div>
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
            const zoom = 1
            const mapData = require(`./mapJson/china_full.json`)
            echarts.registerMap(
                city,
                mapData
            );
            let polygonCoords = [
                [110.00, 35.00], // 西南角
                [130.00, 35.00], // 东南角
                [120.00, 40.00], // 东北角
                [100.00, 40.00], // 西北角
                [110.00, 35.00]  // 返回起点闭合多边形
            ];
            let option = {
                geo: [
                    {
                        map: city,
                        roam: true
                    }
                ]
            };
            this.myChart.setOption(option);
            const setPolygon = () => {
                console.log('渲染多边形')
                this.myChart.setOption({
                    graphic: {
                        elements: [{
                            type: 'polygon',
                            shape: {
                                points: polygonCoords.map((coord, index) => {
                                    return this.myChart.convertToPixel('geo', coord)
                                }),
                            },
                            style: {
                                fill: 'rgba(255, 0, 0, 0.3)',
                            }
                        }]
                    },
                });
                this.lock = true
            }
            const setPolygonNull = () => {
                console.log('渲染空多边形')
                this.myChart.setOption({
                    graphic: {
                        elements: [{
                            type: 'polygon',
                            shape: {
                                points: []
                            },
                        }]
                    },
                });
                this.lock = false
            }
            const debounceSetPolygon = debounce(setPolygon, 500)
            setPolygon()
            this.myChart.on("georoam", params => {
                if (this.lock) {
                    setPolygonNull()
                }
                debounceSetPolygon()
            });
        }
    },
    beforeDestroy() {
        if (this.myChart) {
            this.myChart.dispose();
        }
    },
}
</script>
```