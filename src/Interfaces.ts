export interface IStack {
  push(obj: any): void;
  pop(): any;
  clear(): void;
}

export interface IList {
  head(): any;
  tail(): any;
  clear(): IList;
  addTail(obj: any): IList;
  addHead(obj: any): IList;
  remove(index: number): IList;
  get(index: number): any;
  addAfter(index: number, obj: any): IList;
  addBefore(index: number, obj: any): IList;
  count(): number;
}

export interface IQueue {
  enqueue(obj: any): void;
  dequeue(): any;
  clear(): void;
}
