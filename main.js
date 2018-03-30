var Russian = 
 {
happy: "счастливого",
birthday: "дня рождения",
best: "хорошего",
wish: "желаю",
good: "хорошего",
luck: "везения",
this: "в этом",
year: "год",
health: "здоровья",
life: "жизни",
happiness: "счастья",
i: "Я",
you: "тебе",
in: "в",
and: "и",
lots:"много",
fun: "весело",
joy: "радость",
love: "люблю",
enjoy: "наслаждаться"
 };

    // console.log(Russian.life);


var Amharic = 
       {
        happy: "መልካም",
        birthday: "ልደት",
        best:"ምርጥ",
        wish:"ምኞት",
        good:"ጥሩ",
        luck: "ዕድል",
        this: "በዚህ" ,
        year: "ዓመት",
        health: "ጤና",
        life:"ሕይወት",
        happiness:"ደስታ",
        i: "እኔ",
        in: "ውስጥ",
        you:"ለአንተ",
        and: "እና",
        lots: "ብዙ",
        fun: "አዝናኝ",
        love: "ፍቅር",
        enjoy: "ይደሰቱ",
        };
    // console.log (Amharic.luck);
var Danish =
        {
        happy: "lykkelig",
        birthday: "fødselsdag",
        best: "bedst",
        wish: "ønske",
        good: "godt",
        luck: "held",
        this: "det her",
        year: "år ",
        health: "sundhed",
        life: "liv",
        happiness: "lykke",
        i: "jeg",  
        you: "du",
        in: "i",
        and: "og",
        lots:"masser",
        fun:"sjovt",
        love: "elsker",
        enjoy:  "god fornøjelse"
        }

  
    
//     //Translates to Russian if word is not found


function writeToDom(domString, domId){
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML += domString;
}       
        var myButtonRussian= document.getElementById('myButtonRussian'); 
        var myButtonAmharic = document.getElementById('myButtonAmharic'); 
        var myButtonDanish = document.getElementById('myButtonDanish'); 
        var myTextInput = document.getElementById('myTextInput');
       
        function languageTranslator (language){
            var result = "";
            var translatedLanguage = window[language];
            console.log(translatedLanguage);
        var value = myTextInput.value;
        console.log(value);
        var inputArray = value.split(" ");
        inputArray.forEach(function(inputWord){
            console.log(inputWord);
        for(var word in translatedLanguage) {
            if (word === inputWord){
               result += (translatedLanguage[word]);
                console.log (translatedLanguage[word]);
            }
            else{
                console.log (inputWord);
            }
            
        }
        console.log(result);
        return result;
        });
        }

        
        var myTextOutPut = document.getElementById('myTextOutPut');
        console.log(myTextOutPut);
        var domString = "";

        myButtonRussian.addEventListener('click', function(){
            myTextOutPut.value = languageTranslator['Russian']
            console.log(languageTranslator('Russian'))
        });
        myButtonAmharic.addEventListener('click', function(){
            languageTranslator(Amharic);
        });

        myButtonDanish.addEventListener('click', function(){
            languageTranslator(Danish);
        });

        // writeToDom (domString, 'myTextOutPut');

