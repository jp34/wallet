loginModal = new bootstrap.Modal(document.getElementById('login-modal'))
infoModal = new bootstrap.Modal(document.getElementById('info-modal'))
bidModal = new bootstrap.Modal(document.getElementById('bid-modal'))
const signinButton = document.getElementById('signin-button')
let currAccount

function openInfo(id) {
  let i = id.match("[0-9]+");
  document.getElementById('info-modal-title').innerText = titles[i]
  document.getElementById('info-modal-desc').innerHTML = details[i]
  document.getElementById('info-modal-img').src = secondaryImages[i];
  document.querySelector("#info-modal > div > div > div.modal-footer > button.btn.btn-primary").id = "info-modal-submit-bid-btn-" + i
  infoModal.show()
}

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
    openLogin()
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
}

// Get the connected network chainId
async function getChainId() {
    activeChainId = await ethereum.request({ method: 'eth_chainId' });
}

// Update the selected account and chain id on change
// ethereum.on('accountsChanged', getAccount);
// ethereum.on('chainChanged', getChainId);

function replaceSignupButton(name) {
  document.getElementById('signin-button').style.display = "none"
  document.getElementById('username-display').innerText = "Hi " + name
}

function setHiddenField(value) {
  document.getElementById('walletID').value = value;
}