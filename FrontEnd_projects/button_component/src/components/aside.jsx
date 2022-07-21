import React from "react";
import '../Style_components/aside.css'

export default function Aside(){
    return (
        <div className="aside_nav col-lg-2">
            <header className="header_name">
                <h2 className="web_link_title"><span className="colorText_link">Dev</span>challenges.io</h2>
            </header>
            <section className="list_section">
                <ul className="ul_section">
                    <li><button className="button_nav_link colors_button">Colors</button></li>
                    <li><button className="button_nav_link typography_button">Typography</button></li>
                    <li><button className="button_nav_link spaces">Spaces</button></li>
                    <li><button className="button_nav_link buttons">Buttons</button></li>
                    <li><button className="button_nav_link inputs">Inputs</button></li>
                    <li><button className="button_nav_link grid">Grid</button></li>
                </ul>
            </section>
        </div>
    );
}