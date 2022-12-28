import Arrow from "../assets/downArrow.svg"
import reconnect from "../assets/reconnect.png"
import friendship from "../assets/friendship.png"
import reset from "../assets/reset.png"

const Event = ({title , bg}) => (
    <div 
    style={{backgroundImage: `url(${bg})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
    className="h-[24rem] relative mb-7">
        <div className="text-white absolute bottom-[2rem] px-3 w-full">
            <h3 className="text-[1.5rem] font-bold">{title}</h3>
            <div className="flex border-y-[1px] py-2 mt-3 justify-between">
                <p>Nov 20th - 21st</p>
                <p>Learn More</p>
            </div>
        </div>

    </div>
)

const Events = () => {
    return ( 
        <div className="p-5">
            <div>
                <div className="flex items-center pb-3 border-b border-b-[#BCD7FF] justify-between">
                    <h1 className="text-[2rem] font-extrabold">All Events</h1>
                    <div className="flex items-center gap-2">
                        <p className="text-[#030303] text-[.9rem]">View events</p>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </div>

            <div className="my-10">
                <Event title="Re-connecting Family" bg={reconnect}/>
                <Event title="Friendship and Belonging" bg={friendship}/>
                <Event title="The Friendship Reset" bg={reset}/>
            </div>
        </div>
     );
}
 
export default Events;