// app.js
console.log('Welcome to my app!');

// Basic function example
function greet(name) {
    return `Hello, ${name}!`;
}

// Usage
console.log(greet('Vero'));

// Export for use in other modules
module.exports = { greet };