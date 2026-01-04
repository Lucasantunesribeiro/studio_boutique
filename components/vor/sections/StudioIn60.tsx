import { studioIn60Seconds } from "@/lib/content";

export function StudioIn60() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          {studioIn60Seconds.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {studioIn60Seconds.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 mb-6">
                  <Icon className="h-8 w-8 text-gold-700" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
