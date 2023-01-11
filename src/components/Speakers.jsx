import Arrow from "../assets/downArrow.svg"
import Amaka from "../assets/Amaka.png"
import Debra from "../assets/Debra.png"


const Speaker = ({name , bg}) => (
    <div 
    style={{backgroundImage: `url(${bg})` , backgroundPosition: "center", backgroundRepeat: "no-repeat", }}
    className="h-[26rem] w-[21rem] relative mb-7">
        <div className="text-white absolute bottom-[2rem] px-3 w-full">
            <h3 className="text-[1.5rem] font-bold">{name}</h3>
            <div className="flex border-y-[1px] py-2 mt-3 justify-between">
                <p>Student ambassador</p>
                <p>LA,NG</p>
            </div>
        </div>

    </div>
)

const Speakers = () => {
    return ( 
        <div className="p-5">
            <div className="flex items-center pb-3 border-b border-b-[#BCD7FF] justify-between">
                <h1 className="text-[2rem] font-extrabold">Speakers</h1>
                <div className="flex items-center gap-2">
                    <p className="text-[#030303] text-[.9rem]">View all speakers</p>
                    <img src={Arrow} alt="" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:mt-[2rem]">
                <p className="text-[#151517] text-[1rem] my-7 md:w-[30%] md:m-[0]">Therapist share knowledge on building Friendships and and relationships with family.</p>

                <div className="my-10 flex flex-col items-center 
                                md:flex-row md:justify-between md:w-[70%] md:m-[0]">
                    <Speaker name="Amaka Igwe" bg={Amaka}/>
                    <Speaker name="Debra Rowland" bg={Debra}/>
                </div>
            </div>
        </div>
     );
}
 
export default Speakers;