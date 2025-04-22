import { ChevronRight } from "lucide-react";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-lime-50">
      <div className="container px-4 md:px-6">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-700">
              Our Collection
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Bestselling Keychains
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular designs loved by customers worldwide.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const message = `Hi! I'm interested in buying: ${product.title} (₹${product.price}). Is it available?`;
            const whatsappURL = `https://wa.me/919985061469?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-lime-600">₹{product.price}</span>
                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-lime-500 text-white hover:bg-lime-600">
                        Buy Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
