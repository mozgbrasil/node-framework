var exports = module.exports = {};

exports.creditcardgenerator = require("./lib/creditcardgenerator");

if(typeof window !== 'undefined') {
    exports.fix_ie = require("./lib/ie.lteIE9");
}
