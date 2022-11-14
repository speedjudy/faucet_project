const ethereum = window.ethereum;


// check if metamask extension is installed on the browser
const isMetaMaskInstalled = () =>{
    if(ethereum){
        return true;
    }

    return false;
}


// connect to metakmask wallet
const connectWallet = async () =>{
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    
    return accounts;
}

// connect to metakmask wallet
const isAccountConnected = async () =>{
    const accounts = await ethereum.request({method: 'eth_accounts'});

    return accounts;
}


// disconnect metamask wallet
const disconnectWallet = () =>{
    localStorage.removeItem('isWalletConnected');
    window.location.reload();
}

// check metamask on disconnect
ethereum.on('accountsChanged', () =>{
    window.location.reload();
});


// check metamask on connected
const onMetamaskconnect = async () =>{
    const chainId = await getChainId();
    ethereum.on('connect', () =>{
        console.log(chainId);
    });
}

// on chain change
const onChainChange = () =>{
    ethereum.on('chainChanged', (_chainId) =>{
        return parseInt(_chainId);
    });
}

const getChainId = async () =>{
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    return parseInt(chainId);
}


const isWalletConnected = () => {
    if(localStorage.getItem('isWalletConnected') === 'true'){
        return true
    }

    return false;
}


const connectWalletLocaly = () => {
    localStorage.setItem('isWalletConnected', true);
}