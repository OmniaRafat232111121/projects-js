function isPrime(n){
for(let i=2;i<=n;i++){
  if(n%i==0){
    console.log('not a Prime Number')
  }
  
}
return 'Your Number is Prime'
}
console.log(isPrime(10))