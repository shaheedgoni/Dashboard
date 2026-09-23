"use client";

import Panel from "@/components/page-components/panel";
import SearchBar from "@/components/page-components/searchBar";
import Table, { TableRowProps } from "@/components/page-components/table";
import Section from "@/components/section";

const usersTableHead: string[] = [
  "User",
  "Role",
  "Scope",
  "Status",
  "Authentication",
  "Last Access",
  "",
];

const rowContent: TableRowProps[] = [
  {
    columns: [
      {
        type: "profilePicture",
        value: "Alice Johnson",
        subValue: "alice@example.com",
      },
      "Admin",
      "Production",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "2 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Bob Smith",
        subValue: "bob@example.com",
      },
      "User",
      "Research",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "Passkey + MFA",
      "5 days ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Charlie Brown",
        subValue: "charlie@example.com",
      },
      "Editor",
      "All sites",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "MFA enabled",
      "Never",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Diana Prince",
        subValue: "diana@example.com",
      },
      "Admin",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "Password + MFA",
      "10 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Ethan Hunt",
        subValue: "ethan@example.com",
      },
      "User",
      "Production",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "1 hour ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Fiona Gallagher",
        subValue: "fiona@example.com",
      },
      "Editor",
      "All sites",
      { type: "pills", value: "Active", pillColor: "green" },
      "Passkey + MFA",
      "3 hours ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "George Costanza",
        subValue: "george@example.com",
      },
      "User",
      "Research",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "Password + MFA",
      "2 weeks ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Hannah Baker",
        subValue: "hannah@example.com",
      },
      "Editor",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "30 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Ian Malcolm",
        subValue: "ian@example.com",
      },
      "Admin",
      "Production",
      { type: "pills", value: "Active", pillColor: "green" },
      "Passkey + MFA",
      "12 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Julia Roberts",
        subValue: "julia@example.com",
      },
      "User",
      "All sites",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "MFA enabled",
      "1 month ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Kevin Hart",
        subValue: "kevin@example.com",
      },
      "User",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "Password + MFA",
      "45 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Laura Palmer",
        subValue: "laura@example.com",
      },
      "Editor",
      "Research",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "4 hours ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Michael Scott",
        subValue: "michael@example.com",
      },
      "Admin",
      "All sites",
      { type: "pills", value: "Active", pillColor: "green" },
      "Passkey + MFA",
      "8 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Nina Simone",
        subValue: "nina@example.com",
      },
      "User",
      "Production",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "MFA enabled",
      "3 days ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Oscar Martinez",
        subValue: "oscar@example.com",
      },
      "Editor",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "Password + MFA",
      "20 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Paula Abdul",
        subValue: "paula@example.com",
      },
      "User",
      "Research",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "Passkey + MFA",
      "6 days ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Quentin Tarantino",
        subValue: "quentin@example.com",
      },
      "Admin",
      "All sites",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "1 min ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Rachel Green",
        subValue: "rachel@example.com",
      },
      "Editor",
      "Production",
      { type: "pills", value: "Active", pillColor: "green" },
      "Passkey + MFA",
      "2 hours ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Steve Rogers",
        subValue: "steve@example.com",
      },
      "User",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "15 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Tina Fey",
        subValue: "tina@example.com",
      },
      "Admin",
      "Research",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "Password + MFA",
      "9 days ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Uma Thurman",
        subValue: "uma@example.com",
      },
      "User",
      "All sites",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "50 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Victor Frankenstein",
        subValue: "victor@example.com",
      },
      "Editor",
      "Production",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "Passkey + MFA",
      "3 weeks ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Wendy Torrance",
        subValue: "wendy@example.com",
      },
      "Admin",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "5 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Xavier Woods",
        subValue: "xavier@example.com",
      },
      "User",
      "Research",
      { type: "pills", value: "Active", pillColor: "green" },
      "Password + MFA",
      "1 hour ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Yara Shahidi",
        subValue: "yara@example.com",
      },
      "Editor",
      "All sites",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "MFA enabled",
      "2 months ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Zack Morris",
        subValue: "zack@example.com",
      },
      "User",
      "Production",
      { type: "pills", value: "Active", pillColor: "green" },
      "Passkey + MFA",
      "25 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Amy Santiago",
        subValue: "amy@example.com",
      },
      "Admin",
      "Development",
      { type: "pills", value: "Active", pillColor: "green" },
      "MFA enabled",
      "7 mins ago",
      { type: "action" },
    ],
  },
  {
    columns: [
      {
        type: "profilePicture",
        value: "Ben Wyatt",
        subValue: "ben@example.com",
      },
      "Editor",
      "Research",
      { type: "pills", value: "Inactive", pillColor: "red" },
      "Password + MFA",
      "4 days ago",
      { type: "action" },
    ],
  },
];

export default function Users() {
  return (
    <Section title="Users">
      <Panel>
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

        <Table headerContent={usersTableHead} rowContent={rowContent} />

        {/* <div className="overflow-x-auto rounded-lg border border-gray-200 ">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                {usersTableHead.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 font-medium text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {presentedData.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
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
        </div> */}
      </Panel>
    </Section>
  );
}
