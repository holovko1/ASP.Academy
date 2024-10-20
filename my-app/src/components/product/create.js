import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import APP_ENV from "../../env";

const ProductCreatePage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        price: "",
        categoryId: "",
        images: null,
    });

    const handlerOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handlerOnFileChange = (e) => {
        setData({ ...data, images: e.target.files });
    };

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("categoryId", data.categoryId);
        
        for (let i = 0; i < data.images.length; i++) {
            formData.append("images", data.images[i]);
        }

        try {
            await axios.post(`${APP_ENV.URL}api/products`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate("/product");
        } catch (error) {
            console.error("Error creating product:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="category">Категорії</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="product">Продукти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className="text-center mb-5">Додати продукт</h1>
                <form onSubmit={handlerOnSubmit} className="col-md-6 offset-md-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Назва продукту</label>
                        <input type="text" className="form-control"
                               id="name" name="name"
                               value={data.name}
                               onChange={handlerOnChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Ціна</label>
                        <input type="text" className="form-control"
                               id="price" name="price"
                               value={data.price}
                               onChange={handlerOnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label">CategoryID</label>
                        <input type="text" className="form-control"
                               id="categoryId" name="categoryId"
                               value={data.categoryId}
                               onChange={handlerOnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="images" className="form-label">Фото</label>
                        <input type="file" className="form-control" accept=".jpg,.gif,.png" multiple onChange={handlerOnFileChange} />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <Link to="/product" className="btn btn-danger">Скасувати</Link>
                        <button type="submit" className="btn btn-primary">Додати</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProductCreatePage;
