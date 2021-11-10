import { useState } from 'react';
import classes from './Gallery.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Gallery = () => {
    const [option, setOption] = useState('');

    const handleChange = (e) => {
        setOption(e.target.value);
    }

    const images = [
        {
            img: "https://p1.pxfuel.com/preview/593/777/65/architecture-and-cityscape-travel-locations.jpg",
            date: new Date('December 18, 2019')
        },
        {
            img: "https://www.maxpixel.net/static/photo/1x/Wallpaper-Travel-Hills-Snow-Landscape-Destinations-4773359.jpg",
            date: new Date('October 20, 2020')
        },
        {
            img: "https://live.staticflickr.com/65535/49827695846_8b9c72ba7d_b.jpg",
            date: new Date('October 18, 2021')
        },
        {
            img: "https://p1.pxfuel.com/preview/435/792/870/travel-water-tourism-sky.jpg",
            date: new Date('September 18, 2020')
        },
        {
            img: "https://www.maxpixel.net/static/photo/1x/Adventure-Bolivia-Travel-Destinations-Hiking-2965500.jpg",
            date: new Date('March 20, 2019')
        },
        {
            img: "https://p1.pxfuel.com/preview/55/356/2/lighthouse-green-europe.jpg",
            date: new Date('July 18, 2021')
        },
        {
            img: "https://media.gadventures.com/media-server/dynamic/blogs/posts/peter-west-carey/2017/03/peter8.jpg",
            date: new Date('June 18, 2020')
        },
        {
            img: "https://p2.piqsels.com/preview/763/100/914/maldives-island-blue-water.jpg",
            date: new Date('May 18, 2020')
        }
    ]

    return (
        <div className={classes.text}>
            <div className={classes.title}>
                <h1>Gallery</h1>
                <div className={classes.circle}>
                    <h2>{option ? option :
                        <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16" style={{ marginTop: '25px' }}>
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                    }</h2>
                </div>
            </div>


            <div className={classes.sort}>
                <Box sx={{ minWidth: 10 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            label="Sort By"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Location"}>Location</MenuItem>
                            <MenuItem value={"Date"}>Date</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div>
                <div className={classes.content}>
                    {!option && <p>View your gallery by location and date</p>}
                    {option === "Location" && images.map(item =>
                        <ul>
                            <li>
                                <img src={item.img} alt="pic" />
                                <p className={classes.caption}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>{Math.round(Math.random() * 100)}</p>
                                <p className={classes.caption}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    </svg>{Math.round(Math.random() * 100)}
                                </p>
                            </li>
                        </ul>
                    )}

                    {option === "Date" &&

                        images.sort(function compare(a, b) {
                            let dateA = new Date(a.date);
                            let dateB = new Date(b.date);
                            return dateB - dateA;
                        }).map(item =>
                            <ul>
                                <li>
                                    <img src={item.img} alt="pic" />
                                    <p className={classes.caption}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>{Math.round(Math.random() * 100)}</p>
                                    <p className={classes.caption}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                        </svg>{Math.round(Math.random() * 100)}
                                    </p>
                                </li>
                            </ul>)}
                </div>
            </div>
        </div>
    )
}
