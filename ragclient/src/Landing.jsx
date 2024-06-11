import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Navbar from "./components/Navbar";

const Landing = () => {
  const [projects, setProjects] = useState({});
  const fetchProjects = () => {
    console.log("projects");
  };
  return (
    <div className="text-center min-h-screen font-libre bg-gradient-to-b from-zinc-900 text-zinc-300 flex flex-col leading-7">
      <header className="p-5 pl-10">
        <Navbar />
      </header>

      <main className="flex-grow flex items-center justify-center">
        {projects.length > 0 ? (
          projects
        ) : (
          <div className="flex flex-col leading-12 gap-16">
            <div>
              <p className="font-bold	text-3xl">Become more intelligent by querying LLM</p>
              <p className="text-gray-400 font-medium">Get insights in realtime from the information provided</p>
            </div>
            <div>
              <button className="font-medium pl-6 pr-6 pt-2 pb-2 bg-slate-50 text-gray-700 rounded-3xl">Get Started</button>  
            </div>
          </div>
        )}
      </main>

      <footer className="p-4">
        <div className="flex justify-center">
          
        </div>
      </footer>
    </div>
  );
};

export default Landing;
