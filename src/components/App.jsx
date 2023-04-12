import '../css/app.css';
import MyForm from './Form';
import Displaydata from "./data";
const App = () => {
    return (
        <div className="main-container">
            <h1 className='main-header'>Students</h1>
            <Displaydata />
            <MyForm />
        </div>
    );
}

export default App;