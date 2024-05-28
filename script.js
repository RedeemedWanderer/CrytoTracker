const prices = {
    bitcoin: 30000,
    ethereum: 2000,
    litecoin: 150,
    dogecoin: 0.25,
    cardano: 1.5
};

function addToWatchlist() {
    const crypto = document.getElementById('crypto').value;
    const watchlistDiv = document.getElementById('watchlist');

    const newItem = document.createElement('div');
    newItem.innerHTML = `<span>${crypto.charAt(0).toUpperCase() + crypto.slice(1)}</span><span>$${prices[crypto].toFixed(2)}</span>`;
    watchlistDiv.appendChild(newItem);
}
