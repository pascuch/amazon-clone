import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

function Homepage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto mt-[104px]">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}

export default Homepage;
