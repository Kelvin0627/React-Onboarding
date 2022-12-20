import {AiOutlineLeft} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import reading from '../assets/reading.avif'

const Description = () => {
  return (
    <div className='max-w-screen-lg pt-[80px] mx-auto font-semibold'>
        <NavLink to='/'>
            <div className='flex pb-3 text-xl font-bold'>
                <AiOutlineLeft className='mt-1'/>
                <p>Back</p>
            </div>
        </NavLink>
        <h1 className='text-4xl font-bold text-[#312783] '>Lorem ipsum dolor sit met</h1>
        <img className='py-10 mx-auto' src={reading} alt='reading' width='750px'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id felis justo. In malesuada varius orci sit amet dignissim. Cras ornare nisl purus, eu fringilla lectus posuere ut. Praesent dapibus orci et mi pulvinar, accumsan vestibulum purus iaculis. Aliquam vel massa quam. Suspendisse ut felis ac neque semper tincidunt eget ac sapien. Nunc sit amet arcu ac nulla elementum pulvinar. Phasellus rhoncus elit vitae libero vehicula commodo.</p>
        <br></br>
        <p className='pb-[60px]'>Maecenas eget imperdiet nibh. Morbi dictum sem dignissim cursus elementum. Vestibulum a velit ut tellus condimentum feugiat sit amet nec dolor. Ut gravida, augue at scelerisque facilisis, massa libero tristique nunc, quis condimentum orci libero et dui. Quisque egestas libero in interdum tempor. Vestibulum varius massa non convallis aliquet. Mauris lobortis odio ante, a dapibus ipsum congue vel. Donec eget metus sit amet urna malesuada venenatis. Aenean consequat tellus sed diam sodales, vitae tristique urna feugiat. Mauris tristique ultricies nibh eu placerat. Morbi maximus mauris id magna ultrices, nec semper nibh blandit. Nullam condimentum neque ac sapien pretium, a cursus erat egestas. Nulla porta sollicitudin ultrices. Aliquam posuere porttitor ante, eu hendrerit lacus auctor eget. Nunc sit amet enim ac diam congue vulputate.</p>
    </div>
  )
}

export default Description