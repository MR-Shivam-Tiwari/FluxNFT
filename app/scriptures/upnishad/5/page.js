import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function page() {
    const formatDescription = (description) => {
        let formattedDescription = description?.replace(/\n/g, "<br /> <br />");
        formattedDescription = formattedDescription?.replace(
            /'([^']*)'/g,
            "<b>$1</b>"
        );
        return formattedDescription;
    };
    const description = `'The Mundaka Upanishad', found within the general Brahmana texts of the 'Atharvaveda', articulates various spiritual and Vedantic principles. It attempts to illuminate the path of spiritual realization, which is directed towards the attainment of liberation (moksha). \n One of the primary subjects addressed in the Mundaka Upanishad is the distinction between Vidya (knowledge) and Avidya (ignorance). Here, Vidya refers to spiritual knowledge, the truth of the self, and the experience of the ultimate reality (paramaatma), while Avidya represents ignorance or the lack of spiritual understanding. \n 'The Upanishad' elucidates the importance of acquiring Vidya, which leads to the realization of the true self and liberation from the cycle of birth and death. It emphasizes the significance of seeking guidance from a qualified spiritual teacher (guru) and engaging in practices such as meditation, self-inquiry, and contemplation to attain spiritual wisdom.`;

    const formattedDescription = formatDescription(description);
    return (
        <div className='bg-gray-200 h-full mt-5 lg:mt-0'>
            <div className=" ">
                <Head>
                    <title>Mundaka Upanishad - Explore Vedantic Teachings on Knowledge and Liberation</title>
                    <meta
                        name="description"
                        content="Read online the Mundaka Upanishad, a text from the Atharvaveda that explores Vedantic teachings on spiritual knowledge, Vidya, Avidya, and the path to moksha. Download the PDF for free."
                    />
                    <meta
                        name="keywords"
                        content="Mundaka Upanishad, Vedantic teachings, spiritual knowledge, Vidya, Avidya, moksha, liberation, Read Online, Download PDF, Upanishads, Brahman, spiritual realization, self-realization"
                    />
                    <meta name="author" content="Shastra Sangrah" />
                    <link rel="canonical" href="https://shashtrsangrah.com/scriptures/upnishad/5/mundako" />

                    {/* Open Graph / Facebook */}
                    <meta
                        property="og:title"
                        content="Mundaka Upanishad - Explore Vedantic Teachings on Knowledge and Liberation"
                    />
                    <meta
                        property="og:description"
                        content="Read online the Mundaka Upanishad and explore its profound spiritual knowledge, emphasizing the importance of Vidya and Avidya in the journey to liberation. Download the PDF for free."
                    />
                    <meta property="og:image" content="/upnishadimage/mundaka.jpg" />
                    <meta property="og:url" content="https://shashtrsangrah.com/scriptures/upnishad/5/mundako" />
                    <meta property="og:type" content="article" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Mundaka Upanishad - Explore Vedantic Teachings on Knowledge and Liberation" />
                    <meta
                        name="twitter:description"
                        content="Explore the spiritual wisdom of the Mundaka Upanishad online. Read or download the PDF and dive into its teachings on Vidya, Avidya, and moksha."
                    />
                    <meta name="twitter:image" content="/upnishadimage/mundaka.jpg" />
                    <meta name="twitter:creator" content="@shashtrsangrah" />

                    {/* Structured Data (Schema.org) */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Book",
                                "name": "Mundaka Upanishad",
                                "description":
                                    "The Mundaka Upanishad addresses the importance of Vidya and Avidya, guiding individuals towards liberation and spiritual realization.",
                                "author": "Unknown",
                                "inLanguage": "Sanskrit",
                                "image": "https://shashtrsangrah.com/upnishadimage/mundaka.jpg",
                                "url": "https://shashtrsangrah.com/scriptures/upnishad/5/mundako",
                                "keywords": "Mundaka Upanishad, Read Online, Download PDF, spiritual wisdom, Vidya, Avidya, moksha",
                            }),
                        }}
                    />
                </Head>
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
                    <div className="flex-1 flex justify-center max-w-md">
                        <Image
                            src="/upnishadimage/mundaka.jpg"
                            alt="Book Cover"
                            width="300" priority={true}
                            height="400"
                            className=" w-full rounded-lg shadow-lg"
                            style={{ aspectRatio: "400/600", objectFit: "cover", objectPosition: 'top' }}
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-start md:text-left">
                        <div className="flex items-center mb-10 justify-between ">
                            <h1 className="text-3xl  font-bold">Mundaka Upanishad</h1>

                            <div className="hidden lg:block">
                                <div className="bg-gray-200 w-full p-2 px-5 flex justify-between   ">
                                    {/* <a className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                    <Link shallow href='/scriptures/upnishad/5/mundako'>
                                        <button
                                            className="inline-flex gap-3  items-center w-[300px] bg-orange-500 hover:bg-orange-400 border-orange-300 shadow justify-center whitespace-nowrap text-xl  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
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
                        </div>
                        <div>
                            <p
                                className="text-gray-700 martel-sans-semibold text-lg mb-20"
                                dangerouslySetInnerHTML={{ __html: formattedDescription }}
                            />       </div>

                        <div className="lg:hidden">
                            <div className="bg-gray-200 w-full border   p-2 px-5 lg:px-20 flex justify-between fixed bottom-0 left-0">
                                {/* <a className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                <div className="w-full">
                                    <Link className="w-full" href='/scriptures/upnishad/5/mundako' shallow>
                                        <button
                                            className="inline-flex gap-3 items-center w-full bg-orange-500 hover:bg-orange-400 border-orange-500 shadow justify-center whitespace-nowrap text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
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
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default page