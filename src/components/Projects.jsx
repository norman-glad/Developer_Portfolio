import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

// Tech stack icons as SVG components
const TechIcons = {
  react: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#61DAFB">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
      <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 21c5.523 0 10-4.03 10-9s-4.477-9-10-9S2 7.03 2 12s4.477 9 10 9Z"/>
      <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933">
      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.128-.11.201v8.457c0 .073.037.166.11.201l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.774.165Z"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218Z"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4169E1">
      <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3418-2.2573.1494-2.4061.0776 1.1667-1.8865 2.0564-4.1178 2.4205-5.9167.0872-.4273.1269-.8069.1269-1.1303 0-.4103-.0489-.7854-.1587-1.1129a4.8523 4.8523 0 0 0-.7177-1.3781c-1.0722-1.4369-2.8632-2.3592-5.0322-2.5921-.5683-.0605-1.1612-.0706-1.7649-.0317a14.5765 14.5765 0 0 0-.182-.0298c-.9473-.1455-1.8646-.1711-2.7221-.0745-2.5057.2832-4.7555 1.4033-6.3308 3.1493-1.344 1.4888-2.0896 3.3393-2.1568 5.3477-.0274.5929.0253 1.2347.1513 1.9026.0398.2073.0871.4124.1409.6166-.3967.9663-.8119 2.1433-1.0085 3.5103-.143 1.0098-.1191 2.5813.6054 3.8908.7755 1.4017 2.0953 2.2285 3.7219 2.3286.1194.0073.2378.0108.355.0108 1.1605 0 2.2033-.3754 2.971-.8286 1.5207-.5707 2.7834-.9734 3.9555-1.1287.0155-.002.0309-.0045.0452-.0072.5796.3343 1.2433.5738 2.0097.7096.4927.0875 1.0065.1309 1.5347.1309.5622 0 1.1387-.0486 1.7151-.1457 1.7543-.2958 3.1865-1.0552 4.1399-2.196.9533-1.1408 1.2647-2.4308 1.4254-3.2955.0816-.4392.099-.7767.0668-.9785Z"/>
    </svg>
  ),
  dotnet: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#512BD4">
      <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"/>
    </svg>
  ),
  kotlin: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7F52FF">
      <path d="M24 24H0V0h24L12 12Z"/>
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3DDC84">
      <path d="M17.523 15.341c-.5 0-.917.417-.917.917s.417.916.917.916.917-.416.917-.916-.417-.917-.917-.917zm-11.046 0c-.5 0-.917.417-.917.917s.417.916.917.916.917-.416.917-.916-.417-.917-.917-.917zm11.4-6.027 1.95-3.382a.403.403 0 0 0-.147-.55.403.403 0 0 0-.55.147l-1.974 3.416A11.67 11.67 0 0 0 12 7.812a11.67 11.67 0 0 0-5.156 1.133L4.87 5.529a.403.403 0 0 0-.55-.147.403.403 0 0 0-.147.55l1.95 3.382A10.653 10.653 0 0 0 1.46 17.5h21.08a10.653 10.653 0 0 0-4.663-8.186Z"/>
    </svg>
  ),
  jwt: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000000">
      <path d="M10.2 0v6.456L12 9.778l1.8-3.322V0h-3.6ZM13.8 24v-6.456L12 14.222l-1.8 3.322V24h3.6ZM24 10.2h-6.456L14.222 12l3.322 1.8H24v-3.6ZM0 13.8h6.456L9.778 12l-3.322-1.8H0v3.6Z" fill="#00F2E6"/>
      <path d="m18.768 5.232-4.567 2.636 1.8 3.117 5.13-2.962-2.363-2.791Z" fill="#00B9F1"/>
      <path d="M5.232 18.768 9.8 16.132l-1.8-3.117-5.131 2.962 2.363 2.791Z" fill="#00B9F1"/>
      <path d="m18.768 18.768-2.363-2.791-5.13-2.962 1.8-3.117 4.567 2.636Z" fill="#D63AFF"/>
      <path d="m5.232 5.232 2.363 2.791 5.13 2.962-1.8 3.117L6.36 11.466Z" fill="#D63AFF"/>
    </svg>
  ),
  fastify: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000000">
      <path d="M23.245 6.49L24 4.533l-.031-.121-7.473 2.879c.109-.406.163-.807.163-1.198 0-.263-.021-.523-.063-.779l7.633-2.94-.063-.115-7.817 3.01a4.907 4.907 0 00-.325-.573l-.207-.3 7.855-4.725-.087-.101-8.063 4.849a5.564 5.564 0 00-3.349-1.477c-.163-.933-.62-1.751-1.298-2.323a3.847 3.847 0 00-2.495-.919 3.86 3.86 0 00-2.597.997c-.71.641-1.127 1.49-1.233 2.455C2.282 3.68.814 4.76.132 6.323l-.065.135 8.168.117a5.519 5.519 0 00-.213 1.477l-8.021-.115v.125l8.027.115c.03.35.09.698.181 1.041L.028 10.065v.109l8.419-.813c.103.297.227.588.373.87l-8.679 1.728.021.109 8.927-1.778c.143.235.302.461.477.678l-9.067 3.084.041.105 9.293-3.163c.158.174.327.34.506.496L.001 17.103l.051.098 10.528-5.412c.18.137.369.265.566.384l-10.35 6.769.063.092 10.543-6.894c.207.112.422.213.643.301l-9.917 8.112.075.083 10.067-8.235c.21.07.425.128.643.175l-8.538 8.638.084.07 8.635-8.737a5.577 5.577 0 002.334-.281l-6.62 8.433.091.06 6.68-8.51a5.58 5.58 0 001.605-1.161l-4.016 7.779.097.046 4.049-7.843c.143-.198.275-.403.395-.616l-1.17 6.682.103.025 1.182-6.747c.093-.236.17-.476.233-.72l1.499 5.332.105.002-1.516-5.389c.043-.247.071-.497.085-.749l3.746 3.894.095-.035-3.787-3.937c-.007-.308-.036-.614-.088-.917l5.357 2.5.077-.068-5.433-2.536a5.55 5.55 0 00-.28-.819l6.255 1.277.057-.094-6.369-1.3a5.543 5.543 0 00-.51-.7zm-17.9 5.942l-.105-.217c-.4-.823-.584-1.723-.55-2.611l.003-.07.655.01c.146.002.26.124.254.27l-.024.59a3.988 3.988 0 00.398 1.89l.055.113c.064.128.016.284-.112.349l-.505.251a.25.25 0 01-.069.015z"/>
    </svg>
  ),
};

