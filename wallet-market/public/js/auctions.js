let primaryImages = ["./img/pollen.jpg", "./img/shellfish.png", "./img/nuts.jfif", "./img/gluten.jpg", "./img/antibiotics.png"];
let ads = [];

function getAdvertising() {
  $.ajax({
      dataType: "json",
      type: "GET",
      url: "https://localhost:8443/api/advertisements",
      headers: { "mode": "no-cors" },
      success: (data) => {
          ads = data.data;
      },
      async: false
  });
}

// function argsort(array) {
//   const arrayObject = array.map((value, idx) => { return { value, idx }; });
//   arrayObject.sort((a, b) => (a.value - b.value))
//   return arrayObject.map(data => data.idx);;
// }

function generateCard(i) {
  // create auction card
  let col = document.createElement("div");
  col.classList.add("col");

  let card = document.createElement("div");
  card.classList.add("card");
  card.id = "auction-" + i
  col.appendChild(card);

  let image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = primaryImages[i];
  card.appendChild(image);

  let body = document.createElement("div");
  body.classList.add("card-body");
  card.appendChild(body);

  let tags = ads[i].tags;
  for (var t = 0; t < tags.length; t++) {
    let title = document.createElement("span");
    title.classList.add("badge", "badge-pill", "badge-dark");
    title.innerText = tags[t];
    body.appendChild(title);
  }

  // let subtitle = document.createElement("p");
  // subtitle.classList.add("card-subtitle");
  // subtitle.innerText = subtitles[i];
  // body.appendChild(subtitle);

  // NFT price
  let statusTable = document.createElement("table");
  statusTable.classList.add("table");
  card.appendChild(statusTable);

  let tableBody = document.createElement("tbody");
  statusTable.appendChild(tableBody);

  let bidRow = document.createElement("tr");
  tableBody.appendChild(bidRow);

  let bidTitle = document.createElement("th");
  bidTitle.innerHTML = "Price:"
  bidTitle.scope = "row";
  bidRow.appendChild(bidTitle);

  let bid = document.createElement("td");
  bid.innerHTML = "1 ETH"
  bid.id = "price-" + i
  bidRow.appendChild(bid);

  // NFT actions
  let buttonGroup = document.createElement("div");
  buttonGroup.classList.add("buttons");
  card.appendChild(buttonGroup)

  let bidButton = document.createElement("button");
  bidButton.type = "button"
  bidButton.href = "#";
  bidButton.classList.add("btn", "btn-primary")
  bidButton.innerText = "Purchase";
  bidButton.onclick = function () { /* TODO: Purchase NFT - Auction no longer exists */ }
  bidButton.id = "bid-button-" + i
  buttonGroup.appendChild(bidButton);

  return col
}

// Generatively populate the website with NFTs
function populateGrid() {
  getAdvertising();
  auctionGrid = document.getElementById("auction-grid");
  for (var i = 0; i < ads.length; i++) {
    auctionCard = generateCard(i);
    auctionGrid.appendChild(auctionCard);
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// function search() {
//     var input, filter, newCard, grid;    
//     input = document.getElementById("form1");
//     filter = input.value;
//     grid = document.getElementById("auction-grid");
//     const stdCols = document.getElementsByClassName("col");

//     for (i = 0; i < stdCols.length; i++) {
//         col = stdCols[i];        
//         for(const child of col.firstChild.firstChild.nextSibling.children) {
//           if (!child.innerText.includes(filter)) {
//             col.remove();
//           } else {
//             newCard = generateCard(i);
//             grid.appendChild(newCard);
//           }
//         }
//     }
// }