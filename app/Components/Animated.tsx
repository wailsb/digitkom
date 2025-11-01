import Image from "next/image";
import { useEffect } from "react";
export default function Animated() {
    // === LOGO ROTATION ON CURSOR ===
      useEffect(() => {
        const imgWrapper = document.getElementById("animated-wrapper");
        if (!imgWrapper) return;
    
        function handleMouseMove(e: MouseEvent) {
            if(e.altKey || e.ctrlKey || e.metaKey) {
              const width = window.innerWidth;
              const height = window.innerHeight;
                
              // Normalized cursor position (0 to 1)
              const xRatio = e.clientX / width;
              const yRatio = e.clientY / height;
                
              // Convert to angles in radians
              const angleX = (yRatio - 0.5) * Math.PI; // Up/down
              const angleY = (xRatio - 0.5) * Math.PI * 2; // Full 360° left/right
                
              // Convert radians to degrees
              const rotateX = angleX * (180 / Math.PI);
              const rotateY = angleY * (180 / Math.PI);
                
              if (imgWrapper) {
                imgWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }
        }
        }
    
        function handleMouseLeave() {
          if (imgWrapper) {
            imgWrapper.style.transform = "rotateX(0deg) rotateY(0deg)";
          }
        }
    
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, []);
    return (<>

          <div
            id="animated-wrapper"
            className="transition-transform duration-100 ease-out"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <Image
              src="/victordigitkom-2.png"
              alt="Digital Innovation"
              width={200}
              height={200}
              className="select-none pointer-events-none rounded-lg"
              draggable={false}
            />
          </div>
    </>)
    }