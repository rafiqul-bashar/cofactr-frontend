import HeroSection from "../components/custom/homepage/HeroSection";
import Img1 from "../assets/coffee/coffee1.png";
import Img2 from "../assets/coffee/coffee3.png";
import map from "../assets/world-map.png";
import CoffeBanner from "../assets/coffee-cover.jpg";
import app_store from "../assets/website/app_store.png";
import play_store from "../assets/website/play_store.png";

export default function HomePage() {
  const imageStyle = {
    backgroundImage: `url(${CoffeBanner})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  };
  return (
    <div>
      <HeroSection />
      <div className="container w-full mx-auto min-h-[850px]">
        {/* section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <div className="space-y-3">
            <h2 className="text-shop-primary text-lg font-semibold">
              Black Coffee
            </h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <img src={Img1} alt="pid1" />
          </div>
          <img src={Img2} alt="pid1" />
          <img src={Img1} alt="pid1" />
        </div>
        {/* section 2 */}
        <div className="flex items-center justify-between">
          <div className="bg-white w-full">
            <div className="flex items-center  justify-between">
              <div className="bg-blue-400">
                <h2 className="text-shop-primary text-lg font-semibold">
                  Black Coffee
                </h2>
              </div>
              <img src={map} alt="map" className="" />
            </div>
          </div>
        </div>
        {/* section 3 */}
        {/* Download app Section */}
        <div
          style={imageStyle}
          className="flex items-center justify-between w-full md:py-20 my-8"
        >
          <div className="flex flex-col items-center space-y-2 md:space-y-4 md:ml-auto md:mr-12 p-6 bg-gray-50/70 md:bg-transparent">
            <h2 className="md:text-3xl text-lg font-medium text-gray-800 ">
              Download The App
            </h2>
            <p className="md:text-lg text-sm text-gray-600 px-8 md:px-0">
              Lorem ipsum dolor sit amet is the lateset consectetur dipisicing
              in our elit.
            </p>

            <div className="flex">
              <img src={play_store} alt="app_icon" className="md:h-20 h-12" />
              <img src={app_store} alt="app_icon-2" className="md:h-20 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
