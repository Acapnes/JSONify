class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      selectedTypes: [[]],
      selectedTableCount: 0,
    };
  }

  render() {
    const typeArray = [
      "Integer",
      "String",
      "Boolean",
      "Byte",
      "Char",
      "DateTime",
    ];
    this.setState();

    return (
      <div className="w-screen h-full py-10 px-8 flex justify-between">
        <div className="w-[30%] h-full flex flex-col space-y-5 ">
          <div className="w-full h-full flex flex-row">
            <div className="w-full h-full bg-purple-600 flex flex-col space-y-4 items-center justify-between sticky top-5">
              {typeArray.map((type, index) => (
                <button
                  key={index}
                  onClick={() => {
                    this.state.selectedTypes[
                      this.state.selectedTableCount
                    ].push(type);
                    this.setState({
                      selectedTypes: [...this.state.selectedTypes],
                    });
                  }}
                  className="w-full h-[4rem] flex justify-between items-center text-xl text-white hover:bg-red-400 px-4"
                >
                  <p>{type}</p> <p>+</p>
                </button>
              ))}
            </div>

            <div className="w-[25%] h-full flex flex-col space-y-5 mx-4 relative">
              <button
                className="w-24 h-24 bg-purple-400 items-center"
                onClick={() => {
                  this.state.selectedTypes.push([]);
                  this.setState({
                    selectedTableCount: this.state.selectedTypes.length - 1,
                  });
                  console.log(this.state.selectedTableCount);
                  console.log(this.state.selectedTypes);
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className=" w-full h-[8rem] bg-white">
            {this.state.selectedTypes[this.state.selectedTableCount] + " "}
          </div>
        </div>

        <div className="w-[60%] h-full grid grid-cols-2">
          {this.state.selectedTypes.map((data, index) => (
            <button
              key={index}
              className={`w-full min-h-[32rem] bg-white text-black flex flex-col mb-10 shadow-xl border-8 border-white ${
                this.state.selectedTableCount == index
                  ? " border-yellow-300"
                  : "border-white"
              }`}
              onClick={() => {
                this.setState({
                  selectedTableCount: index,
                });
              }}
            >
              <div className="w-full h-[4rem] bg-slate-700 flex flex-row justify-between items-center px-8">
                <p className="text-white text-2xl">Table {index}</p>
                <div className="space-x-10">
                  <button className=" hover:bg-red-500 p-2 items-center rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      class="bi bi-upload"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                  </button>
                  <button className=" hover:bg-red-500 p-2 items-center rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {this.state.selectedTypes[index].map((data) => (
                <div className="w-full h-[4rem] px-8 my-2 shadow-lg flex justify-between items-center">
                  <div className="flex flex-row">
                    <input value={data} type="text" className=" outline-none  w-[10rem]" />
                    <input
                      placeholder="name"
                      type="text"
                      className=" outline-none w-[10rem]"
                    />
                    <input
                      placeholder="*(10)"
                      type="text"
                      className=" outline-none w-[3.5rem]"
                    />
                  </div>
                  <div className="flex flex-row space-x-3">
                    <select
                      //onChange={(e) => alert(e.target.value)}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected=""></option>
                      <option value="PK">PRIMARY KEY</option>
                      <option value="FK">FOREIGN KEY</option>
                    </select>

                    <button className="px-2 py-2 hover:bg-red-500 hover:opacity-70 rounded-3xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<Main />);
