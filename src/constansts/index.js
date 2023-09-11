import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    github,
    meta,
    // icsol,
    // intershala,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C Programming",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "IC Solutions",
      icon: meta,
      iconBg: "#383E56",
      date: "Aug 2022 - Sep 2022",
      points: [
        "I gained valuable experience in various technologies including HTML, CSS, JavaScript, and Django",
        "Throughout the internship, I had the opportunity to work on a project for a client, where I developed an event scheduler application.",
        "One of the major highlights of my internship was working with Django, a high-level Python web framework",
        "I utilized my knowledge of HTML, CSS, JavaScript, and Django to develop an events scheduler application.",
        "I also gained experience in working with a team of developers and designers to create a high-quality product for a client."
      ],
    },
    {
      title: "Internshala Student Partner",
      company_name: "Internshala",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jun 2023",
      points: [
        "My experience with the ISP program has been exceptional",
        "The recognition and validation from the ISP program have been instrumental in boosting my confidence and enhancing my resume",
        "The program helped me enhance my communication skills, This experience was beyond my wildest imagination",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as Rishav is from Electrical & Electronics Eng., but he proved me wrong.",
      name: "Pavithra C R",
      designation: "Student",
      company: "Acharya",
      image: "https://res.cloudinary.com/dffhtczwf/image/upload/v1694271419/Portfolio21/user.name/j2vk3tt7lz9bx6imt3mk.png",
    },
  ];
  
  const projects = [
    {
      name: "CampIndia",
      description:
        "Campground India is a website where people can find a place to do camping. People can book the campgrounds in various city across india. User can make their own campground and can review on other's campground. User can also edit and delete their own campground.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rishavConsoleLog21/CampIndia",
    },
    {
      name: "EV Charging & Parking",
      description:
        "The Project to be implemented here is a Smart EV Charging Station. As we know, electric vehicles (EVs) are being adopted at a rapid rate, necessitating the creation of a sophisticated charging infrastructure to support their widespread use.",
      tags: [
        {
          name: "C Programming",
          color: "blue-text-gradient",
        },
        {
          name: "Embedded C",
          color: "green-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "React JS ",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rishavConsoleLog21/Smart-EV-Charging-Parking-Station.git",
    },
    {
      name: "IoT Based Garbage Monitoring System",
      description:
        "In public places and villages garbage accumulation is the serious problem now a day. The unhygienic condition leads to different diseases and spoil the environment. This can be solved by maintaining the smart dustbin in the surroundings.",
      tags: [
        {
          name: "C Programming",
          color: "blue-text-gradient",
        },
        {
          name: "IoT",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/rishavConsoleLog21",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };