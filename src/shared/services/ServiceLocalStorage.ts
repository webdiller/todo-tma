import { LOCAL_STORAGE_KEYS } from "../types/locatStorage";

export class LocalStorageService {
    static setAccessToken(value: string) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN, value)
    }
    static getAccessToken() {  
        return localStorage.getItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN);
    }
}