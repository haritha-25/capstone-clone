import  { useState } from 'react';
import { AiFillThunderbolt,AiFillCloseCircle } from "react-icons/ai";
import "./dissmissHeader.css";
import { Button } from 'react-bootstrap';

function DissmissHeader(props) {
const [show, setShow] = useState(true);
const handleShow=()=>{
    setShow(false)
}

return(
    <>       
    {show &&
    <div className="dismissContainer">
    <div className="dismissText"><h6><AiFillThunderbolt id="thunder"/>Transform your spreadsheet into a powerful search and insights engine with polymer search. <a href="https://www.polymersearch.com/?utm_source=aws" target="_blank" rel="noreferrer">Learn more.</a></h6></div>
    <div className="dismissButton"><Button variant="none" onClick={handleShow} style={{color:"white"}}><h4><AiFillCloseCircle/> </h4></Button></div>
    </div>
    }
    </>
)
}


export default DissmissHeader;