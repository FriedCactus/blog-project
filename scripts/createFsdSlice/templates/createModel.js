const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, slice) => {
    const resolveModulePath = (...segments) => resolveRoot(layer, slice, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModulePath());
            await fs.mkdir(resolveModulePath('types'));
            await fs.mkdir(resolveModulePath('slice'));
            await fs.mkdir(resolveModulePath('selectors'));
        } catch (e) {
            console.log(`Не удалось создать модель для слайса ${slice} ${e}`);
        }
    };

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(
                resolveModulePath('slice', `${slice}Slice.ts`),
                reduxSliceTemplate(slice)
            );
        } catch (e) {
            console.log('не удалось создать redux slice', e);
        }
    };

    const createSchemaType = async () => {
        try {
            await fs.writeFile(
                resolveModulePath('types', `${slice}Schema.ts`),
                schemaTypeTemplate(slice));

        } catch (e) {
            console.log('не удалось создать schemaType', e);
        }
    };

    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
};