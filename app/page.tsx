'use client';

import { useState } from 'react';
import Intro from './components/intro';

export default function Home() {
  const [content, setContent] = useState(<Intro />);

  return (
    <main className="flex h-screen">
      <div className="w-[60%] bg-white p-4">
        {content}
      </div>

      <div className="w-[40%] bg-white p-4">
        <div className="grid h-full gap-4 grid-cols-4 grid-rows-[repeat(6,1fr)]">
          <a 
            href="https://www.linkedin.com/in/maciej-kasztelanic-960556247/" 
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 row-span-1 border-2 border-black rounded-xl bg-cyan-700 flex flex-col items-center justify-center gap-1"
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path 
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            <span className="text-white font-semibold">LINKEDIN</span>
          </a>
          <a 
            href="mailto:kasztelanicmaciej@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 row-span-1 border-2 border-black rounded-xl bg-emerald-700 flex flex-col items-center justify-center gap-1"
          >
            <svg 
              className="w-8 h-8" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" 
                fill="white"
              />
            </svg>
            <span className="text-white font-semibold">MAIL</span>
          </a>
          <div 
            className="col-span-2 row-span-2 border-2 border-black rounded-xl bg-red-500 flex flex-col items-center justify-center gap-1 group relative"
          >
            <svg 
              className="w-12 h-12 text-white" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
            </svg>
            <span className="text-white font-semibold">WORK PROJECTS</span>
            <div className="absolute left-0 w-full bg-red-500 text-white rounded-md hidden group-hover:block text-center text-xl font-bold">
              <a href="#" className="block p-2 hover:bg-white text-stone-800">Dynamic Pricing</a>
              <a href="#" className="block p-2 hover:bg-white text-stone-800">PowerBi Dashboard</a>
            </div>
          </div>
          <div className="col-span-2 border-2 border-black rounded-xl flex flex-col items-center justify-center">
            <svg 
              className="w-12 h-12 text-black" 
              fill="#292524" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 7 11 7 11s7-7.46 7-11c0-3.87-3.13-7-7-7zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            <span className="text-stone-800 text-2xl font-semibold">Warsaw, Poland</span>
          </div>
          <a 
            href="https://example.com/4" 
            className="col-span-2 row-start-2 border-2 border-black rounded-xl bg-slate-400 flex flex-col items-center justify-center gap-1"
          >
            <svg 
              className="w-8 h-8 text-white" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9 13V19H7V13H9ZM15 15V19H17V15H15ZM11 11V19H13V11H11Z"/>
            </svg>
            <span className="text-white font-semibold">CV</span>
          </a>         
          <div className="col-span-1 row-span-1 border-2 border-black rounded-xl"></div>
          <a 
            href="https://github.com/kasztelmacko" 
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 row-span-2 border-2 border-black rounded-xl bg-stone-800 flex flex-col items-center justify-center gap-1"
          >
            <svg 
              className="w-12 h-12 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="text-white font-semibold">GITHUB</span>
          </a>
          <div
            className="col-span-2 row-span-2 border-2 border-black rounded-xl bg-green-600 flex flex-col items-center justify-center gap-1 group relative"
          >
            <svg 
              className="w-12 h-12 text-white" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
            </svg>
            <span className="text-white font-semibold">ML PROJECTS</span>
            <div className="absolute left-0 w-full bg-green-600 text-white rounded-md hidden group-hover:block text-center text-xl font-bold">
              <a href="#" className="block p-2 hover:bg-white text-stone-800">Store Sales Forecast</a>
              <a href="#" className="block p-2 hover:bg-white text-stone-800">GPT2 Training</a>
              <a href="#" className="block p-2 hover:bg-white text-stone-800">Unsupervised Learning</a>
            </div>
          </div>
          <div className="col-span-1 row-span-2 h-full">
            <div className="grid grid-cols-2 grid-rows-4 gap-2 h-full">
              <div className="border-2 border-black rounded-xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-1">
                <svg className="w-20 h-20" 
                      viewBox="0 0 64 64" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                <path d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" fill="url(#a)"/><path d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z" fill="url(#b)"/><defs><linearGradient id="a" x1="19.075" y1="18.782" x2="34.898" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="28.809" y1="28.882" x2="45.803" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
              </div>
              <div className="border-2 border-black text-stone-800 font-bold text-3xl rounded-xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-1">SQL</div>
              <div className="border-2 border-black rounded-xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-1">
                <svg className="w-14 h-14" 
                  fill="#F2C80F" 
                  viewBox="0 0 32 32" 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg">
                <path d="M13.501 16h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 12.496c0 0 0 0 0 0 0 0.69 0.559 1.25 1.25 1.25 0 0 0 0 0 0h8.747v-13.746c0-0.69-0.559-1.25-1.25-1.25v0zM19.749 8.502h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 5.623h2.499c1.035 0.001 1.873 0.84 1.874 1.874v13.746h5.623v-21.244c0-0.69-0.559-1.25-1.25-1.25v0zM27.247 2.254v27.492c0 0 0 0 0 0 0 0.69-0.559 1.25-1.25 1.25 0 0-0 0-0 0h-4.374v-21.244c-0.001-1.035-0.84-1.873-1.874-1.874h-2.499v-5.623c0-0 0-0 0-0 0-0.69 0.559-1.25 1.25-1.25h7.498c0.69 0 1.25 0.559 1.25 1.25 0 0 0 0 0 0v0z"></path>
                </svg>
              </div>
              <div className="border-2 border-black rounded-xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-1">
                <svg className="h-16 w-16"
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 48 48" ><linearGradient id="__u04104Xr4WevsSMNpCfa" x1="7.773" x2="29.818" y1="6.952" y2="27.783" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bec1c4"/><stop offset="1" stop-color="#939399"/></linearGradient><path fill="url(#__u04104Xr4WevsSMNpCfa)" d="M24,6C10.745,6,0,13.291,0,22.286s10.745,16.286,24,16.286s24-7.291,24-16.286S37.255,6,24,6 z M26.5,35C16.283,35,8,29.627,8,23s8.283-12,18.5-12S45,16.373,45,23S36.717,35,26.5,35z"/><linearGradient id="__u04104Xr4WevsSMNpCfb" x1="25.124" x2="32.304" y1="14.251" y2="35.285" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#008ded"/><stop offset="1" stop-color="#0061a7"/></linearGradient><path fill="url(#__u04104Xr4WevsSMNpCfb)" d="M39.051,33.469 c-0.578-0.945-1.437-1.669-2.442-2.105c3.401-0.841,5.926-3.904,5.926-7.564c0-4.307-3.493-7.8-7.8-7.8H20.001v26h6.933V31.6h1.955 c0.967,0,1.856,0.525,2.321,1.373L36.175,42h8.093L39.051,33.469z M26.935,21.2h6.067c1.435,0,2.6,1.165,2.6,2.6 s-1.165,2.6-2.6,2.6h-6.067V21.2z"/></svg>
              </div>
              <div className="border-2 border-black rounded-xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-1">
                <svg className="h-14 w-14"
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" y="0px"
                viewBox="0 0 2385.7 1919.9" 
                xmlSpace="preserve">
                  <style type="text/css">
                    {`.st0{fill:#EA4335;}
                      .st1{fill:#4285F4;}
                      .st2{fill:#34A853;}
                      .st3{fill:#FBBC05;}`}
                  </style>
                  <g>
                    <path className="st0" d="M1513.8,528.7h72.8l207.4-207.4l10.2-88c-385.9-340.6-975-303.9-1315.6,82C393.9,422.5,325.2,550,287.8,688
                      c23.1-9.5,48.7-11,72.8-4.4l414.7-68.4c0,0,21.1-34.9,32-32.7c184.5-202.6,495-226.2,708-53.8H1513.8z"/>
                    <path className="st1" d="M2089.4,688c-47.7-175.5-145.5-333.3-281.6-454l-291,291c122.9,100.4,192.9,251.7,189.9,410.4v51.7
                      c143.1,0,259,116,259,259c0,143.1-116,259-259,259h-518.1l-51.7,52.4v310.7l51.7,51.7h518.1c297,2.3,560.5-190.2,648.7-473.8
                      C2443.4,1162.4,2335.4,854.4,2089.4,688L2089.4,688z"/>
                    <path className="st2" d="M669.8,1917h518.1v-414.7H669.8c-36.9,0-73.4-7.9-107-23.3l-72.8,22.5l-208.8,207.4l-18.2,72.8
                      C380.1,1870.1,523,1917.6,669.8,1917L669.8,1917z"/>
                    <path className="st3" d="M669.8,571.6c-287.8,1.7-542.7,186-634.5,458.7c-91.8,272.7-0.3,573.7,227.8,749.1l300.5-300.5
                      c-130.4-58.9-188.3-212.3-129.4-342.7c58.9-130.4,212.3-188.3,342.7-129.4c57.4,26,103.4,72,129.4,129.4l300.5-300.5
                      C1078.9,668.6,880.2,570.9,669.8,571.6L669.8,571.6z"/>
                  </g>
                </svg>
              </div>
              <div className="border-2 border-black rounded-xl col-span-1 row-span-2"></div>
              <div className="border-2 border-black rounded-xl col-span-1 row-span-1"></div>
            </div>
          </div>
          <div className="col-span-1 row-span-1 border-2 border-black rounded-xl"></div>
          <div 
            className="col-span-3 row-span-1 border-2 border-black rounded-xl bg-amber-400 flex flex-col items-center justify-center gap-1 group relative"
          >
            <svg 
              className="w-12 h-12 text-white" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
            </svg>
            <span className="text-white font-semibold">PERSONAL PROJECTS</span>
            <div className="absolute left-0 w-full bg-amber-400 text-white rounded-md hidden group-hover:block text-center text-xl font-bold">
              <a href="#" className="block p-2 hover:bg-white text-stone-800">Paint By Numbers Generator</a>
              <a href="#" className="block p-2 hover:bg-white text-stone-800">Synthetic Data Generator</a>
            </div>
          </div>
          <img src="/ja.jpg" className="col-span-1 row-span-1 border-2 border-black rounded-xl"></img>
        </div>
      </div>
    </main>
  );
}
