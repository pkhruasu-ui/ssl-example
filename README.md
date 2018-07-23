How to create and use self-signed certificate
1. Run "openssl req -x509 -newkey rsa:4096 -keyout ./ssl/key.pem -out ./ssl/cert.pem -days 365" in command line.
2. Read the server.js file
