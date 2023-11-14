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
          <div className="shadow-lg w-full flex h-fit">
            <img className="h-40 w-40" src="https://www.aljazeera.com/wp-content/uploads/2021/05/063_1233053179.jpg?resize=1800%2C1800" alt="" />
            <div className="p-4">
              <div className="flex w-full justify-between">
                <h2 className="text-xl font-semibold">Um Texto Exemplo de Titulo</h2>
                <div className="text-gray-400">02/11</div>
              </div>
              <p className="text-gray-400 mt-4 text-justify">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo...</p>
            </div>
          </div>
          <div className="shadow-lg w-full flex h-fit">
            <img className="h-40 w-40" src="https://www.aljazeera.com/wp-content/uploads/2021/05/063_1233053179.jpg?resize=1800%2C1800" alt="" />
            <div className="p-4">
              <div className="flex w-full justify-between">
                <h2 className="text-xl font-semibold">Um Texto Exemplo de Titulo</h2>
                <div className="text-gray-400">02/11</div>
              </div>
              <p className="text-gray-400 mt-4 text-justify">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo...</p>
            </div>
          </div>
        </div>
        <div className="w-[500px] bg-black p-4 flex flex-col gap-3">
          <div className="font-medium bg-white pt-1 pb-1 px-2 border-b-green-600 border-b-4">Tag Generica</div>
          <div className="font-medium bg-white pt-1 pb-1 px-2 border-b-green-600 border-b-4">Tag Generica</div>
          <div className="font-medium bg-white pt-1 pb-1 px-2 border-b-green-600 border-b-4">Tag Generica</div>
        </div>
      </div>
    </div>
  );
}

export default App;