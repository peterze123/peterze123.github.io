import {
  java,
  psql,
  spark,
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
  docker,
  threejs,
  greentree,
  netease,
  team
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "freelancing",
    title: "Freelancing"
  }
];

const services = [
  {
    title: "Backend (Core Spring, Hibernate, Spring Cloud...)",
    icon: java,
  },
  {
    title: "Data Engineering (Spark, MapReduce, Kafka...)",
    icon: spark,
  },
  {
    title: "Cloud/Devops (GCP, Docker, Ansible...)",
    icon: docker,
  },
  {
    title: "Web Scraping/DBA (Selenium, BS4, MySql/PSql/SQLite...)",
    icon: psql,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor's in CS and Business Studies",
    company_name: "NYU",
    icon: null,
    iconBg: "#383E56",
    date: "September 2020 - December 2023",
    points: [
      "Earning the distinction .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Automation Engineer Intern",
    company_name: "Numerix",
    icon: null,
    iconBg: "#E6DEDD",
    date: "September 2022 - December 2022",
    points: [
      "Designed the UI/Financial validation test suite to ensure trading model accuracy for the core risk management service, using PyTest, Selenium, Requests and Allure to achieve an increase of 50% test coverage.",
      "Implemented extra build dependencies using Ansible and TeamCity agents to conduct and monitor automated regression testing, resulting in reduction in QA testing cycles from 2 weeks to 1 week.",
      " Owned the escalation process for product regressions incident reporting via Jira, including contributions to internal Python tooling to reduce ticket resolution time by 100%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tamr",
    icon: null,
    iconBg: "#383E56",
    date: "May 2023 - September 2023",
    points: [
      "Developed an integration simplifying data-transformation, resulting in a 100% reduction in time required for SQL consolidation, by developing a no-code solution in HiveSQL, Spring Boot, React.",
      "Won the best project award for the idea and scaled it into a production feature by creating RESTful APIs with Spring to integrate the user workflow, the feature was explicitly mentioned by clients like Janssen",
      "Led development of presales field assets by leveraging company microservices in React for Proof-of-Concept demos, increasing client conversion rates by 50%.",
    ],
  },
  {
    title: "Software Engineer - Analyst",
    company_name: "Deutsche Bank",
    icon: null,
    iconBG: "#383E56",
    date: "July 2024 - Present",
    points:[
      "Collaborated with senior engineers to refactor an in-memory messaging queue solution with Spring Kafka,\n" +
      "enhancing the reliability and scalability of SPR as a whole; the cluster working with the outbox/subscription\n" +
      "services handles on-average 14000 IOPS of upstream trade events for all topics combined",
      "Engineered over 25 unit tests with Mockito, Mock Producers/Consumers, and renovated one suite of\n" +
      "integration tests utilizing Embedded Kafka, resulting in a 22% reduction of SLOC for messaging-related tests\n" +
      "in comparison to the legacy in-memory broker tests",
      "Documented more than 9 entries on the internal project Wiki, detailing POCs with Apache Java Client vs\n" +
      "Spring Kafka, partitioning strategies, and logging configurations for Embedded Kafka, etc."
    ]
  }
];


const projects = [
  {
    name: "GreenTree Capital",
    description:
    "A freelancing project of a landing site for a real estate firm based in China, notably implemented a language switch feature",
    tags: [
    ],
    image: greentree,
    source_code_link: "https://www.greentree.group/"
  },
  {
    name: "Netease Parser",
    description:
    "A freelancing project of a startup aiming to identify unlicensed music in Netease, a chinese music platform. The project consists of deploying and running ETL scripts to batch parse music",
    tags: [
    ],
    image: netease,
    source_code_link: "https://github.com/peterze123/netease_parser/blob/main/audit_generator.py"
  },
  {
    name: "Team Noteboard",
    description:
    "A full stack project focused on team collaboration, notably a draggable drawing board and a semi-cookie implementation",
    tags: [
    ],
    image: team,
    source_code_link: "https://github.com/peterze123/team_noteboard"
  },
];

export { services, technologies, experiences, projects };
