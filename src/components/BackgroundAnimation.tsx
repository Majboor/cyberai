import { useEffect } from 'react';

const BackgroundAnimation = () => {
  useEffect(() => {
    // Ensure UnicornStudio is initialized after script loads
    // Script is loaded in index.html head, so we just need to wait for it
    const initUnicornStudio = () => {
      if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function' && !window.UnicornStudio.isInitialized) {
        try {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        } catch (error) {
          console.error('Failed to initialize UnicornStudio:', error);
        }
      }
    };

    // Check immediately if already loaded
    if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
      initUnicornStudio();
    } else {
      // Wait for script to load (script is in index.html head)
      let checkCount = 0;
      const maxChecks = 50; // 5 seconds max
      const checkInterval = setInterval(() => {
        checkCount++;
        if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
          clearInterval(checkInterval);
          initUnicornStudio();
        } else if (checkCount >= maxChecks) {
          clearInterval(checkInterval);
          console.warn('UnicornStudio script did not load in time');
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }
  }, []);

  // Match the exact HTML structure from line 111-116
  // The background component has nested divs with specific classes
  return (
    <div
      className="aura-background-component fixed inset-0 z-0 pointer-events-none"
      data-alpha-mask="80"
      style={{
        maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'
      }}
    >
      <div className="aura-background-component top-0 w-full absolute h-[1200px]">
        <div
          data-us-project="guA2nIvok3TuYtPyn8zX"
          className="absolute w-full h-full left-0 top-0"
        />
      </div>
    </div>
  );
};

export default BackgroundAnimation;

