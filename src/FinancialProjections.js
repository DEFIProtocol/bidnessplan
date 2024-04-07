import React from 'react'
const style = {
  textContainer: {
    width: "80%", float: "right", marginTop: "30px", backgroundColor: "#303030", borderRadius: ".5em", marginRight: "2.5%"
  },
  paragraphContainer: {width: "80%", display: "flex", flexDirection: "column", margin: "0px auto"},
  paragraph: {marginBottom: "2%"}
}
function FinancialProjections() {
  return (
    <div style={style.textContainer}>
      <h3>
      FinancialProjections
      </h3>
      <div style={style.paragraphContainer}>

      <span style={style.paragraph}>Determining income in the crypto market is challenging due to its vast size and rapidly increasing exchange volumes. Presently, there are 724 decentralized exchanges, primarily consisting of simple swap pages, such as those found on our website's swap tab. If GridLock were to enter the top 100 decentralized exchanges, it could generate over $3 million in daily transaction volume. With our 1% transaction fee and additional gas fees, this would result in approximately $30,000 in daily profit, excluding gas fees.
</span>
<span style={style.paragraph}>
Furthermore, obtaining regulatory approval would not only attract new participants to the market but also provide our application with exposure that many others lack. This could propel our exchange into the top 10 in terms of volume, which currently exceeds $187 million. Using the same calculations, this would translate to $187,000 in daily profit.
</span>
<span style={style.paragraph}>
It's important to note that many decentralized exchanges primarily deal in USDT and USDC, facilitating instant wire transfers globally without the delays typical of traditional banking systems. While some large companies may opt for other exchanges, our unique offerings could still attract significant business.
</span>
      </div>
    </div>
  )
}

export default FinancialProjections