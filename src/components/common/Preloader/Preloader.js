import loader from '../../../assets/images/loader.svg'
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div>
        <img src={loader}/>
    </div>
}

export default Preloader