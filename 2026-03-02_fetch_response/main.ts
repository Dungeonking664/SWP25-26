import { Hono } from "npm:hono@^3.12.0";
import { serveStatic } from "npm:hono/deno";

const app = new Hono();

// Serve static files
app.use("/*", serveStatic({ root: "./static" }));

// Mock JSON Endpoint
app.get("/api/data.json", (c) => {
    return c.json({
        message: "Hallo vom JSON-Endpoint!",
        timestamp: new Date().toISOString(),
        data: {
            user: "Benjamin",
            task: "Fetch & Response",
            status: "completed"
        }
    });
});

// Mock Text Endpoint
app.get("/api/data.txt", (c) => {
    return c.text("Das ist ein Text-Response vom Server.\nEs wurde mit .text() als Promise gelesen.");
});

// Error handling endpoint
app.get("/api/nonexistent", (c) => {
    return c.status(404).text("Diese Resource existiert nicht!");
});

Deno.serve(app.fetch);
