import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Issac",
  lastName: "Moses D",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer",
  avatar: "public/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi","Tamil"], // optional: Leave the array empty if you don't want to display languages
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
    link: "https://github.com/Issac-Moses?fbclid=PAZXh0bgNhZW0CMTEAAabtnJIyQFgHJaadVMJVCVwbIgbuZ_uitQ-GPXO_N_t967b7a2WLoKbMk3k_aem_yHruOoGpgSItj6x_thmA2A",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/i%EF%BD%93%EF%BD%93-a-c-m-%E5%8F%A3%EF%BD%93%E3%83%A2%EF%BD%93-d-12837831b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxiMJkZDRTn2Qv2NfYYRqPw%3D%3D",
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
  headline: <>AI Engineer & Developer</>,
  subline: (
    <>
      I'm Issac Moses, a AI engineer at <InlineCode>Spex</InlineCode>, where I craft intuitive
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
        Issac Moses D is an AI Engineer based in Tamil Nadu with a passion for developing intelligent systems
        and solving complex challenges using Artificial Intelligence. His work spans machine learning,
        data science, and AI-driven applications, focusing on building efficient models and deploying real-world AI solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Marcello Tech",
        timeframe: "2024 (Mar - May)",
        role: "DataBase Engineer",
        achievements: [
          <>
            Optimized database architecture for improved efficiency,
            resulting in a 20% increase in query performance
          </>,
          <>
            Led the integration of automation tools into database workflows,
            enabling engineers to process data 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Marcello.mp4",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "InternzValley",
        timeframe: "2025 (Jan - Feb)",
        role: "Web Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
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
        name: "St. Peter's College of Engineering & Technology",
        description: <>Studied B.Tech (Aritificial Intelligence and Data Science).</>,
      },
      {
        name: "Velammal Group of Schools",
        description: <>Completed 12 Grades at 80 %.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Natural Language Processing (NLP)",
        description: <>Able to prototype in 3D Devloing with unnatural Speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/NLP1.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/NLP2.mp4",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Engineering & Analysis",
        description: <> Strong background in data manipulation and analysis using Pandas, NumPy, and SQL, ensuring high-quality, scalable data pipelines.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Data.mp4",
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
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My Certificate gallery",
  description: `A Certificate collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal"
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
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
