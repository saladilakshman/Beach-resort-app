import React,{useState} from "react";
import "./head.css";
const Offer=()=>{
    const[close,setClose]=useState('');
    const boxModal=()=>{
        setClose(preState=>!preState)
    }
    return (<>
    <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/10/DSCF7385-2-1-min-1.jpg"alt=""loading="lazy"className="w-100"id="event-image"/>
    <div className="container">
        <p>offers and packages</p>
        <p id="offer-text">In Hotel</p>
    </div>
    <div className="container bg-light d-flex flex-wrap justify-content-center align-items-center gap-3 pt-2">
        <div className="first-block">
            <p className="text-center">Its better by the beach</p>
            <p className="text-center"id="package-text">Honeymoon Package</p>
            <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/10/couple-ga6dd74837_1920-2-600x390.jpg"alt=""className="offer-image"/>
            <ul className="unordered-list"onClick={boxModal}>
                Inclusions
               { close && <><li>Breakfast buffet for two adults</li>
                <li>Floral room decor for first night</li>
<li>Romantic candle light dinner set up for 2 (set menu)</li>
<li>Complimentary bottle of wine and cake</li>
<li>North Goa/South Goa tour on one day</li>
<li>Minimum 2 nights</li> </>
}
            </ul>
        </div>
        <div className="first-block">
            <p className="text-center">Its better by the sea</p>
            <p className="text-center"id="package-text">Workation</p>
            <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2021/10/seashells-g4a8fce500_1920-2-1-600x390.jpg"alt=""className="offer-image"/>
            <ul className="unordered-list"onClick={boxModal}>
                Inclusions{close && <>
                <li className="pt-2">Breakfast buffet for two adults</li>
                <li className="pt-2">Complimentary WiFi</li>
                
<li className="pt-2">10% discount on food and laundry services</li>
<li className="pt-2">Book for 6 nights and get one night free</li>
<li className="pt-2">*Validity till 22nd December 2021</li>
</>}
            </ul>
        </div>
    </div>
    </>)
}
export default Offer