import React from 'react'
import Terms3 from './Terms3'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1em;
    gap: 1.5em;

    @media (min-width: 700px){
        flex-direction: row-reverse;
        gap: 3em;
    }
`

const List = styled.ol`
    width: 100%;
    line-height: 2;
    font-family: Ruberoid;

    @media (min-width: 700px){
        width: 30%;
    }

    li{
        cursor: pointer;
        font-size: .8em;
    }
`

const Tos = styled.div`
    width: 100%;
    line-height: 2; 
    font-size: 1.05em;  

    @media (min-width: 500px){
        width: 58%;
    }
`

function Terms2() {
  return (
    <Container>
        <List>
            <li>Who may use the services</li>
            <li>The services</li>
            <li>Testnets</li>
            <li>Location of our privacy policy</li>
            <li>Right we grant you</li>
            <li>Ownership and content</li>
            <li>Third-party services and materials</li>
            <li>Disclaimers, limitations of liability and indemnification</li>
            <li>Arbitration and class action waiver</li>
            <li>Additional provisions</li>
        </List>

        <Tos>
            <p>These Terms govern your access to and use of any of the Services. Please read these Terms carefully, as they include important information about your legal rights. These Terms contain a disclaimer of warranties, limitations of liability, a time-bar for claims, and indemnification obligations, among other provisions, which could affect your legal rights. By using the Services you agree to be bound by these terms and any other terms and policies incorporated to these Terms by reference. If you do not understand or agree to these Terms, please do not use the Services.</p>

            <p>For purposes of these Terms, “you” and “your” means you as the user of the Services. If you use the Services on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>

            <p>The Celestia protocol is a decentralized modular blockchain protocol created to enable others to easily deploy their own blockchain with minimal overhead (the “Celestia Protocol”). The Celestia Protocol is not part of the Website, and is not a Service and does not constitute any element of the Services. We do not control the Celestia Protocol or any deployment of the Celestia Protocol in any testnet or mainnet environment, and accept no liability for the operation of any of the foregoing. The Celestia Protocol continues to evolve through its communities of users. We are a member of those communities and we contribute to the continuing development of the Celestia Protocol, including by making available documentation and other tools. Your use of the Celestia Protocol and any testnet or mainnet deployment of the Celestia Protocol is entirely at your own risk.</p>

            <p>SECTION 9 CONTAINS AN ARBITRATION CLAUSE AND CLASS ACTION WAIVER. BY AGREEING TO THESE TERMS, YOU AGREE (A) TO RESOLVE ALL DISPUTES (WITH LIMITED EXCEPTION) RELATED TO THE COMPANY’S SERVICES AND/OR PRODUCTS THROUGH BINDING INDIVIDUAL ARBITRATION, WHICH MEANS THAT YOU WAIVE ANY RIGHT TO HAVE THOSE DISPUTES DECIDED BY A JUDGE OR JURY, AND (B) TO WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS, AS SET FORTH BELOW. YOU HAVE THE RIGHT TO OPT-OUT OF THE ARBITRATION CLAUSE AND THE CLASS ACTION WAIVER AS EXPLAINED IN SECTION 9.</p>

            <Terms3/>
        </Tos>
    </Container>
  )
}

export default Terms2