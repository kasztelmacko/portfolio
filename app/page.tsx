export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-[60%] bg-white p-8">
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
          <a 
            href="https://example.com/3" 
            className="col-span-2 row-span-2 border-2 border-black rounded-xl bg-red-500 flex flex-col items-center justify-center gap-1"
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
          </a>
          <div className="col-span-2 border-2 border-black rounded-xl"></div>
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
          <a 
            href="https://example.com/6" 
            className="col-span-2 row-span-2 border-2 border-black rounded-xl bg-green-600 flex flex-col items-center justify-center gap-1"
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
          </a>
          <div className="col-span-1 row-span-2 border-2 border-black rounded-xl"></div>
          <div className="col-span-1 row-span-1 border-2 border-black rounded-xl"></div>
          <a 
            href="https://example.com/7" 
            className="col-span-3 row-span-1 border-2 border-black rounded-xl bg-amber-400 flex flex-col items-center justify-center gap-1"
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
          </a>
          <div className="col-span-1 row-span-1 border-2 border-black rounded-xl"></div>
        </div>
      </div>
    </main>
  );
}
