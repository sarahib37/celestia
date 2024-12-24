import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 5em;
    width: 65%;

    h3{
        font-size: 2em;
        font-family: Ruberoid;
        font-weight: 500;
    }

    p{
        line-height: 1.8;
        font-weight: 400;
        font-size: 1.1em;
    }
`

function Technology2() {
  return (
    <Container>
        <div>
            <h3>Separation of consensus and execution layers</h3>
            <p>Standard “world computer” blockchains bundle consensus and execution while Celestia decouples them. Celestia provides a pluggable consensus layer, allowing developers to deploy their own execution layers to run on top. This enables more customizability and sovereignty for applications built on Celestia.</p>
        </div>

        <div>
            <h3>Data availability proofs</h3>
            <p>Celestia uses a 2-dimensional reed-solomon encoding scheme to encode block data such that only a small sample of data is enough to verify with statistical certainty that the entire block has been published. If data is incorrectly encoded, the network is notified via a data availability fraud proof.</p>
        </div>

        <div>
            <h3>Rollups for off-chain execution</h3>
            <p>Celestia is perfectly suited for a novel scaling solution called rollups which push state execution off-chain and rely on a base chain for consensus and data availability. Optimistic rollups require data availability to detect fraud and zero-knowledge rollups require data availability to reconstruct the state of the chain.</p>
        </div>

        <div>
            <h3>Secure light clients for interoperability</h3>
            <p>Cross-chain interoperability relies on light clients which are typically not secure because they make an honest majority assumption. Light clients in Celestia do not make an honest majority assumption, unlocking truly secure cross-chain interoperability. Connecting chains will be as simple as deploying a smart contract.</p>
        </div>

        <div>
            <h3>Celestia is for decentralized apps what cloud computing is for the traditional web.</h3>
            <p>Web infrastructure evolved from individual servers, to shared hosting services and finally individual virtual machines on a shared server. Similarly, decentralized infrastructure is evolving from individual execution chains to shared execution chains and finally individual execution chains on a shared consensus layer.</p>
        </div>
    </Container>
  )
}

export default Technology2