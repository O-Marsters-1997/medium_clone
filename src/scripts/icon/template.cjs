const t = require("@babel/types");

const template = (variables, { tpl }) => {
  const { jsx, componentName } = variables;
  const excludedIconsFromStyleOverides = ["google", "facebook"];

  jsx.children.forEach((child) => {
    child.openingElement.attributes.forEach((attr) => {
      const isExcluded = excludedIconsFromStyleOverides.some((iconName) =>
        componentName.toLowerCase().includes(iconName),
      );

      if (
        (attr.name.name === "stroke" || attr.name.name === "fill") &&
        !isExcluded
      ) {
        attr.value.value = "currentColor";
      }
    });
  });

  return tpl`
// WARNING: auto-generated
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

module.exports = template;
