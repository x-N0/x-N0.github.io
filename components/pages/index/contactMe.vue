<template>
  <section class="contact_me">
    <b>Contact Me</b>
    <div class="contact_info">Contact Info goes Right Side</div>
    <div class="contact_extra">
      Goes on the left.
      <p class="contact_quote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et hic libero
        minima natus nesciunt officiis quam quod repellat veritatis voluptas.
      </p>
      <div class="contact_linked_social">multiple colorable icons here</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      linkedSocial: [
        {
          name: '',
          sprint_icon: '',
          link: '',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
