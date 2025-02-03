"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { MusicCardType } from "./recent-streams";
import { Loader } from "lucide-react";
import { useQuery } from "react-query";
import { useState } from "react";

const RecentStreamTable = () => {
  const columnHelper = createColumnHelper<MusicCardType>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = [
    columnHelper.accessor("userId", {
      id: "userId",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>User Id</span>,
    }),
    columnHelper.accessor((row) => row.songName, {
      id: "songName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Song Name</span>,
    }),
    columnHelper.accessor("artist", {
      id: "artist",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Artist</span>,
    }),
    columnHelper.accessor("streamCount", {
      id: "StreamCount",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Stream Count</span>,
      enableSorting: true,
    }),
    columnHelper.accessor("dateStreamed", {
      id: "DateStreamed",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Date Streamed</span>,
    }),
  ];

  const getRecentStreams = async (): Promise<MusicCardType[]> => {
    const response = await fetch(
      "https://music-dashboard-be.vercel.app/recentStreams"
    );
    return response.json();
  };

  const query = useQuery({
    queryKey: ["recentStreamsTable"],
    queryFn: getRecentStreams,
  });

  const table = useReactTable({
    data: query?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });
  if (query.isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );
  }
  return (
    <div className=" relative pb-6 ">
      <div className="overflow-auto max-md:max-w-72">
        <table className="w-full ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="border border-black py-2 min-w-28"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : ""
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === "asc"
                              ? "Sort ascending"
                              : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className=" "
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="text-center py-2 min-w-28"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RecentStreamTable;
