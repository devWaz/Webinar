import star from "../assets/blueStar.svg"
import audience from "../assets/audience.png"

const Hero = () => {
    return ( 
        <div className="text-center py-5 p-5 pt-16">
            <h1 className="font-extrabold text-[2rem] md:text-[4rem]">Webinars</h1>
            <p className="text-[.8rem] md:text-[1rem] md:w-[50rem] md:m-auto md:font-medium">In our free time, we some times hold webinars with professionals centered around healing, friendships and family. Our users come to quality of the friendships in their lives. From learning how to find friends and ...
                </p>
            <div className="">
                <div 
                    style={{backgroundImage: `url(${audience})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
                    className="mt-10 h-[16rem] relative md:h-[30rem]">
                    <img src={star} alt="star" className="absolute w-[4.5rem] right-[-1.5rem] top-[-2rem] md:w-[6rem]"/>
                </div>
            </div>
            <div className="mt-8 text-left md:flex">
                <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold ">Strengthening Relationships</h1>
                <div className="mt-2 md:pl-[20vw]">
                    <div className="py-3 flex justify-between font-medium md:w-[25%]">
                        <span>Nov 27 2022</span>
                        <span>5:30 PM</span>
                    </div>
                    <p className="text-[.95rem] font-light">This three part series will focus on strengthening your relationship with your partner. Topics will include managing stress, respite and taking time off to reconnect, and working together as a team
                    </p>
                    <button className="my-4 py-2 px-6 rounded bg-[#1070FF] text-white font-semibold">Get Ticket</button>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;