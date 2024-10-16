<template>
  <div>
    <div class="bl_form_container" ref="formContainer" id="print-container">
      <div
        v-for="(field, index) in formFields"
        :key="index"
        :class="['bl_form_field_container', field.float]"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          width: field.fieldWidth,
          height: field.fieldHeight,
          marginTop: field.margintop,
          borderTop: field.borderTop,
          borderBottom: field.borderBottom,
          borderLeft: field.borderLeft,
          borderRight: field.borderRight,
          maxWidth: field.maxWidth,
          maxHeight: field.maxHeight,
          minHeight: field.minHeight,
          flexGrow: field.flexGrow,
        }"
      >
        <div :colspan="field.colspan ? field.colspan : 1">
          <span class="center_word" v-if="field.centerWord">{{
            field.centerWord
          }}</span>
          <span>{{ field.label }}</span>
          <span>{{ field.enlablel }}</span>
          <br />
          <span>{{ field.label2 }}</span>
          <br />
          <template v-if="field.type === 'textarea'">
            <textarea :rows="field.textareaRows" class="bl_textarea"></textarea>
          </template>
          <template v-else-if="field.type === 'input'">
            <input type="text" class="bl_input_text" :id="field.id" />
          </template>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <!-- <div class="bl_button_container">
      <button type="button" @click="" class="bl_button">Submit</button>
      <button type="button" @click="" class="bl_button">Expand Fields</button>
      <button @click="" class="bl_button">Print</button>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "table-vue",
  data() {
    return {
      formFields: [
        {
          type: "",
          label: "1",
          enlablel: "",
          id: "bl_title",
          float: "float_left",
          fieldWidth: "38%",
          fieldHeight: "35px",
          borderTop: "2px solid",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "2",
          enlablel: "",
          id: "bl_title",
          float: "float_left",
          fieldWidth: "36%",
          fieldHeight: "35px",
          borderTop: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "3",
          enlablel: "",
          id: "bl_title",
          float: "float_left",
          fieldWidth: "26%",
          fieldHeight: "35px",
          borderTop: "2px solid",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "1",
          enlablel: "",
          id: "bl_title",
          float: "float_left",
          fieldWidth: "38%",
          fieldHeight: "35px",
          borderTop: "2px solid",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "2",
          enlablel: "",
          id: "bl_title",
          float: "float_left",
          fieldWidth: "36%",
          fieldHeight: "35px",
          borderTop: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "3",
          enlablel: "",
          id: "bl_title",
          float: "float_left",
          fieldWidth: "26%",
          fieldHeight: "35px",
          borderTop: "2px solid",
          borderRight: "2px solid",
        },

        // Add other fields as needed...
      ],
    };
  },
  methods: {
    expandFields() {
      // Find the index where the current label "18" is located
      const lastIndex = this.formFields.findIndex(
        (field) => field.label === "18"
      );

      // Define the new columns (15, 16, A16, 17, 18) that you want to add
      const newColumns = [
        {
          label: "15",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "13.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          label: "16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "5.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          label: "A16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          label: "17",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          label: "18",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "15.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
      ];

      // Insert the new columns after the current "18" (if it exists)
      if (lastIndex !== -1) {
        // Insert new columns right after the existing "18"
        this.formFields.splice(lastIndex + 1, 0, ...newColumns);
      } else {
        // If "18" isn't found, just append to the array
        this.formFields.push(...newColumns);
      }
    },

    openPrintPopup() {
      const tableHtml = document.getElementById("print-container").innerHTML;
      console.log("Captured tableHtml:", tableHtml); // Log the captured HTML

      if (!tableHtml) {
        console.error("Table HTML is undefined or empty");
      }

      window.electron.ipcRenderer.send("open-print-popup", tableHtml);
    },
    printPage() {
      const originalContents = document.body.innerHTML;
      const printContents = this.$refs.formContainer.outerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload the page to restore the original content
    },
  },
};
</script>
