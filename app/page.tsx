import Link from "next/link"
import { ArrowRight, Calendar, Heart, Mail, MapPin, Phone, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-600" fill="#dc2626" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
              NonProfit Name
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="#event" className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors">
              Event
            </Link>
            <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#register" className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors">
              Register
            </Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 shadow-md hover:shadow-lg transition-all duration-200">
            Register Now
          </Button>
          <Button variant="outline" size="icon" className="md:hidden border-zinc-700 text-zinc-400">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1 text-zinc-200">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-green-600 rounded-full shadow-md animate-pulse">
                  Upcoming Event
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                  Join Our Community Event
                </h1>
                <p className="text-zinc-400 md:text-xl">
                  An inspiring gathering to connect, learn, and make a difference in our community.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-700 text-red-500 hover:bg-red-950 transition-all duration-200 transform hover:-translate-y-1"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-green-600 rounded-xl blur-md opacity-75"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Event Image"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="event" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-green-900 to-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-green-600 px-3 py-1 text-sm text-white shadow-md">
                  Event Details
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                  Community Gathering 2023
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for a day of inspiration, connection, and community building.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-0 border-zinc-800 bg-zinc-950 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-2 bg-gradient-to-r from-red-500 to-red-700"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-red-950 text-red-500 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-red-500">Date & Time</h3>
                  <div className="space-y-1 text-zinc-400">
                    <p>Saturday, December 15, 2023</p>
                    <p>10:00 AM - 4:00 PM</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 border-zinc-800 bg-zinc-950 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-green-950 text-green-500 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-green-500">Location</h3>
                  <div className="space-y-1 text-zinc-400">
                    <p>Community Center</p>
                    <p>123 Main Street</p>
                    <p>City, State 12345</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1 overflow-hidden border-0 border-zinc-800 bg-zinc-950 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-2 bg-gradient-to-r from-red-500 to-green-700"></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-gradient-to-r from-red-950 to-green-950 text-red-500 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                    Attendance
                  </h3>
                  <div className="space-y-1 text-zinc-400">
                    <p>Limited to 200 attendees</p>
                    <p>Registration required</p>
                    <p>Free admission</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <Card className="overflow-hidden border-0 border-zinc-800 bg-zinc-950 shadow-lg">
                <div className="h-2 bg-gradient-to-r from-red-500 to-green-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                    Event Schedule
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg border border-red-900 bg-red-950/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <span className="font-semibold text-red-400">10:00 AM - 11:00 AM</span>
                      </div>
                      <h4 className="font-bold text-zinc-200 mb-1">Welcome & Introduction</h4>
                      <p className="text-zinc-400 text-sm">
                        Opening remarks and introduction to our organization's mission and goals.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-green-900 bg-green-950/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-green-400">11:00 AM - 12:30 PM</span>
                      </div>
                      <h4 className="font-bold text-zinc-200 mb-1">Keynote Speaker</h4>
                      <p className="text-zinc-400 text-sm">
                        An inspiring talk about community engagement and making a difference.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-green-900 bg-green-950/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-green-400">12:30 PM - 1:30 PM</span>
                      </div>
                      <h4 className="font-bold text-zinc-200 mb-1">Lunch & Networking</h4>
                      <p className="text-zinc-400 text-sm">
                        Enjoy a complimentary lunch while connecting with other attendees.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-red-900 bg-red-950/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <span className="font-semibold text-red-400">1:30 PM - 3:00 PM</span>
                      </div>
                      <h4 className="font-bold text-zinc-200 mb-1">Interactive Workshops</h4>
                      <p className="text-zinc-400 text-sm">
                        Participate in hands-on workshops focused on community building and collaboration.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-red-900 bg-red-950/30 hover:shadow-md transition-all duration-300 md:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <span className="font-semibold text-red-400">3:00 PM - 4:00 PM</span>
                      </div>
                      <h4 className="font-bold text-zinc-200 mb-1">Closing Ceremony & Next Steps</h4>
                      <p className="text-zinc-400 text-sm">
                        Wrap-up discussion, Q&A session, and information about future events and opportunities to get
                        involved.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-green-900 to-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-green-600 px-3 py-1 text-sm text-white shadow-md">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                  Who We Are
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about our organization and the impact we're making in the community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-green-600 rounded-xl blur-md opacity-75"></div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="About Us Image"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="transform transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1 p-4 rounded-lg border border-red-900 bg-zinc-950 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="text-xl font-bold text-red-500">Our Mission</h3>
                      <p className="text-zinc-400">
                        We're dedicated to creating positive change through compassion, action, and community
                        engagement.
                      </p>
                    </div>
                  </li>
                  <li className="transform transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1 p-4 rounded-lg border border-green-900 bg-zinc-950 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="text-xl font-bold text-green-500">Our Vision</h3>
                      <p className="text-zinc-400">
                        We envision a community where everyone has access to the resources they need to thrive.
                      </p>
                    </div>
                  </li>
                  <li className="transform transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1 p-4 rounded-lg border border-red-900 bg-zinc-950 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="text-xl font-bold text-red-500">Our Impact</h3>
                      <p className="text-zinc-400">
                        We've helped thousands of individuals and families through our programs and initiatives.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-green-900 to-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-green-600 px-3 py-1 text-sm text-white shadow-md">
                  Register Now
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                  Secure Your Spot
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below to register for our upcoming event. Space is limited, so register early!
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Card className="overflow-hidden border-0 border-zinc-800 bg-zinc-950 shadow-xl">
                <div className="h-2 bg-gradient-to-r from-red-500 to-green-700"></div>
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-zinc-400">
                          First Name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-zinc-400">
                          Last Name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-400">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-zinc-400">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-zinc-400">
                        Organization (Optional)
                      </Label>
                      <Input
                        id="organization"
                        placeholder="Enter your organization name"
                        className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workshop" className="text-zinc-400">
                        Preferred Workshop
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="workshop"
                          className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                        >
                          <SelectValue placeholder="Select a workshop" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                          <SelectItem value="workshop-1">Community Building Strategies</SelectItem>
                          <SelectItem value="workshop-2">Sustainable Initiatives</SelectItem>
                          <SelectItem value="workshop-3">Volunteer Management</SelectItem>
                          <SelectItem value="workshop-4">Fundraising Techniques</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dietary" className="text-zinc-400">
                        Dietary Restrictions
                      </Label>
                      <Textarea
                        id="dietary"
                        placeholder="Please list any dietary restrictions or preferences"
                        className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="questions" className="text-zinc-400">
                        Questions or Comments
                      </Label>
                      <Textarea
                        id="questions"
                        placeholder="Any questions or comments for the organizers?"
                        className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-500"
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-zinc-400">
                        I agree to the{" "}
                        <Link href="#" className="text-red-500 hover:underline">
                          terms and conditions
                        </Link>
                      </Label>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                      Register for Event
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-red-900 to-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-green-600 px-3 py-1 text-sm text-white shadow-md">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about the event? We'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4 p-6 rounded-xl bg-zinc-950 border border-zinc-800 shadow-xl">
                <div className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-1">
                  <div className="rounded-full p-2 bg-red-950 text-red-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-zinc-400">123 Main Street, City, State 12345</p>
                </div>
                <div className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-1">
                  <div className="rounded-full p-2 bg-green-950 text-green-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <p className="text-zinc-400">(123) 456-7890</p>
                </div>
                <div className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-1">
                  <div className="rounded-full p-2 bg-red-950 text-red-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <p className="text-zinc-400">events@yournonprofit.org</p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-red-900 text-red-500 hover:bg-red-950 hover:border-red-700 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-green-900 text-green-500 hover:bg-green-950 hover:border-green-700 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-red-900 text-red-500 hover:bg-red-950 hover:border-red-700 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-zinc-950 border border-zinc-800 shadow-xl">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-zinc-400">
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-zinc-400">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-zinc-400">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Your message"
                    className="min-h-[120px] bg-zinc-900 border-zinc-800 text-zinc-200 focus-visible:ring-red-500"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-zinc-800 py-6 md:py-0 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-zinc-400 md:text-left">
            © 2023{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500">
              NonProfit Name
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <Link href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-green-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

