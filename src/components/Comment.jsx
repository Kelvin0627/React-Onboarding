const Comment = ({email, userComment}) => {
  return (
    <div className="max-w-screen-lg pl-10 mx-auto">
        <div className="pt-10">
            <p className="font-bold">{email}</p>
            <p className="pt-3 mr-2">{userComment}</p>
        </div>
        <div className='w-[17rem] mt-5 border-b-2 md:w-11/12'></div>
    </div>
  )
}

export default Comment