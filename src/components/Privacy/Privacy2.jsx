import React from 'react'
import styled from 'styled-components'
import Privacy3 from './Privacy3'

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

function Privacy2() {
  return (
    <Container>
        <List>
            <li>Updating this privacy policy</li>
            <li>Your legal rights</li>
            <li>Company's collection and use of information</li>
            <li>Legal basis for processing information under the GDPR</li>
            <li>How the company shares your information</li>
            <li>Cookies and other tracking technologies</li>
            <li>User generated content</li>
            <li>Social features</li>
            <li>Third party websites and links</li>
            <li>Children's privacy</li>
            <li>Data security</li>
            <li>Data transfers</li>
            <li>Data transfer to non-eu countries</li>
            <li>How long we store your personal information</li>
            <li>How to contact us</li>
        </List>

        <Tos>
            <p>As we are committed to protect and respect your privacy, the following information will provide you an overview of what happens to your information that we collect, use, and share in connection with the Services and the purposes for which we use it. We are aware of the importance of how your data is handled and we assure you that we observe all applicable data protection laws, including the General Data Protection Regulation (EU) 2016/679 (the “GDPR”) and the Liechtenstein Data Protection Act (DPA). If you have any questions or concerns regarding data protection in connection with your use of Services, you can reach us as the responsible party in accordance with the GDPR. Unless otherwise indicated, terms used in this Regulation shall have the same meaning as under GDPR.</p>

            <p>Please read this Privacy Policy carefully. By using, accessing, or downloading any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use, access, or download any of the Services.</p>

            <Privacy3/>
        </Tos>
    </Container>
  )
}

export default Privacy2