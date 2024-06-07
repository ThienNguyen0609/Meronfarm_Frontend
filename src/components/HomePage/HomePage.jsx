import './HomePage.scss'
import Drink from './ProductDisplay/Drink/Drink'
import Dryfood from './ProductDisplay/Dryfood/Dryfood'
import Fruit from './ProductDisplay/Fruit/Fruit'
import Outstanding from './ProductDisplay/Outstanding/Outstanding'
import Vegetable from './ProductDisplay/Vegetable/Vegetable'
import Slider from './Slider/Slider'

const HomePage = () => {
    return (
        <>
        <div className='homepage-wrapper'>
            <Slider />
            <div className="b-width homepage-inner">
                <Outstanding />
                <Fruit />
                <Vegetable />
                <Dryfood />
                <Drink />
            </div>
        </div>
        </>
    )
}

export default HomePage