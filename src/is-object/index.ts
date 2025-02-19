export function isObject(value: any): boolean {
    if (typeof value !== 'object' || value === null) {
        return false;
    }

    const proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}