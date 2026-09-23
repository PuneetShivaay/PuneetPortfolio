# Puneet Portfolio

Personal portfolio and technical blog built with **Next.js** and **TypeScript**.

The project uses a modular component structure, MDX-based blog content, Next.js App Router, and modern Tailwind CSS styling.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** Tailwind CSS 4, PostCSS
- **Content:** MDX / Content Collections
- **Icons:** Lucide React / Radix UI Icons
- **Animations:** Motion
- **Linting:** ESLint
- **Package Manager:** npm

## Prerequisites

Make sure you have the following installed:

- **Node.js 18 or later**
- **npm**

You can check your installed versions with:

```bash
node -v
npm -v
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PuneetShivaay/PuneetPortfolio.git
cd PuneetPortfolio
```

### 2. Install dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

Open the URL in your browser to view the portfolio.

## Available Scripts

The following npm scripts are available in `package.json`.

### Development

Start the Next.js development server:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Production Server

Start the application using the production build:

```bash
npm run start
```

### Lint

Run ESLint:

```bash
npm run lint
```

### Fix Lint Issues

Automatically fix supported ESLint issues:

```bash
npm run lint:fix
```

## Project Structure

```text
PuneetPortfolio/
├── content/                    # MDX blog posts and articles
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   ├── components/             # Reusable UI components
│   │   └── mdx/                # Components used by MDX content
│   ├── data/                   # Portfolio and resume data
│   ├── lib/                    # Utility functions and plugins
│   └── mdx-components.tsx      # MDX component mappings
├── content-collections.ts      # Content Collections configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Project dependencies and scripts
├── package-lock.json           # npm dependency lockfile
└── tsconfig.json               # TypeScript configuration
```

## Editing Portfolio Content

### Profile and Resume

Portfolio profile and resume information can be updated in:

```text
src/data/resume.tsx
```

Update the relevant personal information, experience, education, projects, and other portfolio details there.

### Blog Content

Blog posts are stored in:

```text
content/
```

Posts can be created or updated as `.mdx` files.

## Content

The project uses **MDX** and **Content Collections** to manage blog posts and technical articles.

This allows Markdown content to be combined with React components where required.

## Development Workflow

A typical development workflow is:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Create production build
npm run build

# Start production server
npm run start
```

## Deployment

The project is built with Next.js and can be deployed to platforms that support Next.js applications.

**Vercel** is recommended for a straightforward Next.js deployment.

For a production deployment, first verify that the application builds successfully:

```bash
npm run build
```

Then start the production server with:

```bash
npm run start
```

## Contributing

Contributions and improvements are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-change
```

3. Make your changes.
4. Test the changes locally.
5. Commit your changes.

```bash
git add .
git commit -m "describe your change"
```

6. Push the branch to your fork.

```bash
git push origin feature/your-change
```

7. Open a Pull Request against the `main` branch.

For small changes, such as content updates or component improvements, please keep the changes focused and easy to review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
