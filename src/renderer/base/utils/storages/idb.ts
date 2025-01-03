import { IDBPDatabase, openDB } from 'idb';

class IndexedDb {
  private database: string;
  private db: IDBPDatabase | undefined;

  constructor(database: string) {
    this.database = database;
  }

  public async createObjectStore(tableNames: string[], version: number) {
    try {
      this.db = await openDB(this.database, version, {
        upgrade(db: IDBPDatabase) {
          for (const tableName of tableNames) {
            // console.log('createObjectStore', db.objectStoreNames);
            if (db.objectStoreNames.contains(tableName)) {
              db.deleteObjectStore(tableName);
            }

            db.createObjectStore(tableName, {
              autoIncrement: true,
              keyPath: 'id',
            });
          }
        },
        blocked(currentVersion, blockedVersion, event) {
          // …
          console.log('blocked', currentVersion, blockedVersion, event);
        },
        blocking(currentVersion, blockedVersion, event) {
          // …
          console.log('blocking', currentVersion, blockedVersion, event);
        },
        terminated() {
          // …
          console.log('terminated');
        },
      });
      // console.log('createObjectStore', this.db);
    } catch (error) {
      console.log('createObjectStore -> error', error);
      return false;
    }
  }

  public async getValue(tableName: string, id: string) {
    const tx = this.db!.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);

    // // console.log('Get Data ', JSON.stringify(result));
    return result;
  }

  public async getAllValue(tableName: string) {
    const tx = this.db!.transaction(tableName, 'readonly');

    const store = tx.objectStore(tableName);
    const result = await store.getAll();
    // // console.log('Get All Data', JSON.stringify(result));
    return result;
  }

  public async getAllKeys(tableName: string) {
    const tx = this.db!.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    return await store.getAllKeys();
    // // console.log('Get All Data', JSON.stringify(result));
  }

  public async clearAllKeysWithPrefix(tableName: string, prefixKey: string) {
    const tx = this.db!.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const keys = await store.getAllKeys();

    for (let i = 0; i < keys.length; i++) {
      const k = `${keys[i]}`;

      if (k.startsWith(prefixKey)) {
        await store.delete(k);
      }
    }

    // // console.log('Get All Data', JSON.stringify(result));
  }

  public async putValue(tableName: string, value: object) {
    const tx = this.db!.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.put(value);

    // // console.log('Put Data ', JSON.stringify(result));
    return result;
  }

  public async putBulkValue(tableName: string, values: object[]) {
    const tx = this.db!.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);

    for (const value of values) {
      const result = await store.put(value);

      // console.log('Put Bulk Data ', JSON.stringify(result));
    }
    return this.getAllValue(tableName);
  }

  public async deleteValue(tableName: string, id: string) {
    const tx = this.db!.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);

    if (!result) {
      // console.log('Id not found', id);
      return result;
    }
    await store.delete(id);
    // console.log('Deleted Data', id);
    return id;
  }
  public async clearTable(tableName: string) {
    try {
      this.db = await openDB(this.database, 3);
      const tx = this.db.transaction(tableName, 'readwrite');
      const store = tx.objectStore(tableName);
      await store.clear();
    } catch (err) {
      console.log('deleteTable', err);
    }

    // tx.
  }
}

export default IndexedDb;
