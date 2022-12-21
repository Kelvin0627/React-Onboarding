import {FaTimes} from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <div className="flex justify-around p-3 bg-[#312783] ">
            <p className="flex text-white">We are now hosting events with Zoom Webinars!<p className="pl-3 pr-2 font-bold underline md:pr-0" >Find out more</p></p>
            <FaTimes className='mt-1 text-white'/>
        </div>
        <div className='pt-10 text-center'>
            <p className='text-3xl font-bold text-[#312783]'>Latest News</p>
            <p className='max-w-3xl pt-2 pb-8 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis ante faucibus elementum. Nunc auctor diam vel rhoncus tincidunt.</p>
        </div>
    </div>
  )
}

export default Header