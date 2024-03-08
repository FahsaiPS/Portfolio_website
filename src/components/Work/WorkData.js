import { LuGithub } from "react-icons/lu";
import DailyCal from "../../assets/Dailycal.png";
import SiamSilk from "../../assets/SiamSilk.png";
import CarPark from "../../assets/CarPark.jpg";
import MusicTown from "../../assets/MusicTown.jpg";
import SpookyRun from "../../assets/SpookyRun.png";
import LateRegis from "../../assets/LateRegis.jpg";
import KookKai from "../../assets/KookKai.png";
import { FaFigma } from "react-icons/fa";

export const workData = [
    {
        id:1,
        image: DailyCal,
        title: 'Daily Calories',
        description: 'UX/UI Design and Development. Daily Calories is calorie counter application. Calculate user’s BMR and tracking calories',
        tools: ['Android Studio', 'SQLite'],
        icon: LuGithub,
        url: "https://github.com/FahsaiPS/Daily_Calories",
        category: 'app',
    },
    {
        id:2,
        image: SiamSilk,
        title: 'Siam Silk',
        description: 'UX/UI Design and Develop with team. Siam Silk is e-commerce website that sell silk fabric products and provides information about silk.',
        tools: ['React.js', 'Express.js','MongoDB'],
        icon: LuGithub,
        url: "https://github.com/FahsaiPS/siamsilk-front",
        category: 'web',
    },
    {
        id:3,
        image: CarPark,
        title: 'Car Parking',
        description: 'Take the project on gitlab to develop upon it with a redesign of the UX/UI and add features like searching, deleting, and displaying the number of remaining parking places',
        tools: ['HTML', 'CSS','JavaScript'],
        icon: LuGithub,
        url: "https://github.com/FahsaiPS/cs266-car-parking",
        category: 'web',
    },
    {
        id:4,
        image: KookKai,
        title: 'KookKai Daily',
        description: 'Design UX/UI based on user personas. KookKai Daily is an application for chicken farm company owners.',
        tools: ['Figma'],
        icon: FaFigma,
        url: "https://www.figma.com/file/hbTZL9dv5TQqCXACSEk1ux/Prototype_DailyKookKook?type=design&node-id=0%3A1&mode=design&t=qLvXqfe4DQsWMgU1-1",
        category: 'design',
    },
    {
        id:5,
        image: MusicTown,
        title: 'Music Town',
        description: 'Database System Project. Music Town is e-commerce website that sell K-pop albums',
        tools: ['HTML', 'CSS','JavaScript', 'PHP', 'MySQL'],
        icon: LuGithub,
        url: "https://github.com/FahsaiPS/musictown",
        category: 'web',
    },
    {
        id:6,
        image: SpookyRun,
        title: 'Spooky Run',
        description: 'Design and Develop interactive website. Spooky Run is Endless running game',
        tools: ['WebGL2', 'Three.js','Blender'],
        icon: LuGithub,
        url: "https://github.com/FahsaiPS/Interactive-Application-Project",
        category: 'web',
    },
    {
        id:7,
        image: LateRegis,
        title: 'Late Registration',
        description: 'UX/UI Design and Develop with team. Website for students can enroll in classes, and teachers can view their requests',
        tools: ['HTML', 'CSS','JavaScript','Node.js'],
        icon: LuGithub,
        url: "https://gitlab.com/thanisa.plu/project-group3_cs264/-/tree/main",
        category: 'web',
    },

];

export const projectsNav =[
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
];