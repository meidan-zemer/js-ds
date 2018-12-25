import { IStack } from './IStack';

class Stack implements IStack {
  private stack: any[];
  constructor() {
    this.stack = [];
  }
  public clear(): void {
    this.stack = [];
  }

  public push(obj: any): void {
    this.stack.push(obj);
  }

  public pop(): any {
    return this.stack.pop();
  }
}

export default Stack;
