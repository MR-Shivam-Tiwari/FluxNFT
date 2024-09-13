import React from 'react'
import NotAvailble from '../NotAvailble'

function page() {
    return (
        <div>
            <div class="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 bg-orange-100 lg:px-8">
                <div class="mx-auto max-w-md text-center">
                    <div class="animate-fade-in">
                        <div className='flex justify-center'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>
                        </div>
                        <div className='flex justify-center'>

                            <h1 class="mt-5 text-3xl text-center font-bold tracking-tight text-foreground text-nowrap sm:text-4xl">Discussion Not Available</h1>
                        </div>
                        <div className='flex justify-center'>

                            <p class="mt-8 text-muted-foreground">
                                This Tool is currently unavailable. But don't worry, it's<span class="font-semibold"> coming soon!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page