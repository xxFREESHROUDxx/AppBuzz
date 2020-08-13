import React from 'react';
import "./bookitem.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Fade } from "react-awesome-reveal";

const Book = ({ item, i }) => {
 
   return(
   <Fade cascade>
   <div className="card_e p-2">
        <div className="img_wrapper" style={{backgroundImage:`url(${item.book_image})`}}>  
        </div>
        <div className="detail_wrapper">
            <h3 className="text-bold">{item.title}</h3>
            <h6>-{item.contributor}</h6>
            <p><i>Description: </i>{item.description}</p>
            <p>
                <span className="mx-2">Rank: {item.rank}</span>
                <span>Publisher: {item.publisher}</span>
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="facebook" id="dropdown-basic" className="btn-sm">
                   Purchase
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   {item.buy_links.map((link,i) => <Dropdown.Item href={link.url} key={i}>{link.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </div>
   </div>
   </Fade>);
}

export default Book;