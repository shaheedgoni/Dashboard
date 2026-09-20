"use client";

import Panel from "@/components/page-components/panel";
import SearchBar from "@/components/page-components/searchBar";
import { useState } from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuEllipsisVertical,
} from "react-icons/lu";

interface tableDataProps {
  id: number;
  name: string;
  email: string;
  role: string;
  scope: "All sites" | "Production" | "Development" | "Research";
  authentication: "MFA enabled" | "Passkey + MFA" | "Password + MFA";
  status: "Active" | "Inactive";
  lastAccess: string;
}

const tableData: tableDataProps[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    scope: "Production",
    role: "Admin",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "2 mins ago",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    scope: "Research",
    role: "User",
    status: "Inactive",
    authentication: "Passkey + MFA",
    lastAccess: "5 days ago",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    scope: "All sites",
    role: "Editor",
    status: "Inactive",
    authentication: "MFA enabled",
    lastAccess: "Never",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    scope: "Development",
    role: "Admin",
    status: "Active",
    authentication: "Password + MFA",
    lastAccess: "10 mins ago",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    scope: "Production",
    role: "User",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "1 hour ago",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    scope: "All sites",
    role: "Editor",
    status: "Active",
    authentication: "Passkey + MFA",
    lastAccess: "3 hours ago",
  },
  {
    id: 7,
    name: "George Costanza",
    email: "george@example.com",
    scope: "Research",
    role: "User",
    status: "Inactive",
    authentication: "Password + MFA",
    lastAccess: "2 weeks ago",
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah@example.com",
    scope: "Development",
    role: "Editor",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "30 mins ago",
  },
  {
    id: 9,
    name: "Ian Malcolm",
    email: "ian@example.com",
    scope: "Production",
    role: "Admin",
    status: "Active",
    authentication: "Passkey + MFA",
    lastAccess: "12 mins ago",
  },
  {
    id: 10,
    name: "Julia Roberts",
    email: "julia@example.com",
    scope: "All sites",
    role: "User",
    status: "Inactive",
    authentication: "MFA enabled",
    lastAccess: "1 month ago",
  },
  {
    id: 11,
    name: "Kevin Hart",
    email: "kevin@example.com",
    scope: "Development",
    role: "User",
    status: "Active",
    authentication: "Password + MFA",
    lastAccess: "45 mins ago",
  },
  {
    id: 12,
    name: "Laura Palmer",
    email: "laura@example.com",
    scope: "Research",
    role: "Editor",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "4 hours ago",
  },
  {
    id: 13,
    name: "Michael Scott",
    email: "michael@example.com",
    scope: "All sites",
    role: "Admin",
    status: "Active",
    authentication: "Passkey + MFA",
    lastAccess: "8 mins ago",
  },
  {
    id: 14,
    name: "Nina Simone",
    email: "nina@example.com",
    scope: "Production",
    role: "User",
    status: "Inactive",
    authentication: "MFA enabled",
    lastAccess: "3 days ago",
  },
  {
    id: 15,
    name: "Oscar Martinez",
    email: "oscar@example.com",
    scope: "Development",
    role: "Editor",
    status: "Active",
    authentication: "Password + MFA",
    lastAccess: "20 mins ago",
  },
  {
    id: 16,
    name: "Paula Abdul",
    email: "paula@example.com",
    scope: "Research",
    role: "User",
    status: "Inactive",
    authentication: "Passkey + MFA",
    lastAccess: "6 days ago",
  },
  {
    id: 17,
    name: "Quentin Tarantino",
    email: "quentin@example.com",
    scope: "All sites",
    role: "Admin",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "1 min ago",
  },
  {
    id: 18,
    name: "Rachel Green",
    email: "rachel@example.com",
    scope: "Production",
    role: "Editor",
    status: "Active",
    authentication: "Passkey + MFA",
    lastAccess: "2 hours ago",
  },
  {
    id: 19,
    name: "Steve Rogers",
    email: "steve@example.com",
    scope: "Development",
    role: "User",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "15 mins ago",
  },
  {
    id: 20,
    name: "Tina Fey",
    email: "tina@example.com",
    scope: "Research",
    role: "Admin",
    status: "Inactive",
    authentication: "Password + MFA",
    lastAccess: "9 days ago",
  },
  {
    id: 21,
    name: "Uma Thurman",
    email: "uma@example.com",
    scope: "All sites",
    role: "User",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "50 mins ago",
  },
  {
    id: 22,
    name: "Victor Frankenstein",
    email: "victor@example.com",
    scope: "Production",
    role: "Editor",
    status: "Inactive",
    authentication: "Passkey + MFA",
    lastAccess: "3 weeks ago",
  },
  {
    id: 23,
    name: "Wendy Torrance",
    email: "wendy@example.com",
    scope: "Development",
    role: "Admin",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "5 mins ago",
  },
  {
    id: 24,
    name: "Xavier Woods",
    email: "xavier@example.com",
    scope: "Research",
    role: "User",
    status: "Active",
    authentication: "Password + MFA",
    lastAccess: "1 hour ago",
  },
  {
    id: 25,
    name: "Yara Shahidi",
    email: "yara@example.com",
    scope: "All sites",
    role: "Editor",
    status: "Inactive",
    authentication: "MFA enabled",
    lastAccess: "2 months ago",
  },
  {
    id: 26,
    name: "Zack Morris",
    email: "zack@example.com",
    scope: "Production",
    role: "User",
    status: "Active",
    authentication: "Passkey + MFA",
    lastAccess: "25 mins ago",
  },
  {
    id: 27,
    name: "Amy Santiago",
    email: "amy@example.com",
    scope: "Development",
    role: "Admin",
    status: "Active",
    authentication: "MFA enabled",
    lastAccess: "7 mins ago",
  },
  {
    id: 28,
    name: "Ben Wyatt",
    email: "ben@example.com",
    scope: "Research",
    role: "Editor",
    status: "Inactive",
    authentication: "Password + MFA",
    lastAccess: "4 days ago",
  },
];

