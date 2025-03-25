# my-map-app


/*
# Full Stack Assignment
## Project Overview
A full-stack web application with authentication and OpenStreetMap integration using React (frontend) and Node.js/Express (backend).

## Technologies Used
### Frontend:
- React
- React Router
- Axios
- Leaflet (for OpenStreetMap integration)

### Backend:
- Node.js + Express
- JWT Authentication
- CORS
- dotenv

## Installation and Setup
### 1️⃣ Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   node server.js
   ```
   ✅ Expected output: `Server running on port 5000`

### 2️⃣ Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm start
   ```
   ✅ React app runs at `http://localhost:3000`

## Features
- User authentication using JWT
- Secure API endpoints
- Interactive map using Leaflet
- Dashboard with clickable cards
- Protected routes with login verification

## Usage
1. **Login Page**
   - Enter **Username: `admin`**, **Password: `password`**
   - Click **Login** → Redirects to Dashboard
2. **Dashboard**
   - Click on a **card** → Opens **Map View**
3. **Map View**
   - Displays **India's Map** with **Zoom In/Out**

## Deployment
- **Backend:** Deploy on Render, Railway, or Heroku
- **Frontend:** Deploy on Vercel or Netlify

## Author
Syncthreads Computing Pvt Ltd

## License
This project is confidential and for evaluation purposes only.
*/
