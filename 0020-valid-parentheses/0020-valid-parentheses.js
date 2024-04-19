/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s.length % 2 === 1) {
        return false;
    }
    
    const map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            stack.push(map[s[i]]);
        } else {
            const closing = stack.pop();
            if (closing !== s[i]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

