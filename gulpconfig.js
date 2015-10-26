var appBaseDir  = 'front',
    distBaseDir = 'dist';

module.exports = (function(){
    return {
        routes : {
            app : {
                base    : appBaseDir,
                sass    : appBaseDir + '/style',
                scripts : appBaseDir + '/javascripts',
                images  : appBaseDir + '/images'
            },

            dist : {
                base   : distBaseDir,
                css    : distBaseDir + '/style',
                js     : distBaseDir + '/javascripts',
                images  : distBaseDir + '/images'
            }
        }
    }
})();
