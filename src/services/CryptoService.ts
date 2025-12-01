import axios from "axios";

const API_URL = "https://api.coinlore.net/api/tickers/";

export default class CryptoService {
  async getCryptos(): Promise<any[]> {
    const response = await axios.get<{ data: any[] }>(API_URL);
    return response.data.data; // array crypto
  }
}