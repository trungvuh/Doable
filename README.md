# Welcome to Doable

## [Live Demo](https://fspdoable.herokuapp.com/#/)

Doable is a website features a vast majority of "DIY" projects for babies and toddlers. The site was built in hope that parents can spend some time with their loves to create and make their own memories together. I made the website when my (twin) kids were half way around the world away from me, so this project has a very special and emotional feeling to me.

Doable allows users to:

  * Create an account
  * Log in / Log out. Also features Demo Log in
  * Have an overview of all the projects on the homepage
  * Create and update her own project
  * View detail project from other user
  * Search for a specific project
  * Comment and uncomment on a project


## Core Features:

### Technologies and Libraries:

  * Rails
  * Ruby on Rails
  * React.js
  * Redux
  * PostgrSQL
  * BCrypt
  * Figaro
  * Node.js
  * JavaScript

 ### Overview:

  * **Auth:** User can view all projects on homepage without logging in. For security purposes, clicking to view the detail of a specific project will redirect the user to log in/ sign up page. Doable uses Bcrypt for secure password authentication.

  * **Home Page:** Splash background was created with CSS `-webkit transformation` and `animation`. User can also starts create her own project directly from the homepage.

    ![](https://github.com/trungvuh/Doable-assest/raw/master/gif/Index.gif)

  * **Search Feature:** Search is updated in real time. Clicking on a specific search result will also take user to the project detail page.

    ![](https://github.com/trungvuh/Doable-assest/raw/master/gif/Search-1.gif)

  * **Projects Detail Page:**

    + User can view each other project, but can only edit and delete her own projects.

    + User can also leave comment on any projects.

    ![](https://github.com/trungvuh/Doable-assest/raw/master/gif/Detail.gif)

  * **Pictures and Videos:** Using **Quill** rich text editor, user can style her project upto her own desire, including adding pictures and videos.

    ![](https://github.com/trungvuh/Doable-assest/raw/master/gif/Detail-2.gif)


## Future Improvement:

  * Likes: users can like each other projects.
  * Follows: user can follow each other.
  * User profile page: feature all projects of her own, including and liked projects.
  * Category: projects will be divided into sub-category. Update search so that user can also search for project based on category, not just title.
