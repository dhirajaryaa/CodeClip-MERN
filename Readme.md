# ClipCode

ClipCode is a flexible code snippet management tool built using the MERN (MongoDB, Express, React, Node.js) stack. It helps developers organize and retrieve code snippets efficiently, enabling better productivity.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **User Authentication**: Secure login with Google and email/password.
- **Snippet Management**: Create, edit, delete, and view code snippets.
- **Categorization**: Organize snippets by tags and categories.
- **Search and Filter**: Quickly locate code snippets.
- **Leaderboard**: View top contributors and popular snippets.
- **Comments**: Collaborate by commenting on snippets.

---

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase/Google OAuth
- **State Management**: Redux Toolkit (frontend state management)
- **Deployment**: Vercel for frontend, other hosting for backend

---

## Installation

### Prerequisites
- Node.js
- MongoDB (local or cloud instance)
- Git

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dhirajaryaa/CodeClip-MERN.git
   cd clipcode
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Environment Variables**:
   - Create a `.env` file in the `Backend` folder and add:
     ```plaintext
     MONGODB_URI=your_mongo_connection_string
     PORT=8000
     LIMIT=16kb
     ALLOW_ORIGIN=*
     ```
   - For the frontend, create a `.env` file in the `Frontend` folder and add:
     ```plaintext
     REACT_APP_API_URL=your_backend_url
     ```

5. **Run the Project**:
   - **Backend**:
     ```bash
     cd Backend
     npm start
     ```
   - **Frontend**:
     ```bash
     cd ../Frontend
     npm run dev
     ```

---

## Usage

1. **Register/Login**: Use the built-in authentication to create an account or sign in with Google.
2. **Add Snippets**: Create snippets by providing a title, code, and optional tags.
3. **Organize**: Use tags and categories to organize snippets.
4. **View Leaderboard**: Check out popular snippets and top contributors.

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user

### Snippets
- `GET /api/snippets` - Get all snippets
- `POST /api/snippets` - Add a new snippet
- `PUT /api/snippets/:id` - Update a snippet
- `DELETE /api/snippets/:id` - Delete a snippet

### Leaderboard
- `GET /api/leaderboard` - View top contributors and snippets

### Comments
- `POST /api/comments/:snippetId` - Add a comment to a snippet

---

## Folder Structure

```plaintext
ClipCode/
├── Backend/                  # Backend code
│   ├── node_modules/         # Backend dependencies
│   ├── public/               # Public assets (if any)
│   ├── src/                  # Source folder for backend
│   │   ├── controllers/      # API route controllers
│   │   ├── db/               # Database connection setup
│   │   ├── models/           # Mongoose schemas
│   │   ├── utils/            # Utility functions
│   │   ├── app.js            # Express app configuration
│   │   ├── contents.js       # Backend constants and configurations
│   │   └── index.js          # Backend entry point
│   ├── .env                  # Environment variables (not included in version control)
│   ├── .gitignore            # Git ignore file
│   ├── .prettierrc           # Prettier configuration
│   ├── .prettierignore       # Prettier ignore file
│   ├── package.json          # Backend dependencies and scripts
│   └── package-lock.json     # Backend lock file for dependencies
│
├── Frontend/                 # Frontend code
│   ├── node_modules/         # Frontend dependencies
│   ├── public/               # Public assets (e.g., index.html, icons)
│   ├── src/                  # Source folder for frontend
│   │   ├── assets/           # Images, fonts, and other static assets
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Main application pages
│   │   ├── App.jsx           # Main App component
│   │   ├── index.css         # Global styles
│   │   └── main.jsx          # Frontend entry point
│   ├── .gitignore            # Git ignore file for frontend
│   ├── index.html            # Main HTML file
│   ├── package.json          # Frontend dependencies and scripts
│   ├── package-lock.json     # Frontend lock file for dependencies
│   ├── README.md             # README file for frontend
│   └── vite.config.js        # Vite configuration for development and build
```

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License.

---

## Contact
For questions or support, please reach out to the project maintainers or open an issue in the GitHub repository. 
