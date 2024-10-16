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
  name: "ContactPage",
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
          label: "4",
          id: "bl_shipper",
          float: "float_left",
          fieldWidth: "48.5%",
          fieldHeight: "55px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "5",
          id: "bl_shipper",
          float: "float_left",
          fieldWidth: "51.5%",
          fieldHeight: "55px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "6",
          id: "bl_payable_by",
          float: "float_left",
          fieldWidth: "48.5%",
          fieldHeight: "58px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "7",
          id: "bl_consignee",
          float: "float_left",
          fieldWidth: "51.5%",
          fieldHeight: "58px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "8",
          id: "bl_terms_of_sale",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "38px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "9",
          id: "bl_no_of_original",
          float: "float_right",
          fieldWidth: "48.5%",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "10",
          label2: "",
          id: "bl_place_and_date_of_issue",
          float: "float_right",
          fieldWidth: "13.875%",
          textareaRows: 2,
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "11",
          label2: "",
          id: "bl_place_and_date_of_issue",
          float: "float_right",
          fieldWidth: "5.875%",
          textareaRows: 2,
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "12",
          label2: "",
          id: "bl_place_and_date_of_issue",
          float: "float_right",
          fieldWidth: "15.875%",
          textareaRows: 2,
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "13",
          label2: "",
          id: "bl_place_and_date_of_issue",
          float: "float_right",
          fieldWidth: "15.875%",
          textareaRows: 2,
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "14",
          id: "bl_notify_party",
          float: "float_left",

          fieldWidth: "48.5%",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
          minHeight: "101px",
          maxHeight: "107px",
        },

        {
          type: "",
          label: "15",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "13.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "5.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "A16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "17",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "18",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "15.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "15",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "13.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "5.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "A16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "17",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "18",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "15.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "15",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "13.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "5.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "A16",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "17",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "7.9375%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "18",
          id: "bl_notify_party",
          float: "float_right",
          fieldWidth: "15.875%",
          fieldHeight: "23px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },

        {
          type: "",
          label: "19",
          id: "bl_receipt_place",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "40px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },

        {
          type: "",
          label: "20",
          id: "bl_total_no_received",
          float: "float_left",
          fieldWidth: "48.5%",
          fieldHeight: "32px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
          maxWidth: "51.5%",
        },
        {
          type: "",
          label: "21",
          id: "bl_total_no_received",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "32px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
          maxWidth: "51.5%",
        },
        {
          type: "",
          label: "22",
          id: "bl_delivery_place",
          float: "float_left",
          fieldWidth: "6.125%",
          fieldHeight: "45px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "23",
          id: "bl_delivery_place",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "45px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "24",
          id: "bl_delivery_place",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "45px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "25",
          id: "bl_delivery_place",
          float: "float_left",
          fieldWidth: "20.125%",
          fieldHeight: "45px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "26",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "18.375%",
          fieldHeight: "45px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "27",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "15.375%",
          fieldHeight: "45px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "28",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.875%",
          fieldHeight: "45px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "29",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "4.875%",
          fieldHeight: "45px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "30",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "6.125%",
          fieldHeight: "24px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
          minHeight: "24px",
          maxHeight: "46px",
        },
        {
          type: "",
          label: "31",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "24px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "32",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "24px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "33",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "20.125%",
          fieldHeight: "24px",
          // borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "34",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "4.875%",
          fieldHeight: "24px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "35",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "12.875%",
          fieldHeight: "24px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "36",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "15.375%",
          fieldHeight: "24px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "37",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "18.375%",
          fieldHeight: "24px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "38",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "48.5%",
          fieldHeight: "39px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "39",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "39px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "40",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "48.5%",
          fieldHeight: "36px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "41",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "51.5%",
          fieldHeight: "58px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "42",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "40px",
          margintop: "-22px",
          borderLeft: "2px solid",
        },
        {
          type: "",
          label: "43",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "40px",
          margintop: "-22px",
        },
        {
          type: "",
          label: "44",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "40px",
          margintop: "-22px",
        },
        {
          type: "",
          label: "45",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "40px",
          margintop: "-22px",
        },
        {
          type: "",
          label: "46",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "40px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "47",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "40px",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "48",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "40px",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "49",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "40px",
        },
        {
          type: "",
          label: "50",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "40px",
        },
        {
          type: "",
          label: "52",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "57px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "53",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "35px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "54",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "35px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "55",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "35px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "56",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "35px",
        },
        {
          type: "",
          label: "57",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "51.5%",
          fieldHeight: "69px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "2px solid",
          borderBottom: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "58",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "35px",
          margintop: "-6px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "59",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "35px",
          margintop: "-6px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "60",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "35px",
          margintop: "-6px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "61",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "35px",
          margintop: "-6px",
        },
        {
          type: "",
          label: "62",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "21px",
          margintop: "-1px",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "63",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "21px",
          margintop: "-1px",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "64",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "21px",
          margintop: "-1px",
        },
        {
          type: "",
          label: "65",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "21px",
          margintop: "-1px",
          borderTop: "2px solid",
        },
        {
          type: "",
          label: "66",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "21px",
          margintop: "-1px",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "67",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "10.125%",
          fieldHeight: "21px",
          margintop: "-1px",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "68",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "12.125%",
          fieldHeight: "21px",
          margintop: "-1px",
        },
        {
          type: "",
          label: "69",
          id: "bl_discharge_port",
          float: "float_left",
          fieldWidth: "13.125%",
          fieldHeight: "21px",
          margintop: "-1px",
          borderTop: "2px solid",
        },
        {
          type: "",
          label: "70",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "29.33%",
          fieldHeight: "95px",
          borderRight: "2px solid",
        },
        {
          type: "",
          label: "71",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "35.33%",
          fieldHeight: "95px",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "72",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "35.33%",
          fieldHeight: "95px",
          borderLeft: "2px solid",
          borderRight: "1px solid rgba(236, 240, 241, 1)",
        },
        {
          type: "",
          label: "73",
          id: "bl_discharge_port",
          float: "float_right",
          fieldWidth: "100%",
          fieldHeight: "25px",
          borderTop: "1px solid rgba(236, 240, 241, 1)",
          borderLeft: "2px solid",
          borderBottom: "2px solid",
          borderRight: "2px solid",
        },

        // Add other fields as needed...
      ],
    };
  },
  methods: {
    expandFields() {
      this.formFields.push(
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
        }
      );
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

<style>
* {
  box-sizing: border-box;
}

.bl_form_container {
  display: table;
  border-collapse: collapse;
  width: 80%;
  margin: 15%;
  height: 100vh;
  visibility: visible;
}

.bl_form_field_container {
  border: 1px solid black;
  margin: 0px;
  display: table-cell;
}

.bl_form_field_inner_container {
  border: none;
  border-top: inherit;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.float_left {
  float: left;
}

.float_right {
  float: right;
}

.center_word {
  text-align: center;
}

.center_text {
  margin-left: 35%;
}

.bl_textarea {
  resize: none;
  border: none;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
}

.bl_input_text {
  border: none;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 9px;
}

.clear_right {
  clear: right;
}

.clear_left {
  clear: left;
}

.clear_both {
  clear: both;
}

.bl_button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-left: 400px;
}

/* Modal dialog styles */
.modal-dialog-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal-dialog-box {
  background: #fff;
  min-width: 350px;
  max-width: 450px;
  font-family: "Helvetica Neue", "Roboto", "Arial", "Droid Sans", "sans-serif";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.modal-dialog-content {
  padding: 20px;
}

.modal-dialog-title {
  color: #3c3c3c;
  font-size: 20px;
}

.modal-dialog-msg {
  min-height: 20px;
  color: #8d8d8d;
  font-size: 18px;
  margin-top: 10px;
}

.modal-dialog-button-holder {
  margin-top: 10px;
  text-align: right;
}

.modal-dialog-button {
  color: #3c81f4;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;
}

.modal-dialog-button:hover {
  color: #083b8f;
}

.modal-dialog-box .circle-loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.modal-dialog-header {
  padding: 10px 0;
}

.modal-dialog-header.success {
  background: #dff0d8;
}

.modal-dialog-header.fail {
  background: #f2dede;
}

.modal-dialog-symbol {
  background: white;
  height: 80px;
  width: 80px;
  background-size: cover;
  border-radius: 100%;
  border: 8px solid white;
  margin: auto;
}

.modal-dialog-status {
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  color: #3c3c3c;
}
.bl_form_container {
  border: 3px solid black;
  display: table;
  border-collapse: collapse;
  width: 80%;
  margin: 50px 200px;
}

/* Other CSS... */

/* Print-Specific Styles */
@media print {
  body * {
    visibility: hidden; /* Hide everything */
  }

  .bl_form_container,
  .bl_form_container * {
    visibility: visible; /* Make the form visible */
  }

  .bl_form_container {
    width: 100%; /* Adjust the form width for printing */
    margin: 0;
    page-break-inside: avoid; /* Prevent page breaks inside the form */
  }

  .bl_button_container {
    display: none; /* Hide buttons during printing */
  }

  /* Hide other non-essential elements for print */
}
</style>
