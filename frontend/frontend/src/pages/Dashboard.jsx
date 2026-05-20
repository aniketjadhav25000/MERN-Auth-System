import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const rows = [
    { id: 1, name: "Michael Holz", date: "04/10/2013", role: "Admin", status: "Active", img: "M" },
    { id: 2, name: "Paula Wilson", date: "05/08/2014", role: "Publisher", status: "Active", img: "P" },
    { id: 3, name: "Antonio Moreno", date: "11/05/2015", role: "Publisher", status: "Suspended", img: "A" },
    { id: 4, name: "Mary Saveley", date: "06/09/2016", role: "Reviewer", status: "Active", img: "M" },
    { id: 5, name: "Martin Sommer", date: "12/08/2017", role: "Moderator", status: "Inactive", img: "M" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1150px] px-3 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500">Welcome, {user?.name || "User"}</p>
          </div>

          <button
            onClick={logout}
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="overflow-hidden rounded-none sm:rounded-md border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm">
              <thead className="bg-white">
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="px-6 py-4 text-left font-medium">#</th>
                  <th className="px-6 py-4 text-left font-medium">Name</th>
                  <th className="px-6 py-4 text-left font-medium">Date Created</th>
                  <th className="px-6 py-4 text-left font-medium">Role</th>
                  <th className="px-6 py-4 text-left font-medium">Status</th>
                  <th className="px-6 py-4 text-left font-medium">Action</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-4 text-slate-500">{row.id}</td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                          {row.img}
                        </div>
                        <span className="font-medium text-slate-700">{row.name}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-slate-500">{row.date}</td>
                    <td className="px-6 py-4 text-slate-500">{row.role}</td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            row.status === "Active"
                              ? "bg-green-500"
                              : row.status === "Suspended"
                              ? "bg-red-500"
                              : "bg-amber-400"
                          }`}
                        />
                        <span className="text-slate-500">{row.status}</span>
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="text-blue-500 hover:text-blue-700 text-lg leading-none">
                          ⚙
                        </button>
                        <button className="text-red-500 hover:text-red-700 text-lg leading-none">
                          ⓧ
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-end gap-2 px-4 py-4 text-sm text-slate-500">
            <span>Previous</span>
            <span>1</span>
            <span>2</span>
            <span className="rounded bg-sky-500 px-2 py-1 text-white">3</span>
            <span>4</span>
            <span>5</span>
            <span>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}