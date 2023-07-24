
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var re = new RegExp('\^' +p + '\$');
    return re.test(s)
};