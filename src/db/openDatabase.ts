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
