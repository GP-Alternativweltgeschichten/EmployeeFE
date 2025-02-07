# Angular Application

## 📌 Project Description
This is an Angular application designed to give the musuem employees the possibility to manage the thematic worlds shown in the visitor webpage. It provides features such as adding, editig and deleting scenarios and old maps.

## 📖 Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## ⚙️ Installation
1. Ensure that Node.js is installed
2. Clone the repository:
   ```sh
   git clone https://github.com/GP-Alternativweltgeschichten/EmployeeFE.git
   cd EmployeeFE
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Make sure you have Angular CLI installed:
   ```sh
   npm install -g @angular/cli
   ```

## 🚀 Running the Application
Start the development server:
```sh
ng serve
```
By default, the application runs on `http://localhost:4201/`.

## 📂 Project Structure
```
src/
  app/                  # Main Angular application files
    error/              # Catches errors in the URL
    home/               # Starting page
    nav-bar/            # Menu to navigate through the application
    old-map-dialog/     # Dialog to add and edit old maps
    old-maps/           # Overview of old maps
    scenario-dialog/    # Dialog to add and edit scenarios
    scenarios/          # Overview of scenarios
    services/           # Services for the application
    top-bar/            # Top-Bar with general information
  assets/               # Static assets (images, fonts, etc.)
angular.json            # Angular project configuration
package.json            # Dependencies and scripts
README.md               # Documentation
```

## ...

---

Happy Coding! 🚀

