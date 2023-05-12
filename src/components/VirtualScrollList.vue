<template>
  <div
    class="virtual-scroll-list"
    ref="container"
    :style="{ height: containerHeight + 'px' }"
  >
    <p>Happy scrolling!</p>
    <div v-for="(item, index) in virtualItems" :key="index" class="itemWrapper">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemHeight: {
      type: Number,
      default: 100,
    },
    containerHeight: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      scrollTop: 0,
      visibleStartIndex: 1,
      visibleEndIndex: 0,
    };
  },
  computed: {
    virtualItems() {
      return this.items.slice(this.visibleStartIndex, this.visibleEndIndex + 2);
    },
  },
  mounted() {
    this.$refs.container.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    console.log(this.items.length);
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = this.$refs.container.scrollTop;
      this.visibleEndIndex = Math.ceil(
        (this.scrollTop + parseInt(this.containerHeight)) / this.itemHeight
      );
      this.visibleEndIndex = Math.min(
        this.visibleEndIndex,
        this.items.length - 1
      );

      this.visibleStartIndex = Math.ceil(
        (this.scrollTop + parseInt(this.containerHeight)) / this.itemHeight
      );
      this.visibleStartIndex = Math.min(this.visibleStartIndex, 1);
    },
  },
};
</script>
<style>
.virtual-scroll-list {
  overflow-y: auto;
  min-height: 480px;
}
.itemWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

