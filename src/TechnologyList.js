import Web from './assets/web.webp'
import Crypto from './assets/crypto.webp'
import Develop from './assets/develop.webp'
import Ecosystem from './assets/ecosystem2.webp'
import Modern from './assets/modern.webp'
import ModernEco from './assets/modernEco.webp'

const TechnologyList = [
    {
        image: Web,
        title: 'Early web (1990s)',
        description: 'Each website had its own physical server.'
    },

    {
        image: Crypto,
        title: 'Early crypto ecosystem (2008+)',
        description: 'Each dapp had its own blockchain and consensus.'
    },

    {
        image: Develop,
        title: 'Developing web (2000s)',
        description: 'Website used shared hosting providers.'
    },

    {
        image: Ecosystem,
        title: 'Developing crypto ecosystem (2014+)',
        description: 'Dapps used shared smart contract blockchains.'
    },

    {
        image: Modern,
        title: 'Modern web (2010s)',
        description: 'Websites run on virtual machines, that share physical machines.'
    },

    {
        image: ModernEco,
        title: 'Modern crypto ecosystem (2021+)',
        description: 'Dapps run on app-specific chains, that share consensus layers.'
    }
]

export default TechnologyList;