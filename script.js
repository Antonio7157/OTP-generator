let otp = '';
let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function otpGenerator() {
  for (let i = 0; i < 4; i++) {
    otp += numb[Math.floor(Math.random() * numb.length)]; 
  }
  return otp;
}

otpGenerator(); 

console.log(`${otp} is your one-time verification code.`);
