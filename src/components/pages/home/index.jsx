import React, { useState } from "react";
import Card from "../../card/Card";
import { useAppContext } from "../../../context/appContext";
import { Pagination } from "@mui/material";
import "./Home.css";

const USERS_PER_PAGE = 10;

function Home() {
    const { users } = useAppContext();
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
    const start = (page - 1) * USERS_PER_PAGE;
    const currentUsers = users.slice(start, start + USERS_PER_PAGE);

    return (
        <div className="home-container">
            <h1>Meet the Users!</h1>
            <div className="cards-grid">
                {currentUsers.map((u, index) => (
                    <Card
                        key={start + index}
                        photo={u.user.picture.large}
                        name={u.user.name.first + " " + u.user.name.last}
                        email={u.user.email}
                        phone={u.user.phone}
                        location={u.user.location.city + ", " + u.user.location.state}
                    />
                ))}
            </div>
            <div className="pagination-wrapper">
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(_, value) => { setPage(value); window.scrollTo(0, 0); }}
                    color="primary"
                    shape="rounded"
                />
            </div>
        </div>
    );
}

export default Home;