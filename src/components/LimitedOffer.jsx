import { Button } from "@/components/ui/button";

export default function LimitedOffer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          
          {/* Text Section */}
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-700">
              Limited Time Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              20% Off Your First Order
            </h2>
            <p className="text-muted-foreground max-w-md">
              Don’t miss this exclusive deal! Grab your favorite handcrafted keychains with a special discount.
            </p>
            <Button className="bg-lime-500 text-white hover:bg-lime-600">
              Shop Now
            </Button>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            {/* Replace with your image if needed */}
            {/* <img
              src="/limited-offer.jpg"
              alt="Special Offer"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            /> */}
          </div>

        </div>
      </div>
    </section>
  );
}
