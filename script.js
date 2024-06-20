function numAllowed(char, current) {
    if (char == '.' && current.includes('.')) {
        return false;
    }
    if (current.length >=16) { //allocated size on screen
        return false;
    }
    return true;
}














let currentValue;
let storedValue;
let operator;