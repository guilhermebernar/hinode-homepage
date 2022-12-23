import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/homepage';

const RoutesMain = () => {
    return(
        
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='*' element={<Navigate replace to='/home'/>}/>
        </Routes>
        
    )
    }
    
    export default RoutesMain