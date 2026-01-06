import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const ImageSlideshow = () => {
  return (
    <div>
      <h2 className='text-center text-2xl font-bold m-3 p-3'>Image Slideshow</h2>
      <div className='flex justify-center m-4'>
      <Carousel className='max-w-xs w-full'>
        <CarouselContent>
          <CarouselItem >
            <Card>
              <CardContent className='flex justify-center items-center p-6 aspect-square'>
                  <img className="object-cover w-full h-full rounded-md" src="https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg" alt="tulips image" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className='flex justify-center items-center p-6 aspect-square'>
                  <img className="object-cover w-full h-full rounded-md" src="https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg" alt="roses image" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className='flex justify-center items-center p-6 aspect-square'>
                  <img className="object-cover w-full h-full rounded-md" src="https://images.pexels.com/photos/557907/pexels-photo-557907.jpeg" alt="lotus image" />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>
  )
}

export default ImageSlideshow
