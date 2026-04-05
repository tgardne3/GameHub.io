/*
names: Azam, Brandon, David, Trey
class: CS330
*/

let words = [
  "a","ability","able","about","above","accept","according","account","across",
  "act","action","activity","actually","add","address","administration","admit",
  "adult","affect","after","again","against","age","agency","agent","ago","agree",
  "agreement","ahead","air","all","allow","almost","alone","along","already",
  "also","although","always","American","among","amount","analysis","and",
  "animal","another","answer","any","anyone","anything","appear","apply",
  "approach","area","argue","arm","around","arrive","art","article","artist",
  "as","ask","assume","at","attack","attention","attorney","audience","author",
  "authority","available","avoid","away","baby","back","bad","bag","ball","bank",
  "bar","base","be","beat","beautiful","because","become","bed","before","begin",
  "behavior","behind","believe","benefit","best","better","between","beyond",
  "big","bill","billion","bit","black","blood","blue","board","body","book",
  "born","both","box","boy","break","bring","brother","budget","build","building",
  "business","but","buy","by","call","camera","campaign","can","cancer",
  "candidate","capital","car","card","care","career","carry","case","catch",
  "cause","cell","center","central","century","certain","certainly","chair",
  "challenge","chance","change","character","charge","check","child","choice",
  "choose","church","citizen","city","civil","claim","class","clear","clearly",
  "close","coach","cold","collection","college","color","come","commercial",
  "common","community","company","compare","computer","concern","condition",
  "conference","Congress","consider","consumer","contain","continue","control",
  "cost","could","country","couple","course","court","cover","create","crime",
  "cultural","culture","cup","current","customer","cut","dark","data","daughter",
  "day","dead","deal","death","debate","decade","decide","decision","deep",
  "defense","degree","Democrat","democratic","describe","design","despite",
  "detail","determine","develop","development","die","difference","different",
  "difficult","dinner","direction","director","discover","discuss","discussion",
  "disease","do","doctor","dog","door","down","draw","dream","drive","drop",
  "drug","during","each","early","east","easy","eat","economic","economy","edge",
  "education","effect","effort","eight","either","election","else","employee",
  "end","energy","enjoy","enough","enter","entire","environment","environmental",
  "especially","establish","even","evening","event","ever","every","everybody",
  "everyone","everything","evidence","exactly","example","executive","exist",
  "expect","experience","expert","explain","eye","face","fact","factor","fail",
  "fall","family","far","fast","father","fear","federal","feel","feeling","few",
  "field","fight","figure","fill","film","final","finally","financial","find",
  "fine","finger","finish","fire","firm","first","fish","five","floor","fly",
  "focus","follow","food","foot","for","force","foreign","forget","form","former",
  "forward","four","free","friend","from","front","full","fund","future","game",
  "garden","gas","general","generation","get","girl","give","glass","go","goal",
  "good","government","great","green","ground","group","grow","growth","guess",
  "gun","guy","hair","half","hand","hang","happen","happy","hard","have","he",
  "head","health","hear","heart","heat","heavy","help","her","here","herself",
  "high","him","himself","his","history","hit","hold","home","hope","hospital",
  "hot","hotel","hour","house","how","however","huge","human","hundred","husband",
  "I","idea","identify","if","image","imagine","impact","important","improve",
  "in","include","including","increase","indeed","indicate","individual",
  "industry","information","inside","instead","institution","interest",
  "interesting","international","interview","into","investment","involve",
  "issue","it","item","its","itself","job","join","just","keep","key","kid",
  "kill","kind","kitchen","know","knowledge","land","language","large","last",
  "late","later","laugh","law","lawyer","lay","lead","leader","learn","least",
  "leave","left","leg","legal","less","let","letter","level","lie","life","light",
  "like","likely","line","list","listen","little","live","local","long","look",
  "lose","loss","lot","love","low","machine","magazine","main","maintain","major",
  "majority","make","man","manage","management","manager","many","market",
  "marriage","material","matter","may","maybe","me","mean","measure","media",
  "medical","meet","meeting","member","memory","mention","message","method",
  "middle","might","military","million","mind","minute","miss","mission","model",
  "modern","moment","money","month","more","morning","most","mother","mouth",
  "move","movement","movie","Mr","Mrs","much","music","must","my","myself",
  "name","nation","national","natural","nature","near","nearly","necessary",
  "need","network","never","new","news","newspaper","next","nice","night","no",
  "none","nor","north","not","note","nothing","notice","now","n't","number",
  "occur","of","off","offer","office","officer","official","often","oh","oil",
  "ok","old","on","once","one","only","onto","open","operation","opportunity",
  "option","or","order","organization","other","others","our","out","outside",
  "over","own","owner","page","pain","painting","paper","parent","part",
  "participant","particular","particularly","partner","party","pass","past",
  "patient","pattern","pay","peace","people","per","perform","performance",
  "perhaps","period","person","personal","phone","physical","pick","picture",
  "piece","place","plan","plant","play","player","PM","point","police","policy",
  "political","politics","poor","popular","population","position","positive",
  "possible","power","practice","prepare","present","president","pressure",
  "pretty","prevent","price","private","probably","problem","process","produce",
  "product","production","professional","professor","program","project",
  "property","protect","prove","provide","public","pull","purpose","push","put",
  "quality","question","quickly","quite","race","radio","raise","range","rate",
  "rather","reach","read","ready","real","reality","realize","really","reason",
  "receive","recent","recently","recognize","record","red","reduce","reflect",
  "region","relate","relationship","religious","remain","remember","remove",
  "report","represent","Republican","require","research","resource","respond",
  "response","responsibility","rest","result","return","reveal","rich","right",
  "rise","risk","road","rock","role","room","rule","run","safe","same","save",
  "say","scene","school","science","scientist","score","sea","season","seat",
  "second","section","security","see","seek","seem","sell","send","senior",
  "sense","series","serious","serve","service","set","seven","several","sex",
  "sexual","shake","share","she","shoot","short","shot","should","shoulder",
  "show","side","sign","significant","similar","simple","simply","since","sing",
  "single","sister","sit","site","situation","six","size","skill","skin","small",
  "smile","so","social","society","soldier","some","somebody","someone",
  "something","sometimes","son","song","soon","sort","sound","source","south",
  "southern","space","speak","special","specific","speech","spend","sport",
  "spring","staff","stage","stand","standard","star","start","state","statement",
  "station","stay","step","still","stock","stop","store","story","strategy",
  "street","strong","structure","student","study","stuff","style","subject",
  "success","successful","such","suddenly","suffer","suggest","summer","support",
  "sure","surface","system","table","take","talk","task","tax","teach","teacher",
  "team","technology","television","tell","ten","tend","term","test","than",
  "thank","that","the","their","them","themselves","then","theory","there",
  "these","they","thing","think","third","this","those","though","thought",
  "thousand","threat","three","through","throughout","throw","thus","time","to",
  "today","together","tonight","too","top","total","tough","toward","town",
  "trade","traditional","training","travel","treat","treatment","tree","trial",
  "trip","trouble","true","truth","try","turn","TV","two","type","under",
  "understand","unit","until","up","upon","us","use","usually","value","various",
  "very","victim","view","violence","visit","voice","vote","wait","walk","wall",
  "want","war","watch","water","way","we","weapon","wear","week","weight","well",
  "west","western","what","whatever","when","where","whether","which","while",
  "white","who","whole","whom","whose","why","wide","wife","will","win","wind",
  "window","wish","with","within","without","woman","wonder","word","work",
  "worker","world","worry","would","write","writer","wrong","yard","yeah","year",
  "yes","yet","you","young","your","yourself"
];

