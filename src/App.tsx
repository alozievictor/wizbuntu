import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Loader from "./components/SubComponent/Loader";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showApp, setShowApp] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <MotionConfig transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
      <AnimatePresence onExitComplete={() => setShowApp(true)}>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {showApp && (
        <div>
          <Router>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      )}
    </MotionConfig>
  );
}

export default App;
