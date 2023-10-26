import React from 'react';

import iconweb from '../../assets/imgs/icon-web.png'
import icongit from '../../assets/imgs/icon-git.png'
import iconlinkedin from '../../assets/imgs/icon-linkedin.png'

import txt from '../../assets/ajustes.json';
function Footer() {
  return (
    <footer className='bg-white h-16 border-t-2 border-slate-100'>
        <div className='max-w-screen-2xl mx-auto px-12 2xl:px-0 flex items-center justify-between h-full'>
            
            <p className='text-sm text-[#9EA5A8]'>Designed by José Manuel López for IBM Front-end Developer Certification</p>
            
            <div className='flex flex-row gap-3'>
              <a href={txt.urlMiWeb}>
              <img src={iconweb} className='bg-slate-200 hover:bg-slate-300 p-2 rounded-full'></img>
              </a>

              <a href={txt.urlGithub}>
              <img src={icongit} className='bg-slate-200 hover:bg-slate-300 p-2 rounded-full'></img>
              </a>

              <a href={txt.urlLinkedin}>
              <img src={iconlinkedin} className='bg-slate-200 hover:bg-slate-300 p-2 rounded-full'></img>
              </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;