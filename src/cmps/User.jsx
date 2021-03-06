import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogout } from '../store/actions/user.action';

function _User({ onLogout, user }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  const onToggleModal = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <section className="user-profile" onClick={onToggleModal}>
      <div className='user flex'>
        <div className="img-warpper">
          <img
            src={typeof user.imgUrl === 'object' ? user.imgUrl.avatar : user.imgUrl}
            alt='image'
          />
        </div>
        <h4>{user.userName}</h4>
        <div className='svg-down-container'>
          {isOpen ?
            <svg
              role="img"
              height="16"
              width="16"
              className="Svg-sc-1bi12j5-0 hDgDGI eAXFT6yvz37fvS1lmt6k"
              viewBox="0 0 16 16">
              <path d="M13 10L8 4.206 3 10z"></path>
            </svg> :
            <svg //arrow down
              role='img'
              height='16'
              width='16'
              className='svg-down'
              viewBox='0 0 16 16'>
              <path d='M3 6l5 5.794L13 6z'></path>
            </svg>
          }
        </div>
      </div>
      {isOpen &&
        <ul className="user-options-container">
          {user?._id ? <li onClick={onLogout}>Logout</li> : <li>Login</li>}
          <li onClick={() => {
            setIsOpen(!isOpen)
            navigate('/friends')
          }}>Friends</li>
        </ul>
      }
    </section>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userModule.user,
  };
}

const mapDispatchToProps = {
  onLogout,
};

export const User = connect(mapStateToProps, mapDispatchToProps)(_User);