let text = [];
let current_word = '';
let word_count = 0;
let correct = 0;
let incorrect = 0;
let accuracy = 0;
let num_words = 30;
let start_time;
let end_time;
let test_time;
let wpm;


function start_timer() {
    start_time = Date.now() / 1000;
}
//display game
function display_type_sprint() {

    if(text.length > 0){

        //copy list to avoid changing original
        const text_copy = [...text];
        //highlighting current word
        text_copy[word_count] = '<mark>' + text_copy[word_count] + '</mark>';
        //converting list to string for displaying
        const text_string = text_copy.join(`   `);

        //creating an object for HTML display
        const test_body = document.createElement("div");
        test_body.className = "type-sprint";
        test_body.innerHTML = `
        <div>
            <p>${text_string}</p>

            <p class="ts-input">${current_word}</p>
        </div>
        `;

        //button to display if game is over...
        const reset_button = document.createElement('div');
        reset_button.innerHTML = `
            <button>Play Again</button> 
        `;

        const body = document.querySelector('.type-sprint');
        console.log(`in display the  is : ${word_count}`);
        body.innerHTML = ``;
        body.appendChild(test_body);

    if(word_count === (text.length)) {
        word_count = 0;
        current_word = '';
        end_time = Date.now() / 1000;
        test_time = (end_time - start_time);
        wpm = 60/(num_words/test_time);

        console.log(`wmp = ${wpm}`);

        text = [];
        generate_text();
        alert("display scores here...");
    }

    }
}


//running game logic
function type_sprint() {
    //need to interate across the parsed_string
    //need to ignore <mark></mark> tags for correctness checking...
    if(word_count === 0){
        start_timer();
    }
    if (current_word.trim() === text[word_count]){
        console.log("correct");
        correct++;
    } else {
        console.log("false");
        incorrect++;
    }

    //clear the input box
    console.log(text[word_count]);
    console.log(current_word.trim());
    current_word = '';
    word_count++;
    accuracy = (num_words - incorrect)/num_words * 100;
    console.log(accuracy);

        display_type_sprint();
}

display_type_sprint();

function game_loop() {
    type_sprint();
}

function generate_text() {
    for(let i = 0; i < num_words; i++){
        text.push(words[Math.floor(Math.random() * words.length)]); // pick a random word   
    }
    display_type_sprint();
}


//capturing keypresses
if(text.length === 0) {
    generate_text();
}
const page = document.addEventListener("keydown", (event) => {
    if(event.code === 'Space') {
        game_loop(text);
    } else if (event.code === 'Backspace'){
        current_word = current_word.slice(0, -1);
    } 
    else if(event.key.length === 1){
        current_word += event.key;
    }
    display_type_sprint();
});
