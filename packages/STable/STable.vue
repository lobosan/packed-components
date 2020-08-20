<template>
  <table>
    <STableRow v-for="(values, index) in items" :key="index" :values="values" />
  </table>
</template>

<script>
import STableRow from "@lobosan/s-table-row/STableRow";
export default {
  name: "STable",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    STableRow
  }
};
</script>
