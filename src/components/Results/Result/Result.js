import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.id}`}>
            <img className="card-img-top" src={"https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"} alt={props.document.title}></img>
            <div className="card-body">
                <h6 className="title-style">{props.document.filepath}</h6>
            </div>
        </a>
    </div>
    );
}
