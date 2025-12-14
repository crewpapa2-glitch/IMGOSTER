import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Sparkles, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-serif text-2xl italic">Zara</span>
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-sm hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm hover:text-primary transition-colors">
                Game
              </a>
              <a href="#" className="text-sm hover:text-primary transition-colors">
                Impact
              </a>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Download Game
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

            {/* Hero Illustration */}
            <div className="relative mt-12">
              <img
                src="/images/image.png"
                alt="Two people having a conversation - one in a yellow shirt and one in an orange polka dot dress, with plants around them"
                className="w-full max-w-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container mx-auto px-4 py-16">
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
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">Features</h2>

        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Feature 1 - AI That Listens */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-balance">An AI That Listens</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chat with an AI specifically designed and structured from us to feel like. It wasn't trained. Everyone
                feels what they do. We're not here to pretend we can fix it. We're here to guide you genuinely and
                purposefully.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Feels natural, not pre-set.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Not a bot impersonating a human.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">It's not info dumped, so you'll never see a list.</span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <img src="/images/3.jpeg" alt="Person interacting with AI interface" className="w-full rounded-2xl" />
            </div>
          </div>

          {/* Feature 2 - A Game That Grows */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/4.jpeg"
                alt="Person working on a laptop with creative graphics"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-balance">A Game That Grows With You</h3>
              <p className="text-muted-foreground leading-relaxed">
                Try games world-designed based on your emotional journey. As you play, your environment within evolves.
                What's important is that you feel good. With Zara not only is your process in this journal of a game.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">World changes based on how you're actively feeling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Create a level at any point out of your entries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">Builds a visible enrichment, clerical yet real and gritty.</span>
                </li>
              </ul>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn more</Button>
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
                <div className="inline-block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  TAGLINE
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
                        Our platform platform aims to collaborate to help you grow and get where you are, with the
                        various steps, values, or makes that..
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">It's Learns Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        As simply as "hey" you'll be able to get started, and it's pretty straight forward. Simply
                        answer the prompts you're prompted before being directed.
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
                        The game is a journey of yours and is not one that will just pretend. Your game having that
                        option brings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-sm font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">A Personal Roadmap</h4>
                      <p className="text-sm text-muted-foreground">
                        Most important is what you say. Here, what you say matters, and remember that we're here to help
                        you with something meaningful which just isn't.
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
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
      <footer className="border-t py-12">
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
