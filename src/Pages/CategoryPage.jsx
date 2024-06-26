import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header/>
            <div className="my-[100px]">
                <div className="mt-[100px] mb-6 max-w-2xl mx-auto flex justify-center items-center space-x-2">
                    <button class="border-2 border-gray-300 py-1 px-4 rounded-md"
                        onClick={() => navigation(-1)}
                    >back
                    </button>

                    <h2 className="text-xl font-bold">
                        Blogs on <span>{category}</span>
                    </h2>
                </div>

                <Blogs/>
                <Pagination/>
            </div>
        </div>
    )
}

export default CategoryPage;