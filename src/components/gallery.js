import React,{useState} from "react";
import "./head.css";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Gallery from 'react-grid-gallery';
import Masonry from 'react-masonry-css';
const Gallery=()=>{
    const gallery=[{},
        {id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/1-min-1.jpg',category:'hotel'},
        {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/2-min-1.jpg',category:'hotel'},
        {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/3-min-1.jpg',category:'hotel'},
        {id:4,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/4-min-2.jpg',category:'hotel'},
        {id:5,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/5-min-2.jpg',category:'hotel'},
        {id:6,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/6-min-2.jpg',category:'hotel'},
        {id:7,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/7-min-3.jpg',category:'hotel'},
        {id:8,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/9-min-1.jpg',category:'hotel'},
        {id:9,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/8-min-1.jpg',category:'hotel'},
        {id:10,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/11-min-1.jpg',category:'hotel'},
        {id:11,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/12-min-1.jpg',category:'hotel'},
        {id:12,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/14-min-1.jpg',category:'hotel'},
        {id:13,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/13-min-1.jpg',category:'hotel'},
        {id:14,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/1-min-5.jpg',category:'room'},
        {id:15,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/1-min-5.jpg',category:'room'},
        {id:16,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/2-min-5.jpg',category:'room'},
        {id:17,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/3-min-5.jpg',category:'room'},
        {id:18,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/6-min-4.jpg',category:'room'},
        {id:19,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/4-min-4.jpg',category:'room'},
        {id:20,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/7-min-5.jpg',category:'room'},
        {id:21,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/10-min-3.jpg',category:'room'},
        {id:22,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/9-min-3.jpg',category:'room'},
        {id:23,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/8-min-3.jpg',category:'room'},
        {id:24,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/2-min-4.jpg',category:'restaurant'},
        {id:25,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/3-min-4.jpg',category:'restaurant'},
        {id:26,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/4-min-3.jpg',category:'restaurant'},
        {id:27,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/5-min-3.jpg',category:'restaurant'},
        {id:28,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/7-min-4.jpg',category:'restaurant'},
        {id:29,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/8-min-2.jpg',category:'restaurant'},
        {id:30,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/10-min-2.jpg',category:'restaurant'},
        {id:31,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/7-min-2.jpg',category:'event'},
        {id:33,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/1-min.jpg',category:'event'},
        {id:34,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/9-min.jpg',category:'event'},
        {id:35,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/10-min.jpg',category:'event'},
        {id:36,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/11-min.jpg',category:'event'},
        {id:37,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/12-min.jpg',category:'event'},
        {id:38,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/13-min.jpg',category:'event'},
        {id:39,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/15-min.jpg',category:'event'},
        {id:40,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/16-min.jpg',category:'event'},
        {id:41,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/17-min.jpg',category:'event'},
        {id:42,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/18-min.jpg',category:'event'},
        {id:43,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/19-min.jpg',category:'event'},
        {id:44,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/20-min.jpg',category:'event'},
        {id:45,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/2-min.jpg',category:'event'},
        {id:46,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/3-min.jpg',category:'event'},
        {id:47,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/4-min.jpg',category:'event'},
        {id:48,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/6-min-1.jpg',category:'event'}, 
        {id:49,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/IMG_20201209_093808-min.jpg',category:'event'},
        {id:50,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/IMG_20201227_181919-min.jpg',category:'event'},
        {id:51,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/IMG_20201230_182359-min.jpg',category:'event'},
        {id:52,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/WhatsApp-Image-2020-09-14-at-5-1-min.jpg',category:'event'},
        {id:53,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/WhatsApp-Image-2020-09-14-at-5-3-min.jpg',category:'event'},
        {id:54,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/WhatsApp-Image-2020-09-14-at-5-5-min.jpg',category:'event'},
        {id:55,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/WhatsApp-Image-2020-09-14-at-5-4-min.jpg',category:'event'},
        {id:56,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/WhatsApp-Image-2020-09-14-at-5-2-min.jpg',category:'event'},
        {id:57,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/2021_0105_15475800-min.jpg',category:'event'},
        {id:58,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/man-and-woman-hugging-while-standing-on-rock-3617553-pexels-1-min.jpg',category:'moment'},
        {id:59,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/IMG_20210128_141726-1-1-min.jpg',category:'moment'},
        {id:60,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/WhatsApp-Image-2020-02-10-at-12-1-min.jpg',category:'moment'},
        {id:61,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/WhatsApp-Image-2020-02-10-at-12-min.jpg',category:'moment'},
        {id:62,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/WhatsApp-Image-2020-02-10-at-12-3-min.jpg',category:'moment'},
        {id:63,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/WhatsApp-Image-2020-02-10-at-12-2-min.jpg',category:'moment'},
        {id:64,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/IMG_20210129_133024-min.jpg',category:'moment'},
        {id:65,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/DSCF7774-min.jpg',category:'moment'}
    ]
    const[images,setImages]=useState(gallery)
    const filteringGalleryImages=(category)=>{
        if(category==='all'){
             return setImages(gallery)
        }
        const newlyFilteredImages=gallery.filter((item)=>item.category===category)
        setImages(newlyFilteredImages)
    }
    
    const items=images.map((item)=>{
        return <div key={item.id}>
          <Zoom>  <img src={item.img} className="w-100" loading="lazy"/> </Zoom>
        </div>
    });
   
    const myBreakpointsAndCols = {
        default: 3,
        1100: 3,
        700: 2,
        500:0
      };
   
    return (<>
    <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/Gallery-Banner-min.jpg"alt=""loading="lazy"className="w-100"id="event-image"/>
    <Flip left><h1 className="text-center text-white">GALLERY</h1></Flip>
    <div className='container bg-light'id='first-row'>
        <div className="gallery-buttons">
                <button type="button" id="gallery-button"onClick={()=>filteringGalleryImages('all')}>ALL</button>
                <button id="gallery-button"onClick={()=>filteringGalleryImages('hotel')}>HOTEL</button>
                <button id="gallery-button"onClick={()=>filteringGalleryImages('room')}>ROOMS</button>
                <button id="gallery-button"onClick={()=>filteringGalleryImages('restaurant')}>RESTAURANT</button>
                <button  id="gallery-button"onClick={()=>filteringGalleryImages('event')}>EVENTS</button>
                <button id="gallery-button"onClick={()=>filteringGalleryImages('moment')}>MOMENTS</button>
        </div>
        <Masonry
  breakpointCols={myBreakpointsAndCols}
  className="my-masonry-grid pt-3"
  columnClassName="my-masonry-grid_column"
>
  {items}
</Masonry>
    </div>
    </>) 
}
export default Gallery