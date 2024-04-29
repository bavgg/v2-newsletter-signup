

import Home from "./pages/Home"

import { useState } from "react";

import SuccessModal from "./modals/SuccessModal"

function App() {
  const [successModal, setSuccessModal] = useState(false);
  const [email, setEmail] = useState();

  const onSubmit = (data) => {

    setSuccessModal(true);
    setEmail(data.email);
  
   
  };
  

  return (
    <>
      
      {successModal ?
        <SuccessModal email={email}   setSuccessModal={setSuccessModal}/> :
        <Home onSubmit={onSubmit} setSuccessModal={setSuccessModal}  />
      }
      
    </>
  )
}

export default App
