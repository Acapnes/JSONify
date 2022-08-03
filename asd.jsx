class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: [
          {
            index: 0,
          },
        ],
        mainArray: [[]], //projedeki tüm arraylerin tutulduğu array
        mainController: [
          {
            pkDisabled: true,
            pk: "null", //tablo primary key'ini tutuyor
            indexForeignKeys: "null", //hedeflenen tablonun main arraydaki index numarası
            foreignIndex: [
              // tabloların içerisindeki 'int'
              {
                typeId: "null", //int elemanın kendi ıd si
                targetId: "null", // hedeflediği int elemanın ıd si
              },
            ],
          },
        ],
        IsActiveSelectedTableIndexNumber: 0, // seçili olan tablonun aktifliğini gösterir sarı border aynı zamanda onun index numarasını main array içerisinden alır.
        classData: "", // class oluşturulduğunda classların tutulduğu array.
        tableName: [], // bir tablo isim array  ör: ['batuhnan', 'serhat', 'hakim'] bu şekilde tablo isimleri tutuluyor.
        primaryEnabled: true,
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
  
      return (
        <div className="w-screen h-full py-10 px-8 flex justify-between overflow-y-hidden">
          <div className="w-[30%] h-full flex flex-col space-y-16 sticky top-0">
            <div className="w-full h-full flex flex-row sticky top-0">
              <div className="w-full h-full bg-purple-600 flex flex-col space-y-4 items-center justify-between ">
                {typeArray.map((type, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      this.state.mainArray[
                        this.state.IsActiveSelectedTableIndexNumber
                      ].push({
                        typeId:
                          this.state.count[
                            this.state.IsActiveSelectedTableIndexNumber
                          ].index,
                        type: type,
                        name: "",
                        limit: 10,
                        AllowNull: false,
                        primarykey: false,
                        foreignkey: { host: "null", targetTable: "null" },
                        regex: "",
                      });
                      this.setState({
                        mainArray: [...this.state.mainArray],
                      });
                      this.state.count[
                        this.state.IsActiveSelectedTableIndexNumber
                      ].index += 1;
                      this.forceUpdate();
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
                    this.setState({
                      IsActiveSelectedTableIndexNumber:
                        this.state.mainArray.length,
                    });
                    this.state.mainArray.push([]);
                    this.state.mainController.push({
                      pk: "null",
                      indexForeignKeys: "null",
                      pkDisabled: true,
                      foreignIndex: [{ typeId: "null", targetId: "null" }],
                    });
                    this.state.tableName.push([]);
                    this.state.count[this.state.IsActiveSelectedTableIndexNumber]
                      ? this.state.count.push({ index: 0 })
                      : "";
                  }}
                >
                  +
                </button>
                <button
                  className="w-24 h-24 bg-purple-400 items-center"
                  onClick={() => {
                    this.setState({
                      classData: `${this.state.mainArray.map(
                        (table, tableIndex) =>
                          `public static ${this.state.tableName[tableIndex]}
                          ${this.state.mainArray[tableIndex].map(
                            (data, textIndex) =>
                              `
                            ${data.type}   ${data.name}  (${data.limit}) ${
                                data.AllowNull ? "not null" : "null"
                              } ${
                                data.type == "Integer" &&
                                data.typeId ==
                                  this.state.mainController[tableIndex].pk
                                  ? "PRIMARY KEY"
                                  : ""
                              }${
                                data.type == "Integer" &&
                                data.typeId ==
                                  this.state.mainController[tableIndex]
                                    .foreignIndex[data.typeId].typeId
                                  ? `FOREIGN KEY REFERENCES  ${
                                      this.state.mainController[tableIndex]
                                        .foreignIndex[data.typeId].typeId
                                    }`
                                  : ""
                              }{get; set;}\n`
                          )}`
                      )}`,
                    });
                  }}
                >
                  Print All Tables
                </button>
              </div>
            </div>
  
            <div className=" w-full min-h-[10rem] h-[full] bg-white whitespace-pre p-5">
              {`${this.state.classData} `}
            </div>
          </div>
  
          {/* TABLE GENERATOR */}
          <div className="w-[60%] h-full grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
            {this.state.mainArray.map((data, indexTables) => (
              <div
                key={indexTables}
                className={`min-w-[46rem] min-h-[32rem] bg-white text-black flex flex-col mb-10 shadow-xl border-8 border-white ${
                  this.state.IsActiveSelectedTableIndexNumber == indexTables
                    ? " border-yellow-300"
                    : "border-white"
                }`}
              >
                <button
                  onClick={() => {
                    this.setState({
                      IsActiveSelectedTableIndexNumber: indexTables,
                    });
                  }}
                  className="w-full h-[4rem] bg-slate-700 flex flex-row justify-between items-center px-8"
                >
                  <input
                    className="text-white text-2xl outline-none bg-slate-700"
                    type="text"
                    placeholder={`Table ${indexTables}`}
                    onChange={(e) => {
                      this.state.tableName[indexTables] = e.target.value;
                    }}
                  />
                  <div className="space-x-10 flex justify-center items-center">
                    <label className="text-md text-white w-36">Primary Key</label>
                    <select
                      disabled={this.state.mainController[indexTables].pkDisabled} //default olarak true gelerek alanı disabled eder.
                      onChange={(e) => {
                        this.state.mainController[indexTables].pk = e.target.value; // seçili tablonun primaryket objesini günceller.
                        this.forceUpdate();
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="null" selected=""></option>
                      {this.state.mainArray[indexTables].map(
                        (types, indexTableTypes2) =>
                          types.type == "Integer" && types.name != "" ? (
                            <option
                              key={indexTableTypes2}
                              value={types.typeId}
                              selected=""
                            >
                              {types.name}
                            </option>
                          ) : (
                            ""
                          )
                      )}
                    </select>
                    <a
                      onClick={() => {
                        console.log(this.state.mainController[indexTables]);
                        this.setState({
                          classData: `public static ${
                            this.state.tableName
                          } \n${this.state.mainArray[indexTables].map(
                            (data, textIndex) =>
                              `            ${data.type}  ${data.name} (${
                                data.limit
                              }) ${data.AllowNull ? "not null" : "null"} ${
                                data.type == "Integer" &&
                                data.typeId ==
                                  this.state.mainController[indexTables].pk
                                  ? "PRIMARY KEY"
                                  : ""
                              } ${
                                data.type == "Integer" &&
                                data.typeId ==
                                  this.state.mainController[indexTables]
                                    .foreignIndex[data.typeId].typeId
                                  ? `FOREIGN KEY REFERENCES ${
                                      this.state.mainController[indexTables]
                                        .foreignIndex[data.typeId].targetId
                                    }`
                                  : ""
                              } {get; set;}\n`
                          )}`,
                        });
                      }}
                      className=" hover:bg-red-500 p-2 items-center rounded-xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fillRule="white"
                        className="bi bi-upload"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                      </svg>
                    </a>
                    <a
                      onClick={() => {
                        this.state.mainArray.splice(indexTables, 1);
                        this.forceUpdate();
                      }}
                      className=" hover:bg-red-500 p-2 items-center rounded-xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fillRule="white"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </a>
                  </div>
                </button>
  
                {/* TABLE INSIDE TYPES GENERATOR */}
                {this.state.mainArray[indexTables].map((data, indexTypes) => (
                  <div
                    key={indexTypes}
                    className="w-full h-[4rem] px-8 mt-2 my-10 shadow-lg flex justify-between items-center"
                  >
                    <div className="flex flex-row">
                      <input
                        defaultValue={data.type}
                        type="text"
                        className=" outline-none  w-[10rem]"
                      />
                      <input
                        // TYPE INTEGER SA COUNT > 0 && NAME != NULL PRIMARY KEY DROPOWN AKTİFLEŞTİR
                        onChange={(e) => {
                          if (e.target.value !== "") {
                            this.state.mainArray[indexTables][indexTypes].name =
                              e.target.value;
                            this.state.mainController[indexTables].pkDisabled = false;
                          } else {
                            this.state.mainArray[indexTables][indexTypes].name =
                              e.target.value;
                            this.state.mainController[indexTables].pkDisabled = true;
                          }
                          this.forceUpdate();
                        }}
                        placeholder="name"
                        value={this.state.mainArray[indexTables][indexTypes].name}
                        type="text"
                        className=" outline-none w-[10rem]"
                      />
                      <input
                        onChange={(e) => {
                          this.state.mainArray[indexTables][indexTypes].limit =
                            e.target.value;
                        }}
                        placeholder={`(${data.limit})`}
                        type="text"
                        className=" outline-none w-[3.5rem]"
                      />
                      <input
                        onChange={() => {
                          data.AllowNull = !data.AllowNull;
                        }}
                        type="checkbox"
                        className=" outline-none w-[3.5rem] text-black"
                      />
                      <label htmlFor="vehicle1">Null</label>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <div
                        id="Menus"
                        className="flex flex-row w-full space-x-3 min-w-[42rem]"
                      >
                        {data.type == "Integer" &&
                        data.typeId != this.state.mainController[indexTables].pk ? (
                          <select
                            onChange={(e) => {
                              if (e.target.value == "fk") {
                                this.state.mainArray[indexTables][
                                  indexTypes
                                ].foreignkey = {
                                  host: indexTypes,
                                  targetTable: "",
                                };
                              } else if (e.target.value == "null") {
                                this.state.mainArray[indexTables][
                                  indexTypes
                                ].foreignkey = {
                                  host: "null",
                                  targetTable: "null",
                                };
                              }
                              this.forceUpdate();
                            }}
                            id="countries"
                            className="bg-gray-50 border border-gray-300 mx-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            <option value="null" selected=""></option>
                            <option value="fk">Foreign Key</option>
                          </select>
                        ) : (
                          ""
                        )}
                        {data.foreignkey.host !== "null" &&
                        data.typeId !=
                          this.state.mainController[indexTables].pk ? (
                          <select
                            onChange={(event) => {
                              this.state.mainArray[indexTables][
                                indexTypes
                              ].foreignkey = {
                                host: indexTables,
                                targetTable: event.target.value,
                              };
                              this.state.mainController[
                                indexTables
                              ].indexForeignKeys = event.target.value;
                              this.forceUpdate();
                            }}
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            <option value="null" selected=""></option>
                            {this.state.mainArray.map(
                              (foreignTable, indexForeignKeys) =>
                                indexForeignKeys != indexTables ? (
                                  <option
                                    key={indexForeignKeys}
                                    value={indexForeignKeys}
                                    selected=""
                                  >
                                    table {indexForeignKeys}
                                  </option>
                                ) : (
                                  ""
                                )
                            )}
                          </select>
                        ) : (
                          ""
                        )}
  
                        {data.foreignkey.targetTable !== "" &&
                        this.state.mainController[indexTables]
                          .indexForeignKeys !== "null" &&
                        data.typeId !=
                          this.state.mainController[indexTables].pk ? (
                          <select
                            onChange={(event) => {
                              if (
                                this.state.mainController[indexTables]
                                  .foreignIndex[indexTypes]
                              ) {
                                this.state.mainController[
                                  indexTables
                                ].foreignIndex[indexTypes] = {
                                  typeId:
                                    this.state.mainArray[indexTables][indexTypes]
                                      .typeId,
                                  targetId: event.target.value,
                                };
                              } else {
                                this.state.mainController[
                                  indexTables
                                ].foreignIndex.push({
                                  typeId:
                                    this.state.mainArray[indexTables][indexTypes]
                                      .typeId,
                                  targetId: event.target.value,
                                });
                              }
  
                              this.forceUpdate();
                            }}
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            <option value="null" selected=""></option>
                            {this.state.mainArray[
                              data.foreignkey.targetTable
                            ].map((targetTable, indexTargetTable) =>
                              targetTable.type === "Integer" &&
                              this.state.mainController[
                                this.state.mainController[indexTables]
                                  .indexForeignKeys
                              ].pk != "" &&
                              this.state.mainController[
                                this.state.mainController[indexTables]
                                  .indexForeignKeys
                              ].pk != "null" ? (
                                <option
                                  key={indexTargetTable}
                                  value={targetTable.name}
                                  selected=""
                                >
                                  {targetTable.name}
                                </option>
                              ) : (
                                ""
                              )
                            )}
                          </select>
                        ) : (
                          ""
                        )}
                      </div>
  
                      <button
                        onClick={() => {
                          // this.state.mainArray[indexTables].splice(indexTypes,1);
                          // this.state.count[indexTables].index -= 1;
  
                          // this.state = {
                          //   food: {
                          //     sandwich: {
                          //       capsicum: true,
                          //       crackers: true,
                          //       mayonnaise: true
                          //     },
                          //     pizza: {
                          //       jalapeno: true,
                          //       extraCheese: false
                          //     }
                          //   }
                          // }
  
                          // this.setState(prevState => ({
                          //   mainArray: [ //mainArray 
                          //     ...prevState.mainArray,           // copy all other key-value pairs of food object
                          //     indexTables: [                     // specific object of food object
                          //       ...prevState.food.pizza,   // copy all pizza key-value pairs
                          //       extraCheese: true          // update value of specific key
                          //     }
                          //   ]
                          // }))
  
  
                          this.setState({
  
                            mainArray: [...this.state.mainArray[indexTables].filter(type => type.typeId !== this.state.mainArray[indexTables][indexTypes].typeId)]
                          })
                          //this.state.mainArray[indexTables].splice(this.state.mainArray[indexTables][indexTypes],1)
                          this.forceUpdate();
                        }}
                        className="px-2 py-2 hover:bg-yellow-500 hover:opacity-70 rounded-3xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fillRule="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("main"));
  root.render(<Main />);
  