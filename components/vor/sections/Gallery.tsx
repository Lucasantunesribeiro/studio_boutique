import Image from "next/image";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          {gallery.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {gallery.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-cream-200 group"
            >
              {/* Placeholder com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-cream-300 flex items-center justify-center">
                <p className="text-foreground/40 text-sm font-medium text-center px-4">
                  {image.alt}
                </p>
              </div>

              {/* Uncomment quando adicionar imagens reais */}
              {/* <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
