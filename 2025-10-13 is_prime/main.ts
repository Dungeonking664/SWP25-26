export function isPrime(n: number): boolean {
    const w=Math.sqrt(n);
    if (n<=1) {
        return false;
    }
    let i=2;
    while (i<=w)
    {
        if (n%i==0) {
            return false;
        }
        i++;        
    }
    return true;
}
if (import.meta.main) {
  console.log("Is 2 prime?", isPrime(2));
  console.log("Is 3 prime?", isPrime(3));
  console.log("Is 4 prime?", isPrime(4));
  console.log("Is 5 prime?", isPrime(5));
  console.log("Is 6 prime?", isPrime(6));
}