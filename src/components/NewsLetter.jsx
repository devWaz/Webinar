import frame from "../assets/frame.png"
import plus from "../assets/plus.svg"


const NewsLetter = () => {
    return ( 
        <div className="h-[45vh] flex justify-center items-center"
            style={{backgroundImage: `url(${frame})` , backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
                <div className="text-center flex flex-col gap-3">
                    <h2 className="font-extrabold text-[2rem]">Subscribe to our newsletter</h2>
                    <p className="font-medium text-[.9rem]">Be notified about our events before everyone else</p>
                    <div>
                        <form className="flex justify-center">
                            <input type="text" placeholder="Textfield text" className="p-3"/>
                            <button className="p-3 flex items-center rounded bg-[#1070FF] text-white gap-2 text-[.8rem] font-semibold">
                                Subscribe
                                <img src={plus} alt='plus'/>
                            </button>
                        </form>
                    </div>
                </div>
        </div>
     );
}
 
export default NewsLetter;