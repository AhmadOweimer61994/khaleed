<template>
  <div>
    <div class="form-group">
      <div class="no-print">
        <label for="fname.search" class="labels">بحث</label>
        <input
          type="search"
          v-model="searchQuery"
          @input="filterTable"
          placeholder="Search..."
          class="serach"
          id="fname.search"
        />
      </div>

      <div class="no-print">
        <label for="fname" class="labels">الى تاريخ</label>
        <input
          placeholder="Search..."
          class="serach"
          id="end-date"
          v-model="endDate"
          type="text"
          ref="endDateInput"
        />
      </div>
      <div class="no-print">
        <label for="fname" class="labels">من تاريخ</label>
        <input
          placeholder="Search..."
          class="serach"
          id="start-date"
          v-model="startDate"
          type="text"
          ref="startDateInput"
        />
      </div>
      <div class="buttons no-print">
        <p v-if="monthNumber">Month Number: {{ monthNumber }}</p>

        <button class="shake-horizontal" @click="openPrintPopup">
          <i class="fa fa-print" aria-hidden="true"></i>
          <label for=""> طباعة</label>
        </button>

        <button class="shake-horizontal">
          <i class="fa fa-plus"></i>
          <label for=""> اضافة</label>
        </button>
      </div>
    </div>
    <div id="print-container">
      <table class="container">
        <thead>
          <tr>
            <th><h1>Views</h1></th>
            <th><h1>اسم الشركة</h1></th>
            <th><h1>تاريخ البواليص</h1></th>
            <th><h1>رقم البواليص</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in filteredData"
            :key="index"
            @click="showDetails(item)"
          >
            <td>{{ item.views }}</td>
            <td>{{ item.companyName }}</td>
            <td>{{ formatDateToDDMMYYYY(item.policyDate) }}</td>
            <td>{{ formatDateToDDMMYYYY(item.policyNumber) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <DetailPopup
      :details="selectedItem"
      :visible="isPopupVisible"
      @close="closePopup"
    />
  </div>
</template>

<script>
import flatpickr from "flatpickr";
import DetailPopup from "../components/DetailPopup.vue";

export default {
  components: {
    DetailPopup,
  },
  name: "AboutPage",
  data() {
    return {
      searchQuery: "",
      monthNumber: null,
      selectedItem: null,
      isPopupVisible: false,
      tableData: [
        {
          views: "Google",
          companyName: "9518",
          policyDate: "2024-01-01",
          policyNumber: "2024-01-01T01:32:50Z",
        },
        {
          views: "Twitter",
          companyName: "7326",
          policyDate: "2024-01-01",
          policyNumber: "2024-01-01T00:51:22Z",
        },
        {
          views: "Amazon",
          companyName: "4162",
          policyDate: "2024-05-01",
          policyNumber: "2024-01-01T00:24:34Z",
        },
        {
          views: "LinkedIn",
          companyName: "3654",
          policyDate: "2024-06-01",
          policyNumber: "2024-01-01T00:12:10Z",
        },
        {
          views: "CodePen",
          companyName: "2002",
          policyDate: "2024-07-01",
          policyNumber: "2024-01-01T00:46:19Z",
        },
        {
          views: "GitHub",
          companyName: "4623",
          policyDate: "2024-08-01",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "2",
          policyDate: "2024-3-05",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "3",
          policyDate: "2024-10-15",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "4",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "5",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "6",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "7",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "8",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "9",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "10",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "11",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "12",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "13",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "14",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "15",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "16",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "17",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "18",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "4623",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
        {
          views: "GitHub",
          companyName: "4623",
          policyDate: "2024-02-21",
          policyNumber: "2024-01-01T00:31:52Z",
        },
      ],
      filteredData: [],
      startDate: "",
      endDate: "",
    };
  },
  created() {
    // Initialize filteredData with the full dataset
    this.filteredData = this.tableData;
  },
  methods: {
    filterTable() {
      // Combine search query and date range filtering
      const query = this.searchQuery.toUpperCase();
      this.filteredData = this.tableData.filter((item) => {
        const itemDate = new Date(item.policyDate);
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        const isInDateRange =
          (!this.startDate || itemDate >= start) &&
          (!this.endDate || itemDate <= end);
        const matchesQuery = Object.values(item).some((value) =>
          value.toUpperCase().includes(query)
        );

        return isInDateRange && matchesQuery;
      });
      this.sortByPolicyDate();
    },
    formatDateToDDMMYYYY(dateString) {
      const date = new Date(dateString);
      const day = String(date.getUTCDate()).padStart(2, "0");
      const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = date.getUTCFullYear(); // Full year (e.g., 2024)

      return `${day}-${month}-${year}`;
    },
    getMonthName(dateString) {
      const date = new Date(dateString);
      this.monthNumber = date.getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12
      return this.monthNumber;
    },
    printReceipt() {
      const options = {
        silent: false,
        printBackground: true,
        color: false,
        margin: {
          marginType: "printableArea",
        },
        landscape: false,
        pagesPerSheet: 1,
        collate: false,
        copies: 1,
        header: "Header of the Page",
        footer: "Footer of the Page",
      };

      // Use the API exposed in preload.js
      window.electron.print(options);

      window.electron.onPrintResponse((response) => {
        if (response.success) {
          console.log("scusfuly");
        } else {
          console.error("Print request failed:", response.reason);
        }
      });
    },
    openPrintPopup() {
      const tableHtml = document.getElementById("print-container").innerHTML;
      console.log("Captured tableHtml:", tableHtml); // Log the captured HTML

      if (!tableHtml) {
        console.error("Table HTML is undefined or empty");
      }

      window.electron.ipcRenderer.send("open-print-popup", tableHtml);
    },
    sortByPolicyDate() {
      this.filteredData.sort(
        (a, b) => new Date(a.policyDate) - new Date(b.policyDate)
      );
    },
    showDetails(item) {
      this.selectedItem = item;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
  watch: {
    // Watch for changes in the date fields and trigger filterTable
    startDate: "filterTable",
    endDate: "filterTable",
    searchQuery: "filterTable",
  },
  mounted() {
    flatpickr(this.$refs.startDateInput, {
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        this.startDate = selectedDates[0]
          ? selectedDates[0].toISOString().split("T")[0]
          : "";
      },
    });
    flatpickr(this.$refs.endDateInput, {
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        this.endDate = selectedDates[0]
          ? selectedDates[0].toISOString().split("T")[0]
          : "";
      },
    });
  },
};
</script>

<style scoped>
button {
  font-weight: bold;
  background-color: #1f2739;
  color: white;
  padding: 14px 20px;
  margin: 8px 15px;
  border: none;
  border-radius: 4px;

  font-size: 15px;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #a7a1ae;
  background-color: #1f2739;
}
.form-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.serach {
  padding: 12px 20px;
  margin: 8px 30px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.labels {
  margin-right: 5px;
  display: block;
  font-weight: bold;
  font-size: 20px;
}
.buttons {
  line-height: 7;
}

h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #4dc3fa;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #ffffff;
  direction: rtl;
  text-align: right;
}

.container td {
  font-weight: normal;
  font-size: 1em;
  box-shadow: 0 2px 2px -2px #abb5d1;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td,
.container th {
  padding: 1%;
  font-weight: bold;
  direction: rtl;
  text-align: right;
}

.container tr:nth-child(odd) {
  background-color: rgba(245, 246, 250, 1);
}

.container tr:nth-child(even) {
  background-color: rgba(220, 221, 225, 1);
}

.container th {
  background-color: #1f2739;
  direction: rtl;
  text-align: right;
}

.container tr:hover {
  background-color: rgba(25, 42, 86, 1);
  box-shadow: 0 6px 6px -6px #0e1119;
  color: white !important;
}
.fa {
  margin: 0 3px;
  font-size: 15px;
}
.shake-horizontal:hover {
  cursor: pointer;
  background-color: #4cd137;
  -webkit-animation: shake-horizontal 0.8s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-8-26 16:24:36
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shake-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  90% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  90% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
/* @media print {
  .no-print {
    display: none;
  }

  body {
    background-color: white;
    color: black;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }

  th {
    background-color: lightgray;
  }
} */
</style>
