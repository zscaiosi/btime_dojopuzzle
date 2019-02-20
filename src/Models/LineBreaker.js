
class LineBreaker {
    // Constructor assigns properties
    constructor(colsNumber, phrase){
        this._colsNumber = colsNumber;
        this._phrase = phrase;
        this._newPhrase = [];
    }

    breakLines(){
        let words = this._phrase.split(" ");
        let line = '';
        //Checks if there is bigger
        let bigger = words.find( (w, i) => w.length > this._colsNumber);
        // impossible, one of the words are bigger than max columns
        if (bigger) {
            return null;
        }
        // The last word would not be added, then goes over more than all indexes
        for (let i = 0; i <= words.length; i++) {
            // Goes over each word and if fits in line, pushes to newPhrase's current element else pushes to new element 
            let msg = words[i];
            
            if (!msg) {
                console.log("!msg", msg)
                // Iterating over last word
                this._newPhrase.push(line);
            } else {
                if (line.length < 1) {
                    line = msg;
                    console.log("iterating over ", msg, "first ", line)                
                } else if (line.length > 0 && (msg.length + 1 + line.length) > this._colsNumber) {
                    this._newPhrase.push(line);
                    line = msg;
                    console.log("iterating over ", msg, "second ", line)
                } else {
                    line = line + " " + msg;
                    console.log("iterating over ", msg, "else ", line)
                }
            }
            
        }

        return this._newPhrase;
    }
    
}
// Singleton
module.exports.LineBreaker = LineBreaker;