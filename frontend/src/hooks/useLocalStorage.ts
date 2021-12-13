type useLocalStorageType = (
  key: string,
  method: string,
  value?: string
) => string | null;

const useLocalStorage: useLocalStorageType = (key, method, value = "") => {
  let result: string | null = null;
  if (method == "GET") {
    result = localStorage.getItem(key);
  }
  if (method == "SET") {
    localStorage.setItem(key, value);
  }
  return result || null;
};

export default useLocalStorage;
