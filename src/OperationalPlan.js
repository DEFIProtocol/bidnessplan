import React from 'react'

const style = {
  textContainer: {
    width: "80%", float: "right", marginTop: "30px", backgroundColor: "#303030", borderRadius: ".5em", marginRight: "2.5%"
  },
  paragraphContainer: {width: "80%", display: "flex", flexDirection: "column", margin: "0px auto"},
  paragraph: {marginBottom: "2%"},
  paragraphList: { marginBottom: "2%",  textAlign: "left"}
}



function OperationalPlan() {
  return (
    <div style={style.textContainer}>
      <h3>
      Operational Plan
      </h3>
      <div style={style.paragraphContainer}>

      <span style={style.paragraph}>Our fintech crypto company, focused on listing fungible tokens and integrating regulatory compliance into our operations, will operate with a flat organizational structure, consisting of representatives rather than Chief Officers. This approach fosters a collaborative environment where each team member contributes significantly to our success. As an independent found of the company there are several roles I would like to have filled.
</span>
<span style={style.paragraphList}>
  <h4>
Team Structure and Roles:<br/>
  </h4>
1.	Legal and Compliance Representative: Responsible for ensuring all aspects of our operations comply with relevant regulations and laws, including AML/KYC procedures, licensing requirements, and data protection regulations.<br/>
2.	Finance and Accounting Representative: Manages financial operations, including budgeting, financial reporting, and ensuring compliance with tax regulations.<br/>
3.	Technology Representative: Oversees the development and maintenance of our tech infrastructure, including blockchain integration, security protocols, and platform scalability.<br/>
4.	Marketing and Communications Representative: Develops and implements marketing strategies to promote our platform, engage with users, and build brand awareness.<br/>
5.	Operations and Customer Support Representative: Manages day-to-day operations, including customer support, logistics, and process optimization.<br/>
</span>
<span style={style.paragraphList}>
  <h4>
Responsibilities:<br/>
  </h4>
•	Legal and Compliance: Ensuring regulatory compliance, drafting policies and procedures, and conducting audits.<br/>
•	Finance and Accounting: Managing financial transactions, preparing financial reports, and overseeing budgeting and forecasting.<br/>
•	Technology: Developing and maintaining the tech infrastructure, implementing security measures, and ensuring platform stability.<br/>
•	Marketing and Communications: Developing marketing strategies, managing social media channels, and building relationships with influencers.<br/>
•	Operations and Customer Support: Managing day-to-day operations, optimizing processes, and providing high-quality customer support.<br/>
</span>
<span style={style.paragraph}>
These additional roles will play a crucial role in driving the growth and success of our fintech crypto company, allowing us to capitalize on new opportunities and effectively navigate the complex regulatory landscape.
</span>
      </div>
    </div>
  )
}

export default OperationalPlan