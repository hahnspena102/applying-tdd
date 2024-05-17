import { Portfolio, ShareSaleError } from "./module.js";

// 2.1 A stock portfolio is represented by a collection of stock ticker symbols and 
// their corresponding number of shares owned by the portfolio. 
// A portfolio is always created with an empty number of shares (and no ticker symbols in it).
test('Testing 2.1 -- success', () => {
    const myPortfolio = new Portfolio();

    expect(myPortfolio.stocks).toEqual({});
});

// 2.2 The stock portfolio shall answer whether it is empty (no shares owned).
test('Testing 2.2 -- success', () => {
  const myPortfolio = new Portfolio();

    expect(myPortfolio.isEmpty()).toBe(true);
});

// 2.3 The stock portfolio shall answer its count of unique ticker symbols. 
// For instance, at a given time, I can have in my portfolio 5 shares of "GME" 
// which is the Game Stop ticker symbol, and 10 shares of "RBLX" which is the 
// Roblox ticker symbol. For this item, the answer should be 2 as I own two stocks 
// (even though I have multiple shares of those stocks).
test('Testing 2.3 -- success', () => {
  const myPortfolio = new Portfolio();

  expect(myPortfolio.count()).toBe(0);
});

// 2.4 Make a purchase. Given a symbol and # of shares, the portfolio should be updated 
// accordingly (add shares to a symbol). Don't need to deal with money. 
// Just assume money is infinite for purchases and sales.
test('Testing 2.4 -- success', () => {
  const myPortfolio = new Portfolio();
  myPortfolio.purchaseStock("GME", 3);

  expect(myPortfolio.stocks['GME']).toBe(3);
  expect(myPortfolio.isEmpty()).toBe(false);
});

// 2.5 Make a sale. Given a symbol and # of shares, the portfolio 
// should be updated accordingly (subtract shares from a symbol).
test('Testing 2.5 -- success', () => {
  const myPortfolio = new Portfolio();
  myPortfolio.purchaseStock("GME", 3);

  myPortfolio.sellStock("GME", 2);
  expect(myPortfolio.stocks['GME']).toBe(1);

  
});

// 2.6 The stock portfolio shall answer how many shares exist for a given symbol.
test('Testing 2.6 -- success', () => {
  const myPortfolio = new Portfolio();
  myPortfolio.purchaseStock("GME", 8);

  expect(myPortfolio.getShares("GME")).toBe(8);

  expect(() => myPortfolio.getShares("AAPL")).toThrowError("Stock AAPL not found.");
});

// 2.7 The portfolio should keep only owned symbols. 
// If symbols are in the portfolio, that means at least one stock should be owned.
test('Testing 2.7 -- success', () => {
  const myPortfolio = new Portfolio();
  myPortfolio.purchaseStock("GME", 3);

  myPortfolio.sellStock("GME", 3);
  expect(myPortfolio.isEmpty()).toBe(true);
});

// 2.8 The portfolio should keep only owned symbols. 
// If symbols are in the portfolio, that means at least one stock should be owned.
test('Testing 2.8 -- success', () => {
  const myPortfolio = new Portfolio();
  myPortfolio.purchaseStock("GME", 3);

  expect(() => myPortfolio.sellStock("GME", 20)).toThrowError(new ShareSaleError("Could not sell stocks."));
});

