import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Users, 
  Play, 
  Flame, 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Medal, 
  ShieldCheck, 
  Gamepad2,
  Calendar,
  MapPin,
  X,
  Heart
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import GlitchText from "@/components/GlitchText";
import VerticalInfiniteGallery, { FestivalMoment } from "@/components/VerticalInfiniteGallery";

const stats = [
  { value: "520+", label: "Teams Competed", subtext: "From across India", icon: Users },
  { value: "₹1.5L+", label: "Cash & Rewards", subtext: "Awarded to champions", icon: Trophy },
  { value: "2,000+", label: "Gamers & Fans", subtext: "At Rishihood University", icon: Flame },
  { value: "10+", label: "Major Titles", subtext: "PC, Mobile & Sim Racing", icon: Gamepad2 },
];

const highlights = [
  {
    game: "BGMI LAN Finals",
    title: "Battlegrounds Mobile India",
    description: "20 top teams clashed over high-pressure matches with incredible clutch plays, zone rotations, and explosive final circle wipeouts in front of a packed auditorium.",
    prizePool: "₹50,000",
    champion: "Fusion Esports",
    runnerUp: "W2R Esports",
    slug: "bgmi",
    image: "https://ik.imagekit.io/vdigjljlu/bgmi.jpeg?updatedAt=1769276558264",
    accent: "from-yellow-500/20 via-orange-500/10 to-transparent",
    borderColor: "border-yellow-500/40",
    textColor: "text-yellow-400"
  },
  {
    game: "Valorant Masters",
    title: "Tactical 5v5 Showdown",
    description: "Crisp headshots, tactical retakes, and overtime thriller rounds dominated the main stage as college titans went head-to-head for glory and INGLU team stipends.",
    prizePool: "₹32,000",
    champion: "Radiant Raiders",
    runnerUp: "Phoenix Five",
    slug: "valorant",
    image: "https://ik.imagekit.io/vdigjljlu/valorant.jpeg?updatedAt=1769276556703",
    accent: "from-red-500/20 via-pink-500/10 to-transparent",
    borderColor: "border-red-500/40",
    textColor: "text-red-400"
  },
  {
    game: "Free Fire MAX",
    title: "Survival Showdown",
    description: "High-octane mobile battle royale with lightning-fast gloo wall deployment, sniper skirmishes, and heart-pounding survival finishes.",
    prizePool: "₹37,000",
    champion: "Burn Down Esports",
    runnerUp: "G4RUDA",
    slug: "freefire",
    image: "https://ik.imagekit.io/vdigjljlu/ff.jpeg?updatedAt=1769276556496",
    accent: "from-orange-500/20 via-amber-500/10 to-transparent",
    borderColor: "border-orange-500/40",
    textColor: "text-orange-400"
  },
  {
    game: "Tekken 8",
    title: "Iron Fist Showdown",
    description: "Pure fighting game intensity on the big screen! High-execution juggle combos, electric wind godfists, and bracket-reset tension.",
    prizePool: "₹5,000",
    champion: "Kushagra Maheshwari",
    runnerUp: "Shubhro",
    third: "Yuvansh Juneja",
    slug: "tekken8",
    image: "https://ik.imagekit.io/vdigjljlu/tekken.jpeg?updatedAt=1769276558353",
    accent: "from-red-500/20 via-purple-500/10 to-transparent",
    borderColor: "border-red-500/40",
    textColor: "text-red-400"
  },
  {
    game: "EA Sports FC 26",
    title: "Virtual Football Championship",
    description: "Last-minute headers, tactical tiki-taka plays, and penalty shootouts that brought the whole arena to its feet.",
    prizePool: "₹12,000",
    champion: "Mohak",
    runnerUp: "Preetish",
    third: "Gaunath",
    slug: "eafootball26",
    image: "https://ik.imagekit.io/vdigjljlu/fifa.jpeg?updatedAt=1769276559752",
    accent: "from-pink-500/20 via-purple-500/10 to-transparent",
    borderColor: "border-pink-500/40",
    textColor: "text-pink-400"
  },
  {
    game: "F1 25, Clash Royale & More",
    title: "Arcade & Sim Racing",
    description: "Millisecond lap time battles on the sim rig and intense micro-strategy tournament rounds in the gaming arena.",
    prizePool: "₹14,000+",
    champion: "Sim Racers & Clan Masters",
    runnerUp: "Podium Finishers",
    slug: "f125",
    image: "https://ik.imagekit.io/vdigjljlu/f1.jpeg?updatedAt=1769276557113",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "border-cyan-500/40",
    textColor: "text-cyan-400"
  },
];

