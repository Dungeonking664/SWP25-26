let a= 3;
let b= 4;

const p2a = new Promise<string>((resolve, reject) => {
  let robert = a+b;
  console.log(robert);
  throw new Error("Boom im Executor!");
  resolve("5");

});

console.log("nach promis");

p2a.then(
  (value) => console.log("Erfolg:", value),
  (reason) => console.log("Fehler abgefangen:", (reason as Error).message)
);
p2a.catch((err)=> {console.log(err);return 5;})

console.log("nach than");