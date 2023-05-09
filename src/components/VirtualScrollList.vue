<template>
  <div class="virtual-scroll-list" ref="container" :style="{height: containerHeight}">
    <div :style="{transform: 'translateY(' + scrollTop + 'px)'}">
      <div v-for="(item, index) in virtualItems" :key="index">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number,
      default: 30
    },
    containerHeight: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scrollTop: 0,
      visibleStartIndex: 0,
      visibleEndIndex: 0
    }
  },
  computed: {
    virtualItems() {
      return this.items.slice(this.visibleStartIndex, this.visibleEndIndex + 1)
    }
  },
  mounted() {
    this.$refs.container.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollTop = this.$refs.container.scrollTop
      this.visibleStartIndex = Math.floor(this.scrollTop / this.itemHeight)
      this.visibleEndIndex = Math.ceil(
        (this.scrollTop + parseInt(this.containerHeight)) / this.itemHeight
      )
      this.visibleEndIndex = Math.min(this.visibleEndIndex, this.items.length - 1)
    }
  }
}
</script>
