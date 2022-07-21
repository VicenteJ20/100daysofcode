import React from "react";
import "../Style_components/button_section.css"

export default function ButtonsSection(){
    return (
        <div className="button_section col-md-10">
            <header className="btn_header_title">
                <h1>Buttons</h1>
            </header>
            <div className="default_no_icon_div mt-5">
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button variant="outline" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design outline_btn">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus_outline">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button variant="text" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design text_btn">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus_text">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button disableShadow <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design disableShadow">Default</button>
                </div>
                <div></div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button disabled <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design disabled">Disabled</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button variant="text" disabled <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design text_disabled">Disabled</button>
                </div>
            </div>
            <div className="default_icon_div mt-5">
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button startIcon="local_grocery_store" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design local_grocery"><i className="fa-solid fa-cart-plus"></i> Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button endIcon="local_grocery_store" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design local_grocery">Default <i className="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
            <div className="default_icon_size mt-5">
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button size="sm" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="btn btn-primary">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button size="md" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="btn btn-primary md_button">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button size="lg" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="btn btn-primary lg_button">Default</button>
                </div>
            </div>
            <div className="default_icon_colors mt-5">
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button color="default" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button color="primary" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design primary_button">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button color="secondary" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design secondary_button">Default</button>
                </div>
                <div>
                    <p><i className="fa-solid fa-angle-left icon_text_button"></i> Button color="danger" <span className="slash_span">/</span><i className="fa-solid fa-angle-right icon_text_button"></i></p>
                    <button className="button_design danger_button">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus_primary">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus_secondary">Default</button>
                </div>
                <div>
                    <p>&:hover, &:focus</p>
                    <button className="button_design hover_focus_danger">Default</button>
                </div>
            </div>
            <footer className="footer">CREATED BY <a href="https://devchallenges.io/portfolio/VicenteJ20" target="_blank" rel="noreferrer">VicenteJ20</a> - <a target="_blank" href="https://devchallenges.io/" rel="noreferrer">devchallenges.io</a></footer>
        </div>
        
    );
}