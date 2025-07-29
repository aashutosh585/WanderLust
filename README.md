# 🏡 WanderLust - Airbnb Clone

A full-stack web application inspired by Airbnb, built with Node.js, Express, MongoDB, and EJS. WanderLust allows users to explore, list, and review accommodations around the world.

## 🌐 Live Demo

**[🚀 Visit WanderLust Live](https://wanderlust-51wd.onrender.com/)**

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation--setup)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## ✨ Features

### 🏠 Property Management
- **Browse Listings**: Explore accommodations with beautiful image galleries
- **Category Filtering**: Filter by categories like Trending, Rooms, Mountains, etc.
- **Detailed Views**: View comprehensive property information
- **Add New Listings**: Property owners can list their accommodations
- **Edit/Delete**: Full CRUD operations for property owners
- **Image Upload**: Cloudinary integration for high-quality images

### 👤 User Authentication & Authorization
- **Secure Registration & Login**: User authentication with Passport.js
- **Session Management**: Persistent login sessions
- **Protected Routes**: Authorization middleware
- **User Profiles**: Personalized user experience

### ⭐ Reviews & Ratings
- **5-Star Rating System**: Interactive star rating interface
- **Review Comments**: Detailed user reviews
- **Review Management**: Users can manage their reviews
- **Review Count Display**: Shows total reviews per listing

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Interactive Elements**: Smooth animations and hover effects
- **Category Badges**: Visual indicators on property images
- **Flash Messages**: User feedback system
- **Clean Interface**: Professional and intuitive design

### 🔧 Advanced Features
- **Form Validation**: Client and server-side validation with Joi
- **Error Handling**: Comprehensive error management
- **Security**: Input sanitization and XSS protection
- **Performance**: Optimized images and efficient queries

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js

### Frontend
- **EJS** - Embedded JavaScript templating engine
- **Bootstrap 5** - Responsive CSS framework
- **Font Awesome** - Icon library
- **Custom CSS** - Additional styling and animations

### Authentication & Security
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **express-session** - Session management
- **Joi** - Data validation schema

### File Upload & Storage
- **Multer** - File upload middleware
- **Cloudinary** - Cloud-based image storage and optimization

### Additional Packages
- **method-override** - HTTP method override
- **connect-flash** - Flash message middleware
- **dotenv** - Environment variable management

## 🚀 Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/aashutosh585/WanderLust.git
cd WanderLust
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add:
```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret_key
```

### 4. Database Setup
Initialize the database with sample data (optional):
```bash
node init/index.js
```

### 5. Start the Application
```bash
npm start
```

The application will be available at `http://localhost:8080`

## 📱 Usage

### For Travelers
1. **Explore Listings**: Browse available accommodations on the homepage
2. **Filter by Category**: Use category filters to find specific types of properties
3. **View Details**: Click on any listing to see detailed information
4. **Read Reviews**: Check ratings and reviews from other travelers
5. **Leave Reviews**: Rate and review properties after your stay

### For Property Owners
1. **Sign Up/Login**: Create an account to list your property
2. **Add Listing**: Click "Airbnb your home" to create a new listing
3. **Upload Images**: Add high-quality photos of your property
4. **Manage Listings**: Edit or delete your property listings
5. **Monitor Reviews**: Track guest feedback and ratings

## 🔗 API Endpoints

### Listings
```
GET    /listings           - Get all listings
GET    /listings/new       - New listing form
POST   /listings           - Create new listing
GET    /listings/:id       - Get specific listing
GET    /listings/:id/edit  - Edit listing form
PUT    /listings/:id       - Update listing
DELETE /listings/:id       - Delete listing
```

### Reviews
```
POST   /listings/:id/reviews           - Add review
DELETE /listings/:id/reviews/:reviewId - Delete review
```

### Authentication
```
GET    /signup    - Registration form
POST   /signup    - Register user
GET    /login     - Login form
POST   /login     - Authenticate user
GET    /logout    - Logout user
```

## 📁 Project Structure

```
WanderLust/
├── controllers/           # Route controllers
│   ├── listings.js       # Listing operations
│   ├── reviews.js        # Review operations
│   └── users.js          # User authentication
├── models/               # Database models
│   ├── listing.js        # Listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
├── routes/               # Express routes
│   ├── listing.js        # Listing routes
│   ├── review.js         # Review routes
│   └── user.js           # User routes
├── views/                # EJS templates
│   ├── includes/         # Partial templates
│   ├── layouts/          # Layout templates
│   ├── listings/         # Listing views
│   └── users/            # User views
├── public/               # Static files
│   ├── css/              # Stylesheets
│   └── js/               # Client-side JavaScript
├── utils/                # Utility functions
├── init/                 # Database initialization
├── app.js                # Main application file
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Custom middleware
└── schema.js             # Joi validation schemas
```

## 🎯 Categories

WanderLust features various accommodation categories:

- 🔥 **Trending** - Popular destinations
- 🛏️ **Rooms** - Private rooms
- 🏙️ **Iconic Cities** - Urban accommodations
- 🥾 **Hiking** - Adventure locations
- ⛰️ **Mountains** - Mountain retreats
- 🏰 **Castles** - Historic properties
- 🏊 **Amazing Pools** - Properties with pools
- 🏕️ **Camping** - Outdoor experiences
- 🚜 **Farms** - Rural getaways
- 🛸 **Domes** - Unique architecture
- ⛵ **Boats** - Waterfront stays

## 🔒 Security Features

- **Password Hashing**: Secure password storage with bcrypt
- **Session Security**: Secure session management
- **Input Validation**: Joi schema validation
- **XSS Protection**: Input sanitization
- **Authorization**: Route protection middleware
- **File Upload Security**: Cloudinary integration

## 📱 Responsive Design

Fully responsive design that works on:
- 💻 **Desktop** (1200px+)
- 💻 **Laptop** (992px-1199px)
- 📱 **Tablet** (768px-991px)
- 📱 **Mobile** (320px-767px)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ashutosh Maurya**

- GitHub: [@aashutosh585](https://github.com/aashutosh585)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)
- Portfolio: [View my work](https://your-portfolio-url.com)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **Airbnb** - For the design inspiration
- **Bootstrap** - For the responsive framework
- **Font Awesome** - For the beautiful icons
- **Cloudinary** - For image storage and optimization
- **MongoDB Atlas** - For database hosting
- **Render** - For seamless deployment

## 📊 Project Stats

- ⭐ **Stars**: Show your support by starring this repository
- 🍴 **Forks**: Feel free to fork and contribute
- 🐛 **Issues**: Report bugs or request features
- 📝 **License**: MIT License

## 🔮 Future Enhancements

- [ ] Advanced search and filtering
- [ ] Booking system integration
- [ ] Payment gateway integration
- [ ] Real-time chat system
- [ ] Mobile app development
- [ ] Multi-language support

---

### 🌟 Show Your Support

If you found this project helpful, please give it a ⭐ star!

**[🚀 Live Demo](https://wanderlust-51wd.onrender.com/)** | **[📚 Documentation](https://github.com/aashutosh585/WanderLust)**

---

*Made with ❤️ by [Ashutosh Maurya](https://github.com/aashutosh585)*
