import { Injectable } from '@angular/core';

// Define types for our data structures
type FortuneCategory = 'love' | 'wealth' | 'faith';
type FortuneItem = {
  id: number;
  name: string;
  fortune: string;
  category: FortuneCategory;
  timestamp: Date;
};

@Injectable({ providedIn: 'root' })
export class FortuneService {
  private fortuneIdCounter = 0;
  fortunes: FortuneItem[] = [];
  
  // Define type for fortune categories
  private fortuneCategories: Record<FortuneCategory, string[]> = {
    love: [
      "Your soulmate is closer than you think - love will find you this season",
      "A deep romantic connection will transform your world within 30 days",
      "Your heart is ready to receive the love you've been dreaming of",
      "Someone special is thinking of you right now - trust the signs",
      "True love awaits beyond your comfort zone - take the leap",
      "Your next relationship will heal old wounds and bring lasting joy",
      "The universe is aligning hearts - yours will be chosen soon",
      "Love will enter through an unexpected door this month",
      "Your magnetic energy is attracting your perfect match",
      "A romantic surprise will change your perspective on love entirely"
    ],
    wealth: [
      "Financial abundance is flowing toward you from multiple sources",
      "A lucrative opportunity will present itself within the next full moon",
      "Your money mindset is shifting - prosperity follows naturally",
      "An unexpected windfall will arrive through connections and networking",
      "Your wealth is about to multiply - trust your investment instincts",
      "Financial freedom is closer than you imagine - stay focused",
      "Money flows easily to you when you align with your purpose",
      "A profitable venture awaits your bold decision this quarter",
      "Your generosity will return to you tenfold in material blessings",
      "Abundance surrounds you - open your eyes to new revenue streams"
    ],
    faith: [
      "Divine protection surrounds you - trust in the journey ahead",
      "Your prayers are being answered in ways you haven't yet recognized",
      "A spiritual awakening will bring clarity to your life's purpose",
      "The universe has bigger plans for you than you can imagine",
      "Your faith will be rewarded with miraculous breakthroughs",
      "Angels guide your steps toward your highest good",
      "Trust the divine timing - everything unfolds perfectly for you",
      "Your spiritual gifts are awakening - embrace your inner wisdom",
      "A sacred sign will confirm you're on the right path",
      "Divine love flows through you, healing yourself and others"
    ]
  };

  private sampleFortunes = [
    { name: "StarGazer42", fortune: "Your soulmate is closer than you think - love will find you this season" },
    { name: "DreamSeeker", fortune: "Financial abundance is flowing toward you from multiple sources" },
    { name: "CosmicWanderer", fortune: "Divine protection surrounds you - trust in the journey ahead" },
    { name: "NightOwl", fortune: "A deep romantic connection will transform your world within 30 days" },
    { name: "WishMaker", fortune: "A lucrative opportunity will present itself within the next full moon" },
    { name: "StarChild", fortune: "Your prayers are being answered in ways you haven't yet recognized" },
    { name: "MoonBeam", fortune: "Your heart is ready to receive the love you've been dreaming of" },
    { name: "GalaxyExplorer", fortune: "Your wealth is about to multiply - trust your investment instincts" }
  ];

  constructor() {
    this.loadInitialFortunes();
  }

  loadInitialFortunes() {
    this.sampleFortunes.forEach(fortune => {
      this.fortunes.push({
        id: this.fortuneIdCounter++,
        name: fortune.name,
        fortune: fortune.fortune,
        category: this.getCategoryForFortune(fortune.fortune),
        timestamp: new Date()
      });
    });
  }

  // Helper function to find category for a fortune text
  private getCategoryForFortune(fortuneText: string): FortuneCategory {
    for (const [category, fortunes] of Object.entries(this.fortuneCategories)) {
      if (fortunes.includes(fortuneText)) {
        return category as FortuneCategory;
      }
    }
    // Default to faith if not found
    return 'faith';
  }

  addFortune(username: string) {
    const categories = Object.keys(this.fortuneCategories) as FortuneCategory[];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Get random fortune - now TypeScript knows this is an array of strings
    const fortunes = this.fortuneCategories[randomCategory];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    const fortune: FortuneItem = {
      id: this.fortuneIdCounter++,
      name: username,
      fortune: randomFortune,
      category: randomCategory,
      timestamp: new Date()
    };
    
    this.fortunes.unshift(fortune);
    
    // Keep only last 30 fortunes
    if (this.fortunes.length > 30) {
      this.fortunes = this.fortunes.slice(0, 30);
    }
    
    return fortune;
  }

  clearFortunes() {
    this.fortunes = [];
  }
}