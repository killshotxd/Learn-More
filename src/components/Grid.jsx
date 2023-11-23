import one from "../assets/Square Banner.png";
import two from "../assets/Wide Square.png";
import three from "../assets/Big Banner.png";
import four from "../assets/Square Banner (1).png";
const Grid = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col">
          <div>
            <img className="cursor-pointer w-full" src={two} />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <img className="cursor-pointer w-full" src={one} />
            </div>
            <div>
              <img className="cursor-pointer w-full" src={four} />
            </div>
          </div>
        </div>
        <div>
          <img className="cursor-pointer w-full" src={three} />
        </div>
      </div>
    </>
  );
};

export default Grid;
