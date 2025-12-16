import hero1 from '../assets/images/webrtc-1.png'
import hero2 from '../assets/images/webrtc-2.jpg'
import hero3 from '../assets/images/webrtc-3.jpg'
import hero4 from '../assets/images/webrtc-4.jpg'
import hero5 from '../assets/images/webrtc-5.jpg'
import hero6 from '../assets/images/webrtc-6.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import {Card, CardContent} from './ui/card'

const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6]

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <img
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default HeroCarousel
