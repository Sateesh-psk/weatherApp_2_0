import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // or use any icon you prefer

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed top-6 left-6 z-50 bg-primary text-blue-50 cursor-pointer p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowUp />
      </button>
    )
  );
}
export default ScrollToTopButton;