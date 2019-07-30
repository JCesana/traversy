const user = {
    email: 'jdoe@gmail.com'
};

try {
    // Produce a ReferenceError
    // myFunction();
    // Produce a TypeError
    // null.myFunction();
    // Produce a SyntaxError
    // eval('Hello World');
    // Will produce a URIError
    // decodeURIComponent('%');

    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch (e) {
    console.log(`User Error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs regardless of result.');
}

console.log('Program continues...');

// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global Search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array (if match) or null (if no match)
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match, if not found it returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols

// Must start with (h, case insensitive)
re = /^h/i;

// Must end with (world, case insensitive)
re = /world$/i;

// Must begin and end with 'hello'
re = /^hello$/i;

// Matches any ONE character ('.' is basically a wildcard)
re = /^h.llo$/i;

// Match any character 0 or more times ('*' is wildcard which includes no character)
re = /h*llo/i;

// Optional character
re = /gre?a?y/i; // grey or gray

// Escape character
re = /gre?a?y\?/i;

// Brackets [] - Character Sets

// Must be an a or e
re = /gr[ae]y/i;

// Must be G or F (uppercase)
re = /[GF]ray/;

// Match anything except G or F
re = /[^GF]ray/;

// Match any uppercase letter
re = /[A-Z]ray/;

// Match any lowercase letter
re = /[a-z]ray/;

// Match any letter
re = /[A-Za-z]ray/;

// Match any digit
re = /[0-9]ray/;

// Braces {} - Quantifiers

// Must occur exactly {m} amount of times
re = /Hel{2}o/;

// Must occur exactly {m-n} amount of times
re = /Hel{2,4}o/;

// Must occur at least {m} times
re = /Hel{2,}o/;

// Parentheses () - Grouping

// Must contain group (#x) three times
re = /([0-9]x){3}/;

// Must contain group (#x) ONLY three times
re = /^([0-9]x){3}$/;

// Shorthand Character Classes

// Word character - alphanumeric or _
re = /\w/;

// + = one or more
re = /\w+/;

// Non word character
re = /\W/;

// Match any digit
re = /\d/;

// Match any digit 0 or more times
re = /\d+/;

// Match any Non-digit
re = /\D/;

// Match whitespace char (space or tab)
re = /\s/;

// Match non-whitespace char
re = /\S/;

//Word boundary (find the exact word, not substring)
re = /Hell\b/i;

// Assertions

// Match x only if followed by y
re = /x(?=y)/;

// Match x only if NOT followed by y
re = /x(?!y)/;

// String to match
const str = 'sdfxsdf';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
