import Casino from "@/components/shared/casino";
import Exclusive from "@/components/shared/exclusives";
import Footer from "@/components/shared/footer";
import LiveGames from "@/components/shared/live-games";
import LiveSports from "@/components/shared/live-sports";
import NewArrivals from "@/components/shared/new-arrivals";
import TopProviders from "@/components/shared/top-providers";
import Topbar from "@/components/shared/topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Exclusive />
      <LiveSports />
      <Casino />
      <NewArrivals />
      <TopProviders />
      <LiveGames />
      <Footer />
    </div>
  );
}
