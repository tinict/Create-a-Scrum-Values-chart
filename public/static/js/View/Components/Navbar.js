'use strict';

export const Navbar = () => {
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex nav-header">
        <div class="container-fluid">
            <a class="navbar-brand navbar-left" href="#">
                <img src="static/media/scrumorg-logo.webp" alt="logo-scrum">
            </a>
            <a class="navbar-user navbar-right" href="#">
                <span>My Chart</span>
                <i class="far fa-hand-peace text-secondary"></i>
            </a>
        </div>
        <ul class="sub-nav">
            <li>
                <a class="sub-nav-item" href="https://scrumguides.org/scrum-guide.html">
                    <i class="fas fa-book"></i>
                    <span class='title'>Scrum Guide</span>
                </a>
            </li>
            <li>
                <a class="sub-nav-item" href="https://www.scrum.org/resources/blog/visualising-scrum-values">
                    <i class="fas fa-book"></i>
                    <span class='title'>Blog Scrum Values</span>
                </a>
            </li>
            <li>
                <a class="sub-nav-item" href="">
                    <i class="fas fa-info-circle"></i>
                    <span class='title'>Docs</span>
                </a>
            </li>
        </ul>
    </nav> 
    `;
};
