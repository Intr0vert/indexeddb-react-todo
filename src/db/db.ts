import { Category, Id, Item, ModalData } from 'types';
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
  new Promise<Category[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('category', 'readwrite');
      const categoryNotes = tx.objectStore('category');
      const req = categoryNotes.add(newCategory);

      req.onsuccess = () => {
        const newReq = categoryNotes.getAll();

        newReq.onsuccess = () => {
          resolve(newReq.result);
        };
      };
    });
  });

export const addItem = (newItem: Item) =>
  new Promise<Item[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readwrite');
      const itemNotes = tx.objectStore('item');
      const req = itemNotes.add(newItem);

      req.onsuccess = () => {
        const newReq = itemNotes.getAll();

        newReq.onsuccess = () => {
          resolve(newReq.result);
        };
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

export const updateCategory = (data: ModalData & { id: number }) =>
  new Promise<Category[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('category', 'readwrite');
      const categoryNotes = tx.objectStore('category');
      const req = categoryNotes.delete(data.id);

      req.onsuccess = () => {
        const req = categoryNotes.add(data);

        req.onsuccess = () => {
          const newReq = categoryNotes.getAll();

          newReq.onsuccess = () => {
            resolve(newReq.result);
          };
        };
      };
    });
  });

export const updateItem = (data: ModalData & { id: Id }) =>
  new Promise<Item[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readwrite');
      const itemNotes = tx.objectStore('item');
      const req = itemNotes.delete(data.id);

      req.onsuccess = () => {
        const req = itemNotes.add(data);

        req.onsuccess = () => {
          const newReq = itemNotes.getAll();

          newReq.onsuccess = () => {
            resolve(newReq.result);
          };
        };
      };
    });
  });

export const removeAllConnectedItems = (categoryId: Id) =>
  new Promise<Item[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readwrite');
      const itemNotes = tx.objectStore('item');

      itemNotes.openCursor().onsuccess = (e: any) => {
        const cursor = e.target.result;

        if (cursor) {
          if (cursor.value.categoryId === categoryId) {
            const cursorValue = cursor.value;

            delete cursorValue.categoryId;

            cursor.update(cursorValue);
          }
          cursor.continue();
        } else {
          const req = itemNotes.getAll();
          req.onsuccess = () => {
            resolve(req.result);
          };
        }
      };
    });
  });

export const removeCategory = (id: Id) =>
  new Promise<Category[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('category', 'readwrite');
      const categoryNotes = tx.objectStore('category');
      const req = categoryNotes.delete(id);

      req.onsuccess = () => {
        const newReq = categoryNotes.getAll();

        newReq.onsuccess = () => {
          resolve(newReq.result);
        };
      };
    });
  });

export const removeItem = (id: Id) =>
  new Promise<Item[]>((resolve) => {
    openDatabase(DATABASE_NAME, 1).then((db: IDBDatabase) => {
      const tx = db.transaction('item', 'readwrite');
      const itemNotes = tx.objectStore('item');
      const req = itemNotes.delete(id);

      req.onsuccess = () => {
        const newReq = itemNotes.getAll();

        newReq.onsuccess = () => {
          resolve(newReq.result);
        };
      };
    });
  });
