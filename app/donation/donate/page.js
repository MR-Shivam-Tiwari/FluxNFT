
function Donate() {
  return (
    <div >
      <div class="bg-white  min-h-screen flex flex-col">
        <main class="flex-1 container mx-auto py-20 px-6 md:px-12">
          <div class="grid  gap-12">
            <div>
              <h1 class="text-4xl font-bold mb-5">
                Donate and Make a Difference
              </h1>
              <p class="text-gray-600  mb-5 text-lg">
                Your donations help us maintain and expand our digital library,
                ensuring that these invaluable resources remain accessible to
                all.
              </p>
              <form class="bg-white  rounded-lg shadow-md p-10 space-y-8">
                <div>
                  <label
                    class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="flex h-10 w-full border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 rounded-md text-lg"
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="flex h-10 w-full border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 p-3 rounded-md text-lg"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg"
                    for="amount"
                  >
                    Donation Amount
                  </label>
                  <div class="flex items-center mt-2">
                    <span class="mr-2 text-lg">$</span>
                    <input
                      class="flex h-10 w-full border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-3 rounded-md text-lg flex-1"
                      id="amount"
                      placeholder="Enter amount"
                      type="number"
                    />
                  </div>
                </div>
                <div>
                  <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg">
                    Payment Method
                  </label>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2">
                    <button class="whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-3 flex items-center justify-center gap-2 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                      Credit Card
                    </button>
                    <button class="whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-3 flex items-center justify-center gap-2 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
                        <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path>
                      </svg>
                      Debit Card
                    </button>
                    <button class="whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-3 flex items-center justify-center gap-2 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <line x1="12" x2="12" y1="2" y2="22"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      UPI
                    </button>
                    <button class="whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-3 flex items-center justify-center gap-2 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                        <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                        <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                        <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                        <path d="M21 21v.01"></path>
                        <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                        <path d="M3 12h.01"></path>
                        <path d="M12 3h.01"></path>
                        <path d="M12 16v.01"></path>
                        <path d="M16 12h1"></path>
                        <path d="M21 12v.01"></path>
                        <path d="M12 21v-1"></path>
                      </svg>
                      QR Code
                    </button>
                  </div>
                </div>
                <button class="inline-flex items-center bg-black text-white justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-full px-6 py-4 text-lg">
                  Donate Now
                </button>
              </form>
            </div>
           
          </div>
         
        </main>
      </div>
    </div>
  );
}

export default Donate;
