# Image Compressor

A modern, frontend-only Image Compressor built with React, TypeScript, and Vite. Compress single or multiple images directly in your browser with complete privacy—no uploads, no servers, and no data collection.

![Image Compressor Banner](./img/banner.png)

---

## Features

- Multiple image upload support
- Drag & Drop file upload
- Batch image compression
- Compression levels:
  - 50% (High Quality)
  - 30% (Balanced)
  - 25% (Recommended)
  - 10% (Low Quality)
  - 5% (Maximum Compression)
- Download individual compressed images
- Download all compressed images as a ZIP file
- Real-time compression progress
- Thumbnail previews
- Display:
  - File name
  - Original size
  - Compressed size
  - Space saved
  - Image dimensions
- Responsive design
- Beautiful SaaS-inspired UI
- Home & About pages
- Fully browser-based
- Privacy-first architecture

---

## Demo

> Coming Soon

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| react-dropzone | File Upload |
| browser-image-compression | Image Compression |
| JSZip | ZIP Generation |
| file-saver | File Downloads |
| React Router DOM | Routing |
| Lucide React | Icons |

---

## Project Structure

```text
src/
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── UploadZone.tsx
│   ├── CompressionDropdown.tsx
│   ├── ProgressBar.tsx
│   └── ResultCard.tsx
│
├── hooks/
│   └── useCompression.ts
│
├── utils/
│   └── compressImage.ts
│
├── pages/
│   ├── Home.tsx
│   └── About.tsx
│
├── App.tsx
└── main.tsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/image-compressor.git
```

Navigate to the project directory:

```bash
cd image-compressor
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Dependencies

```bash
npm install react-dropzone
npm install browser-image-compression
npm install jszip
npm install file-saver
npm install lucide-react
npm install react-router-dom
```

---

## How It Works

1. Upload one or more images.
2. Select a compression level.
3. Click **Compress Images**.
4. Wait for the compression process to complete.
5. Download individual images or all images as a ZIP archive.

All processing occurs locally within your browser.

---

## Compression Levels

| Level | Description |
|------|------|
| 50% | High Quality |
| 30% | Balanced |
| 25% | Recommended |
| 10% | Low Quality |
| 5% | Maximum Compression |

---

## Privacy

Your images are never uploaded to a server.

This application uses modern browser technologies, including the native Canvas API and Web Workers, to perform image compression entirely on your device.

- No uploads
- No tracking
- No cloud storage
- No accounts
- No analytics

---

## Performance

- Web Worker support
- Browser-based processing
- Optimized rendering with React hooks
- Fast compression for images up to 10 MB+
- Batch processing support

---

## Deployment

This project is deployed using Vercel.

### Deploy Your Own

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Click **Deploy**.

That's it!

---

## Screenshots

Add screenshots inside the `img/` directory:

```text
img/
├── home.png
├── upload.png
├── compression.png
└── about.png
```

---

## Future Improvements

- WEBP conversion
- AVIF support
- PDF compression
- Dark mode
- Before/After image comparison
- Image resizing
- Custom compression percentages
- PWA support

---

## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes:

```bash
git commit -m "Add amazing feature"
```

4. Push to the branch:

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Author

**Abash Ansari**

- GitHub: https://github.com/Abashansari
- LinkedIn: https://www.linkedin.com/in/abash-ansari-0bb191326/

---

## Acknowledgements

- React
- Vite
- Tailwind CSS
- browser-image-compression
- react-dropzone
- JSZip
- Lucide React
- Vercel

---

> "Fast, secure, and completely private image compression—right in your browser."
