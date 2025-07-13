# Event Locator web application

A modern, responsive web application that allows users to search and discover events happening in their city. Built with HTML5, CSS3, JavaScript, and Bootstrap 5.

##  Features

### Core Functionality
- **Event Search**: Search events by name or location
- **Date Filtering**: Filter events by specific dates
- **Category Filtering**: Filter events by category (Music, Sports, Art, Tech)
- **Event Details**: View detailed information about each event
- **Responsive Design**: Mobile-friendly interface using Bootstrap 5

### User Interface
- **Modern Design**: Clean, user-friendly interface with warm color scheme
- **Interactive Elements**: Hover effects and smooth animations
- **Bootstrap Icons**: Visual icons for better user experience
- **Gradient Backgrounds**: Beautiful color gradients throughout the app

##  Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download the project files
2. Open the project folder in your file explorer
3. Navigate to the `html` folder
4. Open `index.html` in your web browser

### File Structure
```
event-locator-app/
├── html/
│   ├── index.html          # Home page with search functionality
│   ├── events.html         # Event list page
│   └── event-details.html  # Event details page
├── css/
│   └── style.css          # Custom styles and responsive design
├── js/
│   ├── events-data.js     # Sample event data
│   ├── index.js           # Home page functionality
│   ├── events.js          # Event list and filtering logic
│   └── event-details.js   # Event details page logic
└── README.md              # This file
```

##  How to Use

### Home Page (`index.html`)
1. **Search Events**: Enter keywords in the search bar to find events by name or location
2. **Filter by Date**: Use the date picker to filter events by specific dates
3. **Filter by Category**: Select a category from the dropdown menu
4. **Submit Search**: Click the "Search" button to view filtered results

### Events List (`events.html`)
- **Event Cards**: Each event is displayed in a beautiful card format
- **Event Information**: Cards show event name, date, location, category, and description
- **View Details**: Click "View Details" to see complete event information
- **No Results**: If no events match your criteria, a friendly message is displayed

### Event Details (`event-details.html`)
- **Complete Information**: View full event details, including image and description
- **Navigation**: Use the "Back to Events" button to return to the event list
- **Responsive Layout**: Details are displayed in a responsive grid layout

##  Design Features

### Color Scheme
- **Primary Gradient**: Blue to purple (`#667eea` to `#764ba2`)
- **Accent Colors**: Warm orange to red (`#ff9a56` to `#ff6b6b`)
- **Background**: Soft light gray (`#f8f9fa`)
- **Text**: Warm gray tones for optimal readability

### UI Components
- **Rounded Corners**: 20px border radius for modern appearance
- **Smooth Animations**: Hover effects and transitions
- **Shadow Effects**: Subtle shadows for depth and visual hierarchy
- **Responsive Grid**: Bootstrap grid system for mobile compatibility

##  Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with gradients and animations
- **JavaScript**: Dynamic content loading and filtering
- **Bootstrap 5**: Responsive framework and components
- **Bootstrap Icons**: Visual icons for enhanced UX

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge


### Data Management
- **Static Data**: Event information stored in `js/events-data.js`
- **Search Criteria**: Stored in browser localStorage
- **No Database Required**: Lightweight, client-side application

## Sample Events

The app includes sample events across different categories in Kigali, Rwanda:

### Music Events
- **City Jazz Festival** (July 10, 2025) - BK Arena, Kigali
- **Rock Concert Night** (July 18, 2025) - Amahoro Stadium, Kigali

### Tech Events
- **Tech Innovators Expo** (July 15, 2025) - Nyarugenge Expo Center, Kigali

### Art Events
- **Modern Art Showcase** (July 12, 2025) - Rebertory Art Gallery, Kigali

### Sports Events
- **City Marathon** (July 20, 2025) - Kigali City, Rwanda

All events are scheduled for July 2025 and feature venues across Kigali, Rwanda's capital city.

##  Customization

### Adding New Events
1. Open `js/events-data.js`
2. Add new event objects to the `eventsData` array
3. Include all required fields: `id`, `name`, `date`, `location`, `category`, `description`, `image`

### Modifying Styles
1. Edit `css/style.css` to change colors, spacing, or animations
2. Update Bootstrap classes in HTML files for layout changes
3. Modify JavaScript files for functionality changes

### Adding Categories
1. Update the category dropdown in `html/index.html`
2. Add new category options as needed
3. Ensure events in `events-data.js` use the new category names

