import { type Image, type InsertImage, type Video, type InsertVideo } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getImages(): Promise<Image[]>;
  getImage(id: string): Promise<Image | undefined>;
  createImage(image: InsertImage): Promise<Image>;
  getVideos(): Promise<Video[]>;
  getVideo(id: string): Promise<Video | undefined>;
  createVideo(video: InsertVideo): Promise<Video>;
}

export class MemStorage implements IStorage {
  private images: Map<string, Image>;
  private videos: Map<string, Video>;

  constructor() {
    this.images = new Map();
    this.videos = new Map();
    
    // Initialize with portfolio images
    const portfolioImages: InsertImage[] = [
      {
        title: "Portrait Session",
        category: "Natural Light",
        imageUrl: "https://pixabay.com/get/g1186d3ec7bd03f8dace130c67955763fda059833b9e0b71d8ad80e129cd8a9ce15dfd154063140e0fc439bc83841d0054bbe54e69432c81e209484d4daa1620d_1280.jpg",
        alt: "Portrait photography",
        description: "Professional headshot with natural lighting"
      },
      {
        title: "Mountain Vista",
        category: "Golden Hour",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Mountain landscape",
        description: "Mountain landscape with dramatic clouds and golden hour lighting"
      },
      {
        title: "Urban Lines",
        category: "Architecture",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Urban architecture",
        description: "Urban street scene with interesting architectural elements"
      },
      {
        title: "Wedding Day",
        category: "Outdoor Ceremony",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Wedding couple",
        description: "Romantic couple portrait in natural outdoor setting"
      },
      {
        title: "Spring Blooms",
        category: "Macro",
        imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Flower macro",
        description: "Close-up of flowers with shallow depth of field"
      },
      {
        title: "Fashion Editorial",
        category: "Studio",
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Fashion photography",
        description: "Fashion model in stylish outfit with professional lighting"
      },
      {
        title: "Ancient Walls",
        category: "Travel",
        imageUrl: "https://pixabay.com/get/ged5b721abf1bccafa0a1e8bfb18dc7dc72d8de43bf40d3317f3d36d794d24c2c01a34098e1ce2f9dfc7408694c8bf959fd352412da8e4c1c85324d87ff02c614_1280.jpg",
        alt: "Travel destination",
        description: "Ancient architecture and cultural landmarks"
      },
      {
        title: "City Life",
        category: "Candid",
        imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Lifestyle moment",
        description: "Candid moment of people enjoying life"
      },
      {
        title: "Shadows & Light",
        category: "Monochrome",
        imageUrl: "https://pixabay.com/get/g458a58b33759493ec9dd8bfc105125f5462fc81f425c70a4cd9eb14165b46c5d6f0cc46f873776729b6ad6d96125efb1d0ca117e1257744b1668498831058fc9_1280.jpg",
        alt: "Black and white photography",
        description: "Dramatic black and white architectural composition"
      },
      {
        title: "Golden Fields",
        category: "Sunset",
        imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Golden hour landscape",
        description: "Beautiful sunset and golden hour landscape"
      },
      {
        title: "Ocean Motion",
        category: "Seascape",
        imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Ocean waves",
        description: "Ocean waves and peaceful water scenes"
      },
      {
        title: "Color Study",
        category: "Abstract",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
        alt: "Abstract composition",
        description: "Creative abstract and artistic composition"
      }
    ];

    portfolioImages.forEach(image => {
      const id = randomUUID();
      this.images.set(id, { ...image, id });
    });

    // Initialize with portfolio videos
    const portfolioVideos: InsertVideo[] = [
      {
        title: "Cinematic Wedding Film",
        category: "Wedding Films",
        youtubeId: "VNQjFUCnNoo",
        description: "A beautiful wedding cinematography showcase with stunning visuals"
      },
      {
        title: "Portrait Photography Tutorial",
        category: "Studio Work",
        youtubeId: "Qe10ExwzCqk",
        description: "Professional portrait photography techniques and lighting setup"
      },
      {
        title: "Landscape Photography in Iceland",
        category: "Travel",
        youtubeId: "3AtDnEC4zak",
        description: "Capturing breathtaking landscapes in Iceland's dramatic scenery"
      },
      {
        title: "Street Photography Workshop",
        category: "Tutorial",
        youtubeId: "UjyOCG5cfCE",
        description: "Learn street photography techniques and composition tips"
      },
      {
        title: "Behind the Scenes: Fashion Shoot",
        category: "Fashion",
        youtubeId: "W2Wnvvj33Wo",
        description: "Go behind the scenes of a professional fashion photography session"
      },
      {
        title: "Macro Photography Techniques",
        category: "Nature",
        youtubeId: "1SiAkmOpNLU",
        description: "Explore the world of macro photography and close-up techniques"
      }
    ];

    portfolioVideos.forEach(video => {
      const id = randomUUID();
      this.videos.set(id, { ...video, id });
    });
  }

  async getImages(): Promise<Image[]> {
    return Array.from(this.images.values());
  }

  async getImage(id: string): Promise<Image | undefined> {
    return this.images.get(id);
  }

  async createImage(insertImage: InsertImage): Promise<Image> {
    const id = randomUUID();
    const image: Image = { ...insertImage, id };
    this.images.set(id, image);
    return image;
  }

  async getVideos(): Promise<Video[]> {
    return Array.from(this.videos.values());
  }

  async getVideo(id: string): Promise<Video | undefined> {
    return this.videos.get(id);
  }

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const id = randomUUID();
    const video: Video = { ...insertVideo, id };
    this.videos.set(id, video);
    return video;
  }
}

export const storage = new MemStorage();
