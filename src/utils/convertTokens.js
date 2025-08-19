import fs from 'fs';
import tokens from '../uiToken/variables.json' with { type: "json" };

const generateVariables = variables => {
  return variables
    .map(variable => {
      const name = variable.name.replace(/\//g, '-').toLowerCase();
      return `  --${name}: ${variable.value};`;
    })
    .join('\n');
};

// Генерация SCSS для светлой и темной темы
const generateSCSS = () => {
  const collection = tokens.collections[0];
  const lightVariables = generateVariables(
    collection.modes.find(m => m.name === 'Light').variables,
  );
  const darkVariables = generateVariables(collection.modes.find(m => m.name === 'Dark').variables);
  return `:root {\n${lightVariables}\n}\n\n.dark {\n${darkVariables}\n}`;
};

// Генерация SCSS-файла
const scssContent = generateSCSS();
fs.writeFileSync('./src/styles/variables.scss', scssContent)
