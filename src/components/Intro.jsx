import React, { useEffect } from 'react';
import DataADS from '../assets/DataStructure.webp';
import styled from 'styled-components';

const Container = styled.section`
    padding: 1em 5em;
    margin-bottom: 7em;
    margin-top: 4.5em;

    @media (min-width: 768px) {
        padding: 1em 13em;
        margin-bottom: 15em;
        margin-top: 9em;
      }

    p, li{
        margin-bottom: 1rem;
        font-size: 1.15em;
        font-weight: 300;
        letter-spacing: .15px;
        line-height: 1.5;
    }

    h4{
        font-family: Ruberoid;
        font-size: 2em;
        margin-bottom: 0;
        letter-spacing: .15px;
        font-weight: 500;
        padding: 0;

        @media (min-width: 768px) {
            font-size: 2.5em;
          }
    }

    img{
        width: 100%;
    }

`

const Title = styled.h1`
    letter-spacing: .15px;
    line-height: 1.5;
    font-size: 2.5em;
    font-family: Ruberoid;
    padding-top: 0;
    margin-top: .5em;
    margin-bottom: 0;

    @media (min-width: 768px) {
        font-size: 4.3em;
      }
`

function Intro() {

  useEffect(() => {
    window.scroll(0,0)
  })

  return (
    <Container className='resources-body'>
        <Title>What is data availability?</Title>
        <p>What’s stopping crypto applications from becoming accessible to everyday people?</p>
        <p>Well, it’s all because of the data availability constraint that crypto applications face. Data availability (DA) is a pretty misunderstood and unknown topic that is fundamental to blockchains. This guide is here to help you understand data availability, what a data availability layer is, and the why’s of Celestia’s DA layer.</p>
        <p>Now first…</p>

        <h4>Why does data availability even matter?</h4>
        <p>Web apps have massive data requirements, so cloud companies build vast server warehouses to process enough data. Data availability presents a similar scaling bottleneck for crypto applications on all blockchains.</p>
        <p>Especially for rollups and layer 2 blockchains, data availability is a significant constraint. Low DA throughput causes excessive fees, restricting the types of apps that developers can build. Overall, data availability is roughly 95% of the costs that rollups pay. And once DA isn’t a constraint, developers can unlock new monetization opportunities and new capabilities for building fully-onchain applications.</p>
        <p>For the rest of this guide, we’ll call any chain that uses Celestia a rollup for simplicity.</p>
        <p>But data availability isn’t just a resource that rollups consume. DA allows anyone to directly verify that a blockchain is running correctly. Until now, rollups have had to trust small committees to relieve the DA constraint. That means anyone who wants to interact with the rollup must rely on trusted third parties to access and verify the network. So, fixing the DA constraint with proofs instead of committees allows rollups to regain verifiability.</p>
        
        <h4>What is data availability?</h4>
        <p>Data availability is about proving data was published to the network. So, when a chain produces new blocks, nodes verify DA by downloading all the data. Although there is a more efficient way to verify DA (more on this later).</p>
        <p>Really, data availability is like streaming a sports game. DA lets anyone download transactions to see what happened, just like streaming lets anyone watch a game if they aren’t at the stadium.</p>
        <p>The one thing that data availability doesn’t cover is the long-term storage of transaction data. DA is just about publishing data and temporary storage.</p>
        <img src={DataADS} alt='DA vs DS Banner'/>
        <p>The difference might not seem important, but DA and long-term data storage actually have varying security properties.</p>
        
        <h4>Data availability layers</h4>
        <p>Now there are specialized providers known as data availability layers (DA layers) that supply DA to other chains. Let’s look at two distinct types of DA layers:</p>
        <ul>
            <li>
                Data availability committees: a small, permissioned committee that is trusted to provide DA.
            </li>
            <li>
                DA layers with data availability sampling (DAS): a decentralized network that provides DA and allows anyone to efficiently verify via DAS.
            </li>
        </ul>
        <p>And a DA layer with DAS is what Celestia is…</p>
        
        <h4>Celestia’s DA layer</h4>
        <p>So, what does Celestia’s DA layer actually do? Well, Celestia provides abundant DA to address the scaling bottleneck. And it does this with data availability sampling (DAS).</p>
        <p>DAS is a new technology that enables Celestia to securely increase its blockspace with more users (light nodes). And the way rollups use Celestia is simple. All they really need to do is use Celestia’s DA layer to publish and temporarily access their transaction data.</p>
        <p>Now, with ~95% percent lower DA costs, developers can focus on improving their app without the burden of high fees or unnecessary gas cost optimizations. Ultimately, low-cost DA unlocks new capabilities for developers to build fully onchain apps, like onchain games or generative art. See the cost savings for your chain with Celestia underneath.</p>
        <p>The other important aspect of DAS is that it enables users to secure and directly verify Celestia. Without DAS, DA layers have to give up verifiability and security for higher throughput. So users have to trust validators or committees to ensure the chain is running correctly. With DAS, users can secure and directly verify Celestia’s DA layer with proofs instead of a trusted committee.</p>
        
        <h4>How developers can build on Celestia’s DA layer</h4>
        <p>You can launch your chain as easily as a smart contract with Celestia underneath. Here’s how you can start:</p>
        <ul>
            <li>Deploy fast with an Ethereum L2 using leading rollup frameworks.</li>
            <li>Transform nearly any VM into its own sovereign chains.</li>
            <li>One-click deployment on managed infrastructure using a Rollups-as-a-Service provider.</li>
        </ul>
        <h4>To sum it all up</h4>
        <ul>
            <li>Data availability is a core scaling bottleneck for crypto applications and is the vast majority of costs that rollups and Layer 2s pay.</li>
            <li>Data availability is about proving that data was published by allowing anyone to download it for a short period of time.</li>
            <li>A DA layer is a blockchain that rollups and L2s publish their transaction data to.</li>
            <li>Celestia’s DA layer eliminates data availability as a core scaling bottleneck, dropping costs for developers by ~95% and enabling them to build fully-onchain apps.</li>
        </ul>
    </Container>
  )
}

export default Intro