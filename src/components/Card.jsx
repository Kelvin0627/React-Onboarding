import { NavLink } from "react-router-dom"


const Cards = ({id, title, body,image}) => {
  return (
    <div className="pb-5 mx-auto ">
        <div className="m-1 bg-white shadow-xl rounded-xl w-[250px] md:w-[280px]">
          <div className="relative">
            <img 
              className="rounded-t-xl h-[200px] w-full object-cover"
              src={image}   
            />
              <p className="absolute w-14 p-1 text-xs font-semibold text-center text-white bg-[#312783] rounded-full bottom-2 right-4">News</p>  
          </div>
          <div className="flex-col flex justify-between p-5 text-left h-[12rem]">
            <h1 className="text-2xl font-bold text-left line-clamp-1 ">{title}</h1>
            <p className="pb-5 text-gray-400 line-clamp-1">{body}</p>
            <NavLink to={`/inner-page/${id}`} className="font-bold text-purple-800 ">Read more</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Cards