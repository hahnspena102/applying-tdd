
class ShareSaleError extends Error {
  constructor(message) {
      super(message);
      this.name = 'ShareSaleError';
  }
}

class Portfolio {
  constructor() {
      this.stocks = {};
  }

  isEmpty() {
    return Object.keys(this.stocks).length === 0;
  }

  count() {
    return Object.keys(this.stocks).length
  }

  purchaseStock(ticker, shares) {
    if (this.stocks[ticker]) {
        this.stocks[ticker] += shares;
    } else {
        this.stocks[ticker] = shares;
    }
  }

  sellStock(ticker, shares) {
    if (this.stocks[ticker]) {
      this.stocks[ticker] -= shares;
          if (this.stocks[ticker] == 0) {
            delete this.stocks[ticker];
          } else if (this.stocks[ticker] < 0) {
            throw new ShareSaleError(`Could not sell stocks.`);
          }
    } else {
      throw new ShareSaleError(`Stock ${ticker} not found.`);
    }
  }
  
  getShares(ticker) {
    if (this.stocks[ticker]) {
      return this.stocks[ticker]
    } else {
      throw new Error(`Stock ${ticker} not found.`);
    }
  }
}

export { Portfolio, ShareSaleError };  
