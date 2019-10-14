module.exports = function zeros(expression) {



  let fact = expression.split("*");



  let Five = 0;
  let two = 0;

  for (let index = 0; index < fact.length; index+=1){
    
    if (fact[index].includes('!!')) {
      
      
      let counter = fact[index].slice(0, -2);

      

      
      for (let j = counter; j > 0; j -= 2) {
        
        let num = j;
        while (num % 5 == 0) {
          
          num /= 5;
          
          Five++;
        }
        while (num % 2 == 0) {
          
          num /= 2;
          
          two++;
        }
        continue;
      }
    } else {
      let counter = fact[index].slice(0, -1);

      for (let j = counter; j > 0; j-=1) {
        let num = j;
        while (num % 5 == 0) {
          num /= 5;
          Five++;
        }
        while (num % 2 == 0) {
          num /= 2;
          two++;
        }
        continue;
      }
    }
 }


  if (Five < two  ) {
    return Five;
  } else {
    return two;
  }
 
};
 
