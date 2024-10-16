<!-- DetailPopup.vue -->
<template>
  <div class="detail-popup" v-if="visible">
    <div class="popup-content">
      <div class="header">
        <h2>Details</h2>
      </div>

      <p><strong>Views:</strong> {{ details.views }}</p>
      <p><strong>Company Name:</strong> {{ details.companyName }}</p>
      <p><strong>Policy Date:</strong> {{ formatDate(details.policyDate) }}</p>
      <p><strong>Policy Number:</strong> {{ details.policyNumber }}</p>
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: Object,
    visible: Boolean,
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getUTCDate()).padStart(2, "0");
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const year = date.getUTCFullYear();
      return `${day}-${month}-${year}`;
    },
  },
};
</script>

<style scoped>
.detail-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #39271f6c;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.header {
  background-color: #1f2739;
  color: #fff;
  text-align: center;
  align-items: center;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 1000px;
}

button {
  margin-top: 20px;
}
</style>
