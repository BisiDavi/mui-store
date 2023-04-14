import Banner from "@/components/Banner";
import BestSellingCategories from "@/components/BestSellingCategories";
import InfoBanner from "@/components/InfoBanner";
import Layout from "@/layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <InfoBanner />
      <BestSellingCategories />
    </Layout>
  );
}
