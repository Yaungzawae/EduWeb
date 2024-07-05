// import { Button } from "../ui/button"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TeacherCard from "@/components/customs/TeacherCard"
import TestimonialCard from "@/components/customs/TestimonialCard"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"



function HomePage() {

  return (
    <div className="bg-pink-800 text-black">
      <div className="mx-auto">
        <div className="w-full aspect-square lg:h-[90vh]  bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover bg-right bg-opacity-50 flex justify-start align-bottom">
          <div className="w-1/2 h-full flex justify-center align-middle">
            <div className="md:w-1/2 ml-6 z-10 my-auto text-md md:text-lg lg:text-2xl xl:text-4xl flex flex-col justify-center text-white rounded-lg gap-2">
              <h5>歡迎來到</h5>
              <h1>Kru Cho Official </h1>
              <h5>語言教育中心</h5>

              <Button className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 bg-pink-900">GET STARTED</Button>

          </div>
          </div>
        </div>

        <Card className="bg-pink-700 m-0 border-0">
          <CardHeader className="text-white">
            <h1 className="text-2xl md:text-3xl text-center py-6">Meet Our Teachers</h1>
          </CardHeader>
          <CardContent>
          <Carousel className="w-[95%] mx-auto">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <TeacherCard image="https://picsum.photos/200" name="Kru 小玫" price="NTD399/hr"  link="/alex"/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          </CardContent>
        </Card>


        <Card className="bg-pink-200 m-0 border-0 rounded-none">
          <CardHeader>
            <h1 className="text-3xl text-center">Testimonials</h1>
          </CardHeader>
          <CardContent>
          <Carousel className="w-[95%] mx-auto" 
          opts={{ align: "start", loop: true}}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index}>
                    <TestimonialCard name="MIKE" image="https://picsum.photos/200" text="
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, similique, harum atque dolorem doloribus omnis aliquam accusamus magni nemo, praesentium minima eos eligendi iste ratione voluptatem est quos facilis architecto!
                    "/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          </CardContent>
          
        </Card>

      </div>
    </div>
  )
}

export default HomePage;
