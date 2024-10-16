<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      tableData: [
        // Your data here
      ],
    };
  },
  methods: {
    openPrintPopup() {
      window.electron.ipcRenderer.send("open-print-popup", this.tableData);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f2d46;

  background-color: rgba(236, 240, 241, 1);
}
</style>