// Category badge component
const CategoryBadge = ({ category, items }) => {
  const categoryStyles = {
    frontend: { bg: 'bg-blue-500/20', border: 'border-blue-400/50', text: 'text-blue-300', icon: '⚛️' },
    backend: { bg: 'bg-green-500/20', border: 'border-green-400/50', text: 'text-green-300', icon: '⚙️' },
    database: { bg: 'bg-amber-500/20', border: 'border-amber-400/50', text: 'text-amber-300', icon: '🗄️' },
    auth: { bg: 'bg-purple-500/20', border: 'border-purple-400/50', text: 'text-purple-300', icon: '🔐' },
    mobile: { bg: 'bg-pink-500/20', border: 'border-pink-400/50', text: 'text-pink-300', icon: '📱' },
    visualization: { bg: 'bg-cyan-500/20', border: 'border-cyan-400/50', text: 'text-cyan-300', icon: '📊' },
  };

  const style = categoryStyles[category] || categoryStyles.frontend;

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-2 flex-1 min-w-[120px]`}>
      <div className={`${style.text} text-[10px] uppercase tracking-wider font-bold mb-1 flex items-center gap-1`}>
        <span>{style.icon}</span>
        {category}
      </div>
      <div className="flex flex-wrap gap-1">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1 bg-night/50 rounded px-1.5 py-0.5">
            {TechIcons[item.icon] && <span className="opacity-90">{TechIcons[item.icon]}</span>}
            <span className="text-timberWolf text-[11px] font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated gradient backgrounds with patterns
const projectBackgrounds = [
  // Bookstore - Deep Purple with floating books pattern
  `radial-gradient(ellipse at 20% 80%, rgba(102, 126, 234, 0.4) 0%, transparent 50%),
   radial-gradient(ellipse at 80% 20%, rgba(118, 75, 162, 0.4) 0%, transparent 50%),
   linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`,
  // Todo App - Teal productivity vibes
  `radial-gradient(ellipse at 30% 70%, rgba(17, 153, 142, 0.4) 0%, transparent 50%),
   radial-gradient(ellipse at 70% 30%, rgba(56, 239, 125, 0.3) 0%, transparent 50%),
   linear-gradient(135deg, #0d2818 0%, #1a4d2e 50%, #2d6a4f 100%)`,
  // Caffeine Tracker - Warm coffee tones
  `radial-gradient(ellipse at 25% 75%, rgba(252, 74, 26, 0.3) 0%, transparent 50%),
   radial-gradient(ellipse at 75% 25%, rgba(247, 183, 51, 0.3) 0%, transparent 50%),
   linear-gradient(135deg, #2d1810 0%, #4a2c2a 50%, #6b3a3a 100%)`,
  // URL Shortener - Electric blue tech
  `radial-gradient(ellipse at 20% 80%, rgba(0, 212, 255, 0.4) 0%, transparent 50%),
   radial-gradient(ellipse at 80% 20%, rgba(9, 9, 121, 0.4) 0%, transparent 50%),
   linear-gradient(135deg, #0c0c1e 0%, #1a1a3e 50%, #2a2a5e 100%)`,
  // Tic-Tac-Toe - Playful gradient
  `radial-gradient(ellipse at 30% 70%, rgba(255, 107, 107, 0.3) 0%, transparent 50%),
   radial-gradient(ellipse at 70% 30%, rgba(78, 205, 196, 0.3) 0%, transparent 50%),
   linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #3d3d5c 100%)`,
];

const ProjectCard = ({
  id,
  name,
  description,
  stack,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[480px] cursor-pointer card-shadow overflow-hidden`}
      onClick={() => handleClick(id)}>
      
      {/* Animated background */}
      <div
        className="absolute w-full h-full rounded-[24px] transition-all duration-500"
        style={{ background: projectBackgrounds[index] || projectBackgrounds[0] }}
      />
      
      {/* Decorative pattern overlay */}
      <div className="absolute w-full h-full rounded-[24px] opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glass overlay */}
      <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-black/20 to-black/40 h-full w-full rounded-[24px]"></div>

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20 drop-shadow-lg">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-6 justify-start w-full 
            flex-col bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-b-[24px] z-20">
            
            {/* Header with title and GitHub */}
            <div className="flex justify-between items-start mb-3">
              <h2
                className="font-bold sm:text-[28px] text-[22px] 
                text-timberWolf uppercase font-beckman leading-tight">
                {name}
              </h2>
              <div
                onClick={(e) => { e.stopPropagation(); window.open(repo, '_blank'); }}
                className="bg-night/80 backdrop-blur-sm sm:w-10 sm:h-10 w-9 h-9 rounded-full 
                  flex justify-center items-center cursor-pointer
                  hover:bg-white/20 transition-all duration-300 border border-white/10">
                <img
                  src={github}
                  alt="source code"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>

            {/* Brief description */}
            <p className="text-silver/90 text-[12px] leading-[18px] font-poppins mb-4 line-clamp-2">
              {description}
            </p>

            {/* Tech Stack Grid */}
            <div className="flex flex-wrap gap-2 mb-4">
              {stack && Object.entries(stack).map(([category, items]) => (
                <CategoryBadge key={category} category={category} items={items} />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {demo && demo !== repo && (
                <button
                  className="flex items-center gap-2 px-4 py-2 
                  bg-white/10 backdrop-blur-sm border border-white/20
                  rounded-lg text-timberWolf text-[13px] font-bold
                  hover:bg-white/20 transition-all duration-300"
                  onClick={(e) => { e.stopPropagation(); window.open(demo, '_blank'); }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  LIVE DEMO
                </button>
              )}
              <button
                className="flex items-center gap-2 px-4 py-2 
                bg-night/50 backdrop-blur-sm border border-white/10
                rounded-lg text-silver text-[13px] font-medium
                hover:bg-night/70 transition-all duration-300"
                onClick={(e) => { e.stopPropagation(); window.open(repo, '_blank'); }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                CODE
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I've built</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
