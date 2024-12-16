import Arbitum from './assets/arbitrum.webp'
import Dymension from './assets/dymension.webp'
import OP from './assets/opstack.webp'
import Polygon from './assets/polygon.webp'
import Rollkit from './assets/rollkit.webp'
import Sovereign from './assets/sovereign.webp'

const Framework = [
    {
        title: 'Arbitrum Orbit',
        sub: 'Arbitrum Orbit is the ideal way to permissionlessly launch your own custom chain.',
        button: ['Explore Arbitrum Orbit'],
        stack: 'ETHEREUM',
        logo: Arbitum
    },
    {
        title: 'Dymension',
        sub: 'Dymension is a home for easily deployable and lightning fast app-chains, called RollApps.',
        button: ['Explore Dymension'],
        stack: null,
        logo: Dymension
    },
    {
        title: 'OP Stack',
        sub: 'The OP Stack is a modular, open-source blueprint for highly scalable, highly interoperable blockchains of all kinds.',
        button: ['Explore OP Stack', 'Ethereum fallback documentation'],
        stack: 'ETHEREUM',
        logo: OP
    },
    {
        title: 'Polygon CDK',
        sub: 'Polygon CDK (Chain Development Kit) makes it easy for developers to design and launch zero-knowledge (ZK) L2s on Ethereum, on demand.',
        button: [],
        stack: 'ETHEREUM',
        logo: Polygon
    },
    {
        title: 'Rollkit',
        sub: 'Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack.',
        button: ['Explore Rollkit'],
        stack: 'SOVEREIGN',
        logo: Rollkit
    },
    {
        title: 'Sovereign SDK',
        sub: 'A framework for building seamlessly scalable and interoperable rollups that can run on any blockchain.',
        button: ['Explore Sovereign SDK'],
        stack: 'SOVEREIGN',
        logo: Sovereign
    }
]

export default Framework