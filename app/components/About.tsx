import Image from "next/image";
import Logo from "@/public/Logo.png"

const About = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-blue-900"> 
      
      <div className="relative flex items-center">
        <Image
          src={Logo}
          alt="Tbc Logo"
          quality={100}
          width={80}
          priority
        />
        <h1 className="text-xl text-white font-bold tracking-widest p-2">მთავარია გჯეროდეს!</h1>
      </div>

      <div className="border-b border-white w-full"></div> 
    </div>
  );
};

export default About;