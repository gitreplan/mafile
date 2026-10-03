
import {
  TSObject
} from "@gitreplan/jsbuiltin_libraries";

// Import CSS modules
import internal_style from "./style";
import internal_design from "./design";
import internal_meta from "./meta";

// Merge style and design, config and nodes
// Create CSS setup instance
const internal_meta_setup = new TSObject({}, {
  style: internal_style,
  design: internal_design,
  meta: internal_meta,
});

const style = internal_meta_setup.styles();
const meta = internal_meta_setup.meta();
const design = internal_meta_setup.designs();

export { style, meta, design };
export default internal_meta_setup;
export type internal_meta_setup_type = typeof internal_meta_setup;
