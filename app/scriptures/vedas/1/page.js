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
    const description = `'The Rigveda' is one of the most ancient and revered scriptures of Hinduism, written in Vedic Sanskrit. It is a collection of 1,028 hymns (suktas) organized into 10 books (mandalas). The Rigvedas hymns are primarily composed of prayers and praises dedicated to various deities, reflecting different aspects of nature and life. These hymns are not just religious texts but also offer profound insights into the spiritual, philosophical, and cultural life of the Vedic people. \n 'Main Deities Celebrated in the Rigveda:' \n  'Indra:' The god of war and rain, Indra is the most frequently mentioned deity in the Rigveda. He is celebrated for his strength, courage, and victories over demons. Indra is often depicted as a heroic figure who protects humanity and brings rains for agriculture. \n 'Agni:' The god of fire, Agni is central to Vedic rituals and sacrifices. He acts as a mediator between humans and gods, carrying offerings to the divine. Agni is also seen as a purifier and is invoked in domestic and public ceremonies. \n   'Varuna:' The god of water and cosmic order, Varuna upholds the laws of the universe and ensures moral order. He is associated with the night sky and the celestial ocean, symbolizing the moral and natural laws that govern the world.  \n 'Surya:' The sun god, Surya symbolizes light, knowledge, and the dispeller of darkness. Surya is revered as the source of life and energy, and his daily journey across the sky is a recurring theme in the hymns. \n 'Soma:' Both a sacred ritual drink and the deity associated with it, Soma is linked to immortality, inspiration, and divine ecstasy. The Soma rituals are among the most elaborate and significant in the Vedic tradition. \n `;

    const formattedDescription = formatDescription(description);
    return (
        <div className='bg-gray-200 h-full'>
            <div className=" ">
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
                    <div className="flex-1 flex justify-center max-w-md">
                        <Image
                            src="/vedaimage/rigved.jpg"
                            alt="Book Cover"
                            width="300"
                            height="400" priority={true}
                            className=" w-full rounded-lg shadow-lg"
                            style={{ aspectRatio: "400/600", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-start md:text-left">
                        <div className="flex items-center mb-10 justify-between ">
                            <h1 className="text-3xl  font-bold">Rigveda</h1>

                            <div className="hidden lg:block">
                                <div className="bg-gray-200 w-full p-2 px-5 flex justify-between   ">
                                    {/* <a className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                    <Link shallow href='/scriptures/geeta/viewbhagvad/bhagvadgeeta'>
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
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' lg:px-10 px-5 martel-sans-semibold'>
                    <strong>Read the Bhagavad Gita Online in Hindi and English
                    </strong>  <br></br>

                    Welcome to the ultimate resource for reading the Bhagavad Gita online. Whether you’re seeking to explore the teachings of the Gita in Hindi or English, we’ve got you covered. Immerse yourself in the wisdom of the Bhagavad Gita in Hindi with complete shlokas and their meanings. You can also dive deep into the Bhagavad Gita in English for a clear understanding of its profound messages. <br></br>
                    <br></br>
                    <strong className=''> Bhagavad Gita in Hindi - संपूर्ण श्रीमद्भगवद्गीता हिंदी में
                    </strong> <br></br>
                    Experience the divine knowledge with the संपूर्ण श्रीमद्भगवद्गीता हिंदी में. This section provides you with all 700 shlokas in Hindi, including their meanings, allowing you to grasp the essence of Krishna’s teachings. Whether you want to study the Bhagavad Gita shlokas in Hindi or download the Bhagavad Gita PDF in Hindi, you’ll find all resources available here.
                    <br>
                    </br> <br></br>
                    <strong>

                        Bhagavad Gita in English - Comprehensive with Meanings
                    </strong> <br></br>
                    For those who prefer reading in English, the Bhagavad Gita in English is available with detailed explanations. Each verse is presented with its meaning to help you understand the spiritual guidance provided by Lord Krishna to Arjuna.
                    <br></br> <br></br>
                    <strong> Bhagavad Gita PDF Downloads - Hindi, Sanskrit, and English
                    </strong>   <br></br>
                    Looking to download the Bhagavad Gita PDF in Hindi, Sanskrit, or English? We offer free downloads, including the highly revered Bhagavad Gita PDF by Gita Press Gorakhpur. Whether you want the original Sanskrit verses or the translated Hindi version, all formats are available for easy access.
                    <br></br> <br></br>
                    <strong> Explore and Download Bhagavad Gita - All Versions Available
                    </strong> <br></br>
                    Bhagavad Gita PDF in Hindi - For those who want the Hindi text for offline reading.<br></br>
                    Bhagavad Gita PDF in Sanskrit - For those who seek the original scriptural text.<br></br>
                    Bhagavad Gita in English PDF - Perfect for English readers seeking clarity and understanding.<br></br>
                    Bhagavad Gita PDF Free Download - Easily download the Gita in your preferred language.<br></br> <br></br>
                    <strong>    Read the Bhagavad Gita Online Anytime </strong>  <br></br>
                    This page is dedicated to those who wish to read the Bhagavad Gita online in Hindi or English. Whether you’re a student of the Gita, a spiritual seeker, or someone looking for inner peace, you can access the entire text of the Bhagavad Gita online for free. Dive into the spiritual wisdom of the Bhagavad Gita in Hindi, read the shlokas, and understand the profound messages that have guided millions over centuries.
                    <br></br> <br></br> <br></br> <br></br>
                </div>
            </div>
        </div >
    )
}

export default page