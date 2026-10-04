import { motion } from "framer-motion";
import { Sparkles, Maximize2 } from "lucide-react";

export interface FestivalMoment {
  src: string;
  title: string;
  category: string;
}

export const festivalMoments: FestivalMoment[] = [
  // Column 1
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126222/Sports_ESports_Fest_Photo_Jul_02_2026.jpg",
    title: "Grand Arena Showdown",
    category: "Tournament",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126222/Sports_ESports_Fest_Photo_Jul_2_2026.jpg",
    title: "LAN Finals Live Action",
    category: "Esports",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126221/Sports_ESports_Fest_Photo_Jul_2_2026_18.jpg",
    title: "Main Stage Spotlight",
    category: "Arena",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126221/Sports_ESports_Fest_Photo_Jul_2_2026_19.jpg",
    title: "Championship Victory Moment",
    category: "Champions",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126221/Sports_ESports_Fest_Photo_Jul_2_2026_17.jpg",
    title: "Pro Squad Tactical Focus",
    category: "Gaming",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126221/Sports_ESports_Fest_Photo_Jul_2_2026_16.jpg",
    title: "Auditorium Roar & Energy",
    category: "Crowd Heat",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126220/Sports_ESports_Fest_Photo_Jul_2_2026_15.jpg",
    title: "High-Stakes Clutch Play",
    category: "Tournament",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126220/Sports_ESports_Fest_Photo_Jul_2_2026_14.jpg",
    title: "Stage Lighting & Atmosphere",
    category: "Production",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126220/Sports_ESports_Fest_Photo_Jul_2_2026_13.jpg",
    title: "Team Huddle & Hype",
    category: "Community",
  },

  // Column 2
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126219/Sports_ESports_Fest_Photo_Jul_2_2026_11.jpg",
    title: "Esports Arena Atmosphere",
    category: "Arena",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126219/Sports_ESports_Fest_Photo_Jul_2_2026_12.jpg",
    title: "Fierce Console Face-off",
    category: "Tournament",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126219/Sports_ESports_Fest_Photo_Jul_2_2026_8.jpg",
    title: "Crowd Cheering for Champions",
    category: "Community",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126219/Sports_ESports_Fest_Photo_Jul_2_2026_10.jpg",
    title: "Electric Stage Performance",
    category: "Fest Vibes",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126218/Sports_ESports_Fest_Photo_Jul_2_2026_9.jpg",
    title: "Podium Trophy Presentation",
    category: "Champions",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126216/Sports_ESports_Fest_Photo_Jul_2_2026_3.jpg",
    title: "Live Commentary & Cast",
    category: "Broadcast",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126216/Sports_ESports_Fest_Photo_Jul_2_2026_4.jpg",
    title: "Auditorium Packed Seating",
    category: "Crowd Heat",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126216/Sports_ESports_Fest_Photo_Jul_2_2026_6.jpg",
    title: "Intense Screen Combat",
    category: "Gaming",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126216/Sports_ESports_Fest_Photo_Jul_2_2026_7.jpg",
    title: "Fan Reactions & Cheers",
    category: "Fest Vibes",
  },

  // Column 3
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126216/Sports_ESports_Fest_Photo_Jul_2_2026_5.jpg",
    title: "Backstage Strategy Session",
    category: "Community",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126214/Sports_ESports_Fest_Photo_Jul_2_2026_1.jpg",
    title: "Battle Royale Final Circle",
    category: "Tournament",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126214/Sports_ESports_Fest_Photo_Jul_2_2026_2.jpg",
    title: "Championship Stage Lights",
    category: "Arena",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126214/Sports_ESports_Fest_July_2_2026.jpg",
    title: "Festival Experience Zone",
    category: "Fest Vibes",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126214/Sports_ESports_Fest_July_2_2026_5.jpg",
    title: "Victory Celebration & Glory",
    category: "Champions",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126213/Sports_ESports_Fest_July_2_2026_3.jpg",
    title: "Campus Fest Spirit",
    category: "Community",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126213/Sports_ESports_Fest_July_2_2026_2.jpg",
    title: "Gaming Rig Battleground",
    category: "Esports",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126212/DSC02451.jpg",
    title: "Unforgettable Festival Memories",
    category: "Celebration",
  },
  {
    src: "https://res.cloudinary.com/bmtee69u/image/upload/v1791126212/Sports_ESports_Fest_July_2_2026_1.jpg",
    title: "LAN Championship Trophy Run",
    category: "Champions",
  },
];

