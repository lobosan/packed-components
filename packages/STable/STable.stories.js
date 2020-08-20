import { storiesOf } from "@storybook/vue";
import STable from "./STable";

var items = [
  ["Yair Lamb", "yair.lamb@email.com"],
  ["Leonardo Payne", "leonardo.payne@email.com"],
  ["Carl Henson", "carl.henson@email.com"],
  ["Jensen Combs", "jensen.combs@email.com"],
  ["Amiah Burton", "amiah.burton@email.com"],
  ["Yaretzi Mayo", "yaretzi.mayo@email.com"],
  ["Kamren Huffman", "kamren.huffman@email.com"]
];

storiesOf("STable", module).add("with 7 items", () => ({
  components: { STable },
  template: `
      <STable
        :items="items"
      />
    `,
  data: () => ({
    items
  })
}));
