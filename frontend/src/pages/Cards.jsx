import React from "react";

export default function Cards(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.imageURl} className="card-img-top" alt={props.Title} />
            <div className="card-body">
                <h5 className="card-title">{props.Title}</h5>
                <p className="card-text">{props.Detail}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
