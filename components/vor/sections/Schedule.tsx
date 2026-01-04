import { schedule } from "@/lib/content";
import { Sunrise, Sun, Moon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const iconMap = {
  sunrise: Sunrise,
  sun: Sun,
  moon: Moon,
};

export function Schedule() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {schedule.title}
          </h2>
          <p className="text-foreground/70">
            {schedule.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {schedule.shifts.map((shift, index) => {
            const Icon = iconMap[shift.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="bg-white border-none shadow-sm">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 mb-4 mx-auto">
                    <Icon className="h-6 w-6 text-gold-700" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {shift.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {shift.times.map((time, timeIndex) => (
                      <li
                        key={timeIndex}
                        className="text-center py-2 px-4 bg-cream-100 rounded-md text-sm font-medium"
                      >
                        {time}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-foreground/60 mt-12">
          Horários de segunda a sexta. Sábados apenas período da manhã (07:00 - 13:00).
        </p>
      </div>
    </section>
  );
}
