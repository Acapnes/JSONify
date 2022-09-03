class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      print: "null",
      showModal: false,
      selectedTable: 0,
      setTypeId: 0,
      mainArray: [
        {
          id: 0,
          primaryKey: null,
          types: [],
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
      "Varchar",
      "Nvarchar",
      "DateTimeNow",
      "Tinyint",
    ];

    const addNewTable = () => {
      this.setState((prevState) => ({
        mainArray: [
          ...prevState.mainArray,
          {
            id: this.state.mainArray[this.state.mainArray.length - 1].id +1,
            primaryKey: null,
            types: [],
          },
        ],
      }));
    };

    const addNewType = (type, typeId, name) => {
      type == "Integer"
        ? this.state.mainArray[this.state.selectedTable].types.push({
            type,
            typeId,
            name,
            foreignKey: {
              foreignState: false,
              targetTableId: null,
              targetPrimaryKeyId: null,
            },
          })
        : this.state.mainArray[this.state.selectedTable].types.push({
            type,
            typeId,
            name,
          });
      this.forceUpdate();
    };

    return (
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-row justify-between">
          {/* LEFT SIDE */}
          <div className=" w-[20vw] min-h-screen h-full flex flex-row py-20 px-2  bg-gray-900 sticky top-0">
            <div className="w-full absolute top-5 text-center text-white text-lg">
              <a href="https://github.com/acapnes">Developed by Acapnes</a>
            </div>
            <div className="flex flex-col space-y-5 w-full">
              {typesArray.map((selectedType, IndexSelectedType) => (
                <button
                  onClick={() => {
                    addNewType(selectedType, this.state.setTypeId, "null");
                    this.state.setTypeId += 1;
                    this.forceUpdate();
                  }}
                  className=" flex flex-row justify-between px-4 py-2 text-gray-300 text-lg rounded-lg hover:bg-slate-700 items-center"
                >
                  <div key={IndexSelectedType} className="">
                    {selectedType}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <Print mainArray={this.state.mainArray} />
          {this.state.mainArray[this.state.selectedTable] && (
            <div
              class="modal fade"
              id={this.state.selectedTable}
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog w-screen">
                <div class="modal-content">
                  <div class="modal-header flex justify-between">
                    <div>
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                    </div>
                    <div className="flex flex-row">
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
                          this.forceUpdate();
                        }}
                        id="countries"
                        className="border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                      >
                        <option value="null"></option>
                        {this.state.mainArray[this.state.selectedTable].types
                          .filter((types) => types.type === "Integer")
                          .map((primaryType, primaryTypeIndex) => (
                            <option
                              key={primaryTypeIndex}
                              value={primaryType.typeId}
                            >
                              {primaryType.type} {primaryType.typeId}
                            </option>
                          ))}
                      </select>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                  <div class="modal-body">
                    {this.state.mainArray[this.state.selectedTable].types.map(
                      (Type, IndexType) => (
                        <div
                          key={IndexType}
                          className="p-4 shadow-lg flex flex-row space-x-2"
                        >
                          <div className="flex flex-row space-x-3 w-[35%] items-center">
                            <div>{Type.type}</div>
                            <input
                              className="outline-none"
                              type="text"
                              placeholder="name"
                            />
                          </div>

                          {/* FOREIGN KEY GENERATE */}
                          {Type.type === "Integer" &&
                            this.state.mainArray[this.state.selectedTable]
                              .primaryKey != Type.typeId &&
                            this.state.mainArray[
                              this.state.selectedTable + 1
                            ] && (
                              <input
                                type={"checkbox"}
                                onChange={(e) => {
                                  e.target.checked
                                    ? (this.state.mainArray[
                                        this.state.selectedTable
                                      ].types[
                                        IndexType
                                      ].foreignKey.foreignState = true)
                                    : (this.state.mainArray[
                                        this.state.selectedTable
                                      ].types[
                                        IndexType
                                      ].foreignKey.foreignState = false);
                                  this.forceUpdate();
                                }}
                              />
                            )}

                          {Type.type == "Integer" &&
                            this.state.mainArray[this.state.selectedTable]
                              .primaryKey != Type.typeId &&
                            this.state.mainArray[this.state.selectedTable]
                              .types[IndexType].foreignKey.foreignState ==
                              true && (
                              <select
                                onChange={(e) => {
                                  e.target.value !== "null"
                                    ? (this.state.mainArray[
                                        this.state.selectedTable
                                      ].types[
                                        IndexType
                                      ].foreignKey.targetTableId =
                                        e.target.value)
                                    : (this.state.mainArray[
                                        this.state.selectedTable
                                      ].types[
                                        IndexType
                                      ].foreignKey.targetTableId = null);
                                  this.forceUpdate();
                                }}
                                id="countries"
                                className="border mx-5 bg-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                              >
                                <option value="null" selected=""></option>
                                {this.state.mainArray
                                  .filter(
                                    (table) =>
                                      table.id != this.state.selectedTable
                                  )
                                  .map((foreignTables, foreignTablesIndex) => (
                                    <option
                                      key={foreignTablesIndex}
                                      value={foreignTables.id}
                                      selected=""
                                    >
                                      {foreignTables.id}
                                    </option>
                                  ))}
                              </select>
                            )}
                          {Type.type == "Integer" &&
                            this.state.mainArray[this.state.selectedTable]
                              .types[IndexType].foreignKey.foreignState ==
                              true &&
                            this.state.mainArray[this.state.selectedTable]
                              .types[IndexType].foreignKey.targetTableId !==
                              null && (
                              <select
                                onChange={(e) => {
                                  e.target.value != "null" &&
                                    (this.state.mainArray[
                                      this.state.selectedTable
                                    ].types[
                                      IndexType
                                    ].foreignKey.targetPrimaryKeyId =
                                      e.target.value);
                                }}
                                id="countries"
                                className="border mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5"
                              >
                                <option value="null" selected=""></option>
                                {this.state.mainArray[
                                  this.state.mainArray[this.state.selectedTable]
                                    .types[IndexType].foreignKey.targetTableId
                                ].types.map(
                                  (foreignTargetType, foreignTargetTypeIndex) =>
                                    foreignTargetType.type === "Integer" && (
                                      <option
                                        value={foreignTargetType.typeId}
                                        selected=""
                                      >
                                        {foreignTargetType.typeId}{" "}
                                        {foreignTargetType.name}
                                      </option>
                                    )
                                )}
                              </select>
                            )}
                        </div>
                      )
                    )}
                  </div>
                  <div class="modal-footer">
                    <button
                      onClick={() => {
                        this.state.selectedTable != 0 &&
                          this.state.mainArray.splice(
                            this.state.selectedTable,
                            1
                          );
                        this.forceUpdate();
                      }}
                      type="button"
                      class="btn btn-primary bg-red-600 text-white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">Delete Table</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* RIGHT SIDE */}
          <div className="w-full flex flex-col">
            <Navbar />
            <div className="flex flex-row">
              <div className=" w-full h-full p-8">
                {/* TABLE GENERATE */}
                <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
                  {this.state.mainArray.map((Table, IndexTable) => (
                    <div
                      key={IndexTable}
                      className={`bg-white text-black min-h-[24rem] flex flex-col border-4 rounded-lg ${
                        this.state.selectedTable == IndexTable
                          ? " border-yellow-400"
                          : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => {
                          this.setState({
                            selectedTable: IndexTable,
                          });
                        }}
                        className="w-full h-[3rem] rounded-t-md flex justify-between items-center bg-slate-500"
                      >
                        <input
                          className="bg-slate-500 w-[50%] hover:bg-slate-700 focus:bg-slate-700 focus:text-white hover:text-white rounded-tl-md rounded-br-md h-full px-2 outline-none"
                          type="text"
                          placeholder={"Table " + IndexTable} /// Print zamanında tablo ismini placeholderdan çek.
                        />
                        <div className="flex flex-row justify-end space-x-3 h-full">
                          <button
                            type="button"
                            class="px-2 hover:bg-red-400 hover:text-white rounded-bl-md rounded-tr-md"
                            data-toggle="modal"
                            data-target={"#" + this.state.selectedTable}
                          >
                            Open Settings
                          </button>
                        </div>
                      </button>
                      {/* ROW GENERATE */}
                      <div className="w-full h-full">
                        {this.state.mainArray[IndexTable].types.map(
                          (Type, IndexType) => (
                            <div
                              key={IndexType}
                              className="p-4 shadow-lg flex flex-row justify-between space-x-2"
                            >
                              <div className="flex flex-row space-x-4 w-[70%] items-center">
                                <p>{Type.type}</p>
                                <input
                                  className="outline-none"
                                  type="text"
                                  placeholder="name"
                                />
                              </div>
                              <button
                                onClick={() => {
                                  this.state.mainArray[IndexTable].types.splice(
                                    IndexType,
                                    1
                                  );
                                  this.forceUpdate();
                                }}
                                className="shadow-md p-3 hover:bg-red-300 hover:opacity-70"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
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
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" h-fit flex flex-col items-end space-y-4 p-5 sticky top-0">
                <a className="w-16 h-16" href="">
                  <img
                    className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/61701011?v=4"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="w-16 h-16 bg-slate-800 text-white items-center flex justify-center p-2 border-2 border-stone-600 rounded-full sticky bottom-5"
                  data-toggle="modal"
                  data-target="#PrintModal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-printer"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    addNewTable();
                    this.state.selectedTable += 1;
                    this.forceUpdate();
                  }}
                  className="w-16 h-16 bg-slate-800 text-white items-center flex justify-center p-2 border-2 border-stone-600 rounded-full sticky bottom-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<Main />);
