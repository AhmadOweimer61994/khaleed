<template>
  <div id="app">
    <header class="header">
      <nav>
        <ul>
          <li>
            <router-link to="/contact">
              <i class="fas fa-info-circle"></i> Contact
            </router-link>
          </li>

          <li>
            <router-link to="/about">
              <i class="fas fa-info-circle"></i> بوالص الشحن
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa fa-home" aria-hidden="true"></i>الصفحة الرئيسية
            </router-link>
          </li>
          <li>
            <router-link to="/table">
              <i class="fa fa-home" aria-hidden="true"></i>table
            </router-link>
          </li>
        </ul>
      </nav>
      <i
        @click="minimizeWindow"
        id="minimize-btn"
        class="fa fa-minus"
        aria-hidden="true"
      ></i>
    </header>
    <header class="header2">
      <h2>{{ routeName }}</h2>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  name: "App",

  computed: {
    // Using Vue Router's $route object to get the route name or path
    routeName() {
      return this.$route.name || this.$route.path; // Use route name if available, otherwise fallback to path
    },
  },
  methods: {
    minimizeWindow() {
      // Call the Electron API to minimize the window
      if (window.electron) {
        window.electron.minimizeWindow();
      }
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "LibreBaskerville-Regular";
  text-align: center;
  color: #2c3e50;
}

.header {
  box-shadow: inset;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  background: rgba(25, 42, 86, 1);
  padding: 5px 10px;
  height: 60px; /* Adjust height as needed */
}
.header2 {
  background-color: rgba(127, 143, 166, 1);
  padding: 5px 10px;
  height: 60px;
  font-family: "LibreBaskerville-Regular";

  overflow: hidden;
}

.header h2 {
  margin: 15px;
  color: aliceblue;
}

.header nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
}

.header nav li {
  color: aliceblue;
  padding: 0 10px;
  font-family: "LibreBaskerville-Regular";
  font-size: 20px;
  font-weight: bold;
}

.header nav li a {
  color: aliceblue;
  text-decoration: none;
}

.header nav li:hover {
  background-color: rgba(39, 174, 95, 0.164);
  cursor: pointer;
}

.fas,
.fa {
  color: aliceblue;
  font-size: 20px;
  cursor: pointer;
  margin-right: 15px;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto; /* Adds scrolling to the main content if necessary */
}
</style>
