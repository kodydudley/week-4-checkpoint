import {
  ProxyState
} from "../AppState.js"
import imageService from "../Services/ImageService.js"
import Image from "../models/Image.js"

function _drawBackgroundImage() {
  document.body.style.backgroundImage = `url( ${ProxyState.image} )`
}


export default class ImageController {
  constructor() {
    this.getImage()
    ProxyState.on("image", _drawBackgroundImage)
  }

  getImage(id) {
    try {
      imageService.getImage(id)
    } catch (error) {
      console.error(error);
    }
  }
}