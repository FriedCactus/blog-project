const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUppercase = require('../firstCharUppercase');

module.exports = async (layer, slice) => {
    const componentName = firstCharUppercase(slice);

    try {
        await fs.writeFile(
            resolveRoot(layer, slice, 'index.ts'),
            `import { ${componentName} } from './ui/${componentName}';
import { type ${componentName}Schema } from './model/types/${slice}Schema';

export {
    ${componentName},
    ${componentName}Schema
}`
        );
    } catch {
        console.log('Не удалось создать public api');
    }
};