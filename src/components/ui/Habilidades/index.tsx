function Habilidades() {
  return (
    <div className="flex flex-col  flex-wrap justify-center items-center gap-16">
      {/* FrontEnd */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">FrontEnd</h2>
       
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/html.png" alt="HTML5" className="sm:w-11 sm:h-11 w-9 h-9 dark:invert" />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/css.png" alt="CSS3" className="sm:w-11 sm:h-11 w-9 h-9  dark:invert" />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/javascript.png" alt="Javascript" className="sm:w-11 sm:h-11 w-9 h-9  dark:invert" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/angular.png" alt="Angular" className="sm:w-11 sm:h-11 w-9 h-9  dark:invert" />
            <p>Angular</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/react.png" alt="Reactjs" className="sm:w-11 sm:h-11 w-9 h-9  dark:invert" />
            <p>React.js</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/figma.png" alt="Figma" className="sm:w-11 sm:h-11 w-9 h-9  dark:invert" />
            <p>Figma</p>
          </div> 
        </div>
      </div>
    
      {/* BackEnd */}
      <div className="flex flex-col items-center text-primary-foreground mt-10">
        <h2 className="text-3xl font-bold text-shadow mb-5">BackEnd</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/python.png" alt="Python" className="sm:w-11 sm:h-11 w-9 h-9  invert" />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/django.png" alt="Django" className="sm:w-11 sm:h-11 w-9 h-9 invert" />
            <p>Django</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/postgresql.png" alt="PostgreSQL" className="sm:w-11 sm:h-11 w-9 h-9 invert" />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/firebase.png" alt="Firebase" className="sm:w-11 sm:h-11 w-9 h-9 invert" />
            <p>Firebase</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src="/icons/git.png" alt="Git" className="sm:w-11 sm:h-11 w-9 h-9 invert" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
