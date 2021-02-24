import { DATABASE_NAME } from 'db/constants';
import { openDatabase } from 'db/openDatabase';
import { Category, Id, ModalData } from 'types';

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
