# Profile Card with React and Tailwind CSS

This project displays user profile information in a card format using data fetched from the [Random User API](https://randomuser.me). The design is implemented using **React** and **Tailwind CSS**.

---

## 🚀 Features

- Fetches data from the API: `https://randomuser.me/api/?page=1&results=1&seed=abc`
- Displays user details (Image, First Name, Last Name, Gender, Phone Number) in a visually appealing card format.
- Responsive design using **Tailwind CSS**.

---

## 🛠️ Installation & Setup

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or above)
- **npm** (v6 or above)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd profile-card
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 💻 Project Structure

```
profile-card/
├── src/
│   ├── components/
│   │   └── ProfileCard.js  # Main card component
│   ├── App.js              # App entry point
│   ├── index.css           # Tailwind CSS configuration
│   ├── index.js            # React app bootstrap
├── public/
├── tailwind.config.js       # Tailwind CSS configuration file
├── package.json
├── README.md
```

---

## 📦 API Used

- **API Endpoint**: [Random User API](https://randomuser.me/api/?page=1&results=1&seed=abc)
- **Response Example**:
  ```json
  {
    "results": [
      {
        "gender": "female",
        "name": {
          "first": "Laura",
          "last": "Woods"
        },
        "phone": "031-623-5189",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/88.jpg"
        }
      }
    ]
  }
  ```

---

## ✨ Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and clean styling.
- **Random User API**: For fetching profile data.

---