const recapSponsors = [
  {
    name: "Garena",
    logo: "https://ik.imagekit.io/jbckhvkvo/FFM_Community%20India%20logo%201.svg",
    link: "https://www.garena.com",
    className: "scale-90",
  },
  {
    name: "ESFI",
    logo: "https://thebridge.in/h-upload/2022/06/01/29366-esfi-logo.jpg",
    link: "https://esportsfederation.in/",
    className: "scale-100",
  },
  {
    name: "Takumi",
    logo: "https://ik.imagekit.io/jbckhvkvo/image%20187.png",
    link: "https://www.instagram.com/takumi.sonipat/",
    className: "scale-100",
  },
  {
    name: "Jio Games",
    logo: "https://play-lh.googleusercontent.com/5wei91oDawARajh0dDkWxuRZByTJYLS8TzxndGEfsIhA5Rc7M00FTdr3X4G1C-E5ZQxQ",
    link: "https://jiogames.com/",
    className: "scale-90",
  },
  {
    name: "Red Bull",
    logo: "https://www.svgrepo.com/show/303227/redbull-logo.svg",
    link: "https://www.redbull.com",
    className: "scale-100",
  },
  {
    name: "Denver",
    logo: "https://denverformen.com/cdn/shop/files/Denver_Horizontal_Logo_Final_1.png?v=1648750177&width=500",
    link: "https://denverformen.com/",
    className: "scale-90",
  },
  {
    name: "Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
    link: "https://unstop.com",
    className: "scale-90",
  },
  {
    name: "Inglu",
    logo: "https://i0.wp.com/ingluglobal.in/wp-content/uploads/2024/02/Untitled-1.png?w=1200&ssl=1",
    link: "https://ingluglobal.in/",
    className: "scale-110",
  },
  {
    name: "Burger Singh",
    logo: "https://www.burgersinghonline.com/wp-content/themes/burger-singh/front/images/logo-v=0.1.png",
    link: "https://www.burgersinghonline.com/",
    className: "scale-110",
  },
  {
    name: "Prera",
    logo: "https://ik.imagekit.io/jbckhvkvo/PRERA.jpg",
    link: "https://www.instagram.com/prera_official/",
    className: "scale-110",
  },
  {
    name: "Truscholar",
    logo: "https://framerusercontent.com/images/E6CZSGneOrMTibzmJbhUNuyivDk.svg?width=193&height=34",
    link: "https://www.truscholar.io/",
    className: "scale-110",
  },
  {
    name: "Hell Energy",
    logo: "https://optim.tildacdn.one/tild3734-6539-4366-b133-653032393935/-/resize/450x/-/format/webp/HELL_ENERGY_logo.png.webp",
    link: "https://www.hellenergy.com/in/",
    className: "scale-125",
  },
  {
    name: "7th Heaven",
    logo: "https://ik.imagekit.io/jbckhvkvo/ChatGPT%20Image%20Feb%204,%202026,%2003_20_52%20AM.png",
    link: "https://www.7thheaven.in/",
    className: "scale-110",
  },
  {
    name: "Meta Nova",
    logo: "https://metanovaesports.com/wp-content/uploads/2026/01/cropped-1__3_-removebg-preview-1.png",
    link: "https://metanovaesports.com/",
    className: "scale-125",
  },
  {
    name: "Eve Paper",
    logo: "https://evepaper.com/wp-content/uploads/2026/01/EvePaper_Logo_White-removebg-e1769027876216.png",
    link: "https://evepaper.com/",
    className: "scale-100 brightness-0 invert",
  },
  {
    name: "Ginni Chaap",
    logo: "https://ik.imagekit.io/jbckhvkvo/Screenshot%202026-02-05%20at%206.18.04%E2%80%AFPM%201.png",
    link: "https://www.instagram.com/ginnichaap/",
    className: "scale-100",
  },
];

