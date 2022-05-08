function scuberGreetingForFeet(someValue) {
  // Write your code here! Use if and else if. 
 let result
  if (someValue <= 400)
    result = 'This one is on me!'
  
    else if (someValue >=2000 && someValue <= 2499) 
        result = 'I will gladly take your thirty bucks.'
    
    else if (someValue >= 2500) 
        result = 'No can do.'
  return result
}

function ternaryCheckCity(city) {
  // Write your code here! Use ternary operator. 

let result = city == 'NYC' ? "Ok, sounds good." : "No go.";
return result;

}

function switchOnCharmFromTip(tip){
  // Write your code here! Use switch statement.  
  let reply = prompt(tip);
      switch (tip){ 
        case 'generous':
          return reply = 'Thank you so much.';
          console.log(reply);
          break;
        case 'not as generous':
          return reply = 'Thank you.';
          break;
        default: 
          return reply = 'Bye.'
          break; 
      }
}