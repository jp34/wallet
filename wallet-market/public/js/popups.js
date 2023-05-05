loginModal = new bootstrap.Modal(document.getElementById('login-modal'))
infoModal = new bootstrap.Modal(document.getElementById('info-modal'))
bidModal = new bootstrap.Modal(document.getElementById('bid-modal'))
portalModal = new bootstrap.Modal(document.getElementById('portal-modal'))
exitModal = new bootstrap.Modal(document.getElementById('exit-portal-modal'))
const signinButton = document.getElementById('signin-button')
let currAccount

function openBid(id) {
  let i = id.match('[0-9]+');
  document.getElementById("amount-input").value = ""
  document.getElementById("amount-input").classList.remove("is-invalid")
  document.getElementById('bid-modal-subtitle').innerText = titles[i]
  document.querySelector("#bid-modal > div > div > div.modal-footer > button.btn.btn-primary").id = "bid-modal-submit-bid-btn-" + i
  if (loggedIn) {
    bidModal.show()
    document.getElementById("amount-input").focus()
  } else {
    getAccount()
  }
}

// Initialise the active account and chain id
let activeAccount;
let activeChainId;

// Update the account and chain id when user clicks on button
signinButton.addEventListener('click',getAccount);
//signinButton.addEventListener('click',getChainId());

// Get the account in the window object
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' }).then(this.handleNewAccounts).catch((e) => {
    // Triggers login when account is locked
    window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
    getAccount(); // recall method to get specific wallet address
  })
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== activeAccount) {
    // Selects wallet address they want
    const permissions = await ethereum.request({
      method: 'wallet_requestPermissions',
      params: [{
        eth_accounts: {},
      }]
    });
    activeAccount = accounts[0];
  }
  replaceSignupButton(activeAccount);
  setHiddenField(activeAccount);
  loggedIn = true;
  return loggedIn;
}

// Get the connected network chainId
async function getChainId() {
    activeChainId = await ethereum.request({ method: 'eth_chainId' });
}

// Update the selected account and chain id on change
// ethereum.on('accountsChanged', getAccount);
// ethereum.on('chainChanged', getChainId);

function replaceSignupButton(name) {
  
  document.getElementById('username-display').innerText = "Welcome! ";

  let nav = document.getElementsByClassName('navbar');

  // Create new button to claim nft's that this account has won
  let claimButton = document.createElement("button");
  claimButton.type = 'button';
  claimButton.id = 'claimButton';
  claimButton.classList.add("btn", "btn-secondary", "claimButton");
  claimButton.innerText = "Claim NFT's"
 // nav[0].appendChild(claimButton);

  document.getElementById('signin-button').replaceWith(claimButton);
}

function setHiddenField(value) {
  document.getElementById('walletID').value = value;
}

async function getPatientAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' }).then(this.handleNewAccounts).catch((e) => {
    // Triggers login when account is locked
    window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
    getAccount(); // recall method to get specific wallet address
  })
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== activeAccount) {
    // Selects wallet address they want
    const permissions = await ethereum.request({
      method: 'wallet_requestPermissions',
      params: [{
        eth_accounts: {},
      }]
    });
    activeAccount = accounts[0];
  }
  loggedIn = true;
  return loggedIn;
}


async function openPortal(id) {
  const logCheck = await getPatientAccount();
  if(loggedIn) {
    document.getElementById('portal-modal-title').innerHTML = "Sign in with your Cardinal Wallet(TM) Mobile App credentials <h6><small>FOR MOBILE APP USERS ONLY</h6>"
    document.getElementById('portal-modal-desc').innerHTML = "This will link your wallet and mobile account so you can earn $$$!"
    portalModal.show()
  }
}

function openExitModal() {
  portalModal.hide()
  document.getElementById('exit-portal-modal-title').innerText = "You're all set!"
  document.getElementById('exit-portal-modal-desc').innerHTML = "Please return to your mobile wallet and check for any updates!"
  exitModal.show()
}

function voucher() {
  //const router = useRouter();
}