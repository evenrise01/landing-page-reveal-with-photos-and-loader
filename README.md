# Evenrise - Portfolio Landing Page

A stunning, performance-optimized portfolio landing page featuring advanced GSAP animations, including a dynamic counter loader, image flip transitions, and elegant text reveals.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18+-61dafb)
![GSAP](https://img.shields.io/badge/GSAP-3+-88ce02)

## ✨ Features

- 🎬 **Smooth Loading Animation** - Counter animation from 000 to 100
- 🖼️ **Image Flip Transitions** - Dynamic grid-to-corner image transitions using GSAP Flip
- 📝 **Text Split Animations** - Line-by-line text reveals with smooth easing
- ⚡ **Performance Optimized** - GPU-accelerated animations running at 60 FPS
- 📱 **Responsive Design** - Adapts beautifully to all screen sizes
- 🎨 **Modern Aesthetic** - Clean, minimal design with sophisticated animations
- 🏗️ **Modular Architecture** - Well-organized, maintainable codebase


## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Next.js 13+ (App Router)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/evenrise-portfolio.git
   cd evenrise-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your images**
   
   Place your images in the `/public` folder:
   - `/public/logo.jpg` - Your logo
   - `/public/img-1.jpg` through `/public/img-15.jpg` - Portfolio images

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
evenrise-portfolio/
├── animations/
│   ├── config.ts          # Animation configuration constants
│   ├── textUtils.ts       # Text splitting utilities
│   ├── counterUtils.ts    # Counter creation and animation
│   ├── imageUtils.ts      # Image flip and scale animations
│   └── timelineSetup.ts   # Main timeline orchestration
├── page.tsx               # Main component
├── globals.css            # Styles with performance optimizations
└── public/
    ├── logo.jpg
    └── img-*.jpg          # Portfolio images
```

## ⚙️ Configuration

### Animation Timing

Edit `animations/config.ts` to customize animation durations and timing:

```typescript
export const ANIMATION_CONFIG = {
  counter: {
    duration: { fast: 2, medium: 2.5, slow: 3 },
    delay: 1.5,
  },
  loader: {
    duration: 3,
    delay: 0.25,
  },
  images: {
    duration: 1,
    stagger: 0.125,
    scaleDuration: 0.45,
    scaleAmount: 2.5,
  },
  // ... more configuration
}
```

### Images

Update the image array in `page.tsx`:

```typescript
{[1, 2, 3, 4, 5, 10, 11, 12, 13, 15, 14].map((num) => (
  <div key={num} className="img">
    <img src={`/img-${num}.jpg`} alt="" />
  </div>
))}
```

### Content

Modify text content directly in `page.tsx`:

```typescript
<div className="header">
  <h1>Your Heading Here</h1>
</div>

<div className="site-info">
  <h2>Your description here</h2>
  // ...
</div>
```

## 🎨 Customization

### Colors

Edit CSS variables in `globals.css`:

```css
:root {
  --bg: #f1efe7;          /* Background color */
  --fg: #1f1f1f;          /* Text color */
  --loader-bg: #e0e0d8;   /* Loader background */
  --stroke: rgba(0, 0, 0, 0.2); /* Divider color */
}
```

### Typography

Update font settings in `globals.css`:

```css
body {
  font-family: "Inter", sans-serif; /* Change to your preferred font */
}
```

## 🔧 Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework
- **[GSAP](https://greensock.com/gsap/)** - Animation library
- **[GSAP Flip Plugin](https://greensock.com/docs/v3/Plugins/Flip)** - Layout transitions
- **[GSAP SplitText](https://greensock.com/docs/v3/Plugins/SplitText)** - Text animation plugin
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

## 🚀 Performance Optimizations

This project includes several performance optimizations:

- ✅ GPU-accelerated animations (`force3D: true`)
- ✅ Lazy loading for images
- ✅ `will-change` properties for animated elements
- ✅ DocumentFragment for batch DOM operations
- ✅ Scoped GSAP context to limit queries
- ✅ Proper cleanup after animations
- ✅ Hardware acceleration with `translateZ(0)`

Expected performance: **60 FPS** on modern devices

## 📱 Responsive Breakpoints

- **Desktop**: Default layout
- **Tablet/Mobile** (`max-width: 1024px`): Simplified navigation, adjusted layout

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GSAP by GreenSock for the amazing animation library
- Inspiration from modern portfolio designs
- Next.js team for the excellent framework

## 📧 Contact

Project Link: [https://github.com/evenrise01/landing-page-reveal-with-photos-and-loader](https://github.com/evenrise01/landing-page-reveal-with-photos-and-loader)

---

⭐ If you found this project helpful, please give it a star!


- Images should be optimized for web before adding to the project

## 🔮 Future Enhancements

- [ ] Add smooth scrolling sections
- [ ] Implement dark mode toggle
- [ ] Add project case studies
- [ ] Create admin panel for content management
- [ ] Add contact form with validation
- [ ] Implement page transitions

## 📚 Learn More

- [GSAP Documentation](https://greensock.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)

---

**Made with ❤️ and GSAP**
