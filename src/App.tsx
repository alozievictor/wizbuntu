import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/SubComponent/Loader";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence>
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
    </React.Fragment>
  );
}

export default App;
