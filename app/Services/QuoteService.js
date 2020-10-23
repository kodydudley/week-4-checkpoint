import {
  ProxyState
} from "../AppState.js"
import {
  api
} from "../Services/AxiosService.js"
import Quote from "../models/Quote.js"
class QuoteService {
  constructor() {
    this.getQuote()
  }

  async getQuote(id) {
    let res = await api.get("quotes", id)
    ProxyState.quote = new Quote(res.data)
  }
}

const quoteService = new QuoteService();
export default quoteService;