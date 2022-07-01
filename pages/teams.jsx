import React from 'react'
import Image from 'next/image'
import person1 from '../static/person1.png'
import person2 from '../static/person2.jpg'
import person3 from '../static/person3.webp'
import person4 from '../static/person4.jpg'
import person5 from '../static/person5.webp'
import person6 from '../static/person6.webp'
import person7 from '../static/person7.webp'
import person8 from '../static/person8.webp'
import person9 from '../static/person9.jpg'
import person10 from '../static/person10.jpg'

const teams = () => {
    return (
        <>
            <div className="masterContainer p-10 md:p-0">
                <div className="header text-center mb-32">
                    <div className="team text-xl font-light">Our Team</div>
                    <div className="meet text-5xl font-medium">Meet Our Amazing Team</div>
                </div>


                <div className="font-Roboto mb-28 row flex justify-center md:flex-col">
                    <div className="flex card  items-center  xl:flex-col md:mb-28">
                        <div className="w-64 h-64 relative p-1 fteamImage bg-blue rounded-full">
                            <div className="w-60 absolute top-8 left-1">
                                <Image alt="pic" className="object-cover w-full h-full" src={person1} />
                            </div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">CO-FOUNDER and CTO</div>
                            <div className="teamname my-4 text-4xl font-medium">Rajiv Saleem</div>
                            <div className="aboutteampara text-lg font-light">After graduating from IIT Kharagpur in Bachelors & Masters in Computer Science and Engineering, he worked at Samsung as an Android Developer. His curiosity for web technologies made him join a startup in Delhi as CTO. Later he co-founded Betalectic to start on his own. Rajiv is very passionate about learning new technologies and implementing vivid solutions.</div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64 relative p-1 fteamImage bg-blue rounded-full">
                            <div className="w-60 absolute top-8 left-1">
                                <Image alt="pic" className="object-cover w-full h-full" src={person2} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">CO-FOUNDER & CEO</div>
                            <div className="teamname my-4 text-4xl font-medium">Manasa Madapu </div>
                            <div className="aboutteampara text-lg font-light">Manasa is the shape shifter. A young entrepreneur with a vision to develop Tech centric solutions for budding enterprises. Dynamic, committed to service excellence and developing qualitative IT products. With a background of Civil engineering and Masters in Finance Management, Manasa envisions to bring variety of talent in serving customers from Diverse industries. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                </div>
                <div className="font-Roboto mb-28 row flex justify-center md:flex-col">
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person3} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">SOFTWARE ENGINEER</div>
                            <div className="teamname my-4 text-4xl font-medium"> Pramodh Mahajan</div>
                            <div className="aboutteampara text-lg font-light">Pramodh got into programming after completion of Bachelors in Electronics. An enthusiastic web and mobile developer. His thoughts are aligned to user perspective manner and has the ability to adapt new technologies and environments. He has been a reliable, hard working & flexible team member. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person4} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">BUSINESS ANALYST</div>
                            <div className="teamname my-4 text-4xl font-medium"> Srilekha Munnelli</div>
                            <div className="aboutteampara text-lg font-light"> Srilekha is a real peoples person. Her experience of working in social sector prior to joining betalectic gives her an advantage to seamlessly act as a bridge between the Client and the Tech team. Her enthusiasm and cheerful nature keeps the team on full of beans.</div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                </div>
                <div className="font-Roboto mb-28 row flex justify-center md:flex-col">
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person5} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">SOFTWARE ENGINEER</div>
                            <div className="teamname my-4 text-4xl font-medium">Shubham Joshi </div>
                            <div className="aboutteampara text-lg font-light"> Shubham is the Jack of all trades and Master of some. He indulges himself in every task he takes up and participates at all levels. Loves problem solving. Although majorily being a developer, he also participates in laying out the architecture and processes for the projects.</div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person6} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">SOFTWARE ENGINEER</div>
                            <div className="teamname my-4 text-4xl font-medium"> Venkata Krishna Inti</div>
                            <div className="aboutteampara text-lg font-light">Venkata Krishna is a dark horse who surprises us by delivering any challenging task given to him with same zeal and standard. Although a shy guy, his brain is full of out of the box and insightful ideas. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                </div>
                <div className="font-Roboto mb-28 row flex justify-center md:flex-col">
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person7} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">SOFTWARE ENGINEER</div>
                            <div className="teamname my-4 text-4xl font-medium">Himanshu Dhiman </div>
                            <div className="aboutteampara text-lg font-light">Himanshu has the aptitude required to provide fast solutions. Started with website development, he was able to take up building complex applications with ease. He is a hardcore cricket enthusiast and a reliable teammate you can have in PUBG or in your project team. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person8} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">SOFTWARE ENGINEER</div>
                            <div className="teamname my-4 text-4xl font-medium"> Sai Kiran</div>
                            <div className="aboutteampara text-lg font-light">Be it any role from interacting with client to developing a feature on time, Sai Kiran can do it all. He has establised himself as an adaptive learner in which ever tasks he is assigned to and reliable member any team can ask for. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                </div>
                <div className="font-Roboto mb-28 row flex justify-center md:flex-col">
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person9} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">APPLICATIONS DEVELOPER</div>
                            <div className="teamname my-4 text-4xl font-medium">Sowmya </div>
                            <div className="aboutteampara text-lg font-light">Sowmya is a Computer Science graduate. Her interest in Web Designing & development made her choose a career in Betalectic. Her calm, quick and very composed nature brings balance to the team. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                    <div className="flex card items-center xl:flex-col">
                        <div className="w-64 h-64   p-1 relative fteamImage bg-blue rounded-full"><div className="w-60 absolute top-8 left-1"><Image alt="pic" className="object-cover w-full h-full" src={person10} /></div></div>
                        <div className=" aboutteam mx-5 w-3/5 sm:w-5/6">
                            <div className="teampost mb-4 text-lg font-light">APPLICATION DEVELOPER</div>
                            <div className="teamname my-4 text-4xl font-medium"> Rajesh Nautiyal</div>
                            <div className="aboutteampara text-lg font-light">Rajesh has great passion for programming and problem solving. He loves to watch anime series and in free time you will find him sketching or playing games. </div>
                            <div className="socialteam">linked in </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default teams




