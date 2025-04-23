import "./stylesheets/projects.css"
export default function Projects(){
    return(
        <div className="projectsContainer">
            <h1>My  <span className="projects">projects:</span></h1>
            <a href="https://www.railscomponents.co/" className="projectlink1" target="_blank">
                Rails components
            </a>
            <a href="https://car-physichs-react.vercel.app/" className="projectlink1" target="_blank">
                3D Car physics game
            </a>

        </div>
    )
}