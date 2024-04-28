import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="mt-[100px] mx-auto flex items-center justify-center">
                <Blogs/>
                <Pagination/>
            </div>
        </div>
    )
}

export default Home;