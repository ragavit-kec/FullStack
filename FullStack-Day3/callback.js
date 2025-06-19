function functionWithCallback(callback) {
    console.log("Function started");
}

function func(name, callback) {
    callback();
    return `Hello ${name}`;
}

console.log(func("John", functionWithCallback)); // Output: Hello John