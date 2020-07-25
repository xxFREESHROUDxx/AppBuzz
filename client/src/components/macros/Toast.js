import React,{useState} from 'react';
import Toast from "react-bootstrap/Toast";

export default function Toaster({head,message}) {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    
 return (
   <div className="row">
    <div className="col-xs-6">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{head}</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    </div>
  );
}

