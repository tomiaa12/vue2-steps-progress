<template>
  <div class="home">
    <stepsProgress :steps='steps' :currentStep='currentStep'
    :currentProgress='currentProgress'
    :lineForeground='lineForeground'
    :lineBackgroundColor='lineBackgroundColor'
    roundWidth='1.5em'
    
    :startLocation='25'
    :endLocation='90'
     />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      steps: [
        {
          progress: 0,
          showRound: true,
          foreground: 'red',
          backgroundColor: '#000',
          text: '文本'
        },
        {
          progress: 100,
          showRound: true,
          text: '文本'
        }
      ],
      currentStep: 1,
      currentProgress: 90,
      lineForeground: 'red',
      lineBackgroundColor: 'green'
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 1000px;
  margin: 100px auto;
}
</style>
