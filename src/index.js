class Sorter {
  constructor() {
    this.array = [];
    this.additional_array = [];
    this.k = 0; 
    this.l = 0;

  }

  add(element) {
    this.array[this.array.length]=element
    return this.array
  }

  at(index) {
    return this.array[index]
  
  }

  get length() {
    return this.array.length

  }

  toArray() {
    return this.array

  }

  sort(indices) {

    console.log('Before use function', this.array)
    indices.sort()
     for (this.k=indices.length; this.k > 0; this.k=this.k-1)
    { 
    this.additional_array[this.additional_array.length]=this.array[indices[indices.length-this.k]] 
    }

    if (this.l != 0){
    
    this.additional_array.sort(this.l)

    }
     else 
    {
      this.additional_array.sort(function(a,b){
        return a-b;
      })

    }
      console.log(this.additional_array)

     for (this.k=indices.length; this.k > 0; this.k=this.k-1)
    {
      
      this.array[indices[indices.length-this.k]]=this.additional_array[indices.length-this.k]
    }
      this.additional_array = []
    console.log(this.array)
    return this.array

    }



  setComparator(compareFunction) {
  
  this.l=compareFunction
  return this.l
           
  }
}

module.exports = Sorter;