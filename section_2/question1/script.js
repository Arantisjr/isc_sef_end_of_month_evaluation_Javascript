function countVowels(str){
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for(let char of str){
    if(vowels.includes(char)){
        count++
    }
  }

  console.log(count);
   
}

countVowels("javascript")