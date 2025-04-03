let text = `
The quick, brown fox jumps over a lazy dog. 
DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. 
Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. 
Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. 
Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. 
Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. 
Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. 
A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. 
The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck.
 A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just
The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just

`
//counting words

function countWords(text){
    words = text.split(" ");
   num_words =  words.length;
    console.log(`number of words: ${num_words}`);

}

//counting characters
function countCharacters(text){
numCharacters = text.length;
console.log(`number of characters: ${numCharacters}`);
}

//counting spaces
function countSpaces(text){
   let count = 0;

  for(let i=0; i<text.length; i++){

    if(text[i] = ' '){
        count ++;
    }

  }

  console.log(`number of spaces: ${count}`)
    
}
//fuction to count the occurence of each word in the text and return an object with word frequencies 

function countOccurences(text){
textToLowercase = text.toLowerCase()

let punctuations = [",",".","!","?",";",":",'"',"(",")"];

for (let mark of punctuations){
    text = text.split(mark).join("") //replaces each punctuations mark with an empy string
}
let new_text = text.split(" ");

let frequent_words = {}

for(let word of new_text){
    if(word){//ignores empty strings and multiple spaces
        frequent_words[word] =(frequent_words[word]|| 0) + 1;
    }
}
return frequent_words;

}

countSpaces(text);
countCharacters(text);
countWords(text);
 occurances = countOccurences(text);
 console.log(occurances)



