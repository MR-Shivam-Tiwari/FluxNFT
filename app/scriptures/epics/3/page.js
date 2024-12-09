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
    const description = `'रामचरितमानस', गोस्वामी तुलसीदास द्वारा रचित एक महाकाव्य, भारतीय साहित्य का एक अनमोल रत्न है। यह महाकाव्य भगवान श्रीराम के जीवन और उनके आदर्शों की गाथा है, जो हमें धर्म, मर्यादा, और नैतिकता के महत्व को सिखाती है। तुलसीदास ने इस महाकाव्य को अवधी भाषा में लिखा, जिससे यह जन-जन तक पहुंचा और हिंदू धर्म की सांस्कृतिक धरोहर का अभिन्न अंग बन गया। \n 'पृष्ठभूमि:' रामचरितमानस की रचना 16वीं शताब्दी में हुई थी। यह महाकाव्य रामायण पर आधारित है, जिसे महर्षि वाल्मीकि ने संस्कृत में लिखा था। तुलसीदास ने इसे लोकभाषा में लिखकर भगवान राम की कथा को सामान्य जन के लिए सुलभ बनाया। यह कथा अयोध्या के राजा दशरथ के पुत्र राम के जीवन की महागाथा है, जिसमें उनके वनवास, सीता का हरण, और रावण के साथ युद्ध शामिल है। \n 'संरचना:' रामचरितमानस को सात कांडों में विभाजित किया गया है, जो भगवान राम के जीवन के विभिन्न चरणों का वर्णन करते हैं: \n 'बालकाण्ड:' राम के जन्म, उनका बाल्यकाल, और जनकपुर में माता सीता के साथ विवाह की कथा। इस कांड में राम, लक्ष्मण, भरत, और शत्रुघ्न के बचपन के आदर्श प्रस्तुत किए गए हैं। \n 'अयोध्याकाण्ड:' राम के राज्याभिषेक की तैयारी, कैकेयी द्वारा वनवास की माँग, और राम, सीता, और लक्ष्मण का वन गमन। यह कांड राजा दशरथ की मृत्यु और भरत की अयोध्या वापसी की घटनाओं का भी वर्णन करता है। \n 'अरण्यकाण्ड:' राम, सीता, और लक्ष्मण के वनवास का वर्णन। इस कांड में शूर्पणखा की घटना, सीता का हरण, और जटायु के साथ राम का मिलन शामिल है। \n 'किष्किंधाकाण्ड:' हनुमान और सुग्रीव से राम का मिलन, बालि वध, और सीता की खोज के लिए वानरों की सेना का संगठन। यह कांड हनुमान की लंका यात्रा का प्रारंभ है। \n 'सुंदरकांड:' हनुमान की लंका यात्रा, सीता का पता लगाना, और लंका में हनुमान के अद्भुत पराक्रम का वर्णन। यह कांड हनुमान की वीरता और भक्ति का उदाहरण प्रस्तुत करता है। \n 'लंकाकाण्ड:' राम और रावण के बीच महान युद्ध, रावण वध, और सीता की मुक्ति। इस कांड में विभीषण की सहायता और लंका विजय का वर्णन है। \n 'उत्तरकाण्ड:' राम की अयोध्या वापसी, राज्याभिषेक, और रामराज्य की स्थापना। इस कांड में सीता की अग्नि परीक्षा, लव-कुश की कथा, और तुलसीदास की भक्ति का वर्णन है। \n `;

    const formattedDescription = formatDescription(description);
    return (
        <div className='bg-gray-200 h-full mt-5 lg:mt-0'>
            <div className=" ">
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
                    <div className="flex-1 flex justify-center max-w-md">
                        <Image
                            src="/epicimage/ramcharit.jpg"
                            alt="Book Cover"
                            width="300"
                            height="400" priority={true}
                            className=" w-full rounded-lg shadow-lg"
                            style={{ aspectRatio: "400/600", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-start md:text-left">
                        <div className="flex items-center mb-10 justify-between ">
                            <h1 className="text-3xl  font-bold">Ramcharitmanas</h1>

                            <div className="hidden lg:block">
                                <div className="bg-gray-200 w-full p-2 px-5 flex justify-between   ">
                                    {/* <a className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"  >
              Purchase
            </a> */}
                                    <Link href='/scriptures/epics/3/ramcharitmanas' shallow>
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
                                    <Link className="w-full" href='/scriptures/epics/3/ramcharitmanas' shallow>
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
                {/* <div className=' lg:px-10 px-5 martel-sans-semibold'>
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
                </div> */}
            </div>
        </div >
    )
}

export default page