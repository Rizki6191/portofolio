import projectLibrary from '../assets/project-library.svg'
import rizkiAvatar from '../assets/rizki.png'
import media1 from '../assets/1.png'
import media2 from '../assets/2.png'
import media3 from '../assets/3.png'
import media4 from '../assets/4.png'
import media5 from '../assets/5.png'
import media6 from '../assets/6.png'

export const profileData = {
  name: 'Rizki Syahrul Ramadhan',
  avatar: rizkiAvatar,
  title: 'Backend Developer & Cyber Security Enthusiast',
  about: 'Saya adalah seorang yang memiliki minat dalam bidang pengembangan website, khususnya backend development, serta cyber security. Saya tertarik dalam membangun sistem backend yang terstruktur dan efektif serta terus mengembangkan kemampuan dalam memahami database, API, arsitektur sistem, dan keamanan aplikasi.',
  skills: [
    'Scripting',
    'Code Debugging',
    'Data Flow Diagram',
    'Penetration Testing',
    'API Architecture',
  ],
  stacks: [
    {
      name: 'Gin',
      category: 'Backend',
      logo: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png',
    },
    {
      name: 'Go',
      category: 'Language',
      logo: 'https://cdn.simpleicons.org/go',
    },
    {
      name: 'Python 3',
      category: 'Language',
      logo: 'https://cdn.simpleicons.org/python',
    },
    {
      name: 'React',
      category: 'Frontend',
      logo: 'https://cdn.simpleicons.org/react',
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      logo: 'https://cdn.simpleicons.org/tailwindcss',
    },
    {
      name: 'Vite',
      category: 'Build Tool',
      logo: 'https://cdn.simpleicons.org/vite',
    },
    {
      name: 'Burp Suite',
      category: 'Pentesting',
      logo: 'https://cdn.simpleicons.org/burpsuite',
    },
    {
      name: 'Docker',
      category: 'Container',
      logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
    },
    {
      name: 'ffuf',
      category: 'Pentesting',
      logo: 'https://raw.githubusercontent.com/ffuf/ffuf/master/_img/ffuf_run_logo_600.png',
    },
  ],
  stats: [
    { label: 'CySec Writeups', value: '3+' },
    { label: 'Featured Projects', value: '3+' },
    { label: 'Specialization', value: 'Backend & Database' },
    { label: 'Primary Architecture', value: 'Windows & WSL' },
  ],
  socials: {
    email: 'sponge27riz@gmail.com',
    github: 'https://github.com/Rizki6191',
  },
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'writeups', label: 'Writeups' },
  { id: 'projects', label: 'Projects' },
]

export const writeups = [
  {
    id: 'w-1',
    title: 'Ret2Libc via Format String',
    category: 'Binary Exploitation',
    tags: ['ELF x86_64', 'Format String', 'Ret2Libc'],
    description: 'Ret2Libc via Format String in ELF x86_64 that requires you to exploit a format string vulnerability to gain control of the programs execution flow and execute arbitrary code by leveraging the format string vulnerability.',
    link: 'https://github.com/Rizki6191/Chall/tree/main/1',
    image: media1,
  },
  {
    id: 'w-2',
    title: 'Got Overwrite via Format String',
    category: 'Binary Exploitation',
    tags: ['ELF x86_64', 'GOT Overwrite', 'Memory Corruption'],
    description: 'Got Overwrite via Format String in ELF x86_64 that requires you to exploit a format string vulnerability to gain control of the programs execution flow and execute arbitrary code by leveraging the format string vulnerability.',
    link: 'https://github.com/Rizki6191/Chall/blob/main/3',
    image: media2,
  },
  {
    id: 'w-3',
    title: 'Shellcode with read, write, open',
    category: 'Pwn & Shellcoding',
    tags: ['ELF x86_64', 'Shellcode', 'Syscalls'],
    description: 'Shellcode with read, write, open in ELF x86_64 that requires you to create a shellcode that can read, write, and open files to gain control of the programs execution flow and execute arbitrary code.',
    link: 'https://github.com/Rizki6191/Chall/blob/main/7',
    image: media3,
  },
]

export const projects = [
  {
    id: 'p-1',
    title: 'Formaly',
    category: 'Fullstack App',
    tags: ['Form Builder', 'Dynamic UI', 'Backend API'],
    description: 'All in one modern form builder.',
    link: 'https://github.com/itzfurizugg/Formaly.git',
    image: media5,
  },
  {
    id: 'p-2',
    title: 'Portfolio',
    category: 'Frontend',
    tags: ['React', 'Tailwind CSS'],
    description: 'My personal portfolio website.',
    link: 'https://github.com/Rizki6191/portofolio.git',
    image: media4,
  },
  {
    id: 'p-3',
    title: 'Kardz',
    category: 'Fullstack app',
    tags: ['kanban board', 'go', 'react'],
    description: 'An application like trello.',
    link: 'https://github.com/Rizki6191/',
    image: media6,
  },
]
