# 🏡 WanderLust - Airbnb Clone

A full-stack web application inspired by Airbnb, built with Node.js, Express, MongoDB, and EJS. WanderLust allows users to explore, list, and review accommodations around the world.

## 🌐 Live Demo

**[Visit WanderLust Live](https://wanderlust-51wd.onrender.com/)**

## 📸 Screenshots

![WanderLust Homepage](https://via.placeholder.com/800x400?text=WanderLust+Homepage)

## 🚀 Features

### 🏠 Property Management
- **Browse Listings**: Explore accommodations with beautiful image galleries
- **Category Filtering**: Filter by categories like Trending, Rooms, Iconic Cities, Mountains, etc.
- **Detailed Views**: View comprehensive property information with images and descriptions
- **Add New Listings**: Property owners can list their accommodations
- **Edit/Delete**: Full CRUD operations for property owners

### 👤 User Authentication
- **User Registration & Login**: Secure authentication system
- **Session Management**: Persistent login sessions
- **User Authorization**: Protected routes and ownership verification

### ⭐ Reviews & Ratings
- **Star Rating System**: Interactive 5-star rating system
- **Review Comments**: Users can leave detailed reviews
- **Review Management**: Users can delete their own reviews
- **Review Count Display**: Shows total number of reviews

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first responsive layout
- **Bootstrap Integration**: Modern and clean interface
- **Interactive Elements**: Hover effects and smooth transitions
- **Category Badges**: Visual category indicators on property images

### 🔧 Technical Features
- **Image Upload**: Cloudinary integration for image storage
- **Form Validation**: Client and server-side validation
- **Flash Messages**: User feedback system
- **Error Handling**: Comprehensive error management
- **Security**: Input sanitization and authentication middleware

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Embedded JavaScript templating
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **Custom CSS** - Additional styling

### Authentication & Security
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **express-session** - Session management
- **Joi** - Data validation

### File Upload & Storage
- **Multer** - File upload middleware
- **Cloudinary** - Cloud image storage

### Additional Tools
- **method-override** - HTTP method override
- **connect-flash** - Flash messages
- **dotenv** - Environment variable management

## 📁 Project Structure

```
WanderLust/
├── controllers/
│   ├── listings.js          # Listing operations
│   ├── reviews.js           # Review operations
│   └── users.js             # User authentication
├── models/
│   ├── listing.js           # Listing schema
│   ├── review.js            # Review schema
│   └── user.js              # User schema
├── routes/
│   ├── listing.js           # Listing routes
│   ├── review.js            # Review routes
│   └── user.js              # User routes
├── views/
│   ├── includes/
│   │   ├── navbar.ejs       # Navigation bar
│   │   ├── footer.ejs       # Footer
│   │   └── flash.ejs        # Flash messages
│   ├── layouts/
│   │   └── boilerplate.ejs  # Base layout
│   ├── listings/
│   │   ├── index.ejs        # Listings grid
│   │   ├── show.ejs         # Individual listing
│   │   ├── new.ejs          # Add listing form
│   │   └── edit.ejs         # Edit listing form
│   ├── users/
│   │   ├── login.ejs        # Login form
│   │   └── signup.ejs       # Registration form
│   └── error.ejs            # Error page
├── public/
│   ├── css/
│   │   ├── style.css        # Main styles
│   │   └── rating.css       # Star rating styles
│   └── js/
│       └── script.js        # Client-side JavaScript
├── utils/
│   ├── ExpressError.js      # Error handling utility
│   └── wrapAsync.js         # Async error wrapper
├── init/
│   ├── data.js              # Sample data
│   └── index.js             # Database initialization
├── app.js                   # Main application file
├── cloudConfig.js           # Cloudinary configuration
├── middleware.js            # Custom middleware
├── schema.js                # Joi validation schemas
└── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

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
Create a `.env` file in the root directory:
```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

### 4. Initialize Database (Optional)
```bash
node init/index.js
```

### 5. Start the Application
```bash
npm start
```

The application will be available at `http://localhost:8080`

## 📝 Usage

### For Travelers
1. **Browse Properties**: Visit the homepage to explore available listings
2. **Filter by Category**: Use category filters to find specific types of accommodations
3. **View Details**: Click on any listing to see detailed information
4. **Leave Reviews**: Rate and review properties you've stayed at

### For Property Owners
1. **Sign Up/Login**: Create an account or log in
2. **Add Listing**: Click "Airbnb your home" to add a new property
3. **Manage Properties**: Edit or delete your listings
4. **Monitor Reviews**: See reviews left by guests

## 🎯 API Endpoints

### Listings
- `GET /listings` - Get all listings
- `GET /listings/new` - New listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - Get specific listing
- `GET /listings/:id/edit` - Edit listing form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /signup` - Registration form
- `POST /signup` - Register user
- `GET /login` - Login form
- `POST /login` - Login user
- `GET /logout` - Logout user

## 🎨 Categories

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

- **Authentication**: Secure user registration and login
- **Authorization**: Route protection and ownership verification
- **Input Validation**: Server-side and client-side validation
- **File Upload Security**: Secure image upload with Cloudinary
- **Session Management**: Secure session handling
- **Error Handling**: Comprehensive error management

## 📱 Responsive Design

WanderLust is fully responsive and works seamlessly on:
- 💻 **Desktop** (1200px+)
- 💻 **Laptop** (992px-1199px)
- 📱 **Tablet** (768px-991px)
- 📱 **Mobile** (320px-767px)

## 🤝 Contributing

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
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]

## 🙏 Acknowledgments

- **Airbnb** - For the inspiration
- **Bootstrap** - For the responsive framework
- **Font Awesome** - For the beautiful icons
- **Cloudinary** - For image storage and optimization
- **MongoDB Atlas** - For database hosting
- **Render** - For application deployment

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact the author.

---

⭐ **Star this repository if you found it helpful!**

**[Live Demo](https://wanderlust-51wd.onrender.com/)** | **[GitHub Repository](https://github.com/aashutosh585/WanderLust)**
