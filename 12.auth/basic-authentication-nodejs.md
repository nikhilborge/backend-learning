# Basic Authentication in Node.js (Express)

Authentication is the process of verifying a user's identity. In Express, this is commonly handled using middleware to inspect the incoming request for valid credentials (like a token or session data) before allowing access to a protected resource.

---

## 🧩 Authentication Middleware Concept

A custom authentication middleware sits in the request flow, usually very early, and performs the following steps:

1. **Check for Credentials** — Look for an authorization header (e.g., `Bearer Token` or `Basic Auth`).
2. **Validate** — Check if the credentials are valid against a database or configured rules.
3. **Allow/Deny Access:**
   - ✅ If valid: Call `next()` to pass the request to the route handler.
   - ❌ If invalid: Stop the request and send an error response (e.g., HTTP `401 Unauthorized`).

---

## 💻 Code Example: Basic Token Authentication Middleware

This example demonstrates a simple token-based authentication check.  
In a real-world app, you would fetch and compare tokens from a database, not hardcode them.

### **authMiddleware.js**
```js
// authMiddleware.js - A reusable module for authentication logic

/**
 * Middleware function to check for a valid hardcoded API token.
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 */
const authenticateToken = (req, res, next) => {
    // 1. Get the Authorization header from the request
    const authHeader = req.headers['authorization'];
    
    // Check if the header exists and starts with 'Bearer '
    // e.g., Authorization: Bearer <TOKEN>
    const token = authHeader && authHeader.split(' ')[1];

    // 2. Check for Token existence
    if (token == null) {
        console.log("Authentication failed: No token provided.");
        return res.status(401).json({ message: "Access Denied: Missing authentication token." });
    }

    // 3. Simple Validation (Replace with real logic like JWT verification or database lookup)
    const VALID_TOKEN = "my-secret-api-key-123"; 

    if (token !== VALID_TOKEN) {
        console.log("Authentication failed: Invalid token.");
        return res.status(403).json({ message: "Access Denied: Invalid token." });
    }

    // 4. Token is valid, attach user data (optional but common)
    req.user = { id: 101, role: 'admin' };
    
    // 5. Allow request to continue
    next(); 
};

module.exports = { authenticateToken };
```

---

## 🔐 Integrating the Authentication Middleware

Here’s how you can use this middleware to protect specific routes in your Express application.

### **auth_routes.js**
```js
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('./authMiddleware'); // Assume the middleware is in authMiddleware.js

// --- PUBLIC ROUTE ---
// Anyone can access this route
router.get('/public', (req, res) => {
    res.json({ message: "Welcome to the public page!" });
});

// --- PROTECTED ROUTE ---
// The 'authenticateToken' middleware runs BEFORE the route handler.
router.get('/protected', authenticateToken, (req, res) => {
    // If the request reaches here, authentication was successful.
    // We can access data attached by the middleware: req.user
    res.json({ 
        message: "You accessed the protected data!", 
        user: req.user,
        timestamp: new Date().toISOString()
    });
});

module.exports = router;
```

---

✅ **Summary**
- Middleware acts as a checkpoint before routes.
- Token-based authentication ensures only authorized users can access sensitive data.
- Replace hardcoded tokens with database or JWT logic in production.
