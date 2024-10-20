import './App.css';
import HomePage from "./components/home";
import {Route, Routes} from "react-router-dom";
import CategoryCreatePage from "./components/category/create";
import ShowProducts from "./components/product";
import ProductCreatePage from './components/product/create';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    console.log('API URL:', apiUrl);

    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>} />
                    <Route path={"category"} element={<HomePage/>} />
                    <Route path={"createC"} element={<CategoryCreatePage/>} />
                    <Route path={"createP"} element={<ProductCreatePage/>} />
                    <Route path={"product"} element={<ShowProducts/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
