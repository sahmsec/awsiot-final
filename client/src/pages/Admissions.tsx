import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Admissions() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Admissions 2026</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join a future-focused institution committed to innovation,
          academic excellence, and real-world impact.
        </p>
        <Button size="lg">Start Your Application</Button>
      </section>

      {/* WHY CHOOSE US */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Industry-Focused Curriculum</h3>
              <p className="text-sm text-muted-foreground">
                Designed with real industry partners to prepare you for
                high-demand careers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Global Recognition</h3>
              <p className="text-sm text-muted-foreground">
                International partnerships and accredited programs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Modern Campus</h3>
              <p className="text-sm text-muted-foreground">
                State-of-the-art labs, research centers, and digital learning tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Admission Requirements</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Completed online application form</li>
          <li>Official academic transcripts</li>
          <li>Statement of purpose</li>
          <li>Two recommendation letters</li>
          <li>Proof of English proficiency (if applicable)</li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Application Timeline</h2>
        <div className="space-y-3 text-muted-foreground">
          <p><strong>Fall Intake:</strong> Applications open Jan 1 – Close June 30</p>
          <p><strong>Spring Intake:</strong> Applications open Aug 1 – Close Nov 30</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">How long does the admission process take?</h4>
              <p className="text-sm text-muted-foreground">
                Typically 2–4 weeks after all required documents are submitted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Are scholarships available?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, merit-based and need-based scholarships are available.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Can international students apply?</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely. We welcome students from all countries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}