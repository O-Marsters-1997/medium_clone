const template = (variables, { tpl }) => {
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
