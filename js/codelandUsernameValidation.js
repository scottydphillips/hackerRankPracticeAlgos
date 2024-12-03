/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function CodelandUsernameValdiation(str) {
  if (str.length < 4 || str.length > 25) {
    console.log('test 1');
    return "false";
  }
  if (str[0].match(/[^a-zA-Z]/g)) {
    console.log('test 2');
    return "false";
  }
  if (!str.match(/^[a-zA-Z0-9_]*$/)) {
    console.log('test 3');
    return "false";
  }
  if (str[str.length - 1] === "_") {
    console.log('test 4');
    return "false";
  }
  return "true";
}

console.log('testCase1', CodelandUsernameValdiation('aa_'));
console.log('testCase2', CodelandUsernameValdiation('u_hello_world123'));