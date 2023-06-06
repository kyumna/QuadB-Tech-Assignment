import { useLocation } from 'react-router-dom';
import Container from '../modal/container';
import { createContext } from 'react';

export  const UserContext = createContext()

function Second() {
    const triggerText = 'Open Form';

  

    const onSubmit = (event) => {
        event.preventDefault(event);
        localStorage.setItem(event.target.email.value, JSON.stringify([event.target.name.value, event.target.email.value]));
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };
    const location = useLocation()
    const { from } = location.state



    return (
        <div>
            {from[0]}
            <UserContext.Provider value={from[1]}>
                <Container triggerText={triggerText} onSubmit={onSubmit}/>
            </UserContext.Provider>

        </div>
    )
}

export default Second