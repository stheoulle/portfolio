import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/kubernetes.svg",
    label: "Kubernetes",
    desc: "Container Orchestration",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/images/terraform.svg",
    label: "Terraform",
    desc: "Infrastructure as Code",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/linux.svg",
    label: "Linux",
    desc: "Operating System",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },

  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/postgres.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 ">Essential Tools I use</h2>
        <p className="">
          Discover the tools and technologies I use to create my applications
          and websites.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
