import "./App.css";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Ticker from "./Ticker.js";
import BillboardOne from "./BillboardOne.js";
import BillboardTwo from "./BillboardTwo.js";
import ThreePictures from "./ThreePictures.js";
import Carousel from "./Carousel.js";
import BottomList from "./BottomList.js";
import BottomMenu from "./BottomMenu.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Ticker />
      <BillboardOne
        image="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/d07f844c-6e47-4f14-8683-dfc2db8a6328/nike-just-do-it.jpg"
        main_title=""
        title={
          <>
            "THE NEW REACT INFINITY"
            <br />
            "RUN 2"
          </>
        }
        description={[
          "Still designed to help reduce injuries and keep you on the run.",
        ]}
        color_text="black"
        number="first"
      />

      <Carousel />

      <BillboardTwo
        title="Featured Footwear"
        color_text="black"
        image_left="https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/6336a698-cd93-4558-bce5-3a4cca09e365/nike-just-do-it.jpg"
        text_left="Styles Made to Match"
        image_right="https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/1380160e-2f52-4771-9a47-730bf762078b/nike-just-do-it.jpg"
        text_right="Shoes Always $100 & Under"
      />

      <BillboardOne
        image="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/0f2085b3-6b8d-4e54-83f5-8db828e1be69/nike-just-do-it.jpg"
        main_title="Just In"
        title={
          <>
            "AIR BEYOND"
            <br />
            "COMPARE"
          </>
        }
        description="New Air Max arrivals and a celebration of its legacy."
        color_text="white"
        number="second"
      />

      <BillboardTwo
        title="For Your Workout"
        color_text="white"
        image_left="https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/c4c6f6f5-f2e1-42cc-89cf-5a1b86e71ff4/nike-just-do-it.jpg"
        text_left="The New SuperRep 2"
        image_right="https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/852e7181-bc0c-45a2-a3a3-6a9ac50cd0b4/nike-just-do-it.jpg"
        text_right="The Latest Bra & Tight Pairings"
      />

      <ThreePictures />

      <BottomList />

      <BottomMenu />
    </div>
  );
}

export default App;
