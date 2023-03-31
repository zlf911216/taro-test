import {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
} from "@tarojs/taro";

export default {
  setItem<T>(key: string, data: T) {
    console.error("setItem", data);
    return setStorage({ key, data });
  },
  async getItem(key: string) {
    const res = await getStorage({ key });
    return res.data;
  },
  removeItem(key: string) {
    return removeStorage({ key });
  },
  clear: clearStorage,
};
