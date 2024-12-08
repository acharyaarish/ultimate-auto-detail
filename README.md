# 🚗 Ultimate Auto Detail - Car Wash & Detailing Website

Welcome to **Ultimate Auto Detail**, a modern, sleek, and fully responsive Next.js website designed for a mobile car detailing business. This project delivers a seamless user experience with fast-loading hero videos, interactive service cards, and professional aesthetics.

---

## 🛠 Features

- **Responsive Design**: Fully optimized for all screen sizes and devices.
- **Fast Loading Hero Video**: No lag, smooth playback, and works across all browsers.
- **Dynamic Service Cards**: Display services with real-time hover effects and easy-to-read pricing.
- **Call-to-Action (CTA)**: Encourages users to book services with clickable links.
- **SEO Friendly**: Optimized metadata and Next.js best practices.

---

## 🚀 Live Demo

Check out the live website here: [Ultimate Auto Detail](https://example.com)

---

## 📂 Project Structure

```
├── public/
│   ├── images/           # Images for services and website
│   ├── videos/           # Hero video files
├── components/
│   ├── HeroSection.tsx   # Hero video and main landing content
│   ├── ServiceCard.tsx   # Interactive service cards
│   ├── ServicesSection.tsx # Section to display all services
│   ├── FooterCTA.tsx     # Call-to-action footer
├── pages/
│   ├── index.tsx         # Main homepage
```

---

## 🛠 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ultimate-auto-detail.git
cd ultimate-auto-detail
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website in development mode.

---

## 📸 Media Management

- **Images**: Located in `public/images/` for services and background elements.
- **Videos**: Located in `public/videos/` for the hero section. Includes WebM and MP4 formats for cross-browser compatibility.

---

## 🌟 Customization

### Update the Hero Video
1. Replace `hero-video.mp4` and `hero-video.webm` in `public/videos/`.
2. Ensure the dimensions are optimized for all screen sizes.

### Add New Services
1. Update the `services` array in `index.tsx`:
   ```tsx
   {
     name: "New Service",
     sedan: 100,
     suv: 120,
     description: "Description of the new service.",
     image: "/images/new-service.webp"
   }
   ```

---

## 📋 Tech Stack

- **Next.js**: Framework for server-side rendering and static site generation.
- **TypeScript**: Typed JavaScript for better reliability.
- **Tailwind CSS**: Rapidly built responsive designs with utility-first classes.
- **React Icons**: Beautiful icons for interactive elements.

---

## 👏 Contributing

Feel free to fork this repository and submit pull requests for enhancements. Contributions are always welcome!

1. Fork the repo
2. Create a new branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin my-feature`
5. Submit a pull request

---

## 📄 License

This project is open-source under the MIT License. Feel free to use, modify, and share as you see fit.

---

### 💬 Feedback & Support

If you have any questions, issues, or suggestions, feel free to open an issue on the [GitHub Repository](https://github.com/your-username/ultimate-auto-detail/issues).

---

**Thank you for visiting Ultimate Auto Detail! Happy coding!** 🚗✨
