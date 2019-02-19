
class LineBreaker {
    // Constructor assigns properties
    constructor(colsNumber, phrase){
        this._colsNumber = colsNumber;
        this._phrase = phrase;
        this._newPhrase = [[]];
    }

    breakLines(){
        let words = this._phrase.split(" ");
        //Checks if there is bigger
        let bigger = words.find( (w, i) => w.length > this._colsNumber);
console.log(bigger, words)
        if (bigger) {
            return null;
        }

        for (let i = 0; i < words.length; i++) {
            // Goes over each word and if fits in line, pushes to newPhrase's current element else pushes to new element 
            if ( (this._newPhrase[i].length + words[i].length) <= this._colsNumber ) {
                this._newPhrase.push(...this._newPhrase[i], words[i]);
                console.log("...this._newPhrase[i], words[i]", this._newPhrase[i], words[i]);
            } else {
                this._newPhrase.push(words[i]);
                console.log("pushes to next element", this._newPhrase, words[i]);
            }
        }

        return this._newPhrase;
    }
    
}
// Singleton
module.exports.LineBreaker = LineBreaker;