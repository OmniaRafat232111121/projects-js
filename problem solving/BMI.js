function calculateBMI(weight,height){
  let bodyMass=weight/Math.pow(height,2);
  return bodyMass <=18.5 ? "under weight": bodyMass <=30 ? 'normal': "OverWeight";
}
console.log(calculateBMI(82,174));