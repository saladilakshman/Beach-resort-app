import React from "react";
import "./head.css";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
const Activity=()=>{
    const firstLine=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/DSCF7478-min.jpg',caption:'Swimming Pool'},
    {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/Gym-min.jpg',caption:'Gym'},
    {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/table-tennis-ping-pong-min.jpg',caption:'Table Tennis'}]

    const secondLine=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/carrom-167023_1920-min.jpg',caption:'Carrom'},
        {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/young-woman-playing-billiard-min.jpg',caption:'Pool Table'},
        {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/young-beautiful-blonde-girl-walking-playing-with-dog-park-min.jpg',caption:'Pet Friendly'}]

        const thirdLine=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/BEach-walk-min.jpg',caption:'Beach king'},
            {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/kayaking-women-kayak-girls-paddling-water-min.jpg',caption:'Kayaking'},
            {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/02/Water-Sports-min.jpg',caption:'Water Sports'}]
            const fourthLine=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-min-1.jpg',caption:'Casino'},
                {id:2,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-1-min-1.jpg',caption:'Cycling'},
                {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-2-min-1.jpg',caption:'Fountainhas'}]
                const fifthLine=[{id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-3-min.jpg',caption:'Mangroves'},
                    {id:1,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/OLD-GOA_pic-credit-tripadvisor-.jpg',caption:'Old Goa'},
                    {id:3,img:'https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/image-min.jpg',caption:'Dr Salim bird sanctuary'}]
    return (<>
     <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/01/Nearby-places-banner-min.jpg"alt=""loading="lazy"className="w-100"id="event-image"/>
    <Flip left><h1 className="text-center text-white">ACTIVITY</h1></Flip>
    <div className="container"id="first-row">
        <p>ACTIVITIES</p>
        <p className="activity-text">IN HOTEL</p>
        <div className="activity-items">
        {firstLine.map((item)=>{
        const {id,img,caption}=item
        return <div key={id} className="row">
            <div className="col-sm-12">
          <Bounce>  <img src={img}alt=""className="w-100"/>
            <p className="text-center fw-bold">{caption}</p></Bounce>
            </div>
        </div>
        })}
        </div>

        <div className="activity-items">
        {secondLine.map((item)=>{
        const {id,img,caption}=item
        return <div key={id} className="row">
            <div className="col-sm-12">
            <Bounce><img src={img}alt=""className="w-100"/>
            <p className="text-center fw-bold">{caption}</p></Bounce>
            </div>
        </div>
        })}
        </div>

        <div className="activity-items">
        {thirdLine.map((item)=>{
        const {id,img,caption}=item
        return <div key={id} className="row">
            <div className="col-sm-12">
           <Bounce> <img src={img}alt=""className="w-100"/>
            <p className="text-center fw-bold">{caption}</p></Bounce>
            </div>
        </div>
        })}
        </div>
        <p>ACTIVITIES</p>
        <p className="activity-text">NEARBY</p>

        <div className="activity-items">
        {fourthLine.map((item)=>{
        const {id,img,caption}=item
        return <div key={id} className="row">
            <div className="col-sm-12">
            <Bounce><img src={img}alt=""className="w-100"/>
            <p className="text-center fw-bold">{caption}</p></Bounce>
            </div>
        </div>
        })}
        </div>

        <div className="activity-items">
        {fifthLine.map((item)=>{
        const {id,img,caption}=item
        return <div key={id} className="row">
            <div className="col-sm-12">
           <Bounce> <img src={img}alt=""className="w-100"/>
            <p className="text-center fw-bold">{caption}</p></Bounce>
            </div>
        </div>
        })}
        </div>

    </div>
    </>)
}
export default Activity