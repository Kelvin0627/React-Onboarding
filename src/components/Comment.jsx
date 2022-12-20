const Comment = ({email, userComment}) => {
  return (
    <div className="max-w-screen-lg pl-10 mx-auto">
        <div className="pt-10">
            <p className="font-bold">{email}</p>
            <p className="pt-3">{userComment}</p>
        </div>
        <div className='mt-5 border-b-2 w-7/9'></div>
    </div>
  )
}

export default Comment