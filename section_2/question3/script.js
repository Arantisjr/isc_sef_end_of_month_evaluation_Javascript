function ispalindrome(str){
    let reversString = str.spit().reversed().join();

    if (reversString == str){
        console.log('its a palindrome')
    }
    else{
        console.log('its not a palindrome');
    }
}