export default function Users() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const presentedData = tableData.slice(start, start + itemsPerPage);
  console.log("running");

  return (
    <div className="bg-stone-100 p-8 h-610 font-roboto">
      <h1 className="font-semibold text-4xl mb-6">Users</h1>
      <Panel
        content={
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl">All Users</h2>
              <div className="flex gap-3">
                <select className="py-2 px-3 rounded-full border-gray-300 bg-gray-50 border-2 ">
                  <option>User</option>
                  <option>Role</option>
                  <option>Scope</option>
                  <option>Status</option>
                  <option>Authentication</option>
                  <option>Last Access</option>
                </select>
                <SearchBar />
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 ">
              <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-6 py-3 font-medium text-gray-900">
                      User
                    </th>
                    <th className="px-6 py-3 font-medium text-gray-900">
                      Role
                    </th>
                    <th className="px-6 py-3 font-medium text-gray-900">
                      Scope
                    </th>
                    <th className="px-6 py-3 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-3 font-medium text-gray-900">
                      Authentication
                    </th>
                    <th className="px-6 py-3 font-medium text-gray-900">
                      Last Access
                    </th>
                    <th className="px-6 py-3 font-medium text-gray-900" />
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {presentedData.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {user.email}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-gray-700">
                        {user.role}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-gray-700">
                        {user.scope}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                       ${user.status === "Active" ? "bg-green-200 text-green-800" : ""}
                       ${user.status === "Inactive" ? "bg-red-200 text-red-800" : ""}
                     `}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                        {user.authentication}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                        {user.lastAccess}
                      </td>

                      <td className="whitespace-nowrap px-2 py-4 text-gray-500">
                        <button className="flex justify-center items-center w-8 h-8 outline-none rounded-full active:bg-gray-200 transition-colors">
                          <LuEllipsisVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between px-6 py-3 bg-white">
              <p className="text-sm text-gray-500">
                Showing {start + 1} - {""}
                {Math.min(start + itemsPerPage, tableData.length)} of{" "}
                {tableData.length} users
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => p - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 h-8 rounded-md text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <LuChevronLeft size={16} />
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 h-8 rounded-md text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  Next
                  <LuChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
