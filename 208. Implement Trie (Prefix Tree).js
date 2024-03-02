
class Trie {
    constructor() {
        this.root = new Set();
        this.prefix = new Set();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.root.add(word);
        for (let i = word.length; i > 0; i--) {
            let substr = word.substring(0, i);
            if (this.prefix.has(substr)) break;
            this.prefix.add(substr);
        }
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.root.has(word);
    }
    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.prefix.has(prefix);
    }
}



let trie = new Trie();
trie.insert("apple");
trie.insert("cat");
console.log(trie.search("apple"))  // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
console.log(trie.startsWith("cat")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True
