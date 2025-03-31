function ispalindrome(str){
    let reversString = str.split().reverse().join();

    if (reversString == str){
        console.log('its a palindrome')
    }
    else{
        console.log('its not a palindrome');
    }
}

word = "racecar"

ispalindrome(word);