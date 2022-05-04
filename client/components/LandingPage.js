import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import './LandingPage.css';

import { UserContext } from './userContext';
import { AuthContext } from './authContext';

const modalStyles = {
  content: {
    width: '30%',
    height: '55%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

Modal.setAppElement('#root');

const isLetter = (charachter) => {
  return charachter.toUpperCase() !== charachter.toLowerCase();
}

const isNumber = (character) => {
  if(character >= '0' && charachter <= '9') {
    return true;
  } else {
    return false;
  }
}

const isCap = (charachter) => {
  if(!isLetter(charachter)){
    return false;
  } else {
    if(charachter.toUpperCase() === charachter){
      return true;
    } else {
      return false;
    }
  }
}

const isValidPass = (currPass) => {
  let hasNumber = false;
  let hasCapLetter = false;
  let isLongEnough = false;

  if(currPass.length >= 5) {
    isLongEnough = true;
  }
  for(let i = 0; i < currPass.length; i++) {
    if(isCap(currPass.charAt(i))) {
      hasCapLetter = true;
    }
    else if(isNumber(currPass.charAt(i))) {
      hasNumber = true;
    }
    if(hasNumber && hasCapLetter && isLongEnough) {
      return true;
    }
  }
  return false;
}

export default function LandingPage({ history }) {
  //SignUp Hooks
  const [signUpEmail, setSignUpEmail] = useState('');
  const []
  //Modal State
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    if(authed) {
      history.push('./home');
    }
  }, []); 

  return (
    <div className="main-container">
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
        >
      <h1 style={{textAlign: 'center', fontSize: '1.5rem'}}>Sign Up for Trello Clone</h1>
        </Modal>
      
      <Link to="login">
        <button>Sign in</button>
      </Link>

      <Link to="signup">
        <button>Sign up</button>
      </Link>
    </div>
  );
}
