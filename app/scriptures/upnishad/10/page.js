import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

function page() {
    const formatDescription = (description) => {
        let formattedDescription = description?.replace(/\n/g, "<br /> <br />");
        formattedDescription = formattedDescription?.replace(
            /'([^']*)'/g,
            "<b>$1</b>"
        );
        return formattedDescription;
    };
    const description = `'The Brihadaranyaka Upanishad', one of the oldest and most extensive Upanishads, is a profound philosophical text belonging to the 'Shukla Yajurveda'. It consists of six chapters, each containing a series of discourses and dialogues that delve into the deepest questions of existence. \n This Upanishad is renowned for its comprehensive exploration of metaphysical concepts, ethical principles, and spiritual practices. It covers a wide range of topics, including the nature of reality, the self (Atman), and the ultimate reality (Brahman). \n 'The Brihadaranyaka Upanishad' contains profound philosophical dialogues between sages and spiritual seekers, including famous conversations such as the one between Yajnavalkya and Maitreyi. These dialogues illuminate the nature of consciousness, the significance of self-inquiry, and the path to spiritual liberation. \n Moreover, this Upanishad also discusses various rituals, sacrifices, and meditative practices aimed at realizing the unity of the individual soul with the supreme reality. It emphasizes the importance of ethical conduct, renunciation, and devotion on the path to self-realization. \n Overall, 'the Brihadaranyaka Upanishad' stands as a seminal text in the Vedantic tradition, offering profound insights into the nature of existence and the means to transcendental realization. It continues to inspire seekers of truth and spiritual aspirants across generations with its timeless wisdom and profound teachings.`;

    const formattedDescription = formatDescription(description);
    return (
        <div className='bg-gray-200 h-full mt-5 lg:mt-0'>
            <div className=" ">
                <Head>
                    <title>Brihadaranyaka Upanishad - Read Online Free | Explore Hindu Scriptures</title>
                    <meta
                        name="description"
                        content="Read the Brihadaranyaka Upanishad online for free. Explore its profound spiritual teachings, metaphysical insights, and the path to self-realization as part of the Shukla Yajurveda."
                    />
                    <meta
                        property="og:title"
                        content="Brihadaranyaka Upanishad - Read Online Free | Explore Hindu Scriptures"
                    />
                    <meta
                        property="og:description"
                        content="Dive into the teachings of the Brihadaranyaka Upanishad, part of the Shukla Yajurveda. Learn about Atman, Brahman, and the path to spiritual liberation."
                    />
                    <meta
                        property="og:image"
                        content="https://yourdomain.com/upnishadimage/brihad.jpg"
                    />
                    <meta
                        property="og:url"
                        content="https://yourdomain.com/scriptures/upnishad/10/brihadaranyaka"
                    />
                    <meta property="og:type" content="article" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Brihadaranyaka Upanishad - Explore the Teachings of the Shukla Yajurveda"
                    />
                    <meta
                        name="twitter:description"
                        content="Discover the timeless wisdom of the Brihadaranyaka Upanishad. Learn about consciousness, self-inquiry, and spiritual liberation."
                    />
                    <meta
                        name="twitter:image"
                        content="https://yourdomain.com/upnishadimage/brihad.jpg"
                    />
                    <link
                        rel="canonical"
                        href="https://yourdomain.com/scriptures/upnishad/10/brihadaranyaka"
                    />
                </Head>

                <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
                    <div className="flex-1 flex justify-center max-w-md">
                        <Image
                            src="/upnishadimage/brihad.jpg"
                            alt="Book Cover"
                            width="300"
                            height="400" priority={true}
                            className=" w-full rounded-lg shadow-lg"
                            style={{ aspectRatio: "400/600", objectFit: "cover", objectPosition: 'top' }}
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-start md:text-left">
                        <div className="flex items-center mb-10 justify-between ">
                            <h1 className="text-3xl  font-bold">Brihadaranyaka Upanishad</h1>

                            <div className="hidden lg:block">
                                <div className="bg-gray-200 w-full p-2 px-5 flex justify-between   ">
                                    {/* <a className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                    <Link shallow href='/scriptures/upnishad/10/brihadaranyaka'>
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
                                    <Link shallow href='/scriptures/upnishad/10/brihadaranyaka'>

                                        <button
                                            className="inline-flex gap-3  items-center w-full bg-orange-500 hover:bg-orange-400 border-orange-500 shadow justify-center whitespace-nowrap text-xl  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
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