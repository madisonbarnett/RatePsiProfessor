# RatePsiProfessor

A custom professor rating platform designed to help students submit and view professor reviews. Built using Wix CMS and custom Wix Velo Javascript code to handle dynamic data management and displaying ratings for over 400+ users in a user-friendly interface.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

## Overview
RatePsiProfessor is a project designed to streamline the process of collecting and viewing professor ratings. Originally developed for members of the University of Alabama's Alpha Gamma Delta chapter, it enables users to share their experiences and review professors based on various criteria, such as teaching quality, clarity, and class difficulty.

The platform features a dynamic data management system using Wix CMS collections and custom code to handle review submissions and data organization for easy filtering and searching.

## Features
- 📊 **Dynamic Rating System**: Automatically updates professor profiles based on user-submitted reviews.
- 🏷️ **Filtering by Initials**: Users can filter professor lists by the first letter of their name.
- 🔍 **Advanced Search**: Search for professors by name, department, or review attributes.
- 🖥️ **User-Friendly Interface**: Clean and intuitive design for both desktop and mobile views.
- 🛠️ **Custom Automation**: Uses custom Wix Velo JavaScript code to automate data handling and CMS updates.

## Live Demo
Check out the live site: [RatePsiProfessor Live Site](https://mtbarnett6.wixsite.com/ratepsiprofessors)  

## Technologies Used
- **Wix CMS**: For managing professor data and user submissions.
- **Wix Velo**: Custom JavaScript code for automating data management and enhancing functionality.
- **HTML/CSS**: For custom styling and UI design.
- **JavaScript**: For additional interactivity and dynamic updates.

## Usage
1. **User Submissions**: Users can submit reviews by filling out the review form on the site. Submitted reviews will be dynamically added to the appropriate professor's profile.
2. **Viewing Professors**: Use the dropdown menu to filter professors by the first letter of their name or search using the search bar.
3. **Admin Features**: Admins can view detailed analytics and moderate reviews through the Wix backend.

### Example Walkthrough
- Home page showcasing header, search option, and professors sorted by first name based on dropdown menu
![image](https://github.com/user-attachments/assets/95f59fb0-5fb6-472e-a91c-92020e3bd121)
![image](https://github.com/user-attachments/assets/1a2d47b8-3c4f-4c3c-ab04-c2d74defcbd5)

- Example of search bar and results page
![image](https://github.com/user-attachments/assets/002126ae-5614-4f67-afcc-d324120cd8fb)

- Example of professor page showcasing an image, overall rating, links to home, search, and submission form, and a review left by a user
![image](https://github.com/user-attachments/assets/dbfd3398-5f57-400a-be78-600157dd9ff0)

## Project Structure

### Understanding `.jsw` Files
The `src/backend/` folder contains `.jsw` files, which are Wix-specific **Web Modules**. These files are used in Wix to define server-side functions that can be securely called from the frontend. They serve as a bridge between the frontend and backend, allowing certain operations (e.g., database queries and secure computations) to be handled on the server side.

In this repository, the `.jsw` files are preserved to maintain the original structure of the Wix project. If you’re not using Wix, consider these as standard `.js` files but note that some functions and syntax may not be compatible outside of Wix.

## Future Enhancements
Some planned features and improvements for RatePsiProfessor include:

- 📱 **Mobile Optimization**: Enhance the mobile UI for a seamless user experience.
- 🔐 **Automated Spell Check**: Prevent duplicate professor pages caused by minor typos or inconsistent spellings in submissions by implementing a custom-coded spell-check feature
- 📊 **Automated Professor Profile Enrichment**: Automatically populate new professor pages with relevant information such as subject, RateMyProfessor link, and headshot
