import {
  ProxyState
} from "../AppState.js"
import Quote from "../models/Quote.js"
import quoteService from "../Services/QuoteService.js"

function _drawQuote() {
  let template = ""
  template = ProxyState.quote.Template
  document.getElementById("quote").innerHTML = template
}
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _drawQuote)
  }

  getQuote(id) {
    try {
      quoteService.getQuote(id)
    } catch (error) {
      console.error(error)
    }
  }
}