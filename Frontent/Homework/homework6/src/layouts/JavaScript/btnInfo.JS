document.addEventListener("DOMContentLoaded", (Event) => { 
    const headerSingInBtn = document.getElementById("headerSingInBtn");

    const handleHeaderSingInBtn = () => {
        console.log('Sign In');  
    };
    headerSingInBtn.addEventListener("click", handleHeaderSingInBtn);
    
    // кнопка  GetIt
    const heroButtonGetIt = document.getElementById("heroButtonGetIt");

    const handleHeroButtonGetIt = () => {
        console.log('Let’s Explore Three-Dimensional visual');  
    };
    heroButtonGetIt.addEventListener("click", handleHeroButtonGetIt);

    // кнопка Explore   
    const heroButtonExplore = document.getElementById("heroButtonExplore");

    const handleHeroButtonExplore = () => {
        console.log('HeroButtonExplore');  
    };
    heroButtonExplore.addEventListener("click", handleHeroButtonExplore);
    
    // кнопка  GetItNow
    const contentButtonGetItNow  = document.getElementById("contentButtonGetItNow");

    const handleContentButtonGetItNow = () => {
        console.log('Get it now');  
    };
    contentButtonGetItNow.addEventListener("click",handleContentButtonGetItNow);
});