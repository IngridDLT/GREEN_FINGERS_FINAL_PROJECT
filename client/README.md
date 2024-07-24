# Documentación Front-End Green Fingers Project

info sobre como funciona la App (npm run dev) cual es su finalidad, breve descripcion, imagenes del diseño FIGMA  https://www.figma.com/design/IUIuso2TX3K1CEOmiINdkm/Green-Fingers?node-id=0-1&t=Yh7dgxDOH47ZKs2X-1


This is the frontend application for the Green Fingers, Gardening Online Store project. It is built with Vue.js and provides a user-friendly interface for customers to buy plants, view gardening information, and get in touch with the store. Additionally, an admin panel is available for managing products.

## Features

- **Home Page:** Displays a list of products with options to filter by categories.
- **Contact Page:** Provides a contact form for customers to reach out.
- **Advice Page:** Offers expert advice on choosing the right paint products.
- **Admin Dashboard:** Allows admin users to add, update, and delete products.

## Components

- **Navbar:** Allows the user to navigate through the menu, choosing the different views of the page. According to its responsive design, it is displayed as a ‘hamburger menu’ on mobile devices and from medium devices, it is displayed as a horizontal bar.

- **Header:** Shows the corporate section of the App with the logo and company name. It is related to the Cart component as it is displayed in the Header.

- **ProductCard:** Contains the products it receives from the database. It is interrelated with the Cart component as when clicking on the product it adds it to the shopping Cart.

- **Cart:** Gathers the list of products that the customer wishes to purchase. It is related to Header and ProductCard.

- **Footer:**  Displays the links to the social networks and links to the developer's profile.

## Technologies Used

- Vue.js 3
- Vue Router
- Tailwind CSS
- FontAwesome
- Git
- Github

## Project Structure

