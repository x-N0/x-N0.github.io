import CarouselData, { showOffTypes } from '~/assets/carouselDataHandler.ts'

const data = new CarouselData(showOffTypes.FullStack, true).addVideoLinks([
  'https://vimeo.com/120716576',
])

// const jsonData = JSON.stringify(data)

export default data
