import projectLibrary from '../assets/project-library.svg'
import projectPortfolio from '../assets/project-portfolio.svg'
import writeupChall from '../assets/writeup-chall.svg'
import media1 from '../assets/1.png'
import media2 from '../assets/2.png'
import media3 from '../assets/3.png'

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
    title: 'Library of Tenizen',
    description: 'Library App',
    link: 'https://github.com/Rizki6191/LibraryOfTenizen',
    image: projectLibrary,
  },
  {
    title: 'Portofolio',
    description: 'My personal portofolio website',
    link: 'https://github.com/Rizki6191/Portofolio',
    image: projectPortfolio,
  },
]
