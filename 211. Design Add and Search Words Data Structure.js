class WordDictionary {
    constructor() {
        this.words = new Set();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.words.add(word);
        return null;
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const reg = new RegExp(word);
        for (const w of this.words) {
            if (reg.test(w) && (word.length == w.length)) {
                return true;
            }
        }
        return false;
    }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");
wordDictionary.search("a");
wordDictionary.search(".at");
wordDictionary.addWord("bat");
wordDictionary.search(".at");
wordDictionary.search("an.");
wordDictionary.search("a.d.");
wordDictionary.search("b.");
wordDictionary.search("a.d");
wordDictionary.search(".");