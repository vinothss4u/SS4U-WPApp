angular.module("starter.filters", [])
        .filter("rawHtml", ["$sce", function ($sce) {
            return function (text) {
                return $sce.trustAsHtml(text);
            };
        }])
        .filter("getTileText", [function () {
            return function (text, letterCount) {
                if (text === '') {
                    return ' ';
                }
                var words    = text.split(' ');
                var tileText = '';
                for (i=0;i<letterCount;i++) {
                    if (words[i] !== undefined) {
                        tileText += words[i].charAt(0);
                    } else {
                        break;
                    }
                }
                return tileText;
            };
        }])
        .filter("getRandomTileStyle", [function () {
            return function (type) {
                var Styles = new Array();
                Styles['square']   = [
                    {'background-color':'blue'},
                    {'background-color':'red'},
                    {'background-color':'pink'}
                ];
                
                var styleByType = Styles[type];
                var style = styleByType[Math.floor(Math.random() * styleByType.length)];
                
                return style;
            };
        }]);