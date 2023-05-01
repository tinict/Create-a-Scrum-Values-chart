'use strict';

export const Navbar= () => {
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-header">
        <div class="container-fluid">
            <a class="navbar-brand navbar-left" href="#">
                <img src="static/media/scrumorg-logo.webp" alt="logo-scrum">
            </a>
            <a class="navbar-user navbar-right" href="#">
                <span>Tín Nguyễn</span>
                <i class="far fa-hand-peace text-secondary"></i>
            </a>
        </div>
        <ul class="sub-nav">
            <li><a class="sub-nav-item" href="#">History</a></li>
            <li><a class="sub-nav-item" href="#">Scrum Values</a></li>
            <li><a class="sub-nav-item" href="#">About</a></li>
            <li><a class="sub-nav-item" href="#">Beehexa</a></li>
            <li><a class="sub-nav-item" href="#">Sitemap</a></li>
        </ul>
    </nav> 
    `;
};
