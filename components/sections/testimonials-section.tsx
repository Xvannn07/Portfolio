import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "tab1",
      name: "John Doe",
      role: "CEO, Perusahaan A",
      company: "Perusahaan A",
      text: "Sangat profesional dan hasil kerjanya luar biasa. Proyek selesai tepat waktu dan sesuai dengan ekspektasi kami.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "tab2",
      name: "Jane Smith",
      role: "CTO, Startup B",
      company: "Startup B",
      text: "Kemampuan teknis dan kreativitasnya sangat membantu startup kami dalam mengembangkan produk yang user-friendly.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "tab3",
      name: "David Johnson",
      role: "Creative Director, Agensi C",
      company: "Agensi C",
      text: "Kolaborasi yang menyenangkan dan hasil yang memuaskan. Kami pasti akan bekerja sama lagi di proyek mendatang.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 max-w mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimoni
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Apa Kata Klien</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Berikut adalah beberapa testimoni dari klien yang telah bekerja sama dengan saya.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {testimonials.map((testimonial) => (
                <TabsTrigger key={testimonial.id} value={testimonial.id}>
                  {testimonial.company}
                </TabsTrigger>
              ))}
            </TabsList>
            {testimonials.map((testimonial) => (
              <TabsContent key={testimonial.id} value={testimonial.id} className="p-6 bg-background rounded-lg mt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div>
                    <p className="italic text-lg mb-4">"{testimonial.text}"</p>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
