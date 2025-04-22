import {
  Facebook,
  Instagram,
  ShoppingBag,
  Youtube,
  Twitter,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-center gap-6 py-12 px-4 md:px-6 md:py-16">

        {/* Brand Info */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-md">
          <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            className="h-12 w-12 rounded-full  p-1"
            alt="Logo"
          />
            <span className="text-xl font-bold">Peach & Owl</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Handcrafted 3D printed keychains that add a touch of personality to your keys.
          </p>
          <div className="flex gap-4">
            <a href="" className="text-muted-foreground hover:text-lime-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.facebook.com/camVisionLaboratory/" className="text-muted-foreground hover:text-lime-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.youtube.com/@iiitbworks" className="text-muted-foreground hover:text-lime-500">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Peach & Owl. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Terms of Service", "Privacy Policy", "Cookies"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-xs text-muted-foreground hover:text-lime-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
