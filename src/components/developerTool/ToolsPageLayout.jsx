import ToolsSidebar from './ToolsSideBar';
import ToolsSection from './ToolsSection';
import PromoCardGithub from './PromoCardGithub';

const ToolsPageLayout = () => {
  return (
   
    <div className="flex h-screen"> 
  <div className="flex h-screen w-full bg-slate-50 bg-white dark:bg-[#18181b] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300 ">
    
    {/* Left Side: Sidebar 
    */}
    <div className="hidden md:flex h-full w-50  flex-shrink-0 bg-white dark:bg-[#18181b] backdrop-blur-sm">
      <ToolsSidebar />
    </div>

  

    {/* Right Side: Main Content */}
    <main className="flex-1 h-full overflow-y-auto  overflow-y-auto
        [&::-webkit-scrollbar]:w-1 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-gray-300 
        dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 
        [&::-webkit-scrollbar-thumb]:rounded-full lg:py-12 custom-scrollbar">
          
      <section className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-white dark:bg-[#18181b] shadow-sm shadow-slate-200/50 dark:shadow-none border border-slate-200/60 dark:border-slate-800/60 ">
        <PromoCardGithub/>
           <ToolsSection />
        </div>
        
      </section>
    </main>

  </div>
</div>
  );
};

export default ToolsPageLayout;