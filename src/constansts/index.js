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
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
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
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rishav optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CampIndia",
      description:
        "Campground India is a website where people can find a place to do camping. People can book the campgrounds in various city across india.",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };