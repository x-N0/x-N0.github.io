<template>
  <div
    class="col-md-6 col-sm-6 col-xs-12 wow fadeInUp"
    data-wow-delay="0.3s"
    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp"
  >
    <div
      class="service_single_item service_single_item"
      :style="'background-image: url(' + cardObj.img_bg + ');'"
    >
      <div
        class="overlay"
        style="
          background-image: -webkit-linear-gradient(
            -48deg,
            rgb(36, 226, 254) 0%,
            rgb(36, 176, 254) 54%,
            rgb(35, 126, 253) 100%
          );
          background-image: -ms-linear-gradient(
            -48deg,
            rgb(36, 226, 254) 0%,
            rgb(36, 176, 254) 54%,
            rgb(35, 126, 253) 100%
          );
        "
      />
      <div class="service_item_inner">
        <div class="service_icon">
          <img :src="cardObj.icon" alt="Icon" class="img-responsive">
        </div>
        <h4 class="service_title">
          {{ cardObj.title }}
        </h4>
        <p class="service_details">
          {{ cardObj.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortCards',
  props: {
    cardObj: {
      type: Object,
      default() {
        return {
          title: 'None',
          description: 'None',
          icon:
            'http://droitthemes.com/wp/mak/wp-content/uploads/2018/10/phone_icon.png',
          img_bg: 'None',
        }
      },
    },
  },
}
</script>

<style scoped></style>
