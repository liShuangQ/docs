---
title: html5纯前端扫码实现
category:
  - 代码片段
tag:
  - js BarcodeDetector
---

- `注意其中使用了实验性API` [BarcodeDetector](https://developer.mozilla.org/zh-CN/docs/Web/API/BarcodeDetector)

![img.png](imgs/h5scan/img.png)
```js
   const getCamerasScan = async () => {
    try {
        // 请求摄像头权限
        this.scanShow = true
        const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}});
        const video = document.createElement('video');
        video.style.width = '250px'
        video.style.height = '250px'
        // TODO 将video加在合适的dom里面
        // document.querySelector('#reader').appendChild(video)
        video.srcObject = stream;
        video.play();

        // 等待视频准备好
        await new Promise((resolve) => {
            video.oncanplay = resolve;
        });

        // 创建BarcodeDetector实例
        const detector = new BarcodeDetector({formats: ['code_128']});

        // 开始循环扫描
        // eslint-disable-next-line no-inner-declarations
        async function scanLoop() {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            document.querySelector('#reader').appendChild(canvas)

            // eslint-disable-next-line no-constant-condition
            while (true) {
                // 每秒拍摄一张照片
                await new Promise(resolve => setTimeout(resolve, 1000));
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                try {
                    // 确保图像已经绘制完成
                    await new Promise(resolve => requestAnimationFrame(resolve));

                    // 扫描条形码
                    const barcodes = await detector.detect(canvas);
                    console.log(barcodes, 'barcodesbarcodesbarcodes')
                    if (barcodes.length > 0) {
                        console.log('扫描成功:', barcodes[0].rawValue);
                        // 关闭摄像头
                        stream.getTracks().forEach(track => track.stop());
                        break;
                    }
                } catch (error) {
                    console.error('扫描失败:', error);
                }
            }
        }

        scanLoop();
    } catch (error) {
        console.error('无法访问摄像头:', error);
    }
}
```