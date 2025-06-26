const firstCharUppercase = require('../firstCharUppercase');

module.exports = (slice) => {
    const typeName = `${firstCharUppercase(slice)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${slice}Schema'

const initialState: ${typeName} = {
    
};

export const ${slice}Slice = createSlice({
    name: '${slice}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
        }
});

export const {
    actions: ${slice}Actions,
    reducer: ${slice}Reducer,
} = ${slice}Slice;`;
};