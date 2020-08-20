import { storiesOf } from "@storybook/vue";
import JTableRow from "./JTableRow";

storiesOf("JTableRow", module).add("normal", () => ({
  components: { JTableRow },
  template: `
      <JTableRow
        :values="values"
      />
    `,
  data: () => ({
    values: ["Santiago Galindo", "sp.galindoh@gmail.com"]
  })
}));
