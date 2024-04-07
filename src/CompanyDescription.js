import React from 'react'

function CompanyDescription() {
  return (
    <div>
      CompanyDescription
      <span>gridLock currently supports only market orders for fungible tokens. Users can execute transactions between the base currency of the blockchain (such as Ethereum, BNB, or Polygon) and their chosen fungible token. Fungible tokens represent ownership of real-world assets, including ownership in a company, entitlements to commodities (like Gold or Silver), entitlements to currency (such as USD or Euro derivatives), or ownership of property. Essentially, the fungible tokens market can be likened to traditional markets like the stock market, commodity market, or forex market, but conducted on the blockchain. However, due to the lack of regulatory authority in the space this is obviously just reliant on the integrity of the token creator or company. 
For this, we plan to create a portal for tokens to register their respective tokens with the SEC as a security. This will show investors the authenticity of the token, as well as their intentions to live uphold the tokens representation. Additionally, we give token creators the option to update their token details that are listed on their page. Like a social media page, but for tokens instead of people. Token creators will be able to update their description, website, token supply information, token type, and even create announcements. Currently, the data is saved on a server, but we do have the smart contract written to store company information on the blockchain for any other company to access, read-only. We also have a smart contract for companies to be able to hold votes amongst their token holders, with voting power respective to percentage of ownership (ie. 5% ownership gets 5% of voting power).
The current state of our application:
•	MetaMask authentication
•	Market order execution
•	Token data saved to server
•	Price charts from USD to select token
•	Accounts page equipped with individual wallet data
•	Last 1000 transactions of token wallet
In the next year we hope to enable:
•	Acceptance of all browser wallets
•	Limit orders
•	Token security registration
•	Token data smart contract
•	DAO voting smart contract
•	Launch GRL fungible token to raise capital
•	Register as a broker dealer
•	Enable Peer to Peer purchase of major cryptos ie. Bitcoin, Ethereum

Within 2 years:
•	Create a liquidity pool for leverage trading
•	Create trading pairs between different forex tokens
•	Further expand liquidity to fungible tokens
Within 5 years:
•	Create settled commodity futures contracts
•	Partner with major agriculture processors
•	Create infrastructure for logistical delivery method

Legal Structure
To operate effectively within the blockchain ecosystem, gridLock will be established as a C-Corporation. This structure allows us to sell stakes to investors on the open market and necessitates obtaining a broker-dealer license for listing securities. gridLock is envisioned as a Decentralized Autonomous Organization (DAO). Instead of traditional executive roles, we plan to have representatives. For example, the Chief Financial Officer's title may be Head Finance Manager, though their responsibilities remain similar. This organizational approach aims to minimize liability for representatives, particularly in scenarios involving political interference.

</span>

    </div>
  )
}

export default CompanyDescription