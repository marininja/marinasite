"use client";

import { useEffect, useRef } from "react";


declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

interface UseSectionAnalyticsProps {
  sections: string[]; 
  threshold?: number; 
}

export function useSectionAnalytics({ sections, threshold = 2000 }: UseSectionAnalyticsProps) {
  const entryTimes = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    if (typeof window === "undefined") return;


    window.dataLayer = window.dataLayer || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const currentTime = Date.now();

          if (entry.isIntersecting) {

            entryTimes.current[sectionId] = currentTime;

          } else {

            const entryTime = entryTimes.current[sectionId];
            
            if (entryTime) {
              const duration = currentTime - entryTime;

              if (duration > threshold) {
                
                window.dataLayer.push({
                  event: "section_engagement", 
                  section_name: sectionId,     
                  duration_ms: duration,       
                  duration_sec: Math.round(duration / 1000),
                });
              }

              delete entryTimes.current[sectionId];
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", 
        threshold: 0.1, 
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, threshold]);
}