<template>
  <table>
    <tr>
      <th v-for="(label, index) in header" :key="index">
        {{ label }}
      </th>
    </tr>
    <STableRow v-for="(values, index) in items" :key="index" :values="values" />
  </table>
</template>

<script>
import STableRow from "@lobosan/s-table-row/STableRow";
export default {
  name: "STable",
  props: {
    header: {
      type: Array
    },
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

<style>
th {
  text-align: left;
  padding: 8px;
  font-size: 13px;
  color: #8d8d92;
}
</style>
