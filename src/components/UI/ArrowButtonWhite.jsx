const ArrowButtonWhite = ({children, onClick}) => {
    return (
      <div className="flex items-center justify-center relative uppercase w-fit cursor-pointer text-black">
          <div className="bg-white px-4 py-3 font-medium -mr-[6px] rounded-full">{children}</div>
          <img src="arrowButtonFillWhite.png" alt="" className="max-h-8 relative z-10"/>
          <div className="w-12 h-12 rounded-full text-3xl flex items-center justify-center bg-white -ml-[6px]"><i className="ri-arrow-right-up-line"></i></div>
      </div>
    )
  }
  
  export default ArrowButtonWhite
  