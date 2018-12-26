class ListItem {
  private _itemValue: any = null;
  private _nextItem: ListItem | null = null;
  private _prevItem: ListItem | null = null;

  constructor(obj: any) {
    this._itemValue = obj;
  }
  public next(): ListItem | null {
    return this._nextItem;
  }
  public prev(): ListItem | null {
    return this._prevItem;
  }
  public value(): any {
    return this._itemValue;
  }
  public setNext(iter: ListItem | null) {
    this._nextItem = iter;
  }
  public setPrev(iter: ListItem | null) {
    this._prevItem = iter;
  }
}

export default ListItem;
