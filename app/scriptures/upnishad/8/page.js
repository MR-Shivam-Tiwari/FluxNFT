import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Page() {
    const formatDescription = (description) => {
        let formattedDescription = description?.replace(/\n/g, "<br /> <br />");
        formattedDescription = formattedDescription?.replace(
            /'([^']*)'/g,
            "<b>$1</b>"
        );
        return formattedDescription;
    };

    const description = `'The Aitareya Upanishad' is one of the principal Upanishads belonging to the 'Rigveda'. It is divided into three chapters, each known as 'Khanda,' and is renowned for its profound philosophical insights and spiritual teachings.\n In the first chapter, 'the Aitareya Upanishad' expounds upon the creation of the universe and the nature of the ultimate reality, Brahman. It describes the process of creation as emanating from Brahman, with the universe manifesting in various forms. \n The second chapter delves into the nature of the individual self (Atman) and its relationship with Brahman. It elucidates the concept of the self as identical with the ultimate reality, emphasizing the unity of all existence. \n The third chapter discusses the nature of consciousness and the journey of the soul through different states of existence, including waking, dreaming, and deep sleep. It highlights the eternal nature of the self and its transcendence beyond the cycle of birth and death. \n Overall, 'the Aitareya Upanishad' provides profound insights into the nature of reality, the self, and the ultimate truth, serving as a foundational text in the study of Vedanta and Hindu philosophy.`;

    const formattedDescription = formatDescription(description);

    return (
        <div className='bg-gray-200 h-full mt-5 lg:mt-0'>
            {/* SEO Meta Tags */}
            <Head>
                <title>Aitareya Upanishad - Explore Rigveda Scriptures</title>
                <meta
                    name="description"
                    content="Dive into the profound teachings of the Aitareya Upanishad, a principal text of the Rigveda, exploring creation, self, and ultimate reality."
                />
                <meta
                    name="keywords"
                    content="Aitareya Upanishad, Rigveda, Upanishads, Hindu philosophy, Vedanta, spiritual teachings"
                />
                <meta name="author" content="Shashtrsangrah" />
                <link rel="canonical" href="https://shashtrsangrah.com/scriptures/upnishad/8/aitareya" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Aitareya Upanishad - Rigveda Teachings" />
                <meta
                    property="og:description"
                    content="Discover the timeless wisdom of the Aitareya Upanishad, exploring creation, self, and the ultimate truth."
                />
                <meta property="og:image" content="/upnishadimage/aitareya.jpg" />
                <meta property="og:url" content="https://shashtrsangrah.com/scriptures/upnishad/8/aitareya" />
                <meta property="og:type" content="article" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aitareya Upanishad - Explore Rigveda Scriptures" />
                <meta
                    name="twitter:description"
                    content="Understand the philosophical and spiritual teachings of the Aitareya Upanishad from the Rigveda."
                />
                <meta name="twitter:image" content="/upnishadimage/aitareya.jpg" />
                <meta name="twitter:creator" content="@shashtrsangrah" />

                {/* Structured Data (Schema.org) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Book",
                            "name": "Aitareya Upanishad",
                            "description":
                                "The Aitareya Upanishad is one of the principal Upanishads of the Rigveda, focusing on creation, self, and ultimate reality.",
                            "author": "Unknown",
                            "inLanguage": "Sanskrit",
                            "image": "https://shashtrsangrah.com/upnishadimage/aitareya.jpg",
                            "url": "https://shashtrsangrah.com/scriptures/upnishad/8/aitareya",
                        }),
                    }}
                />
            </Head>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200">
                <div className="flex-1 flex justify-center max-w-md">
                    <Image
                        src="/upnishadimage/aitareya.jpg"
                        alt="Aitareya Upanishad Book Cover"
                        width="300"
                        priority={true}
                        height="400"
                        className="w-full rounded-lg shadow-lg"
                        style={{ aspectRatio: "400/600", objectFit: "cover", objectPosition: 'top' }}
                    />
                </div>
                <div className="flex-1 space-y-4 text-start md:text-left">
                    <div className="flex items-center mb-10 justify-between">
                        <h1 className="text-3xl font-bold">Aitareya Upanishad</h1>
                        <div className="hidden lg:block">
                            <Link shallow href='/scriptures/upnishad/8/aitareya'>
                                <button
                                    className="inline-flex gap-3 items-center w-[300px] bg-orange-500 hover:bg-orange-400 shadow justify-center whitespace-nowrap text-xl font-medium h-11 rounded-md px-8"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        className="bi bi-book mt-1"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                    </svg>
                                    Read Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p
                            className="text-gray-700 martel-sans-semibold text-lg mb-20"
                            dangerouslySetInnerHTML={{ __html: formattedDescription }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
