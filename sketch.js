// Import necessary modules
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Get the current time
    const currentTime = new Date().toLocaleString();

    // Send the current time as a JSON response
    res.end(JSON.stringify({ time: currentTime }));
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
