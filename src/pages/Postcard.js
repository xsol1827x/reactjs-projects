import { Fragment } from 'react'
import classes from './Postcard.module.css'

export const Postcard = () => {
    return (
        <Fragment>
            <div className={classes.text}>
                <h1>My travels</h1>

                {/* content */}
                <div className={classes.content}>
                    <ul>
                        <li>
                            <div className={classes.inner}>
                                <div className={classes.innerText}>
                                    <h3>To: Destination</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus est ullam harum aspernatur incidunt quia. Officiis ut saepe commodi eum.</p>
                                </div>
                                <img src="https://cdn.pixabay.com/photo/2020/04/27/05/57/architecture-5098251_1280.jpg" alt="postcard" />
                                <p className={classes.stamp}>Date: XXXX.XX.XX</p>
                            </div>
                        </li>

                        <li>
                            <div className={classes.inner}>
                                <div className={classes.innerText}>
                                    <h3>To: Destination</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus est ullam harum aspernatur incidunt quia. Officiis ut saepe commodi eum.</p>
                                </div>
                                <img src="https://live.staticflickr.com/609/32024594303_ef97da5071_b.jpg" alt="postcard" />
                                <p className={classes.stamp}>Date: XXXX.XX.XX</p>
                            </div>
                        </li>

                        <li>
                            <div className={classes.inner}>
                                <div className={classes.innerText}>
                                    <h3>To: Destination</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus est ullam harum aspernatur incidunt quia. Officiis ut saepe commodi eum.</p>
                                </div>
                                <img src="https://p1.pxfuel.com/preview/901/643/699/venice-channel-facades.jpg" alt="postcard" />
                                <p className={classes.stamp}>Date: XXXX.XX.XX</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
