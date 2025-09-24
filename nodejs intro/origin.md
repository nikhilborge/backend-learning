# 🚀 Day 1 of Learning Backend with Node.js  

Today I started my **backend journey** with **Node.js** 🌐  

---

## 🔑 Key Takeaways  
- Node.js = **JavaScript runtime** (runs JS outside the browser).  
- Built on **Chrome’s V8 engine** → fast & scalable.  
- Created in **2009 by Ryan Dahl** to handle concurrent requests better.  
- Install via [nodejs.org](https://nodejs.org) → choose **LTS** for stability.  
- Run JS files in terminal:  
  ```bash
  node app.js
```
---
```
Modules → built-in (fs, http, path).

Packages → external via npm (express, cat-me).

Created my first simple server using the http module 💻

```json
const http = require('http');
http.createServer((req, res) => res.end("Hello from Node.js!"))
.listen(3000, () => console.log("Server running..."));
```
