/**
 * 
 * @param {string} key 
 * @returns a string with the key formatted to nice looking words that are split on camel case. 
 */
function formatKey(key) {
    const words = splitCamelCase(key);

    words.forEach(function(word, index) {
        words[index] = word.toLowerCase();

        if (index === 0) {
            words[index] = capitalizeFirstLetter(words[index]);
        }
    });

    return words.join(' ');
}

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitCamelCase(string) {
    // https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters
    return string.split(/(?=[A-Z])/);
}

function removeAtIndex(array, index) {
    return array.splice(index, 1);
}