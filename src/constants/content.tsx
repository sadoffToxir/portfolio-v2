import svgIcons from '@assets/icons';

import { Experience } from '../types/Experience';

export const content = {
  hero: {
    title: 'Hi there!',
    subtitle: 'I\'m a <span class="text-emphasis-text">Frontend Developer</span> passionate about crafting engaging web experiences',
    description: 'Let\'s explore my journey together!',
    cta: 'Get in touch',
  },
  about: {
    description: [ 
      `I am a focused Frontend Developer with expertise in building user-friendly 
      applications using React, Vue 2/3, and TypeScript. I prioritize clean, maintainable code 
      and efficient solutions, working well within Agile teams to deliver high-quality web 
      applications. With a solid technical background, I continuously improve my skills to stay 
      updated with modern development practices.`,
      `I specialize in ensuring that projects meet both technical requirements and user 
      expectations. My approach is practical and results-oriented, with an emphasis on creating
      efficient, scalable applications that deliver value to both users and businesses.` 
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
      company: 'OLX Group',
      role: 'Frontend Developer',
      period: '2022 - Present',
      achievements: [
        'Worked in a team with Agile methodology using the Scrum framework.',
        'Built web applications using React, Vue 2/3, Nuxt 2/3, Vuex, Pinia, and TypeScript.',
        'Led the migration from Nuxt 2 to Nuxt 3 by breaking down tasks and delegating responsibilities.',
        'Achieved 100% E2E test coverage with Cypress and Playwright across user flows.',
        'Dockerized E2E tests on Playwright to ensure consistency between local environments and CI/CD pipelines.',
        'Integrated live code editor in frontend application.',
        'Improved application security, raising the metric from B to A+ on securityheaders.com.',
        'Enhanced accessibility, achieving a 96% score on pagespeed.web.dev.',
        'Implemented user behavior tracking using the Nina SDK, contributing to a 20% revenue increase.',
      ],
    } as Experience,
    exadel: {
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEyuAesmFwWPA/company-logo_200_200/company-logo_200_200/0/1704999546975/exadel_logo?e=2147483647&v=beta&t=eoE4xGPU-jw3ULNVUCP5O4YkdSb5Sx9Xi-RB3tQNhe8',
      company: 'Exadel',
      role: 'Frontend Developer',
      period: '2020-2022',
      achievements: [
        'Developed a comprehensive educational tool to improve English language skills within an organization using React and TypeScript.',
        'Designed and programmed a multi-theme application with clean structure for theme control (dark and light).',
        'Implemented drag-n-drop functionality for the React application.',
        'Achieved 100% E2E test coverage using Cypress, ensuring smooth user interactions.',
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
        { title: 'LinkedIn', text: 'saidofftoxir', url: 'https://linkedin.com/in/saidofftoxir/', icon: svgIcons.linkedin },
        { title: 'GitHub', text: 'sadoffToxir', url: 'https://github.com/sadoffToxir', icon: svgIcons.github },
        { title: 'WhatsApp', text: '+48 573 347 445', url: 'https://wa.me/48573347445', icon: svgIcons.whatsapp },
        { title: 'Telegram', text: '@Notfound777', url: 'https://t.me/Notfound777', icon: svgIcons.telegram },
      ],
    },
    formColumn: {
      confirmationMessage: 'Thank you for reaching out! Your message has been submitted successfully!',
    }
  },
}
