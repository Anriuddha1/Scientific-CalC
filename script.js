// function appendValue(val) {
//   document.getElementById("display").value += val;
// }

// function clearDisplay() {
//   document.getElementById("display").value = '';
// }

// function calculate() {
//   try {
//     document.getElementById("display").value =
//       eval(document.getElementById("display").value);
//   } catch {
//     document.getElementById("display").value = "Error";
//   }
// }


let input = "";
let ans=0;
tag = false;
key=false;
tag1 = false;

let on= document.querySelector('.a4');
on.addEventListener('click',()=>{
  if(key){
    key=false;
    input = "";
  document.getElementById("info-line").innerText = "";
  document.getElementById("input-line").innerText = "";
  document.getElementById("output-line").innerText = "";
  document.querySelector(".display").style.backgroundColor = "#959595";
    on.innerText='ON'
  }else{key=true;
    input = "";
    document.getElementById("info-line").innerText = "";
  document.getElementById("input-line").innerText = "";
  document.getElementById("output-line").innerText = "0";
   document.querySelector(".display").style.backgroundColor = "#fff";
   on.innerText='OFF'
  }
})

function appendValue(value) {
  if(key){
    input += value;
    document.getElementById("input-line").innerText = input;
  }
}


function delDisplay() {
  input = input.slice(0,-1);
  document.getElementById("input-line").innerText = input;
}
function clearDisplay() {
  input = "";
  document.getElementById("input-line").innerText = "";
  document.getElementById("output-line").innerText = "0";
}


function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function nCr(n, r) {
  n = parseInt(n);
  r = parseInt(r);
  if (r > n || n < 0 || r < 0) return NaN;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function nPr(n, r) {
    if (r > n || n < 0 || r < 0) return NaN;
    return factorial(n) / factorial(n - r);
}

function pol(x, y) {
    const r = Math.sqrt(x * x + y * y);
    // const theta = Math.atan2(y, x) * 180 / Math.PI; // in degrees
    return r; // or { r, theta }
}
function rec(r, theta) {
  let rad = theta * Math.PI / 180;
  let x = r * Math.cos(rad);
  let y = r * Math.sin(rad);
  return `[${x.toFixed(4)}, ${y.toFixed(4)}]`;
}
// function decimalToMixedFraction(decimal) {
//   const isNegative = decimal < 0;
//   decimal = Math.abs(decimal);

//   const whole = Math.floor(decimal);
//   const frac = decimal - whole;

//   if (frac === 0) return (isNegative ? "-" : "") + whole.toString();

//   const precision = 1e-6; // acceptable margin for rounding
//   let numerator = 1, denominator = 1;

//   // Use continued fractions to approximate fraction
//   while (Math.abs(numerator / denominator - frac) > precision && denominator < 1000) {
//     denominator++;
//     numerator = Math.round(frac * denominator);
//   }

//   let gcdVal = gcd(numerator, denominator);
//   numerator /= gcdVal;
//   denominator /= gcdVal;

//   let result = `${whole} ${numerator}/${denominator}`;
//   return isNegative ? `-${result}` : result;
// }

// function gcd(a, b) {
//   return b === 0 ? a : gcd(b, a % b);
// }






function shift(){
  if(key){
    tag=true;
    document.getElementById('info-line').innerText="S"; 
  }else{
    document.getElementById('info-line').innerText=""; 
  }
}
function alfa(){
  if(key){
    tag1=true;
    document.getElementById('info-line').innerText="A"; 
  }else{
    document.getElementById('info-line').innerText=""; 
  }
}


document.querySelector('.sin').addEventListener('click',()=>{
  if(tag){    
  appendValue('sin⁻¹');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){ 
      appendValue('D');
      document.getElementById('info-line').innerText="";
      tag1=false;
  }
  else{
    appendValue('sin ');
  }
})

document.querySelector('.cos').addEventListener('click',()=>{
  if(tag){    
  appendValue('cos⁻¹');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      appendValue('E');
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('cos ');
  }
})

document.querySelector('.tan').addEventListener('click',()=>{
  if(tag){    
  appendValue('tan⁻¹');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      appendValue('F');
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('tan ');
  }
})

document.querySelector('.root').addEventListener('click',()=>{
  if(tag){    
  appendValue('x√');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('^');
  }
})

document.querySelector('.power').addEventListener('click',()=>{
  if(tag){    
  appendValue('10^');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('log ');
  }
})

document.querySelector('.ln').addEventListener('click',()=>{
  if(tag){    
  appendValue('e^');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('e');
  }else{
    appendValue('ln ');
  }
})

document.querySelector('.c3').addEventListener('click',()=>{
  if(tag){    
  appendValue('Rec(');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue(':');
  }else{
    appendValue('Pol(');
  }
})

document.querySelector('.c4').addEventListener('click',()=>{
  if(tag){    
  appendValue('∛');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('³');
  }
})

document.querySelector('.c1').addEventListener('click',()=>{
  if(tag){    
  appendValue('!');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('⁻¹');
  }
})

document.querySelector('.c2').addEventListener('click',()=>{
  if(tag){    
  appendValue('P');
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('C');
  }
})

document.querySelector('.abc').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    decimalToMixedFraction(result);
  }
})

