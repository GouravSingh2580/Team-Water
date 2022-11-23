import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import { useState, useEffect } from "react";
import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const classes=useStyles();
  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const gorliChainId = '0x5'

      if (chainId !== gorliChainId) {
        alert('You are not connected to the gorli Testnet!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const gorliChainId = '0x5'

    if (chainId !== gorliChainId) {
      setCorrectNetwork(false)
    } else {
      setCorrectNetwork(true)
    }
    
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    connectWallet();
    checkCorrectNetwork();
  });
  const [showElement,setShowElement] = React.useState(true)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 1000);
       },
   [])

  return (
    // BEM
    <div id="show_bg_2">
      
    {currentAccount === '' ? (
      <button
      className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
      onClick={connectWallet}
      >
      Connect Wallet
      </button>
      ) : correctNetwork ? (
        <div className="app">
          <Sidebar />
          <Feed personal="false"/>
          <Widgets />
        </div>
      ) : (
      <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
      <div>----------------------------------------</div>
      <div>Please connect to the Goerli Testnet</div>
      <div>and reload the page</div>
      <div>----------------------------------------</div>
      </div>
    )}
    {/* <Backdrop className={classes.backdrop} open>
    <CircularProgress color="inherit" />
  </Backdrop> */}
  
  {showElement?<Backdrop className={classes.backdrop} open>
    <CircularProgress color="inherit" />
  </Backdrop>:<></>} 
    </div>

  );
}

export default App;
