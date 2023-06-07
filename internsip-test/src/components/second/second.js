import { useLocation } from 'react-router-dom';
import Container from '../modal/container';
import { createContext } from 'react';
import style from './second.module.css';
import card1 from '../../images/card1.jpg';
import DOMPurify from 'dompurify';
export const UserContext = createContext();

function Second() {
    const sanitizeHTML = (html) => {
        return { __html: DOMPurify.sanitize(html) };
      };
    
    const location = useLocation();
    const { from } = location.state;

    return (
        <div className={style.parent}>
        <div className={style.left}>
            <div  dangerouslySetInnerHTML={sanitizeHTML(from[0])}>
               
            </div>
            <div className={style.addons}>
            <div >Genre: {from[2][0]}, {from[2][1]}</div>
            <div>Status: {from[3]}</div>
                
            </div>
                <UserContext.Provider value={from[1]}>
                    <Container />
                </UserContext.Provider>
                </div>
            <div className={style.right}>
            <img src={card1}></img>
            </div>

        </div>
    )
}

export default Second