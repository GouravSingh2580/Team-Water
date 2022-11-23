import React, { forwardRef, useState, useEffect } from "react";
import "./Post.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import FlashMessage from "react-flash-message";
const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {
    const [opacity,setOpacity]=useState(0.3);
    const [status, setStatus] = useState(false);
    const opac=()=>{
      setOpacity(opacity+0.1);
      console.log(opacity);
    }
    const handleSubmit = (e) => {
      // e.preventDefault();
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 1000);
    };

    return (
      <div className="grad1" style={{opacity}}>
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...generateRandomAvatarOptions() }
          />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">

            <button onClick={() => {opac();handleSubmit()}}><AccountBalanceWalletIcon fontSize="medium" color="success" sx={{ fontSize: 40 }} /></button>
            {status && (
              <FlashMessage style={{position: "absolute", bottom: 0, left: 0}} duration={1000}>
                <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                  <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p class="font-bold">Woah there !</p>
                    <p class="text-sm">You just increased Droplet Density!!</p>
                  </div>
                </div>
              </div>
              </FlashMessage>
            )}
          {/* <AccountBalanceWalletIcon fontSize="medium" color="success" sx={{ fontSize: 40 }} /> */}
          </div>
        </div>
        </div>
      </div>
    );
  }
);

export default Post;
