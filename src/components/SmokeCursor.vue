<template>
  <div class="smoke-cursor" :style="cursorStyle"></div>
</template>

<script>
export default {
  name: "SmokeCursor",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    cursorStyle() {
      return {
        transform: `translate(${this.mouseX}px, ${this.mouseY}px)`,
      };
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.updateMousePosition);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.updateMousePosition);
  },
  methods: {
    updateMousePosition(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },
};
</script>

<style scoped>
.smoke-cursor {
  position: fixed;
  top: -25px;
  left: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
  animation: smoke 1.5s infinite;
  transform-origin: center center;
}

@keyframes smoke {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(2);
    opacity: 0.3;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>