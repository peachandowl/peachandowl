import { MessageCircleMore, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const phoneNumber = "919985061469"
  const message = "Hi! I'm interested in your handcrafted products!"
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section
      id="contact"
      className="w-full min-h-[80vh] bg-gradient-to-br from-lime-50 to-white py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-3xl w-full text-center space-y-10 shadow-xl bg-white p-10 rounded-3xl border border-lime-100">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-lime-600">
            Let's Connect on WhatsApp
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you’re curious about custom keychains, bulk orders, or just want to say hi — we’re happy to chat!
          </p>
        </div>

        <div className="flex justify-center">
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-lime-500 hover:bg-lime-600 text-white text-lg px-8 py-6 rounded-full transition-all duration-300 flex gap-2 items-center shadow-lg hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" />
              Message Us on WhatsApp
            </Button>
          </a>
        </div>

        <div className="text-sm text-muted-foreground pt-4">
          We typically respond within a few minutes during business hours.
        </div>
      </div>
    </section>
  )
}
