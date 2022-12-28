import Arrow from "../assets/downArrow.svg"

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

            <p className="text-[#151517] text-[1rem] my-7">Therapist share knowledge on building Friendships and and relationships with family.
                </p>
        </div>
     );
}
 
export default Speakers;