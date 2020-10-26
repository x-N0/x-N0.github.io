<template>
  <div class="img_sprites">
    <i class="sprite mask"></i>
    <i class="sprite bowl"></i>
    <i class="sprite icons"></i>
    <i class="sprite subject"></i>
  </div>
</template>

<script>
export default {
  name: 'ProfileImg',
}
</script>

<style lang="scss" scoped>
$bg_size: 75;
.sprite {
  background-image: url(/spritesheet-min.png);
  transform: scaleX(-1);
  background-size: $bg_size + vw $bg_size + vh;
  background-repeat: no-repeat;
  display: block;
  position: relative;

  &.bowl {
    width: $bg_size * 6.86px;
    height: $bg_size * 7.42px;
    background-position: $bg_size * -0.05px $bg_size * 0px;
    position: absolute;
  }
  &.icons {
    width: $bg_size * 0.9px;
    height: $bg_size * 2.71px;
    background-position: $bg_size * -6.92px $bg_size * 0px;
    left: $bg_size * 3.88px;
    bottom: $bg_size * -5.3px;
  }
  &.mask {
    width: $bg_size * 2.64px;
    height: $bg_size * 2.22px;
    background-position: $bg_size * -6.95px $bg_size * -2.71px;
    left: $bg_size * 2.14px;
    bottom: $bg_size * -4.18px;
    z-index: 2;
  }
  &.subject {
    width: $bg_size * 5.71px;
    height: $bg_size * 7.68px;
    background-position: $bg_size * -9.62px $bg_size * -0.03px;
    left: $bg_size * -1.362px;
    bottom: $bg_size * -1.04px;
  }
}
.img_sprites {
  display: flex;
  margin: auto;
  place-content: center center;
  position: static;
}
</style>
