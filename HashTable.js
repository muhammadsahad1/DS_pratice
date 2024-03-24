class HashTable {
  constructor(size){
     this.table = new Array(size)
     this.size = size 
  }

  hash(key){
    let total = 0
    for(let i = 0;i<key.length;i++){

      total += key. charCodeAt(i)
    }
    return total % this.size 
  }

  set(key,value){
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key){
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key){
    const index = this.hash(key)


      this.table[index] = undefined
    

  }

  display (){
    if(this.table=== null){
      console.log("is empty");
      return
    }
    for(let i = 0 ;i < this.table.length;i++){
      if(this.table[i]){

        console.log("index",i , "value :", this.table[i]);
      }

    }
  }

}

let table = new HashTable(50)
table.set("name","sahad")
table.set("age",55)

console.log(table.get("name"))
table.display()