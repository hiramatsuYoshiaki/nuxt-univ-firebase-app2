<template>
  <div class="transitionScreen" />
</template>
<style scoped lang="scss">
.transitionScreen{
    position: absolute ;
    top: 0;
    left: 0;
    width:100vw;
    height: 100%;
    z-index: 1000;
    background-color:$body-color;
    margin:0;
    padding:0;
    transform: translateX(-100%);
}
</style>
