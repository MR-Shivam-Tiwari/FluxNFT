import React from 'react'
import dsign from "./Designe.jpeg";
import oim from "./OIM.jpeg";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../Footer';
function about() {
  return (
    <div><div className=" flex justify-center bg-white">
      <div class="flex flex-col min-h-[100dvh]">
        <main class="flex-1">
          <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div class="container px-4 md:px-6">
              <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div class="flex flex-col justify-center space-y-4">
                  <div class="space-y-2">
                    <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Preserving and Promoting Hindu Heritage
                    </h1>
                    <p class="max-w-[600px] text-gray-500 md:text-xl ">
                      Shashtrsangrah is a comprehensive platform dedicated to
                      providing free access to all Hindu scriptures and texts,
                      empowering individuals to explore the rich tapestry of
                      Hindu philosophy and spirituality.
                    </p>
                  </div>
                  <div class="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/scriptures/geeta">
                      <div  class="inline-flex cursor-pointer h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 ">
                        Explore Scriptures
                      </div>
                    </Link>
                    <Link href="/">
                      <div

                        class="inline-flex h-10 items-center justify-center rounded-md border cursor-pointer border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 d"
                      >
                        Learn More
                      </div>
                    </Link>
                  </div>
                </div>
                <Image
                  src={dsign}
                  width="550"
                  height="550"
                  alt="About Us"
                  class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
          <section class="w-full py-12 md:py-24 lg:py-18 bg-gray-100 ">
            <div class="container px-4 md:px-6">
              <div class="flex flex-col items-center justify-center space-y-4 text-center">
                <div class="space-y-2">
                  <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Our Mission and Guiding Principles
                  </h2>
                  <p class=" text-gray-500 text-md   ">
                    At Shashtrsangrah, our mission is to preserve and promote
                    the rich heritage of Hindu philosophy, scriptures, and
                    texts. We believe that these sacred works should be
                    accessible to all, regardless of background or belief
                    system. Our guiding principles are rooted in inclusivity,
                    respect, and a deep reverence for the timeless wisdom
                    contained within these texts. of Hindu philosophy,
                    scriptures, and texts. We believe that these sacred works
                    should be accessible to all, regardless of background or
                    belief system. Our guiding principles are rooted in
                    inclusivity,
                  </p>
                </div>
              </div>
              <div class="mx-auto grid  items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div class="flex flex-col justify-center space-y-4">
                  <ul class="grid gap-6">
                    <li>
                      <div class="grid gap-1">
                        <h3 class="text-xl font-bold">Preserving Heritage</h3>
                        <p class="text-gray-500 ">
                          We are committed to safeguarding the rich tapestry of
                          Hindu scriptures and texts, ensuring their
                          preservation for generations to come.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="grid gap-1">
                        <h3 class="text-xl font-bold">Promoting Knowledge</h3>
                        <p class="text-gray-500 ">
                          Our platform aims to empower individuals to explore
                          and deepen their understanding of Hindu philosophy,
                          spirituality, and traditions.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="grid gap-1">
                        <h3 class="text-xl font-bold">Inclusivity</h3>
                        <p class="text-gray-500 ">
                          We believe that these sacred texts should be
                          accessible to all, regardless of their background or
                          belief system.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Image
                  src={oim}
                  width="550"
                  height="310"
                  alt="Our Mission"
                  class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>
          {/* <section class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6">
          <div class="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div class="space-y-4">
              <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                Our Team
              </div>
              <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Dedicated to Preserving Hindu Heritage
              </h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                The team behind Shashtrsangrah is composed of passionate
                individuals who are deeply committed to preserving and
                promoting the rich tapestry of Hindu philosophy, scriptures,
                and texts. With diverse backgrounds and expertise, we work
                tirelessly to ensure that these sacred works are accessible
                to all.
              </p>
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                Testimonials
              </div>
              <div class="grid gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm ">
                  <p class="text-gray-500 ">
                    "Shashtrsangrah has been a game-changer for me. I've\n
                    been able to deepen my understanding of Hindu\n
                    philosophy and connect with these sacred texts in a
                    way\n I never thought possible. The platform is truly
                    a\n blessing."
                  </p>
                  <div class="mt-4 flex items-center">
                    <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        class="aspect-square h-full w-full"
                        src="/placeholder-user.jpg"
                      />
                    </span>
                    <div class="ml-3">
                      <p class="text-sm font-medium leading-none">
                        Jyoti Desai
                      </p>
                      <p class="text-sm text-gray-500 ">
                        Student
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm ">
                  <p class="text-gray-500 ">
                    "As a lifelong student of Hindu philosophy, I'm\n
                    incredibly grateful for the resources available on\n
                    Shashtrsangrah. The platform has made it so much
                    easier\n for me to access and explore these sacred
                    texts, and\n I've gained invaluable insights that have
                    enriched my\n spiritual journey."
                  </p>
                  <div class="mt-4 flex items-center">
                    <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        class="aspect-square h-full w-full"
                        src="/placeholder-user.jpg"
                      />
                    </span>
                    <div class="ml-3">
                      <p class="text-sm font-medium leading-none">
                        Ravi Kumar
                      </p>
                      <p class="text-sm text-gray-500 ">
                        Scholar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
          <section class="w-full py-12 md:py-24 lg:py-32 border-t">
            <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div class="space-y-3">
                <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Join Us in Preserving Hindu Heritage
                </h2>
                <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Whether you're a scholar, a seeker, or simply someone
                  interested in exploring the rich tapestry of Hindu philosophy,
                  we invite you to join{" "}
                </p>
              </div>
              <div class="mx-auto w-full max-w-sm space-y-2">
                <form class="flex gap-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    class="inline-flex bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    type="submit"
                  >
                    Join Us
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
      <Footer /></div>
  )
}

export default about