import { Category, Item } from 'types';
import { DATABASE_NAME } from './constants';

export const openDatabase = (dbName: string, version: number) =>
  new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(dbName, version);
    let db: IDBDatabase;

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onerror = () => {
      reject();
    };

    request.onupgradeneeded = () => {
      db = request.result;
      if (!db.objectStoreNames.contains('item')) {
        db.createObjectStore('item', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('category')) {
        db.createObjectStore('category', { keyPath: 'id' });
      }
    };
  });

export const addCategory = (newCategory: Category) =>
  new Promise<void>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('category', 'readwrite');
      const categoryNotes = tx.objectStore('category');
      categoryNotes.add(newCategory);

      tx.oncomplete = () => {
        resolve();
      };
    });
  });

export const addItem = (newItem: Item) =>
  new Promise<void>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readwrite');
      const itemNotes = tx.objectStore('item');
      itemNotes.add(newItem);

      tx.oncomplete = () => {
        resolve();
      };
    });
  });

export const getCategories = () =>
  new Promise<Category[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('category', 'readonly');
      const categoryNotes = tx.objectStore('category');
      const req = categoryNotes.getAll();

      tx.oncomplete = () => {
        resolve(req.result);
      };
    });
  });

export const getItems = () =>
  new Promise<Item[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readonly');
      const itemNotes = tx.objectStore('item');
      const req = itemNotes.getAll();

      tx.oncomplete = () => {
        resolve(req.result);
      };
    });
  });

export const removeItem = () =>
  new Promise<void>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readwrite');
      const itemNotes = tx.objectStore('item');
      const req = itemNotes.delete(1);

      req.onsuccess = () => {
        resolve();
      };
    });
  });

export const removeCategory = () =>
  new Promise<void>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('category', 'readwrite');
      const categoryNotes = tx.objectStore('category');
      const req = categoryNotes.delete(1);

      req.onsuccess = () => {
        resolve();
      };
    });
  });
