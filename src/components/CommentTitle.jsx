const InnerTitle = ({number}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
        <p className="pt-8 text-3xl font-bold text-[#312783]">Comments ({number})</p>
        <input className='w-[450px] mt-5 p-2 bg-transparent border-2 rounded pl-4 border-[#312783] text-gray-400' type='email' value='Email'/>
    </div>
  )
}

export default InnerTitle