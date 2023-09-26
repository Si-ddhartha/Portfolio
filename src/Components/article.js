import React from "react";
import './article.css';

function Article(props){
    return(
        <div className="article">
            <div className="article-about">
                <h2>{props.article.title}</h2>
                <p>{props.article.description}</p>
            </div>
            <div className="article-link">
                <a href={props.article.link}><i class="fa-solid fa-arrow-up-right-from-square fa-xl"></i></a>
            </div>
        </div>
    )
}

export default Article