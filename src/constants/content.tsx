import svgIcons from '@assets/icons';

import { Experience } from '../types/Experience';

export const content = {
  hero: {
    title: 'I\'m a <span class="text-emphasis-text">Frontend Developer</span> passionate about crafting engaging web experiences',
    cta: {
      text: 'Get in touch',
      url: '#contact'
    },
    cv: {
      text: 'View CV',
      url: 'https://drive.google.com/file/d/1ILaDqQQ72sc-nK4Jm-iA6mlb1CsX29hB/view?usp=sharing'
    }
  },
  about: {
    description: [ 
      `Frontend Developer with <b>4+</b> years of commercial experience, working in teams ranging from small groups of
      3 to larger teams of 15-20 members. <b>Led successful projects</b> like migrating applications from Nuxt 2 to
      Nuxt 3, improving performance and user experience. Worked with multi-language applications with
      technologies like Localise and Poeditor. Experienced in building internal component libraries using styled
      components improving development efficiency across teams`,
      `Skilled in <b>interviewing candidates</b> for frontend developer positions and <b>mentoring junior</b> developers,
      aiding in their onboarding and professional growth. Participated in the "Collabothon" hackathons in 2023 and
      2024, showcasing collaboration and innovation.` 
    ],
    socialLinks: [
      { url: 'https://github.com/sadoffToxir', icon: svgIcons.github },
      { url: 'https://linkedin.com/in/saidofftoxir/', icon: svgIcons.linkedin },
      { url: 'mailto:saidovvtokhir@gmail.com', icon: svgIcons.email },
      { url: 'https://wa.me/48573347445', icon: svgIcons.whatsapp },
      { url: 'https://t.me/Notfound777', icon: svgIcons.telegram },
    ],
  },
  experience: {
    olxGroup: {
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQG0ol2oatlPIQ/company-logo_200_200/company-logo_200_200/0/1720445566441/olx_group_logo?e=2147483647&v=beta&t=wtZgDmndDl1GtKvWS4Rvar2yjjDru-IhZTbkgSjCf1I',
      link: 'https://www.linkedin.com/company/olx-group/',
      company: 'OLX Group',
      role: 'Frontend Developer',
      period: '10/2022 - Present (2+ years)',
      achievements: [
        `- <b>Led the migration</b> from Nuxt 2 to Nuxt 3 by breaking down tasks, estimating work, and delegating
        responsibilities among team members, resulting in a <b>19.2%</b> improvement in application performance and
        reducing development time by almost <b>30%</b>.`,
        `- <b>Dockerized End-to-End tests</b> using Playwright, which streamlined the testing process and decreased test
        execution time by <b>37.5%</b>, enhancing CI/CD pipeline efficiency.`,
        `- Implemented user behavior <b>tracking using the Nina SDK</b> to enable data-driven decisions, increasing revenue by
        <b>20%</b> through improved user engagement strategies.`,
        `- <b>Enhanced website accessibility</b>, achieving a <b>96%</b> score on PageSpeed Insights, which led to a <b>16.3%</b> increase in
        user retention and satisfaction.`,
        `- Wrote <b>E2E, tests, and Unit tests</b>, increasing test coverage from <b>48%</b> to <b>78%</b> and reducing bug-
        related incidents by <b>33.9%</b>.`,
        `- Collaborated on maintaining the <b>Storybook component library</b> for React, Next.js, improving UI consistency and
        reducing development time by <b>15%</b>.`
      ],
    } as Experience,
    exadel: {
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEyuAesmFwWPA/company-logo_200_200/company-logo_200_200/0/1704999546975/exadel_logo?e=2147483647&v=beta&t=eoE4xGPU-jw3ULNVUCP5O4YkdSb5Sx9Xi-RB3tQNhe8',
      link: 'https://www.linkedin.com/company/exadel/',
      company: 'Exadel',
      role: 'Frontend Developer',
      period: '07/2020-10/2022 (2.2 years)',
      achievements: [
        `- <b>Improved security</b> by applying proper response headers, raising the security metric from a B to an A+ on
        securityheaders.com, effectively reducing potential vulnerabilities by <b>85%</b>.`,
        `- Implemented code-splitting and lazy loading techniques, reducing initial load times by <b>36,9%</b> and <b>increasing site
        performance</b> scores on Lighthouse to above <b>90%</b>.`,
        `- <b>Optimized responsive design</b>, increasing mobile user engagement by <b>9.5%</b> and boosting user satisfaction scores
        by <b>7.4%</b>`,
      ],
    } as Experience,
  },
  skills: {
    languages: [
      {
        name: 'JavaScript',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
      },
      {
        name: 'HTML',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/html-2752158-2284975.png',
      },
      {
        name: 'CSS',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
      }
    ],
    frameworks: [
      {
        name: 'React',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png',
      },
      {
        name: 'Vue',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/vue-282497.png',
      },
      {
        name: 'Nuxt',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/free-nuxt-dot-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030184.png',
      },
      {
        name: 'Next',
        icon: 'https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp',
      },
      {
        name: 'Sass/Scss',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/sass-226054.png',
      }
    ],
    tools: [
      'Vuex','Pinia','Vuetify 2/3','Material UI',
      'Tailwind','Rest','GraphQL','Redux',
      'Redux Toolkit','NPM','Webpack','Vite',
      'Docker','Cypress','Playwright','Vitest',
      'Jest','Eslint','Prettier','Axios','Storybook',
      'Linux','Git','CI/CD',
    ],
    cv: {
      text: 'View CV',
      url: 'https://drive.google.com/file/d/1ILaDqQQ72sc-nK4Jm-iA6mlb1CsX29hB/view?usp=sharing'
    }
  },
  howCanIHelpYou: {
    title: 'How can I help you?',
    useCases: [
      {
        title: 'Building Responsive Landing Pages',
        description: 'Develop visually appealing and responsive landing pages tailored to your brand and marketing goals.',
      },
      {
        title: 'Developing Full-Featured Web Applications',
        description: 'Build interactive and scalable web applications with modern frameworks like React, Vue, and Nuxt.',
      },
      {
        title: 'Optimizing Web Performance and SEO',
        description: 'Enhance your website’s performance, accessibility, and SEO for a better user experience and search engine ranking.',
      },
      {
        title: 'Implementing Interactive UI Components',
        description: 'Create engaging UI components with animations and interactivity using React, Vue, and TypeScript.',
      },
      {
        title: 'End-to-End Testing Implementation',
        description: 'Set up and maintain E2E testing with Cypress and Playwright to ensure your web applications function flawlessly.',
      },
    ],
  },
  contact: {
    textColumn: {
      title: 'Get in touch',
      description: 'Feel free to reach out to me through any of the social platforms below. I\'m always open to connecting and discussing new opportunities.',
      socialLinks: [
        { title: 'Email', text: 'saidovvtokhir@gmail.com', url: 'mailto:saidovvtokhir@gmail.com', icon: svgIcons.email },
        { title: 'WhatsApp', text: '+48 573 347 445', url: 'https://wa.me/48573347445', icon: svgIcons.whatsapp },
        { title: 'LinkedIn', text: 'saidofftoxir', url: 'https://linkedin.com/in/saidofftoxir/', icon: svgIcons.linkedin },
        { title: 'GitHub', text: 'sadoffToxir', url: 'https://github.com/sadoffToxir', icon: svgIcons.github },
        { title: 'Telegram', text: '@Notfound777', url: 'https://t.me/Notfound777', icon: svgIcons.telegram },
      ],
    },
    formColumn: {
      successMessage: 'Thank you for reaching out! Your message has been submitted successfully!',
    }
  },
}
