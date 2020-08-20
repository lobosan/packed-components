import { storiesOf } from "@storybook/vue";
import STableRow from "./STableRow";

storiesOf("STableRow", module).add("normal", () => ({
  components: { STableRow },
  template: `
      <STableRow
        :values="values"
      />
    `,
  data: () => ({
    values: ["Santiago Galindo", "sp.galindoh@gmail.com"]
  })
}));
