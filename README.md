## preview

![preview](https://p.qlogo.cn/zc_icon/0/4b28c14f9a7aa5c955b5cf0d26a5f0ec16278095540495/0.png)

## Install

```js
npm i vue2-steps-progress
```

## Start

main.js

```js
import stepsProgress from 'vue2-steps-progress'
Vue.use(stepsProgress);
```

or

```js
import stepsProgress from 'vue2-steps-progress'
export default {
  components: {
    stepsProgress,
  }
}
```

## template

### currentProgress

| prop            | type   | default |
| :-------------- | :----- | :------ |
| currentProgress | Number | 0       |



```html
<stepsProgress :currentProgress='50' />
```

![preview](https://p.qlogo.cn/zc_icon/0/269427e68944bfcdd22d9b3e1ffcc48316278043692923/0.png)

### lineBackground

```html
<stepsProgress 
:currentProgress='50' 
lineBackgroundColor='#ccc'
lineForeground='green'
/>
```

![preview](https://p.qlogo.cn/zc_icon/0/2708ddf52adf817a2a6d671a393c372016278052512997/0.png)

|                     |        |          |
| :------------------ | ------ | -------- |
| prop                | type   | default  |
| lineBackgroundColor | String | \#dcdcdc |
| lineForeground      | String | \#019879 |

### startLocation && endLocation

```html
<stepsProgress
:currentProgress='30'
:startLocation='20'
:endLocation='90'
></stepsProgress> 
```

|               |        |         |
| :------------ | ------ | ------- |
| prop          | type   | default |
| startLocation | Number | 0       |
| endLocation   | Number | 100     |

startLocation 是整个进度条起始的百分比位置

​	StartLocation is the percentage of the start of the entire progress bar

endLocation 是整个进度条结束的百分比位置

​	EndLocation is the percentage of the end of the entire progress bar

currentProgress 是 startLocation 至 endLocation 中间的百分比

​	CurrentProgress is the percentage between startLocation and endLocation

![preview](https://p.qlogo.cn/zc_icon/0/de1beda43573a7a505526f9a4b767a8116278077335977/0.png)

### demo-1-step

```html
<stepsProgress
    :currentProgress='30'
    :steps="[{
    progress: 0,
    showRound: true,
    text: 'Have to declare'
    },{
    progress: 100,
    showRound: true,
    text: 'completed'
    }]"
    :currentStep='1'
    roundWidth='1.5em'
></stepsProgress>
```

![preview](https://p.qlogo.cn/zc_icon/0/54aae62ffc3de5d6b8ac3c635814a16c16278060342536/0.png)

| prop        | type   | default |
| ----------- | ------ | ------- |
| steps       | Array  |         |
| currentStep | Number | 0       |
| roundWidth  | string | 1em     |

#### roundWidth

 圆半径 Circle radius

#### currentStep

currentStep 是 当前进行到step的下标, currentStep之前的圆点会点亮。

CurrentStep is the subscript of the currentStep, and the dots before currentStep will be lit.

#### steps

```html
<stepsProgress
:steps="[{
    progress: 100, 
    // 当前圆点距离整个进度条的left位置, 范围:0-100
    // The left position between the current dot and the progress bar (range :0-100)

    showRound: true, // 显示圆点  According to dot

    text: 'completed', // 圆点下方的文字,没有则不显示  The text below the dot,If no, no display
    foreground: 'red', // 圆点点亮的颜色  Dot light color
    backgroundColor: '#000', // 圆点背景色 Dot background color
}]"
></stepsProgress>
```

### demo2

```html
<stepsProgress
    :currentProgress='90'
    :steps="[{
        progress: 10,
        showRound: true,
        text: 'Have to declare'
        },{
        progress: 25,
        showRound: true,
        text: 'Have been concluded'
        },{
        progress: 90,
        showRound: true,
        text: 'completed'
    }]"
    :startLocation='25'
    :endLocation='90'
    :currentStep='2'
></stepsProgress>
```

![preview](https://p.qlogo.cn/zc_icon/0/6f29c8e621eb45152f2870ff555b12461627808487194/0.png)

### demo3-slot

```vue
<template>
  <div class="demo">
    <stepsProgress
    :currentProgress='currentProgress'
    :steps="[{
      progress: 10,
      showRound: true,
      text: 'Have to declare'
    },{
      progress: 25,
      showRound: true,
      text: 'Have been concluded'
    },{
      progress: 58,
      showRound: false,
      text: 'under construction'
    },{
      progress: 90,
      showRound: true,
      text: 'completed'
    }]"
    :startLocation='25'
    :endLocation='90'
    :currentStep='2'
    >
      <template>
        <div class="slot-currentProgress">
          {{currentProgress}}
        </div>
      </template>
      <template #text='{item}'>
        <span v-if="item.text == 'under construction'" class="text">
          {{item.text}} <span style="color:red">icon</span>
        </span>
        <span v-else class="text">
          {{item.text}}
        </span>
      </template>
    </stepsProgress>
  </div>
</template>
<script>
import stepsProgress from 'vue2-steps-progress'
export default {
  components: {
    stepsProgress,
  },
  data() {
    return {
      currentProgress: 10
    }
  },
}
</script>
<style scoped>
.demo{
  width: 1000px;
  height: 50px;
  margin: 100px auto;
}
.slot-currentProgress{
  position: relative;
  background-color: rgb(1, 152, 121);
  width: 2em;
  border-radius: 50%;
  line-height: 2;
  color: white;
}
.slot-currentProgress::before{
  content: '';
  position: absolute;
  bottom: -.2em;
  left: 50%;
  width: 1em;
  height: 1em;
  background-color: inherit;
  z-index: -1;
  transform:  translateX(-50%) rotate(-45deg);
}
.text{
  position: absolute;
  font-size: 0.16rem;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
</style>

```

![preview](https://p.qlogo.cn/zc_icon/0/4b28c14f9a7aa5c955b5cf0d26a5f0ec16278095540495/0.png)
