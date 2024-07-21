const t = require("@babel/types");

const template = (variables, { tpl }) => {
  const { jsx } = variables;

  jsx.children.forEach((child) => {
    child.openingElement.attributes.forEach((attr) => {
      if (attr.name.name === "stroke") {
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
