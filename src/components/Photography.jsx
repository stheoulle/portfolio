import PhotoCard from "./PhotoCard";
const works = [
  {
    imgSrc: '/images/photography/descente.JPG', // Replace with relevant image path
    title: 'Descente de VTT',
    tags: ['2021', 'Rust', 'Development'],
    projectLink: 'https://github.com/dev-sys-do/sealci'
  },
  {
    imgSrc: '/images/photography/fire.JPG', // Replace with relevant image path
    title: 'Faire feu de tout bois',
    tags: ['2022', 'TailwindCSS', 'AdonisJS'],
    projectLink: 'https://beep.ovh'
  },
  
  {
    imgSrc: '/images/photography/fireworks.JPG', // Replace with relevant image path
    title: '14 juillet à Montpellier',
    tags: ['2023', 'Gephi', 'Data'],
    projectLink: 'https://github.com/stheoulle/twitch-data-visualization'
  },
  {
    imgSrc: '/images/photography/fise.JPG', // Replace with relevant image path
    title: 'FISE',
    tags: ['2024', 'Conference', 'DevOps'],
    projectLink: 'https://polycloud.fr/'
  },
  {
    imgSrc: '/images/photography/flower.JPG', // Replace with relevant image path
    title: 'Fleur',
    tags: ['2024', 'CLI', 'Backups'],
    projectLink: 'https://github.com/somoslosdorados/KDNA'
  },
  {
    imgSrc: '/images/photography/saintebarbe1.JPG', // Replace with relevant image path
    title: 'Festivité de la Sainte-Barbe',
    tags: ['2023', 'Gephi', 'Data'],
    projectLink: 'https://github.com/stheoulle/twitch-data-visualization'
  },
  
  {
    imgSrc: '/images/photography/omaha.JPG', // Replace with relevant image path
    title: "Plage d'Omaha",
    tags: ['2022', 'TailwindCSS', 'AdonisJS'],
    projectLink: 'https://beep.ovh'
  },  
  
  {
    imgSrc: '/images/photography/saintebarbe2.JPG', // Replace with relevant image path
    title: 'Festivité de la Sainte-Barbe',
    tags: ['2024', 'Conference', 'DevOps'],
    projectLink: 'https://polycloud.fr/'
  },
  {
    imgSrc: '/images/photography/saintetienne.JPG', // Replace with relevant image path
    title: 'Saint-Etienne',
    tags: ['2024', 'CLI', 'Backups'],
    projectLink: 'https://github.com/somoslosdorados/KDNA'
  },
  {
    imgSrc: '/images/photography/salagou.JPG', // Replace with relevant image path
    title: 'Lac du Salagou',
    tags: ['2021', 'Rust', 'Development'],
    projectLink: 'https://github.com/dev-sys-do/sealci'
  },
  {
    imgSrc: '/images/photography/heart.JPG', // Replace with relevant image path
    title: 'Coeur',
    tags: ['2021', 'Rust', 'Development'],
    projectLink: 'https://github.com/dev-sys-do/sealci'
  },
  {
    imgSrc: '/images/photography/stmichel.JPG', // Replace with relevant image path
    title: 'Mont Saint-Michel',
    tags: ['2022', 'TailwindCSS', 'AdonisJS'],
    projectLink: 'https://beep.ovh'
  },
  
  {
    imgSrc: '/images/photography/vtt.JPG', // Replace with relevant image path
    title: 'Cross-country olympique',
    tags: ['2023', 'Gephi', 'Data'],
    projectLink: 'https://github.com/stheoulle/twitch-data-visualization'
  },
  {
    imgSrc: '/images/photography/olympe.JPG', // Replace with relevant image path
    title: 'Jeux olympiques',
    tags: ['2024', 'Conference', 'DevOps'],
    projectLink: 'https://polycloud.fr/'
  }
];


const Photography = () => {
    return (
        <section className="section"
        id="photography">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My Works as a Photograph
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink, classes }, key) => (
                        <PhotoCard
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

export default Photography;