import React from 'react';
import txt from '../../assets/ajustes.json';

function Footer() {
  const assetPath = '/assets/imgs/';

  return (
    <footer className='bg-white h-16 border-t-2 border-slate-100'>
        <div className='max-w-screen-2xl mx-auto px-12 2xl:px-0 flex items-center justify-between h-full'>
            
            <p className='text-sm text-[#9EA5A8]'>Designed by José Manuel López for IBM Front-end Developer Certification</p>
            
            <div className='flex flex-row gap-3'>
              <a href={txt.urlMiWeb}>
              <img src={assetPath + 'icon-web.png'} className='bg-slate-200 hover:bg-slate-300 p-2 rounded-full'></img>
              </a>

              <a href={txt.urlGithub}>
              <img src={assetPath + 'icon-git.png'} className='bg-slate-200 hover:bg-slate-300 p-2 rounded-full'></img>
              </a>

              <a href={txt.urlLinkedin}>
              <img src={assetPath + 'icon-linkedin.png'} className='bg-slate-200 hover:bg-slate-300 p-2 rounded-full'></img>
              </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;