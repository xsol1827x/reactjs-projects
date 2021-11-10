import { useState } from 'react'
import TextField from '@mui/material/TextField';
import classes from './Finder.module.css';

export const Finder = () => {
    const [showFood, setFood] = useState(false);
    const [showLand, setLand] = useState(false);
    const [showShop, setShop] = useState(false);

    const handleFood = () => {
        setFood(prevState => !prevState);
        setLand(false);
        setShop(false);
    }

    const handleLand = () => {
        setLand(prevState => !prevState);
        setFood(false);
        setShop(false);
    }

    const handleShop = () => {
        setShop(prevState => !prevState);
        setLand(false);
        setFood(false);
    }

    const food = [
        {
            title: "food result 1",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/02/31/89/selection.jpg",
            id: 1
        },
        {
            title: "food result 2",
            img: "https://p2.piqsels.com/preview/932/724/971/food-photography-flatlay-sea-bass-food.jpg",
            id: 2
        }
    ]

    const land = [
        {
            title: "landmark result 1",
            img: "https://live.staticflickr.com/440/19022211114_5599e3c68a_b.jpg"
        },
        {
            title: "landmark result 2",
            img: "https://live.staticflickr.com/8241/8598499045_f24cc89129_b.jpg"
        }
    ]

    const shop = [
        {
            title: "shopping destination 1",
            img: "https://p1.pxfuel.com/preview/867/414/402/travel-business-shopping-modern-city.jpg"
        },
        {
            title: "shopping destination 2",
            img: "https://p1.pxfuel.com/preview/307/399/814/architecture-building-infrastructure-shopping-mall.jpg"
        }
    ]


    return (
        <div className={classes.text}>
            <div>
                <h1>Search</h1>
                <TextField id="standard-basic" label={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>} variant="standard" />
            </div>

            <div>
                <ul className={classes.find}>
                    <li onClick={handleFood}><div className={classes.circle} id={classes.food}></div>food</li>
                    <li onClick={handleLand}><div className={classes.circle} id={classes.land}></div>landmarks</li>
                    <li onClick={handleShop}><div className={classes.circle} id={classes.shop}></div>shopping</li>
                </ul>
            </div>

            <div className={classes.content}>
                {!showFood && !showLand && <h3>Choose your next travel destination</h3>}

                {showFood && food.map(item => <ul>
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.img} alt="pic" />
                    </li>
                </ul>)}

                {showLand && land.map(item =>
                    <ul>
                        <li>
                            <h3>{item.title}</h3>
                            <img src={item.img} alt="pic" />
                        </li>
                    </ul>)}

                {showShop && shop.map(item =>
                    <ul>
                        <li>
                            <h3>{item.title}</h3>
                            <img src={item.img} alt="pic" />
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}
