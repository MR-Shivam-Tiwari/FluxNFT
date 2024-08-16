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
    const description = `अष्टावक्र गीता, जिसे अष्टावक्र संहिता के नाम से भी जाना जाता है, एक प्राचीन हिंदू शास्त्र है जो अपने गहन आध्यात्मिक और दार्शनिक शिक्षाओं के लिए प्रसिद्ध है। यह अद्वैत वेदांत के सबसे महत्वपूर्ण ग्रंथों में से एक है, जो आत्मा और परम वास्तविकता के स्वभाव के बारे में गहरी अंतर्दृष्टि प्रदान करता है। \n 'अष्टावक्र गीता के केंद्रीय विषय और शिक्षाएं:' \n 'अद्वैतवाद:' अष्टावक्र गीता का मूल अद्वैत (अद्वैतवाद) के दर्शन में निहित है। यह सिखाती है कि व्यक्तिगत आत्मा (आत्मा) और परम वास्तविकता (ब्रह्म) एक ही हैं। यह ग्रंथ सभी अस्तित्व की एकता और भौतिक जगत (माया) की मृगतृष्णा की प्रकृति पर जोर देता है। \n 'आत्म-साक्षात्कार:' अष्टावक्र गीता के केंद्र में आत्म-साक्षात्कार का महत्व है, जो किसी की सच्ची प्रकृति को शुद्ध चेतना के रूप में पहचानने का प्रयास करता है। यह साधक को अहंकार और शरीर और मन की पहचान से परे जाने के लिए प्रेरित करता है, ताकि वह शाश्वत, अचल आत्मा का अनुभव कर सके।\n 'वैराग्य:' यह शास्त्र संसारिक इच्छाओं, आसक्तियों और कर्मों से पूर्ण वैराग्य का समर्थन करता है। यह सिखाता है कि मोक्ष (मुक्ति) का प्राप्ति निर्लिप्तता और क्षणिक, भौतिक संसार के त्याग के माध्यम से होती है।\n 'ज्ञान और प्रबोधन:' इस ग्रंथ का मुख्य कथा अष्टावक्र ऋषि और राजा जनक के बीच संवाद के रूप में प्रस्तुत किया गया है। इस संवाद के माध्यम से, अष्टावक्र आत्मा, वास्तविकता, और मुक्ति के स्वभाव के बारे में गहन ज्ञान और अंतर्दृष्टि प्रदान करते हैं। ये शिक्षाएं सीधे और बिना किसी समझौते के होती हैं, जो सुनने वाले को अद्वैत चेतना के सत्य के प्रति जागरूक करने के लिए बनाई गई हैं।\n 'सरलता और स्पष्टता:' अन्य कई आध्यात्मिक ग्रंथों के विपरीत, अष्टावक्र गीता अपनी सरलता और स्पष्टता के लिए जानी जाती है। यह अपनी शिक्षाओं को सीधी तरीके से प्रस्तुत करती है, जिसमें जटिल अनुष्ठान और विस्तृत रूपकों का अभाव होता है, जिससे यह उन लोगों के लिए सुलभ हो जाती है जो शुद्ध, बिना मिलावट का ज्ञान प्राप्त करना चाहते हैं।\n अष्टावक्र गीता, अपनी कालातीत ज्ञान और सार्वभौमिक अपील के साथ, आध्यात्मिक पथ पर चलने वालों के लिए एक प्रकाश स्तंभ बनी रहती है, जो उन्हें उनकी सच्ची प्रकृति की प्राप्ति और शाश्वत शांति और स्वतंत्रता की प्राप्ति की दिशा में मार्गदर्शन करती है।\n`;

    const formattedDescription = formatDescription(description);
    return (
        <div className='bg-gray-200 h-full'>
            <div className=" ">
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
                    <div className="flex-1 flex justify-center max-w-md">
                        <img
                            src="https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg"
                            alt="Book Cover"
                            width="300"
                            height="400"
                            className=" w-full rounded-lg shadow-lg"
                            style={{ aspectRatio: "400/600", objectFit: "cover" }}
                        />
                    </div>
                    <div class="flex-1 space-y-4 text-start md:text-left">
                        <div className="flex items-center mb-10 justify-between ">
                            <h1 class="text-3xl  font-bold">Astavakra Geeta Hindi</h1>

                            <div className="hidden lg:block">
                                <div class="bg-gray-200 w-full p-2 px-5 flex justify-between   ">
                                    {/* <a class="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                    <Link href='/scriptures/geeta/viewbhagvad/bhagvadgeeta'>
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
                            <div class="bg-gray-200 w-full border   p-2 px-5 lg:px-20 flex justify-between fixed bottom-0 left-0">
                                {/* <a class="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
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