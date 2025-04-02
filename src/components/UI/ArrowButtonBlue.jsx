const ArrowButtonBlue = ({children, onClick}) => {
  return (
    <div className="flex items-center justify-center relative uppercase w-fit cursor-pointer">
        <div className="bg-black px-4 py-3 font-medium text-white -mr-[6px] rounded-full bg-gradient-to-r from-[#052842] to-[#235595] whitespace-nowrap">{children}</div>
        <img src="arrowButtonFillBlue.png" alt="" className="max-h-8 relative z-10"/>
        <div className="w-12 h-12 rounded-full text-3xl text-white flex items-center justify-center bg-black -ml-[6px]  bg-gradient-to-r from-[#488595] to-[#7dcb8a]"><i className="ri-arrow-right-up-line"></i></div>
    </div>
  )
}

export default ArrowButtonBlue
