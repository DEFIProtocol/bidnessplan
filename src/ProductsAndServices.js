import React from 'react'
const style = {
  textContainer: {
    width: "80%", float: "right", marginTop: "30px", backgroundColor: "#303030", borderRadius: ".5em", marginRight: "2.5%"
  },
  paragraphContainer: {width: "80%", display: "flex", flexDirection: "column", margin: "0px auto"},
  paragraph: {marginBottom: "2%"},
  paragraphList: { marginBottom: "2%",  textAlign: "left"}
}


function ProductsAndServices() {
  return (
    <div style={style.textContainer}>
      <h3>
        Products And Services
      </h3>
      <div style={style.paragraphContainer}>

        <span style={style.paragraph}>
          gridLock offers fintech solutions that cater to two key customer segments, aiming to bridge them effectively. The first segment comprises crypto companies and token creators. We provide them with a range of services, including the ability to register their tokens with the SEC and store data on the blockchain securely. Additionally, we enable them to conduct votes among their token holders and offer strategic services to enhance their positioning in the crypto market. In essence, the tokens themselves are the product, and we facilitate the transaction process for these companies to reach investors, who form the second customer segment. Investors using our platform can track their favorite tokens, participate in token governance decisions, and invest in new tokens emerging in the crypto economy.
</span>
<span style={style.paragraph}>
In addressing the economic disparity present in the modern financial system, it's important to recognize that this is a complex issue that cannot be resolved overnight. However, our application serves as a crucial starting point in the journey towards creating a new financial system. By providing innovative solutions in the crypto market, our application will not only generate new job opportunities but also provide much-needed capital to other crypto companies. This, in turn, will enable these companies to create highly rewarding jobs. Moreover, our application will serve as a catalyst for a truly free market system within the crypto ecosystem, one that rewards hard work and innovation. This approach is essential for reviving the American dream and ensuring that economic prosperity is accessible to all.
</span>
<span style={style.paragraphList}>
Unique Feature<br/>
•	Portal to register tokens as Securities.<br/>
•	Token data storage.<br/>
•	Watchlist.<br/>
•	Market Order.<br/>
•	Limit Orders.<br/>
•	Token pricing.<br/>
•	DAO voting.<br/>
•	Organization and clarity amongst different tokens.<br/>

</span>
      </div>
    </div>
  )
}

export default ProductsAndServices