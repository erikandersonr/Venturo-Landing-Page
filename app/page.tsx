"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/venture.png"
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      {/* <div className="absolute inset-0 bg-[#0B0B0F] bg-gradient-to-b from-[#0B0B0F] to-[#16161F] -z-20" /> */}
      <div className="absolute inset-0 bg-black bg-gradient-to-b from-[#0B0B0F] to-black -z-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#26262E_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,white_50%,transparent)]" />
      <nav className="flex justify-between bg-black items-center p-4 border-b border-[#26262E] relative">
        <Link href="/">
          <Image src={Logo} alt="logo" width={140} />
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start mt-24 lg:mt-28 px-8 lg:px-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-6xl font-normal text-center lg:text-start"
        >
          Unleashing Smarter Investments{' '}
          <span className="hidden lg:inline"><br /></span>
          with <span className="text-[#C3F963]">Data-Driven</span> Insights
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl lg:text-start text-center mt-4 text-[#B2B2B3]"
        >
          Revolutionize venture capital decisions with AI-powered web scraping,{' '}
          <span className="hidden lg:inline"><br /></span>
          delivering real-time data, market trends, and actionable insights to drive smarter investments.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 mt-8"
        >
          <Button 
            size="landing" 
            variant="secondary"
            asChild
          >
            <Link 
              href="https://forms.gle/3Pg4WSTC4hHoVBP96" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                <p>Join the waitlist</p>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="fixed bottom-0 w-full p-4">
        <p className="text-center text-xs lg:text-sm text-[#B2B2B3]">
          Currently in beta. Sign up now for the waitlist. Contact us on <a href="https://www.linkedin.com/in/erikandersonr/" className="underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
