'use client'

import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import Link from 'next/link'
import Mainslider1 from '../assets/herobanner/Banner A 3.webp'
import Mainslider2 from '../assets/herobanner/Banner A 1.webp'
import Mainslider3 from '../assets/herobanner/Banner A 2.webp'
import SubBanner1 from '../assets/herobanner/Banner B 1.webp'
import SubBanner2 from '../assets/herobanner/Banner B 2.webp'

// Helper to safely render images with fallback and debug
function getSafeImage(src, alt, props) {
  let safeSrc = "/Asset11.png";
  if (typeof src === "string" && src.trim() && (src.startsWith("/") || src.startsWith("http"))) {
    safeSrc = src;
  } else if (src && typeof src === "object" && (src.src || src.default)) {
    safeSrc = src.src || src.default;
  }
  // Debug: log what is being rendered
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('Rendering image:', safeSrc, 'alt:', alt);
  }
  return <Image src={safeSrc} alt={alt} {...props} onError={e => { e.target.src = '/Asset11.png'; }} />;
}

const Hero = () => {
  // Simple, robust slider for 3 images
  const slides = [
    {
      image: Mainslider1,
      title: "Gadgets you'll love. Prices you'll trust.",
      buttonText: 'Shop Now',
      buttonLink: '/products',
    },
    {
      image: Mainslider2,
      title: 'Upgrade your tech. Save more today.',
      buttonText: 'Shop Now',
      buttonLink: '/products',
    },
    {
      image: Mainslider3,
      title: 'Style meets power. Get it now!',
      buttonText: 'Shop Now',
      buttonLink: '/products',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="mx-0 sm:mx-6">
      <div className="flex max-xl:flex-col gap-6 max-w-7xl mx-auto mt-0 sm:mt-8 mb-6 sm:mb-10">
        {/* === Rotating Hero Section (image only, clickable) === */}
        <Link href={slide.buttonLink} className={`relative flex-1 rounded-none sm:rounded-3xl min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px] xl:min-h-100 overflow-hidden block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300`}>
          {getSafeImage(
            slide.image,
            slide.title,
            {
              fill: true,
              priority: true,
              sizes: "(min-width: 1024px) 66vw, 100vw",
              className: `transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'} object-contain sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover`,
            }
          )}
        </Link>

  {/* === Right Side Boxes (static fallback) === */}
  {/* Hidden on mobile & tablet - show only on large screens */}
  <div className="hidden lg:flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
    {/* Box 1 (Top) */}
    <div className="relative flex-1 w-full rounded-3xl p-6 px-8 group overflow-hidden min-h-36">
      {getSafeImage(SubBanner1, "Right banner 1", {
        fill: true,
        sizes: "(min-width: 1280px) 360px, (min-width: 1024px) 50vw, 0vw",
        className: "object-cover",
      })}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
    </div>
    {/* Box 2 (Bottom) */}
    <div className="relative flex-1 w-full rounded-3xl p-6 px-8 group overflow-hidden min-h-36">
      {getSafeImage(SubBanner2, "Right banner 2", {
        fill: true,
        sizes: "(min-width: 1280px) 360px, (min-width: 1024px) 50vw, 0vw",
        className: "object-cover",
      })}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
    </div>
  </div>
      </div>

      {/* === Categories Section (hidden on mobile to show only the main slider) === */}
      <div className="hidden sm:block">
        {/* <CategoriesMarquee /> */}
      </div>
    </div>
  )
}

export default Hero