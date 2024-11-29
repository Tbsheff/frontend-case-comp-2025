// client/src/ApiService.js
export const fetchMessage = async () => {
    const response = await fetch('/api');
    const data = await response.text();
    return data;
};