interface SelectedPhoto {
  src: string;
  title: string;
  tag: string;
}

const QuanticaRecap = () => {
  const [selectedImage, setSelectedImage] = useState<SelectedPhoto | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
        
        {/* Glow ambient spots */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Top navigation back link */}
          <div className="mb-8">
            <Link
              to="/"
              className="cursor-target inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 bg-card/60 backdrop-blur-md rounded border border-border/50 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Hero Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Official Fest Recap • 7-8 February 2026
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6 font-play">
              <GlitchText text="QUANTICA '26" />
              <span className="text-purple-500 ml-3">
                RECAP
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-8 font-mono">
              Two days of relentless competition, roaring crowds, and esports greatness. Relive the moments that made Delhi NCR's biggest festival historic.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-card/80 border border-border/40 rounded">
                <Calendar className="w-3.5 h-3.5 text-primary" /> 7 - 8 Feb 2026
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-card/80 border border-border/40 rounded">
                <MapPin className="w-3.5 h-3.5 text-secondary" /> Rishihood University
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-card/80 border border-border/40 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Organized by Team SAGE
              </span>
            </div>
          </motion.div>

          {/* Milestones in numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/60 transition-all clip-corner-sm"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-30 group-hover:scale-110 transition-all text-primary">
                    <Icon className="w-12 h-12" />
                  </div>
                  <p className="text-4xl md:text-5xl font-black font-mono text-primary mb-2">
                    {stat.value}
                  </p>
                  <h3 className="text-sm md:text-base font-bold text-foreground uppercase tracking-wider mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {stat.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Hall of Champions Section */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-primary/20 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-bold mb-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  Honoring the Champions
                </div>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
                  Tournament <span className="text-primary">Hall of Fame</span>
                </h2>
              </div>
              <Link
                to="/result"
                className="cursor-target mt-4 md:mt-0 text-sm font-bold uppercase tracking-wider text-primary hover:text-white flex items-center gap-1.5 transition-colors"
              >
                View Full Leaderboards <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.game}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-card/50 backdrop-blur-md border ${item.borderColor} rounded-xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-lg`}
                >
                  <div className="h-48 relative overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.game}
                      className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-bold text-white border border-white/10">
                      {item.game}
                    </div>

                    <div className="absolute bottom-3 right-3 text-right">
                      <span className="text-xs uppercase font-mono text-muted-foreground block">Prize Pool</span>
                      <span className="text-base font-bold font-mono text-green-400">{item.prizePool}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6 bg-black/20 p-3.5 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1.5 text-yellow-400 font-bold">
                          <Medal className="w-4 h-4 text-yellow-400" /> 1st Place
                        </span>
                        <span className="font-bold text-white truncate max-w-[150px]">{item.champion}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                          <Medal className="w-3.5 h-3.5 text-gray-300" /> 2nd Place
                        </span>
                        <span className="text-muted-foreground truncate max-w-[150px]">{item.runnerUp}</span>
                      </div>
                      {item.third && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1.5 text-amber-600 font-medium">
                            <Medal className="w-3.5 h-3.5 text-amber-600" /> 3rd Place
                          </span>
                          <span className="text-muted-foreground truncate max-w-[150px]">{item.third}</span>
                        </div>
                      )}
                    </div>

                    <Link
                      to={`/results/${item.slug}`}
                      className="cursor-target cyber-btn-outline w-full text-center !py-2.5 !px-4 text-xs font-mono uppercase font-bold tracking-widest block transition-all"
                    >
                      <span>View Match Scores</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Big Vertical Infinite Gallery for Festival Moments */}
          <div className="mb-24">
            <VerticalInfiniteGallery
              onSelectImage={(moment) =>
                setSelectedImage({
                  src: moment.src,
                  title: moment.title,
                  tag: moment.category,
                })
              }
            />
          </div>

          {/* Video Recap & Stream Replay Spotlight */}
          <div className="mb-24">
            <div className="bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Broadcast Highlight
                </span>
                <h2 className="text-3xl md:text-5xl font-bold uppercase mt-2 mb-4">
                  Official Match <span className="text-primary">Stream Archives</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Catch every tactical flank, intense teamfight, and championship moment from the official live broadcast archives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/60 rounded-xl overflow-hidden border border-border/60">
                  <div className="aspect-video relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/bzYBYL2hbns"
                      title="BGMI Quantica'26 Day 2 Replay"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0 w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-base">BGMI Quantica'26 Grand Finals</h3>
                    <p className="text-xs text-muted-foreground font-mono mt-1">Official Broadcast Stream • Day 2</p>
                  </div>
                </div>

                <div className="bg-black/60 rounded-xl overflow-hidden border border-border/60">
                  <div className="aspect-video relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/9Isfk_p_l7w"
                      title="Free Fire MAX Quantica'26 Day 2 Replay"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0 w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-base">Free Fire MAX Quantica'26 Finals</h3>
                    <p className="text-xs text-muted-foreground font-mono mt-1">Official Broadcast Stream • Day 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thanking Our Sponsors Section - All sponsors visible in a single div */}
          <div className="mb-24">
            <div className="bg-card/40 backdrop-blur-xl border border-primary/25 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden clip-corner-sm shadow-2xl">
              {/* Ambient backdrop glow */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

              {/* Header inside the single div */}
              <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4">
                  <Heart className="w-3.5 h-3.5 text-primary fill-primary/30" />
                  Honoring Our Partners
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-play">
                  THANKING OUR <span className="text-primary">SPONSORS</span>
                </h2>
                <p className="text-muted-foreground mt-3 text-sm md:text-base font-mono leading-relaxed max-w-2xl mx-auto">
                  QUANTICA '26 reached historic heights thanks to the visionary collaboration, energy, and resources provided by our esteemed brand partners and sponsors.
                </p>
              </div>

              {/* All sponsors visible in a single grid inside this div */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-5 relative z-10">
                {recapSponsors.map((sponsor) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-target group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-black/40 hover:bg-black/70 border border-white/10 hover:border-primary/60 transition-all duration-300 shadow-md h-28 sm:h-32"
                  >
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`max-w-full max-h-12 object-contain transition-all duration-300 ${
                          sponsor.className || ""
                        }`}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider truncate max-w-full mt-2">
                      {sponsor.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-primary opacity-0 group-hover:opacity-80 transition-opacity absolute top-2 right-2" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Acknowledgments & SAGE Salute */}
          <div className="max-w-4xl mx-auto mb-24 text-center">
            {/* Team SAGE Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden mb-10 shadow-2xl group"
            >
              <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-black/60 relative">
                <img
                  src="https://res.cloudinary.com/bmtee69u/image/upload/v1791126222/Sports_ESports_Fest_Photo_Jul_2_2026_20.jpg"
                  alt="Team SAGE - Organizers of Quantica '26"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-primary text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Team SAGE • Core Organizing Crew
                </div>
              </div>
            </motion.div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 text-foreground font-play">
              Thank You for Making History
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-mono">
              A massive thank you to all the athletes, spectators, Rishihood University, our faculty mentors, and partners including Red Bull, Unstop, and INGLU. Brought to life by the passion and dedication of Team SAGE.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/result" className="cyber-btn w-full sm:w-auto">
                <span>View Full Results</span>
              </Link>
              <Link to="/about" className="cyber-btn-outline w-full sm:w-auto">
                <span>Meet Team SAGE</span>
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center pt-8 border-t border-border/30 text-xs font-mono text-muted-foreground tracking-widest uppercase">
            QUANTICA 2026 • THE BATTLEFIELD RESTS • SEE YOU IN 2027
          </div>

        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-[85vh] bg-card border border-primary/40 rounded-2xl overflow-hidden p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="cursor-target absolute top-4 right-4 z-20 p-2 bg-black/80 rounded-full text-white hover:text-primary transition-colors border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-white">{selectedImage.title}</h4>
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">{selectedImage.tag}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default QuanticaRecap;
