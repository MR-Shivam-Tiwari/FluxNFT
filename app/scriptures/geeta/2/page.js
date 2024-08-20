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
    const description = `अनुगीता, जो महाभारत का एक महत्वपूर्ण हिस्सा है, भगवद गीता के बाद आता है और इसमें अर्जुन और भगवान श्रीकृष्ण के बीच संवाद होता है। यह ग्रंथ भी दार्शनिक और आध्यात्मिक शिक्षाओं का संग्रह है, जो भगवद गीता की शिक्षाओं को विस्तार और गहराई प्रदान करता है। \n 'अनुगीता के मुख्य विषय और शिक्षाएं:' \n 'धर्म:' अनुगीता धर्म की गहरी और विस्तृत व्याख्या करती है। इसमें जीवन के कर्तव्यों और नैतिकता पर बल दिया गया है, जिसमें निःस्वार्थ कर्म (कर्मयोग), भक्ति (भक्तियोग), और ज्ञान (ज्ञानयोग) के माध्यम से आत्मा के उद्धार का महत्व बताया गया है।\n 'आत्मा:'अनुगीता आत्मा के स्वरूप और उसकी अनंतता को प्रमुखता से उजागर करती है। इसमें आत्मा के जन्म और मृत्यु से परे होने और आत्मज्ञान के माध्यम से मोक्ष प्राप्ति की बात कही गई है। आत्मा और परमात्मा के संबंध को भी विस्तार से समझाया गया है।\n 'कृष्ण की शिक्षाएं:' अनुगीता में भगवान कृष्ण ने अर्जुन के साथ हुई संवाद में धर्म, कर्तव्य, और जीवन के विभिन्न पहलुओं पर गहन विचार प्रस्तुत किए हैं। इसमें भगवद गीता की शिक्षाओं को आगे बढ़ाते हुए और भी गहरी और विशद शिक्षाएं दी गई हैं।\n 'अध्यात्मिक मार्गदर्शन:' अनुगीता का संदेश धार्मिक, आध्यात्मिक और मानवतावादी है। यह सभी धर्मों, सम्प्रदायों और विचारधाराओं के लोगों को प्रेरित करता है। इसकी शिक्षाएं आत्म-जागरूकता, धर्म, और भक्ति के माध्यम से जीवन में संतुलन और शांति प्राप्त करने के लिए मार्गदर्शन प्रदान करती हैं।\n 'विश्वव्यापी संदेश:' अनुगीता का संदेश सभी मानवता के लिए है। यह न केवल धार्मिक और आध्यात्मिक विकास की बात करता है, बल्कि व्यक्ति के भीतर आत्मिक शक्ति और संतुलन को बढ़ावा देने के लिए भी प्रेरित करता है। इसकी शिक्षाएं हर व्यक्ति के जीवन में सकारात्मक परिवर्तन लाने की क्षमता रखती हैं।\n इस प्रकार, अनुगीता भी भगवद गीता की तरह ही एक महत्वपूर्ण दार्शनिक और आध्यात्मिक ग्रंथ है, जो जीवन के विभिन्न पहलुओं पर गहन मार्गदर्शन प्रदान करता है।`;

    const formattedDescription = formatDescription(description);
    return (
        <div className='bg-gray-200 h-full'>
            <div className=" ">
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
                    <div className="flex-1 flex justify-center max-w-md">
                        <Image
                            src="/geetaimage/anuhin.png"
                            alt="Book Cover"
                            width="300" priority={true}
                            height="400"
                            className=" w-full rounded-lg shadow-lg"
                            style={{ aspectRatio: "400/600", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-start md:text-left">
                        <div className="flex items-center mb-10 justify-between ">
                            <h1 className="text-3xl  font-bold">Anu Gita Hindi</h1>

                            <div className="hidden lg:block">
                                <div className="bg-gray-200 w-full p-2 px-5 flex justify-between   ">
                                    {/* <a className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                    <Link href='/scriptures/geeta/2/anugeeta' shallow>
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