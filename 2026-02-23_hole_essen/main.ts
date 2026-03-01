import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";

const db = new DB("static/lieblingsessen.db");

const app = new Hono();

app.use("/*", serveStatic({ root: "./static" }));

app.get("/api/essen", (c: any) => {
  const results = db.query(`
    SELECT person.name, essen.essen 
    FROM person 
    JOIN essen ON person.lieblingsessen = essen.id
  `);
  
  return c.json(results);
});

Deno.serve(app.fetch);
