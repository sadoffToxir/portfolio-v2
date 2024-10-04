import EmailIcon from '@assets/icons/email.svg?react';
import GithubIcon from '@assets/icons/github.svg?react';
import LinkedinIcon from '@assets/icons/linkedin.svg?react';
import LocationIcon from '@assets/icons/location.svg?react';

import { Experience } from '../types/Experience';

export const content = {
  hero: {
    title: 'Hi there!',
    subtitle: 'I\'m a Frontend Developer passionate about crafting engaging web experiences',
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
      { title: 'Github', text: 'sadoffToxir', url: 'https://github.com/sadoffToxir', icon: <EmailIcon /> },
      { title: 'Linkedin', text: 'saidofftoxir', url: 'https://linkedin.com/in/saidofftoxir/', icon: <LinkedinIcon /> },
      { title: 'Email', text: 'saidovvtokhir@gmail.com', url: 'mailto:saidovvtokhir@gmail.com', icon: <GithubIcon /> },
      { title: 'Location', text: 'Poland, Lodz', url: 'https://www.google.com/search?q=poland+lodz&oq=poland+lodz&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTQ5N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8', icon: <LocationIcon /> },
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
  cv: {
    skills: [
      { name: 'React', description: 'Proficient in building and maintaining web applications with React.' },
      { name: 'Vue 2/3', description: 'Experienced in creating interactive interfaces with Vue.' },
      { name: 'TypeScript', description: 'Strong skills in TypeScript for developing robust web applications.' },
      { name: 'Nuxt 2/3', description: 'Led migrations from Nuxt 2 to Nuxt 3, ensuring smooth transitions.' },
      { name: 'Docker', description: 'Used Docker for containerizing E2E tests, ensuring consistency.' },
      { name: 'Cypress/Playwright', description: 'Wrote comprehensive E2E tests using Cypress and Playwright for various projects.' },
      { name: 'Jest/Vitest', description: 'Experienced in writing unit tests with Jest and Vitest.' },
      { name: 'Webpack/Vite', description: 'Configured and optimized projects using Webpack and Vite.' },
    ],
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
    formFields: {
      topic: 'Topic',
      name: 'Name and Surname',
      message: 'Message',
      submit: 'Submit',
    },
    confirmationMessage: 'Thank you for reaching out! I will get back to you soon.',
  },
}
