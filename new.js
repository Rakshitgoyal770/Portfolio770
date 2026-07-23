function divide(a, b) {
    return a / b;
}

function login(username, password) {
    console.log("Username:", username);
    console.log("Password:", password); // ❌ Sensitive information

    if (password == "admin123") { // ❌ Hardcoded password + loose equality
        return true;
    }

    return false;
}

function getUser(users, id) {
    return users[id].name; // ❌ No bounds/null check
}

function fetchData(url) {
    fetch(url); // ❌ Promise not awaited or handled
}

const arr = [];

console.log(arr[5].name); // ❌ Possible TypeError

let count = "10";

if (count == 10) { // ❌ Loose equality
    console.log("Equal");
}

for (var i = 0; i < 100000000; i++) {} // ❌ Busy loop

module.exports = {
    divide,
    login,
    getUser,
    fetchData,
};
