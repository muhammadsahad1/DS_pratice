class TrieNode {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class suffixTree {
  constructor() {
    this.root = new TrieNode();
  }

  insert(string) {
    for (let i = 0; i < string.length; i++) {
      this.build(i, string);
    }
  }

  build(index, string) {
    let node = this.root;
    for (let i = index; i < string.length; i++) {
      let char = string.charAt(i)
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.end = true;
  }

  contains(word){
    let node = this.root
    for(let i = 0 ; i < word.length ;i++){
      let char = word.charAt(i)
      if(!node.children.has(char)){
        return false
      }
      node = node.children.get(char)
    }
    return node.end 
  } 

}


let suffix = new suffixTree()
suffix.insert("sahad")
suffix.insert("sahu")
console.log(suffix.contains("sahu"))