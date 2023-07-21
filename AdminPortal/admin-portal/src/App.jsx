import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import { Link } from 'react-router-dom';
import { auth } from './Components/firebaseAuth';
function App() {
    return (
        <>
            <Home />
        </>
    );
}

export default App;
