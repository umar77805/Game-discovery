export default class Utilities {
  static stringShorten(str: string, length: number = 10) {
    if (str.length > length) return str.substring(0, length) + '...';
    return str;
  }

  static getQueryKey(endpoint: string) {
    if (endpoint.charAt(0) === '/') endpoint = endpoint.substring(1);
    return endpoint.split('/');
  }
}