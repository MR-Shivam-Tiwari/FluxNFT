import React from 'react'

function NotAvailble() {
    return (
        <div><div class="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 bg-orange-100 lg:px-8">
            <div class="mx-auto max-w-md text-center">
                <div class="animate-fade-in">
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
                        class="mx-auto h-12 w-12 text-primary"
                    >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Book Not Available</h1>
                    <p class="mt-4 text-muted-foreground">
                    This book is currently unavailable. But don&apos;t worry, it&apos;s<span class="font-semibold"> coming soon!</span>
                    </p>
                </div>
                <div class="mt-6 animate-slide-in"></div>
            </div>
        </div></div>
    )
}

export default NotAvailble