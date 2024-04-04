class TrieNode{
  constructor(){
    this.children = {}
    this.end = false 

  }
}
class preffixTree{
  constructor(){
    this.root = new TrieNode()
  }

  insert(word){
    let node = this.root
    for(let char of word){
      if(!node.children[char]){
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }

     node.end = true

    }

    search(word){
      let node = this.root
      for(let char of word){
        if(!node.children[char]){
          return false
        }

        node = node.children[char]
      }
      return node.end
    }
  
    
    delete(word) {
      if (!this.search(word)) {
          console.log("Word not found!");
          return;
      }
      let node = this.root;
      let path = []; // To store the nodes in the path to the target word
      for (let char of word) {
          path.push({ char, node });
          node = node.children[char];
      }
      node.end = false; // Mark the end of the word as false
      // Check if the node has no children and if it's not the end of another word
      while (path.length > 0 && Object.keys(node.children).length === 0 && !node.end) {
          let { char, parent } = path.pop();
          delete parent.children[char]; // Delete the reference to the current node
          node = parent; // Move to the parent node
      }
  }
}


const trie = new preffixTree();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
console.log(trie.search("apple"));
trie.delete("apple");
console.log(trie.search('app'))
console.log(trie.search('apple'))

