import {
  ProxyState
} from "../AppState.js"
import {
  api
} from "../Services/AxiosService.js"
import Image from "../models/Image.js"
class ImageService {
  constructor() {}
  async getImage(id) {
    let res = await api.get("images", id)
    ProxyState.image = res.data.url
  }

}

const imageService = new ImageService();
export default imageService;