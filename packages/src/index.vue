<template>
  <div class="progress"
  :style="{
    'background-color': lineBackgroundColor,
  }"
  >
    <div class="current-progress-box"
    :style="{
      'padding-left': startLocation + '%',
      'padding-right': (100 - endLocation) + '%',
    }"
    >
      <div class="progress-width"
      :style="{
        'background-color': lineForeground,
        width: currentProgress + '%'
      }">
        <div class="cur-slot">
          <!-- 当前进度位置上面的插槽 -->
          <slot />
        </div>
      </div>
    </div>
    <div v-for="(item,index) of steps" :key="index" class="round" 
    :style="{
      left: item.progress + '%',
      width: roundWidth,
      height: roundWidth,
    }"
    >
      <span class="cir"
      v-if="item.showRound"
      :style="{
        backgroundColor: 
        currentStep && setpWidth >= item.progress 
        ? item.foreground || '#019879' 
        : item.backgroundColor || '#dcdcdc'
      }">
        
      </span>
      <slot name="text" :item='item'>
        <!-- 圆点下面文本的插槽 -->
        <div v-if="item.text" class="text">{{item.text}}</div>
      </slot>
    </div>
    <div class="step-width"
    :style="{
      'background-color': lineForeground,
      width : setpWidth + '%'
    }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'stepsProgress',
  props:{
    steps: Array, /* 
    [
      {
        progress: 0, // 步长圆点显示百分比的位置
        showRound: true, // 是否显示圆点
        text: 'x', // 圆点下面的文本
      },{
        progress: 100,
        showRound: true,
      }
    ]
     */
    lineForeground: {
      type: String,
      default: '#019879'
    },
    lineBackgroundColor: {
      type: String,
      default: '#dcdcdc'
    },
    roundWidth: {
      type: String,
      default: '1em',
    },
    currentProgress: { // 当前进度
      type: Number,
      default: 0
    },
    startLocation: { // 0% 开始的位置
      type: Number,
      default: 0
    }, 
    endLocation: {  // 100% 终点位置
      type: Number,
      default: 100
    },
    currentStep: {  // 当前步长
      type: Number,
      default: 0
    }, 
  },
  computed:{
    setpWidth(){ // 当前的步长
      if(!this.currentStep) return 0;
      return this.steps?.[this.currentStep - 1 ]?.progress;
    }
  }
};
</script>

<style lang="less" scoped>
.progress{
  position: relative;
  width: 100%;
  height: 5px;
  .current-progress-box{
    position: absolute;
    top: 0;left: 0;
    height: 100%;
    background-clip: content-box;
    box-sizing: border-box;
    width: 100%;
    .progress-width{
      height: 100%;
      width: 10%;
      position: relative;
      transition: width .3s;
      .cur-slot{
        position: absolute;
        right: -1em;
        top: -2.5em;
        width: 2em;
        height: 2em;
      }
    }
  }
  .round{
    position: absolute;
    width: 1em;
    height: 1em;
    transform: translate(-50%,-50%);
    > .text{
      position: absolute;
      font-size: 0.16rem;
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    .cir{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 2.5px;
      border-radius: 50%;
      z-index: 1;
    }
  }
  .step-width{
    position: absolute;
    height: 100%;
    width: 0;
  }
}
</style>