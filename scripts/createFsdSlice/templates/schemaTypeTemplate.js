const firstCharUppercase = require('../firstCharUppercase');

module.exports = (slice) => `export interface ${firstCharUppercase(slice)}Schema{

}`;