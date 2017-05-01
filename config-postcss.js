var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = function(webpack){
    return function() {
        return {
            defaults: [
                autoprefixer({ browsers: ['last 2 versions'] }),
                postcssImport({addDependencyTo: webpack})
            ]
        };
    };
};

