const createTemplate = require('./templates/createTemplate');

const layers = ['entities', 'features', 'widgets', 'pages'];

const layer = process.argv[2];
const slice = process.argv[3];

if (!layers.includes(layer)) {
    throw new Error(`Укажите слой из списка: ${layers.join(', ')}`);
}

if (!slice) {
    throw new Error('Укажите название слайса');
}

createTemplate(layer, slice);