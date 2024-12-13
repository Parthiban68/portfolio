
import { color } from "framer-motion";
import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  docker,
  spring,
  mysql,
  java,
  flutter,
  expressjs,
  dart,
  bootstrap,
  Doc
} from "../assets";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    color: '#ff6d00'
  },
  {
    name: "CSS 3",
    icon: css,
    color: '#039be5'
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: '#ffd600'
  },
  {
    name: "React JS",
    icon: reactjs,
    color: '#53c1de'
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: '#00b4d2'
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: '#21a366'
  },
  {
    name: "MongoDB",
    icon: mongodb,
    color:"#4caf50"
  },
  {
    name: "Three JS",
    icon: threejs,
    color:"#575d61"
  },
  {
    name: "git",
    icon: git,
    color:"#f4511e"
  },
  {
    name: "Docker",
    icon: docker,
    color:"#01579b"
  },
  {
    name: "spring",
    icon: spring,
    color:"#8bc34a"
  },
  {
    name: "Mysql",
    icon: mysql,
    color:"#056d61"
  },
  {
    name: "java",
    icon: java,
    color:"#381fd2"
  },
  {
    name: "flutter",
    icon: flutter,
    color:"#01579b"
  },
  {
    name: "Express JS",
    icon: expressjs,
    color:"#575d61"
  },
  {
    name: "dart",
    icon: dart,
    color:"#42a5f5"
  },
  {
    name: "Botstrap",
    icon: bootstrap,
    color:"#42a5f5"
  },
];

const certificates = [
  {
    id: 1,
    title: "Docker and Kubernetes Fundamentals",
    details: "Scaler Masterclass Certification",
    img: Doc,
  },
  {
    id: 2,
    title: "Kafka and Zookeeper Masterclass",
    details: "In-depth understanding of Kafka",
    img: "/assets/certificates/certificate2.jpg",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    details: "KGisl Micro College Certificate",
    img: "/assets/certificates/certificate3.jpg",
  },
  {
    id: 4,
    title: "React and Node.js Development",
    details: "Advanced MERN Stack Skills",
    img: "/assets/certificates/certificate4.jpg",
  },
];

const projects = [
  {
    id: 1,
    title: 'Hostel Management',
    description: 'An advanced software solution to streamline hostel administration, managing student accommodations, payments, and maintenance requests.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Certificate Locker',
    description: 'A secure and centralized platform for storing and managing digital certificates with encryption and authentication.',
    image: 'https://via.placeholder.com/300x200', 
  },
  {
    id: 3,
    title: 'Hostel Management',
    description: 'An advanced software solution to streamline hostel administration, managing student accommodations, payments, and maintenance requests.',
    image: 'https://via.placeholder.com/300x200', 
  },
  {
    id: 4,
    title: 'Certificate Locker',
    description: 'A secure and centralized platform for storing and managing digital certificates with encryption and authentication.',
    image: 'https://via.placeholder.com/300x200', 
  },
];

export { technologies, certificates, projects};
