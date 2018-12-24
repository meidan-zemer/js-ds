import IStack from './IStack';

class Stack implements  IStack{
    private stack:any[]
    constructor(){
        this.stack = [];
    }
     clear(){
         this.stack = [];
    }

     push(obj:any){
         this.stack.push(obj)
    }

     pop(){
        return this.stack.pop();
    }
}

export default Stack;
