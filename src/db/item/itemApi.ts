import { DATABASE_NAME } from 'db/constants';
import { openDatabase } from 'db/openDatabase';
import { Id, Item, ModalData } from 'types';

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
