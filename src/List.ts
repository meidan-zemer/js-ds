import { IList } from './Interfaces';
import ListItem from './ListItem';

class List implements IList {
  private _head: ListItem | null = null;
  private _tail: ListItem | null = null;
  private _count: number = 0;

  public count(): number {
    return this._count;
  }
  public addHead(obj: any): IList {
    const newHead = new ListItem(obj);
    const oldHead = this._head;
    newHead.setNext(oldHead);
    newHead.setPrev(null);
    this._head = newHead;
    if (oldHead) {
      oldHead.setPrev(newHead);
    }
    if (this.count() === 0) {
      this._tail = newHead;
    }
    this._count++;
    return this;
  }
  public addTail(obj: any): IList {
    const newTail = new ListItem(obj);
    const oldTail = this._tail;
    newTail.setNext(null);
    newTail.setPrev(oldTail);
    this._tail = newTail;
    if (oldTail) {
      oldTail.setNext(newTail);
    }
    if (this.count() === 0) {
      this._head = newTail;
    }
    this._count++;
    return this;
  }
  public clear(): IList {
    this._tail = null;
    this._head = null;
    this._count = 0;
    return this;
  }
  public head(): any {
    return this._head ? this._head.value() : null;
  }
  public tail(): any {
    return this._tail ? this._tail.value() : null;
  }
  public remove(index: number): IList {
    const item = this.getItem(index);
    if (item) {
      const prev = item.prev();
      const next = item.next();
      if (prev) {
        prev.setNext(item.next());
      } else {
        this._head = item.next();
      }
      if (next) {
        next.setPrev(item.prev());
      } else {
        this._tail = item.prev();
      }
      this._count--;
    }
    return this;
  }
  public get(index: number): any {
    const item = this.getItem(index);
    return item ? item.value() : null;
  }
  public addAfter(index: number, obj: any): IList {
    if (index >= this.count()) {
      this.addTail(obj);
    } else {
      const item = this.getItem(index);
      if (item) {
        const newItem = new ListItem(obj);
        const nextItem = item.next();
        newItem.setNext(nextItem);
        newItem.setPrev(item);
        item.setNext(newItem);
        if (nextItem) {
          nextItem.setPrev(newItem);
        }
        if (nextItem === null) {
          this._tail = newItem;
        }
        this._count++;
      }
    }
    return this;
  }
  public addBefore(index: number, obj: any): IList {
    if (index <= 0) {
      this.addHead(obj);
    } else {
      const item = this.getItem(index);
      if (item) {
        const newItem = new ListItem(obj);
        const prevItem = item.prev();
        newItem.setNext(item);
        newItem.setPrev(prevItem);
        item.setPrev(newItem);
        if (prevItem) {
          prevItem.setNext(newItem);
        }
        if (prevItem === null) {
          this._head = newItem;
        }
        this._count++;
      }
    }
    return this;
  }
  public [Symbol.iterator](): { next: () => { done: boolean; value: any } } {
    let current = this._head;
    return {
      next: () => {
        const rc: { done: boolean; value: any } = { done: false, value: null };
        if (current) {
          rc.done = false;
          rc.value = current.value();
          current = current.next();
        } else {
          rc.done = true;
        }
        return rc;
      },
    };
  }

  private getItem(index: number): ListItem | null {
    let count = 0;
    let item = this._head;
    index = index < 0 ? 0 : index;
    while (item && count < index) {
      item = item.next();
      count++;
    }
    return item;
  }
}

export default List;
