import {useTranslation} from 'react-i18next';
import {OpenResumeFile} from '../Contacts';
import ContactImage from "../ContactImage";
import githubIcon from '../../images/github.png';
import linkedinIcon from '../../images/linkedin.png';
import resumeIcon from '../../images/resume.png';
import youtubeIcon from '../../images/youtube.png';
import './HomeContacts.css';

const HomeContacts = () => {
    const { t, i18n } = useTranslation();

    function HandleResumeButtonClick(){
        OpenResumeFile(i18n.language);
    }

    return (
        <ul className="homeContacts">
            <li>
                <a href="https://github.com/WendellLeao" target="_blank" rel="noopener noreferrer">
                    <ContactImage url={githubIcon} alt="github icon" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/wendell-leao/" target="_blank" rel="noopener noreferrer">
                    <ContactImage url={linkedinIcon} alt="linkedin icon" />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@wendell-leao" target="_blank" rel="noopener noreferrer">
                    <ContactImage url={youtubeIcon} alt="youtube icon" />
                </a>
            </li>
            <li>
                <a className="pointerCursor" onClick={HandleResumeButtonClick} target="_blank" rel="noopener noreferrer">
                    <ContactImage url={resumeIcon} alt="resume icon" />
                </a>
            </li>
        </ul>
    )
}

export default HomeContacts;