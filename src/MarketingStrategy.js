import React from 'react'
const style = {
  textContainer: {
    width: "80%", float: "right", marginTop: "30px", backgroundColor: "#303030", borderRadius: ".5em", marginRight: "2.5%"
  },
  paragraphContainer: {width: "80%", display: "flex", flexDirection: "column", margin: "0px auto"},
  paragraph: {marginBottom: "2%"}
}

function MarketingStrategy() {
  return (
    <div style={style.textContainer}>
      <h3>
      Marketing Strategy
      </h3>
      <div style={style.paragraphContainer}>
      <span style={style.paragraph}>Our marketing strategy for our crypto fintech company is centered on harnessing blockchain technology's innovative potential to engage a broad audience. We will conduct targeted digital marketing campaigns to inform potential users about our platform's advantages, emphasizing its security, transparency, and efficiency. Leveraging social media platforms, content marketing, and influencer partnerships, we aim to enhance brand awareness and credibility within the crypto community. Additionally, we will participate in industry events and conferences to connect with key stakeholders and showcase our unique offerings. By highlighting our competitive edge and engaging with our audience, we aim to drive user adoption and establish our company as a trusted leader in the crypto fintech sector.
</span>
<span style={style.paragraph}>
To expand our reach beyond customers and investors, we will also target developers and entrepreneurs in the crypto space. We plan to create YouTube videos showcasing our application and provide tutorials on how to replicate it, incentivizing individuals to contribute to its development in exchange for equity ownership. This approach will not only attract potential users but also foster a community of developers and entrepreneurs interested in our platform's growth and success.
</span>
      </div>
    </div>
  )
}

export default MarketingStrategy