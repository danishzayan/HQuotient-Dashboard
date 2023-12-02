import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Table = () => {
  const { userData } = useContext(DataContext);
  console.log("data is here ==>", userData);

  return (
    <div className="flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-medium font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                      <button className="flex items-center gap-x-2">
                        <span className="text-medium font-medium">Id</span>
                      </button>
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-medium font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-medium font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-medium font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Role
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-medium font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {userData
                  ? userData.map((data) => (
                      <tr key={data.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <span>{data.id}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-300 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data.role}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex justify-start gap-4">
                            <button className="outline-0 border-0 bg-none cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#ff0000"
                                className="h-5 w-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                            <button className="outline-0 border-0 bg-none cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#00ff00"
                                className="h-5 w-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
