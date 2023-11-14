import { news, tags } from "./service/infos";

function App() {
  return (
    <div className="App">
      <div className="bg-black flex gap-24 justify-center text-white font-medium py-3">
        <div>Sobre</div>
        <div>News</div>
        <div>Quem Somos</div>
      </div>
      <img src="https://www.thenation.com/wp-content/uploads/2023/07/GettyImages-1258049614.jpg" alt="Palestine war"
        className="w-screen h-[70vh] object-cover flex" 
      />
      <div className="font-[900] text-[90px] w-1/2 leading-[100px] absolute text-white top-32 left-20">
        PALESTINA NOTICIAS BH
      </div>
      <div className="p-20 flex gap-10">
        <div className="flex flex-col gap-8">
          {news.map(item => (
            <div className="shadow-lg w-full h-fit border-2 border-white hover:border-black">
              <div className="p2 flex">
                <img className="h-40 w-40" src={item.img} alt={item.title} />
                <div className="p-4">
                  <div className="flex w-full justify-between">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <div className="text-gray-400">{item.date}</div>
                  </div>
                  <p className="text-gray-400 mt-4 text-justify">{item.text.length > 263 ? item.text.slice(0, 260) + '...' : item.text}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="w-[500px] bg-black p-4 flex flex-col gap-3">
          {tags.map(item => (
            <div className="font-medium bg-white pt-1 pb-1 px-2 border-b-green-600 border-b-4">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;