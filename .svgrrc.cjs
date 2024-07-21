module.exports = {
  filenameCase: "camel",
  outDir: "src/components/icon",
  ext: "tsx",
  typescript: true,
  dimensions: false,
  expandProps: "end",
  svgProps: { width: "{props.width}", height: "{props.height}" },
  template: require("./src/scripts/icon/template.cjs"),
  indexTemplate: require("./src/scripts/icon/index-template.cjs"),
};
