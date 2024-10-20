import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useEffect here
import APP_ENV from "../../env";
import axios from "axios";

const ShowProducts = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5290/api/products')
            .then(res => {
                setList(res.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);

    console.log("List items", list);

    const handleAddButton = () => {
        setList([
            ...list, {
                id: 2,
                name: "Масло",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPA1yX3G4SdQRpEDjr56wVaYCPqJwsxsdVg&s"
            }]);
    };

    return (
        <>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/">Navbar</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="category">Категорії</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="product">Продукти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className="text-center">Список продуктів</h1>
                <Link to={"/createP"} className={"btn btn-success"}>Додати</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Назва</th>
                            <th scope="col">Фото</th>
                            <th scope="col">Ціна</th>
                            <th scope="col">CategoryID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>
                                    <img src={`${APP_ENV.URL}images/150_${item.images[0]}`} alt={item.name} width="75px"/>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.categoryName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowProducts;
