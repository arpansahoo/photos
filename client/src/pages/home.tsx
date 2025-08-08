import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageGallery from "@/components/image-gallery";
import VideoGallery from "@/components/video-gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ImageGallery />
        <VideoGallery />
      </main>
      <Footer />
    </div>
  );
}
