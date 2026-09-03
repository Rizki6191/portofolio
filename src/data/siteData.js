import projectLibrary from '../assets/project-library.svg'
import projectPortfolio from '../assets/project-portfolio.svg'
import media1 from '../assets/1.png'
import media2 from '../assets/2.png'
import media3 from '../assets/3.png'
import media4 from '../assets/4.png'
import media5 from '../assets/5.png'
import media6 from '../assets/6.png'

export const writeups = [
  {
    title: 'Ret2Libc via Format String',
    description: 'Ret2Libc via Format String in ELF x86_64  that requires you to exploit a format string vulnerability to gain control of the programs execution flow and execute arbitrary code by leveraging the format string vulnerability.',
    link: 'https://github.com/Rizki6191/Chall/tree/main/1',
    image: media1,
  },
  {
    title: 'Got Overwrite via Format String',
    description: 'Got Overwrite via Format String in ELF x86_64 that requires you to exploit a format string vulnerability to gain control of the programs execution flow and execute arbitrary code by leveraging the format string vulnerability.',
    link: 'https://github.com/Rizki6191/Chall/blob/main/3',
    image: media2,
  },
  {
    title: 'Shellcode with read, write, open',
    description: 'shellcode with read, write, open in ELF x86_64  that requires you to create a shellcode that can read, write, and open files to gain control of the programs execution flow and execute arbitrary code.',
    link: 'https://github.com/Rizki6191/Chall/blob/main/7',
    image: media3,
  },
]

export const projects = [
  {
    title: 'FORMALY',
    description: 'All in one form builder.',
    link: 'https://github.com/itzfurizugg/Formaly.git',
    image: media5,
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio website.',
    link: 'https://github.com/Rizki6191/portofolio.git',
    image: media4,
  },
  {
    title: 'CTF Blog',
    description: 'A Blog App for My CTF Journey.',
    link: 'https://github.com/Rizki6191/CTF-blog.git',
    image: projectLibrary,
  },
]
