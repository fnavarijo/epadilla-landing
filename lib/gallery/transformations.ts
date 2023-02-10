import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';

class Transformator {
  cloudinary: Cloudinary;

  constructor () {
    this.cloudinary = new Cloudinary({
      cloud: {
        cloudName: 'dkvtpo8w1'
      }
    })
  }

  getImagePath (imageUrl: string) {
    const [_, imagePath] = imageUrl.split(/\/v/);
    // Decode it, because cloudinary SDK will encode again, throwing a 404.
    // concatenating v because cloudinary URL contains a v4678979 as id
    return decodeURIComponent('v' + imagePath)
  }

  getMasonryImage (imagePath: string) {
    return this.cloudinary.image(imagePath)
      .resize(thumbnail().width(624).height(624))
      .format('auto')
      .quality('auto')
      .toURL()
  }

  getGalleryImage (imagePath: string) {
    return this.cloudinary.image(imagePath)
      .format('auto')
      .quality('auto')
      .toURL()
  }
}

export const transformator = new Transformator();