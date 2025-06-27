const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUppercase');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const cssTemplate = require('./cssTemplate');

module.exports = async (layer, slice) => {
    const resolveUIPath = (...segments) => resolveRoot(layer, slice, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch {
            console.log('Не удалось создать UI директорию');
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(slice);
            // Создание компонента
            await fs.writeFile(
                resolveUIPath(`${componentName}.tsx`),
                componentTemplate(componentName)
            );
            // Создание сторис
            await fs.writeFile(
                resolveUIPath(`${componentName}.stories.tsx`),
                storyTemplate(layer, componentName)
            );
            // Создание css
            await fs.writeFile(
                resolveUIPath(`${componentName}.module.css`),
                cssTemplate(componentName)
            );
        } catch {
            console.log('Не удалось создать компонент');
        }
    };

    await createUIDir();
    await createComponent();
};