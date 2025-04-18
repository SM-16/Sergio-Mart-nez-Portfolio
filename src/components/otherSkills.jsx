import './stylesheets/otherSkills.css'

export default function otherSkills(){
    return(
        <div className='otherSkillsContainer'>
            <h2>Other skills you might find useful</h2>
            <ul>
                <li>Page speed optimization</li>
                <li>SEO (Search enginge optimization)</li>
                <li>Experience integrating <span className="highlighted-dashed">payments</span> & <span className="highlighted-dashed">subscriptions</span></li>
                <li>Experience integrating authentication</li>
            </ul>
        </div>
    )
}