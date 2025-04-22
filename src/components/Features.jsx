import { Sparkles, ShoppingBag, Truck } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-700">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Crafted With Excellence
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our 3D printed keychains are designed with attention to detail and made with high-quality materials.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-lime-100 p-3">
              <Sparkles className="h-6 w-6 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold">Premium Quality</h3>
            <p className="text-center text-muted-foreground">
              Made with eco-friendly, durable materials that last for years.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-lime-100 p-3">
              <ShoppingBag className="h-6 w-6 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold">Custom Designs</h3>
            <p className="text-center text-muted-foreground">
              Choose from our collection or create your own personalized keychain.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-lime-100 p-3">
              <Truck className="h-6 w-6 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold">Fast Shipping</h3>
            <p className="text-center text-muted-foreground">
              Quick production and delivery to your doorstep within days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
