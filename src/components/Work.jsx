import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/seal-ci.svg', // Replace with relevant image path
    title: 'SealCI',
    tags: ['CI', 'Rust', 'Development'],
    projectLink: 'https://github.com/dev-sys-do/sealci'
  },
  {
    imgSrc: '/images/beep.svg', // Replace with relevant image path
    title: 'Beep - Discord Clone',
    tags: ['React', 'TailwindCSS', 'AdonisJS'],
    projectLink: 'https://beep.ovh'
  },
  
  {
    imgSrc: '/images/twitch.svg', // Replace with relevant image path
    title: 'Twitch Data Visualization',
    tags: ['Python', 'Gephi', 'Data'],
    projectLink: 'https://github.com/stheoulle/twitch-data-visualization'
  },
  {
    imgSrc: '/images/polycloud.svg', // Replace with relevant image path
    title: 'Polycloud Conference',
    tags: ['Cloud', 'Conference', 'DevOps'],
    projectLink: 'https://polycloud.fr/'
  },
  {
    imgSrc: '/images/kdna.svg', // Replace with relevant image path
    title: 'KDNA',
    tags: ['Python', 'CLI', 'Backups'],
    projectLink: 'https://github.com/somoslosdorados/KDNA'
  }
];


const Work = () => {
    return (
        <section className="section"
        id="work">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My Works
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink, classes }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes={classes}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
    }

export default Work;