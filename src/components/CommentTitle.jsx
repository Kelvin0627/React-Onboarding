const CommentTitle = ({number, id}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
        <p className="pt-8 pl-4 text-3xl font-bold text-[#312783]">Comments ({number})</p>
        <input className='ml-4 w-[270px] md:w-[450px] mt-5 p-2 bg-transparent border-2 rounded  border-[#312783] text-gray-400' type='email' value='Email'/>
    </div>
  )
}

export default CommentTitle