const col1Images = festivalMoments.slice(0, 9);
const col2Images = festivalMoments.slice(9, 18);
const col3Images = festivalMoments.slice(18, 27);

interface GalleryColumnProps {
  images: FestivalMoment[];
  direction: "up" | "down";
  speed?: number;
  onSelectImage?: (image: FestivalMoment) => void;
}

const GalleryColumn = ({
  images,
  direction,
  speed = 50,
  onSelectImage,
}: GalleryColumnProps) => {
  return (
    <div className="relative overflow-hidden h-full group/col">
      <div
        className="flex flex-col will-change-transform group-hover/col:[animation-play-state:paused]"
        style={{
          animation: `${direction === "up" ? "vertical-marquee-up" : "vertical-marquee-down"} ${speed}s linear infinite`,
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="pb-3 sm:pb-4 md:pb-5 flex-shrink-0 w-full"
          >
            <motion.div
              className="cursor-target relative w-full h-[170px] sm:h-[220px] md:h-[265px] lg:h-[285px] group cursor-pointer overflow-hidden rounded-lg"
              whileHover={{ scale: 1.025, zIndex: 10 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectImage?.(image)}
            >
              <div className="relative w-full h-full clip-corner overflow-hidden bg-card/80 border border-border/50 group-hover:border-primary/80 transition-colors shadow-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-4 md:p-5">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <span className="text-primary text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider font-bold font-mono">
                        {image.category}
                      </span>
                      <span className="text-muted-foreground/80 hidden sm:flex items-center gap-1 text-[9px] md:text-[10px] font-mono uppercase">
                        <Maximize2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-secondary" /> Enlarge
                      </span>
                    </div>
                    <p className="text-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg line-clamp-1">
                      {image.title}
                    </p>
                  </div>
                </div>

                {/* Cyberpunk corner brackets */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-secondary" />
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-secondary" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary" />
                </div>

                {/* Scanlines overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none scanlines" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface VerticalInfiniteGalleryProps {
  onSelectImage?: (image: FestivalMoment) => void;
}

const VerticalInfiniteGallery = ({ onSelectImage }: VerticalInfiniteGalleryProps) => {
  return (
    <section className="relative w-full">
      {/* Header section matching Tournament Gallery */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Captured Moments • Festival Archive
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-play">
          FESTIVAL <span className="text-secondary">MOMENTS</span>
        </h2>
        <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed font-mono">
          Relive the energy that defined QUANTICA '26. The roaring crowds, intense LAN matches, concert beats, and unforgettable celebrations across 3 continuous streams.
        </p>
      </div>

      {/* Outer Viewport Container: 3 columns, ~4 rows visible */}
      <div className="relative h-[820px] md:h-[920px] lg:h-[960px] overflow-hidden rounded-2xl bg-card/30 backdrop-blur-md p-3 md:p-6 shadow-2xl">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5 h-full relative z-10">
          {/* Column 1 - Moves UP */}
          <GalleryColumn
            images={col1Images}
            direction="up"
            speed={50}
            onSelectImage={onSelectImage}
          />

          {/* Column 2 - Moves DOWN (alternating direction) */}
          <GalleryColumn
            images={col2Images}
            direction="down"
            speed={58}
            onSelectImage={onSelectImage}
          />

          {/* Column 3 - Moves UP */}
          <GalleryColumn
            images={col3Images}
            direction="up"
            speed={46}
            onSelectImage={onSelectImage}
          />
        </div>

        {/* Top Fade Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 md:h-44 pointer-events-none z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-transparent" />
        </div>

        {/* Bottom Fade Gradient Overlays */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-44 pointer-events-none z-20">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default VerticalInfiniteGallery;
