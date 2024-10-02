
const Pagination = ({next, previous, pageNo}) => {
  return (
    <div>
        <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">  
        <div onClick={previous} className="px-8 hover:cursor-pointer">
            <i className="fa-solid fa-arrow-left" />
        </div>
        <div>{pageNo}</div>
        <div onClick={next} className="px-8 hover:cursor-pointer">
            <i className="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  )
}

export default Pagination;