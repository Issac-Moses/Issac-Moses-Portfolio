import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Issac",
  lastName: "Moses D",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data-Mind Fusion Specialist",
  avatar: "/images/issac1.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Issac-Moses",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/i%EF%BD%93%EF%BD%93-a-c-m-%E5%8F%A3%EF%BD%93%E3%83%A2%EF%BD%93-d-12837831b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:issacmoses19082005@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data-Mind Fusion Specialist</>,
  subline: (
    <>
      I'm Moses, a Data-Mind Fusion Specialist at <InlineCode>Spex</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://app.cal.com/bookings/upcoming",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Issac Moses D is a Data-Mind Fusion Specialist with a passion for transforming complex challenges 
        into simple, elegant design solutions. He work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Intern Journey",
    experiences: [
      {
        company: "Intenzvalley",
        timeframe: "Dec 2024 - Feb 2025",
        role: "Web Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the Various Web platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/about/Data.mp4",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Accenture",
        timeframe: "Jan - Mar 2024",
        role: "Data Collusion Analyser",
        achievements: [
          <>
            Developed a AI Model that unified the brand across multiple platforms, improving
            User attraction rate by 40%.
          </>,
          <>
            The cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "St Peter's College of Engineering and Technology",
        description: <>Completed B Tech in "Artificial Intelligence and Data Science" Domain.</>,
      },
      {
        name: "Velammal Group of Schools",
        description: <>Completed HSSLC Grade with percentage of 80.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/about/NLP1.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/about/NLP2.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/about/Marcello.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Summit",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Activity",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "My Vault",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-17.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-18.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-19.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-20.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-21.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-22.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-23.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-24.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-25.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-26.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-27.jpg",
      alt: "image",
      orientation: "vertical"
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