document.querySelector('.sqroot').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('√');
  }
})

document.querySelector('.sqr').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('²');
  }
})

document.querySelector('.mii').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('-');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('A');
  }else{
    appendValue('-');
  }
})

document.querySelector('.time').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('B');
  }else{
    appendValue('.');
  }
})
document.querySelector('.hyp').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('C');
  }else{
    appendValue('hyp');
  }
})
document.querySelector('.memo').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})

document.querySelector('.eng').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})

document.querySelector('.bs').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('(');
  }
})

document.querySelector('.be').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('X');
  }else{
    appendValue(')');
  }
})

document.querySelector('.coma').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('Y');
  }else{
    appendValue(',');
  }
})

document.querySelector('.M').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('M-');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('M');
  }else{
    appendValue('M+');
  }
})

document.querySelector('.rnd').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('0');
  }
})

document.querySelector('.dot').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('Rnd#');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('.');
  }
})

document.querySelector('.piii').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('π');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('×10^');
  }
})

document.querySelector('.ans').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('Ans');
  }
})

document.querySelector('.equal').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('%');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    calculate();
  }
})

document.querySelector('.b1').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})
document.querySelector('.b2').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})
document.querySelector('.b3').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})
document.querySelector('.b4').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})

document.querySelector('.a2').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="A";
      tag=false;
      appendValue('');
  }else{
    document.getElementById('info-line').innerText="A";
    appendValue('');
  }
})
// document.querySelector('.a1').addEventListener('click',()=>{
//   if(tag){    
//       document.getElementById('info-line').innerText="";
//       tag=false;
//       appendValue('');
//   }else{
//     appendValue('');
//   }
// })
document.querySelector('.a3').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    appendValue('');
  }
})
document.querySelector('.delbtn').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    delDisplay();
  }
})
document.querySelector('.acbtn').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
      appendValue('');
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
      appendValue('');
  }else{
    clearDisplay();
  }
})
document.querySelector('.one').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('1');
  }
})
document.querySelector('.two').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('2');
  }
})
document.querySelector('.three').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('3');
  }
})
document.querySelector('.four').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('4');
  }
})
document.querySelector('.five').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('5');
  }
})
document.querySelector('.six').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('6');
  }
})
document.querySelector('.seven').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('7');
  }
})
document.querySelector('.eight').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('8');
  }
})
document.querySelector('.nine').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('9');
  }
})
document.querySelector('.add').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('+');
  }
})
document.querySelector('.subs').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('-');
  }
})
document.querySelector('.mult').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('*');
  }
})
document.querySelector('.divd').addEventListener('click',()=>{
  if(tag){    
      document.getElementById('info-line').innerText="";
      tag=false;
  }else if(tag1){    
      document.getElementById('info-line').innerText="";
      tag1=false;
  }else{
    appendValue('/');
  }
})








function calculate() {
  if(key){
    try {
      let expression = input
        .replace(/×/g, '*')     // Replace × with *
        .replace(/÷/g, '/')     // Replace ÷ with /
        .replace(/(\d+)×10\^(\d+)/g, '$1*10**$2') // 3.5×10^4 → 3.5*10**4
        .replace(/\^/g, '**')
        .replace(/Ans/g,ans)
        .replace(/sin (\d+(\.\d+)?)/g, 'Math.sin($1 * Math.PI / 180)')
        .replace(/cos (\d+(\.\d+)?)/g, 'Math.cos($1 * Math.PI / 180)')
        .replace(/tan (\d+(\.\d+)?)/g, 'Math.tan($1 * Math.PI / 180)')
        .replace(/sin⁻¹ ?(\d+(\.\d+)?)/g, '(Math.asin($1) * 180 / Math.PI)')
        .replace(/cos⁻¹ ?(\d+(\.\d+)?)/g, '(Math.acos($1) * 180 / Math.PI)')
        .replace(/tan⁻¹ ?(\d+(\.\d+)?)/g, '(Math.atan($1) * 180 / Math.PI)')
        .replace(/log (\d+(\.\d+)?)/g, 'Math.log10($1)')
        .replace(/ln (\d+(\.\d+)?)/g, 'Math.log($1)')
        .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
        .replace(/∛(\d+(\.\d+)?)/g, 'Math.cbrt($1)')
        .replace(/(\d+)\s*[cC]\s*(\d+)/g, 'nCr($1,$2)')
        .replace(/³/g, '**3')
        .replace(/²/g, '**2')
        .replace(/⁻¹/g, '**-1')
        .replace(/(\d+)!/g, 'factorial($1)')
        .replace(/(\d+)\s*[cC]\s*(\d+)/g, 'nCr($1,$2)')
        .replace(/(\d+)\s*[pP]\s*(\d+)/g, 'nPr($1,$2)')
        .replace(/Pol\(/g, 'pol(')
        .replace(/(\d+)x√(\d+)/g, 'Math.pow($2, 1/$1)')
        .replace(/Rec\(\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*\)/g, 'rec($1, $3)')
        .replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g,'$1*10**$2');

      const result = eval(expression);
      ans=result;
      document.getElementById("output-line").innerText = result;
    } catch (e) {
      document.getElementById("output-line").innerText = "Error";
    }
  }
}
