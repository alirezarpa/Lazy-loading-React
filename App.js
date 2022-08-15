// Code with implemented lazy loading
import { lazy, Suspense } from 'react';
import './App.css';

const Heavy = lazy(() => import('./heavy-component'));

function App() {
    return (
        <div className="App">
            <div>hello world</div>
            <Suspense fallback={<div>loading...</div>}>
                <heavy />
            </Suspense>
        </div>
        );
    }

    export default App;
