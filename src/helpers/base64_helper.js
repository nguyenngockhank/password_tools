/**
 * to encode str to base64
 * @param {string} str raw string 
 * @return {string} base64 string
 */
function encode(str) {
    return btoa(str);
}

/**
 * to decode base64Str to raw string
 * @param {string} base64Str 
 * @return {string}
 */
function decode(base64Str) {
    return atob(base64Str);
}

export { encode, decode};