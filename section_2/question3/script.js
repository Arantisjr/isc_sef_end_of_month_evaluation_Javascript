function ispalindrome(str){
    let reversString = str.split('').reverse().join('');
    console.log(reversString);

    if (reversString == str){
        console.log('its a palindrome')
    }
    else{
        console.log('its not a palindrome');
    }
}

word = "boy"

ispalindrome(word);