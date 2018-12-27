import { IList } from '../src/Interfaces';
import List from '../src/List';

describe('List', () => {
  test('Create and clear', () => {
    const list: IList = new List();
    list.addHead(1);
    list.addHead(2);
    list.addHead(3);
    expect(list.count()).toEqual(3);
    list.clear();
    expect(list.count()).toEqual(0);
  });
  test('addTail and Iterate', () => {
    const list: IList = new List();
    let ind = 1;
    list.addTail(1);
    list.addTail(2);
    list.addTail(3);
    for (const item of list) {
      expect(item).toEqual(ind++);
    }
  });
  test('addHead and Iterate', () => {
    const list: IList = new List();
    let ind = 1;
    list.addHead(3);
    list.addHead(2);
    list.addHead(1);
    for (const item of list) {
      expect(item).toEqual(ind++);
    }
  });
  test('addBefore', () => {
    const list: IList = new List();
    list.addHead(4);
    list.addHead(2);
    list.addHead(1);
    expect(list.count()).toEqual(3);
    list.addBefore(2, 3);
    expect(list.get(2)).toEqual(3);
    expect(list.count()).toEqual(4);
  });
  test('addAfter', () => {
    const list: IList = new List();
    list.addHead(4);
    list.addHead(2);
    list.addHead(1);
    expect(list.count()).toEqual(3);
    list.addAfter(1, 3);
    expect(list.get(2)).toEqual(3);
    expect(list.count()).toEqual(4);
  });
  test('clear', () => {
    const list = new List();
    list.addTail(1);
    list.addTail(1);
    list.addTail(1);
    expect(list.count()).toEqual(3);
    list.clear();
    expect(list.count()).toEqual(0);
    expect(list.get(0)).toEqual(null);
  });
    test('clear', () => {
        const list = new List();
        list.addTail(1);
        list.addTail(2);
        list.addTail(3);
        expect(list.count()).toEqual(3);
        list.clear();
        expect(list.count()).toEqual(0);
        expect(list.get(0)).toEqual(null);
    });
});
