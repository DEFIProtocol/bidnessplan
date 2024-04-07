import React from 'react'

const style = {
  textContainer: {
    width: "80%", float: "right", marginTop: "30px", backgroundColor: "#303030", borderRadius: ".5em", marginRight: "2.5%"
  },
  paragraphContainer: {width: "80%", display: "flex", flexDirection: "column", margin: "0px auto"},
  paragraph: {marginBottom: "2%"}
}

function FundingRequests() {
  return (
    <div style={style.textContainer}>
      <h3>
      FundingRequest
      </h3>
      <div style={style.paragraphContainer}>
      <span style={style.paragraph}>Funding Needs
To properly establish gridLock and ensure its operational success, several key capital needs must
be addressed. Firstly, obtaining a broker-dealer license is imperative for facilitating securities
transactions, with associated costs ranging from $10,000 to $100,000, contingent upon the
chosen procurement method.</span>
<span style={style.paragraph}>
Additionally, securing an office building location and allocating funds for marketing initiatives,
including attendance at crypto conferences, is essential, with an estimated budget of
approximately $50,000. These efforts are vital for establishing gridLock's presence within the
competitive crypto space and attracting initial users and investors.
Furthermore, a dedicated capital allocation of $50,000 to $75,000 is required to establish a
liquidity pool for the GRL token, symbolizing ownership in the company. This liquidity pool will
serve as a cornerstone for facilitating trading activities and providing liquidity for free market
exchange of GRL token.</span>
<span style={style.paragraph}>
In total, these combined funds, ranging from $135,000 to $225,000, are projected to sustain
GridLock for a minimum of one year, facilitating its foundational growth phase. By the end of
this period, funding raised from token sales and revenue transaction fees are anticipated to have
gained significant traction, ensuring the company's sustainability and future growth prospects.
This strategic allocation of funds aims to lay a solid foundation for gridLock's success in the
dynamic and evolving crypto market.</span>
      </div>

    </div>
  )
}

export default FundingRequests