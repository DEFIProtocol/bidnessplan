import React from 'react'

const style = {
  textContainer: {
    width: "80%", float: "right", marginTop: "30px", backgroundColor: "#303030", borderRadius: ".5em", marginRight: "2.5%"
  },
  paragraphContainer: {width: "80%", display: "flex", flexDirection: "column", margin: "0px auto"},
  paragraph: {marginBottom: "2%"}
}

function ExeucutiveSummary() {
  return (
    <div style={style.textContainer}>
      <h3>
        Exeucutive Summary
      </h3>
      <div style={style.paragraphContainer}>
        <span style={style.paragraph}>gridLock, named to signify harnessing the potential of the blockchain, aims to revolutionize the cryptocurrency landscape by establishing the most transparent Decentralized Exchange (DEX) to date. Our mission is to bring clarity and legitimacy to the crypto market by integrating regulatory standards while championing the concept of cryptocurrency as an emerging economy. By facilitating direct connections between investors and crypto firms in a decentralized manner, we seek to enhance companies' access to capital, thus bolstering the utility and resilience of the blockchain economy. </span>
        <span style={style.paragraph}>The prevailing challenge with cryptocurrency is its misunderstood potential. Many individuals, especially in the lower and middle classes, struggle due to ineffective monetary and fiscal policies. Critiques dismissing crypto's value fail to acknowledge the similar intrinsic value concerns of traditional currencies. We aim to shift this narrative and demonstrate that the blockchain offers a transformative economic model that can revitalize the American dream.</span>
        <span style={style.paragraph}>gridLock possesses a strategic edge over existing market players. We intend to reshape government perceptions of fungible tokens by establishing a platform for tokens to register with the Securities and Exchange Commission (SEC). Unlike any existing DEX, our proactive engagement with regulatory authorities sets us apart. Despite numerous attempts by companies to register their tokens as tokenized securities, the SEC has delayed approval due to a lack of understanding. In a market rife with fraudulent entities, we believe that by demonstrating our commitment to compliance, we can help restore investor confidence and differentiate legitimate projects from malicious actors. Additionally, we provide users with the functionality to create a watchlist of tokens, store token data on the blockchain, and allow tokens to make announcements for company developments.
        </span>
      </div>
    </div>
  )
}

export default ExeucutiveSummary