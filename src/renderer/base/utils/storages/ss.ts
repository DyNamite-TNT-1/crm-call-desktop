type SessionStorage = typeof window.sessionStorage;

const PREFIX_LOCALSTORAGE = 'teamchannel.io_';

export default class Storage<T extends string> {
  private readonly storage: SessionStorage;

  public constructor(getStorage = (): SessionStorage => window.sessionStorage) {
    this.storage = getStorage();
  }

  public getOriginKey(key: T) {
    return `${PREFIX_LOCALSTORAGE}${key}`;
  }

  public get(key: T): string | null {
    return this.storage.getItem(this.getOriginKey(key));
  }

  public set(key: T, value: string): void {
    this.storage.setItem(this.getOriginKey(key), value);
  }

  public remove(key: T): void {
    this.storage.removeItem(this.getOriginKey(key));
  }

  public removeItems(keys: T[]): void {
    keys.forEach((key) => this.remove(this.getOriginKey(key) as T));
  }

  public clear(): void {
    this.storage.clear();
  }

  public length(): number {
    return this.storage.length;
  }

  public key(index: number): string | null {
    return this.storage.key(index);
  }

  public keys(): string[] {
    return Object.keys(this.storage);
  }
}
