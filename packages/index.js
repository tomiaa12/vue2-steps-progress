import stepsProgress from './src/index.vue';
stepsProgress.install = function(Vue) {
  Vue.component(stepsProgress.name, stepsProgress);
};
export default stepsProgress;