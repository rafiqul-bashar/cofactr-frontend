UI to COPY - https://github.com/sid86-dev/shoe-store

### Submission Guide for Cofactr Project

    Project Name: Cofactr

    Project Type: E-commerce Platform

    GitHub Repository:
        Frontend Project: Link to your public repository for the frontend
        Backend Project: Link to your public repository for the backend

    Live Links:
        Frontend Project: Link to live deployment of the frontend
        Backend Project: Link to live deployment of the backend

---

Task

User Authentication and Authorization
Signup: Users can create new accounts with unique email addresses and passwords.
Login: Authenticate users with JWT and allow access to protected routes.
OAuth Login: Allow users to log in using third-party services (e.g., Google, Facebook).
Store the User in Mongodb database.
Profile Management
View Profile: Display user's personal information, including name, email, and profile picture.
Edit Profile: Allow users to update their personal information and change their passwords.
JWT implementation : Secure all these api through JWT
(Optional) Profile Picture Upload: Users can upload and update their profile pictures.
CRUD Operations
Create Items: Users can create new items (e.g., tasks, posts, events) with detailed information.
Read Items: Display a list of items created by the user or shared with the user.
Update Items: Allow users to edit the details of their items.
Delete Items: Users can delete items they have created.
JWT implementation : Secure all these api through JWT
Search and Filtering
Search Functionality: Implement search features that allow users to find items. You can implement it from the frontend using javascript methods or you can implement it from the backend using Mongodb methods to narrow down search results.
Dashboard implementation
Dashboard Overview: Provide a dashboard that gives an overview of data and activities. You can take some inspiration of Dashboard from Themeforest
(Optional) Charts and Graphs: Display data in Dashboard overview page using charts and graphs using libraries like Recharts, Chart.js or D3.js.

      6.  Relevant Routes & Section

Add at least 6 section in home page that align to your project
Add at least 5 Relevant Routes in Navbar that align to your project

Note:
Flexibility: You can use any other technology to implement these features if you want.
Responsiveness: Ensure responsiveness across desktop and mobile devices for an optimal user experience
Cleaner UI: Improve the overall design for a neater and user-friendly interface.
README: Add instructions on how to set up and run the project locally, along with a description of the implemented features in your project’s Readme.md file

<!-- users roles -->

User A (Visitor / Non-Authenticated User):

    Landing Page:
        Initial page upon visiting the site.
        Includes sections like featured products, special offers, etc.
        Navigation to product categories and other sections.

    Product Pages:
        Browse products, view details, add to cart.
        Search and filter products based on criteria.

    Cart Page:
        User can add products to the cart.
        Proceed to checkout where registration/login is required.

User B (Authenticated Customer):

    Signup/Login:
        Required to proceed with checkout.
        Creates an account with email and password.

    Profile Page:
        Displays personal information (name, email, etc.).
        Edit profile (change password, update details).

    My Orders:
        View past orders and order details.
        Track current orders.

    Become a Seller:
        Option to become a seller visible in profile or settings.
        Upon request, backend updates user role to Seller (User C).

User C (Seller):

    Dashboard:
        Overview of key metrics (sales, orders, etc.) - to be implemented later.
        Quick links to manage products, categories, and orders.

    Manage Products:
        Create new products with details (title, description, price, images).
        Edit existing product details.
        Delete products or mark them as unavailable.

    Manage Categories:
        Create, edit, or delete product categories.
        Manage categories specific to their products only.

    Orders Management:
        View orders placed by customers for their products.
        Update order statuses (processed, shipped, delivered).

Implementation Notes:

    User Roles: Implement role-based authentication to differentiate functionalities and access levels for User A (visitor), User B (customer), and User C (seller).

    Dashboard: Design a seller-specific dashboard with relevant widgets and sections to monitor and manage their operations efficiently.

    Security: Ensure secure authentication and authorization mechanisms (JWT) for user login, profile management, and seller operations.

    Scalability: Plan for scalability to handle increasing products, users, and transactions as the platform grows.
