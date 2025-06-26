const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, slice) => {
    try {
        await fs.mkdir(resolveRoot(layer, slice));
    } catch {
        console.log(`Не удалось создать слайс ${slice}`);
    }
    
    await createModel(layer, slice);
    await createUI(layer, slice);
    await createPublicApi(layer, slice);
};