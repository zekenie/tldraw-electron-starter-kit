## [TLDraw](https://tldraw.dev/) Electron

Many of my research side project ideas involve infinite canvas apps running on the system. Instead of reinventing the wheel every time, I figured I'd build a starter kit for this kind of project. This starter kit can be recreated later using similar methodology.


## How this starter kit was built
This kit was made with Claude 3.5 sonnet using the following prompt

```
I'd like your help creating a starter kit for a project. I want the following technologies

- electron-react-boilerplate
- typescript (minimal needed setup)
- electron
- react latest
- react-router
- a single route that renders a tldraw diagram

Please express your answer as a series of shell commands i can run instead of written instructions
```

Claude's response

```
# Create a new directory for your project and navigate into it
mkdir electron-react-tldraw-project
cd electron-react-tldraw-project

# Initialize a new project using electron-react-boilerplate
git clone --depth 1 --single-branch https://github.com/electron-react-boilerplate/electron-react-boilerplate.git .
npm install

# Install additional dependencies
npm install react-router-dom @tldraw/tldraw

# Create a basic TLDraw component
cat > src/renderer/components/TLDrawComponent.tsx << EOL
import React from 'react';
import { Tldraw } from '@tldraw/tldraw';

const TLDrawComponent: React.FC = () => {
  return <Tldraw />;
};

export default TLDrawComponent;
EOL

# Update the main App component to include routing and the TLDraw component
cat > src/renderer/App.tsx << EOL
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import TLDrawComponent from './components/TLDrawComponent';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TLDrawComponent />} />
      </Routes>
    </Router>
  );
}
EOL

# Update the main.ts file to set a larger initial window size
sed -i '' 's/width: 1024,/width: 1200,/' src/main/main.ts
sed -i '' 's/height: 728,/height: 800,/' src/main/main.ts

# Start the development server
npm start
```

Note: there was a missing `mkdir -p src/renderer/components` that i needed to add. I also needed to import tl-draw's CSS and change a couple settings. But that was mostly it. 