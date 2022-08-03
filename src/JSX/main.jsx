class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTable: 0,
      setTypeId: 0,
      mainArray: [
        {
          id: 0,
          primaryKey: null,
          types: [],
          foreignKeys: [
            {
              foreignKeyId: null,
              hostId: null,
              targetTableId: null,
              targetTypeId: null,
            },
          ],
        },
      ],
    };
  }

  render() {
    console.log(this.state.mainArray);
    const typesArray = [
      "Integer",
      "String",
      "Char",
      "DateTime",
      "Boolean",
      "Byte",
    ];

    const addNewTable = (data) => {
      this.setState((prevState) => ({
        mainArray: [
          ...prevState.mainArray,
          {
            id: this.state.mainArray[this.state.selectedTable-1].id+1,
            primaryKey: null,
            types: [],
            foreignKeys: [
              {
                foreignKeyId: null,
                hostId: null,
                targetTableId: null,
                targetTypeId: null,
              },
            ],
          },
        ],
      }));
    };

    const addNewType = (type, typeId, name) => {
      this.state.mainArray[this.state.selectedTable].types.push({
        type,
        typeId,
        name,
      });
      this.forceUpdate();

      // this.setState((prevState) => ({
      //   mainArray: [
      //       ...prevState.mainArray[prevState.selectedTable],
      //       {
      //         types: [
      //           ...prevState.mainArray[prevState.selectedTable].types,
      //           {
      //             typeId,
      //             type,
      //             name,
      //           },
      //         ],
      //       },
      //   ],
      // }));
    };

    return (
      <div className="w-full h-full flex flex-row justify-between">
        {/* LEFT SIDE */}
        <div className=" w-[35vw] h-[62rem] flex flex-row p-20 space-x-10">
          <div className="flex flex-col space-y-5">
            {typesArray.map((selectedType, IndexSelectedType) => (
              <button
                key={IndexSelectedType}
                onClick={() => {
                  addNewType(selectedType, this.state.setTypeId, "null");
                }}
                className="px-4 py-2 bg-yellow-200 rounded-lg"
              >
                {selectedType}
              </button>
            ))}
          </div>
          <div className="flex flex-col  space-y-5">
            <button
              onClick={() => {
                addNewTable();
                this.state.selectedTable += 1;
                this.forceUpdate();
              }}
              className="bg-green-400 text-3xl p-8 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className=" w-full h-[62rem] p-16">
          {/* TABLE GENERATE */}
          <div className="w-full h-full grid grid-cols-2">
            {this.state.mainArray.map((Table, IndexTable) => (
              <div
                key={IndexTable}
                className={`bg-white text-black w-full h-[24rem] flex flex-col border-4 rounded-lg ${
                  this.state.selectedTable == IndexTable
                    ? " border-yellow-400"
                    : "border-white"
                }`}
              >
                <button
                  onClick={() => {
                    this.setState({
                      selectedTable: IndexTable,
                    });
                  }}
                  className="w-full h-[3rem]  rounded-t-md flex justify-between px-6 items-center bg-slate-500"
                >
                  <input
                    className="bg-slate-500 w-[40%] outline-none"
                    type="text"
                    placeholder={"Table" + IndexTable}
                  />
                  <div className="flex flex-row justify-end space-x-3  w-[60%]">
                    <select
                      onChange={(e) => {
                        if (e.target.value != "null") {
                          this.state.mainArray[
                            this.state.selectedTable
                          ].primaryKey = e.target.value;
                        } else {
                          this.state.mainArray[
                            this.state.selectedTable
                          ].primaryKey = null;
                        }
                      }}
                      id="countries"
                      className="border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                    >
                      <option value="null" selected=""></option>
                      {this.state.mainArray[IndexTable].types
                        .filter((types) => types.type === "Integer")
                        .map((primaryType, primaryTypeIndex) => (
                          <option
                            key={primaryTypeIndex}
                            value={primaryType.typeId}
                            selected=""
                          >
                            {primaryType.type}
                          </option>
                        ))}
                    </select>
                    <a>Print</a>
                    <a
                      onClick={() => {
                        this.state.mainArray.splice(IndexTable, 1);
                        this.forceUpdate();
                      }}
                    >
                      Delete
                    </a>
                  </div>
                </button>
                {/* ROW GENERATE */}
                <div className="w-full h-full">
                  {this.state.mainArray[IndexTable].types.map(
                    (Type, IndexType) => (
                      <div
                        key={IndexType}
                        className="p-4 shadow-lg flex flex-row space-x-2"
                      >
                        <div>{Type.type}</div>
                        <input
                          className="outline-none"
                          type="text"
                          placeholder="name"
                        />
                        {/* FOREIGN KEY GENERATE */}
                        {Type.type === "Integer" && this.state.mainArray[this.state.selectedTable].primaryKey !== Type.typeId ? (
                          <select
                            onChange={() => {}}
                            id="countries"
                            className="border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                          >
                            <option value="null" selected=""></option>
                            <option value="fk">Foreign Key</option>
                          </select>
                        ) : (
                          ""
                        )}

                        <button
                          className=" shadow-lg px-4 py-2"
                          onClick={() => {
                            this.state.mainArray[IndexTable].types.splice(
                              IndexType,
                              1
                            );
                            this.forceUpdate();
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<Main />);
