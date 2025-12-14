import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Sparkles, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex gap-8">
            <a href="#" className="text-sm hover:text-primary transition-colors">
              About us
            </a>
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Game
            </a>
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Impact
            </a>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src="/images/serenity-logo-transparent.png" alt="Serenity Mental Wellness Platform" className="h-24" />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            Start your journey
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(180.31deg, #FFFFFF 0.28%, #CBC3B7 43.16%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl text-balance">A place to explore your feelings.</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Your moods guide the world inside explore it at your own pace.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                Start your journey
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-foreground/20">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-full">
          <img
            src="/images/image.png"
            alt="Two people having a conversation - one in a yellow shirt and one in an orange polka dot dress, with plants around them"
            className="w-full"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-12">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 bg-secondary border-0">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl">Empathy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Telling people you care goes a long way to set precedence for an affirming experience. That goes away
                when you tell someone you care and demonstrate that you don't or can't.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-secondary border-0">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl">Growth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You deserve to make a positive impact that inspires you and makes you stand out. Our design comes first
                to serve in lane of inspiring growth. It's real and unafraid to see itself everywhere.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-secondary border-0">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl">Mindfulness</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mindfulness can also mean being direct with not only your mind but also yourself. You identify the
                thoughts that come. We operate with this openness in mind, that you aren't always ready for that and
                that's okay.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">Features</h2>

        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Feature 1 - AI That Listens */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-balance">An AI That Listens</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI quietly learns from your check-ins and in-game choices to understand how you're feeling. It
                doesn't judge or diagnose it simply adapts the experience to support you, gently and respectfully.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Feels personal, not generic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Reduces emotional effort</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Builds self-awareness over time</span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <img
                src="/images/femme.png"
                alt="Woman in red polka dot dress interacting with AI interface showing brain icon"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Feature 2 - A Game That Grows */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/homme.png"
                alt="Man with beard working on a laptop with creative graphics and landscape painting"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-balance">A Game That Grows With You</h3>
              <p className="text-muted-foreground leading-relaxed">
                The game world changes based on your emotional journey. As you play, your environment evolves reflecting
                calm, growth, and balance at your own pace, without pressure or goals to chase.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Encourages emotional expression without words</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Creates a sense of progress without stress</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Builds a positive emotional relationship with play</span>
                </li>
              </ul>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explore game</Button>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline inline text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tagline
                </div>
                <h2 className="font-serif text-3xl text-balance">
                  Headline with USP related to how your product or service works
                </h2>
                <Button variant="outline">Learn more</Button>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Play a Calm Game</h4>
                      <p className="text-sm text-muted-foreground">
                        You explore a gentle game designed to help you relax and reflect, with no pressure, scores, or
                        deadlines.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">AI Learns Quietly</h4>
                      <p className="text-sm text-muted-foreground">
                        As you play and check in, the AI notices patterns in your mood and behavior always respectfully
                        and in the background.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Your Experience Adapts</h4>
                      <p className="text-sm text-muted-foreground">
                        The game and interface adjust to match how you're feeling, from colors and pace to suggested
                        activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-sm font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">A Personal Dashboard</h4>
                      <p className="text-sm text-muted-foreground">
                        Your emotions and habits come together in a simple, calming dashboard that helps you understand
                        yourself over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto text text space-y-6">
          <h2 className="font-serif text-3xl">Join our newsletter</h2>
          <p className="text-muted-foreground">
            Join our mailing of folks to stay up to date for announcements, new developments, or updates to come for our
            web of beautiful life.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email here" className="flex-1" />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
            <div>
              <h4 className="font-serif text-2xl italic mb-4">Logo</h4>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Column One</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Two
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Three
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Four
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Column Two</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Column Three</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Column Four</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Column Five</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Link Name
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© Your Company 2025 | All rights reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
