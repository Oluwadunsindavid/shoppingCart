import bg from "../assets/ecom bg.jpg";

export function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* <h1 className="text-center text-white  ">Welcome</h1> */}
      {/* <img src={bg} alt="" /> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit cumque sed dolor esse explicabo quia repellendus, ducimus amet nemo at cupiditate atque tempora consectetur doloribus reprehenderit, totam alias delectus!</p> */}
    </div>
  );
}
