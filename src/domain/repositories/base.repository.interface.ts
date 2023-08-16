export interface IBaseRepository<T> {
    find: (id: string) => Promise<T>;
    create: (entity: T) => Promise<T>;
    findAll: () => Promise<Array<T>>;
}