'use strict';

export const Overview = () => {
    return `
    <div class='overview-content'>
        <nav id="navbar-example2" class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Visualising Scrum Values</a>
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Content</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#one">#Scrum Value</a>
                <a class="dropdown-item" href="#two">#Why</a>
                <a class="dropdown-item" href="#three">#Use</a>
              </div>
            </li>
          </ul>
        </nav>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" class='overview-pragraph'>
          <h4 id="one">#Scrum Value</h4>
          <p>
            <img src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/ScrumValues-smaller.png" style="width: 100%; height: 100%;" alt="srum-value">
          </p>
          <h4 id="two">#Why</h4>
          <p>How do I know if my team are demonstrating the Scrum Values? What can I use to show their current state?</p>
          <h4 id="three">#Use</h4>
          <p>
            The exercise I used is to rate yourself of against a list of questions, giving yourself 1 point for each question you agreed with and then mark result on a scale. Once completed you should end up with something like this: 
            <br>
            <br>
            <img src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/SingleSpider-smaller.jpg" style="width: 100%; height: 100%;" alt="srum-value">
          </p>
        </div>
    </div>
    `
}   