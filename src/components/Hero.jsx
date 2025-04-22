import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-lime-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_600px] xl:grid-cols-[1fr_700px] lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Unique 3D Printed Keychains <br className="hidden sm:block" />
                For Your Style
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Time To 3D Customized 3D Printed Lithophane Magic Photo Keychain | Personalised Engraved 3D Photo Keychain Gift for Birthdays, Best friend, Dad, Brother
              </p>
            </div>

         
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                    className="bg-lime-500 text-white hover:bg-lime-600"
                    onClick={() => window.open("https://wa.me/9985061469?text=I'm%20interested%20in%20your%20keychains", "_blank")}
                    >
                    Chat on WhatsApp
                    </Button>
                    <Button
                    variant="outline"
                    className="border-lime-500 text-lime-500 hover:bg-lime-50 hover:text-lime-600"
                    onClick={() => window.open("https://wa.me/9985061469?text=I'd%20like%20to%20customize%20a%20keychain", "_blank")}
                    >
                    Customize on WhatsApp
                    </Button>
                  </div>

                  {/* Reviews */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-lime-500 fill-lime-500 mr-1" />
                ))}
              </div>
              <span className="text-muted-foreground">Over 500+ 5-star reviews</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center relative">
            <div className="relative h-[360px] w-[360px] sm:h-[400px] sm:w-[400px] p-4">
              {/* Image inside the circle */}
              <div className="h-full w-full rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                <img src="/shiva.jpg" alt="Keychain" className="h-full w-full object-cover" />
              </div>

              {/* Discount Bubble */}
              <div className="absolute -bottom-6 -right-6 rounded-full bg-lime-500 p-4 text-white shadow-lg text-center w-20 h-20 flex flex-col items-center justify-center">
                <div className="text-xl font-bold leading-none">20%</div>
                <div className="text-xs leading-tight">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
