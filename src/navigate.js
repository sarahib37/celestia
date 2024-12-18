import Logo from "../src/assets/logo.svg"
import Documentation from '../src/assets/documentation.svg'
import Books from '../src/assets/books.svg'
import Research from '../src/assets/research.svg'
import Devnet from '../src/assets/devnet.svg'
import Github from '../src/assets/github.svg'
import Forum from '../src/assets/forum.svg'
import Technology from '../src/assets/technology-svg.svg'

const Navigate = [
    {
        nav: "Learn",
        subNav: [{
            title: "Start here",
            subTitle: "What is Celestia?",
            icon: `${Logo}`,
            alt: "Logo image",
            link: null
        },

        {
            title: "Learn",
            subTitle: "Intro to data availability",
            icon: `${Documentation}`,
            alt: 'Documentation image',
            link: '/what-is-da'
        },

        {
            title: "Dive deep",
            subTitle: "Dive into modular",
            icon: `${Books}`,
            alt: 'Books image',
            link: null
        },

        {
            title: "Research paper",
            subTitle: "Read the whitepaper",
            icon: `${Research}`,
            alt: 'Research image',
            link: null
        }
        ]
    }, 
    {
        nav: "Build",
        subNav: [{
            title: "Build",
            subTitle: "Start with the dev portal",
            icon: `${Devnet}`,
            alt: 'Devnet',
            link: '/build'
        },

        {
            title: "Celestia Documentation",
            subTitle: "Read the docs",
            icon: `${Documentation}`,
            alt: 'Documentation',
            link: null
        },

        {
            title: "Github repositories",
            subTitle: "View the GitHub repos",
            icon: `${Github}`,
            alt: 'Github',
            link: null
        },
        ]
    }, 
    {
        nav: "Community",
        subNav: [{
            title: "Directly verify",
            subTitle: "Run a node",
            icon: `${Technology}`,
            alt: 'Technology',
            link: '/node' 
        },

        {
            title: "Celestia community events",
            subTitle: "Events",
            icon: `${Documentation}`,
            alt: 'Documentation',
            link: '/events' 
        },

        {
            title: "Celestia community socials",
            subTitle: "Social",
            icon: `${Forum}`,
            alt: 'Social',
            link: '/social'
        },
        ]
    }, 
]

export default Navigate