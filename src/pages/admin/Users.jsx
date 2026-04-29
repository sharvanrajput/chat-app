import AllUserTable from "@/components/admin/AllUserTable"
import AdminLayout from "@/components/Layout/AdminLayout"


function Users() {
    return (
        <main className="px-2">
            <h2 className="my-5 text-3xl font-bold text-center border-b border-black " >All Users</h2>
        <AllUserTable />
        </main>
    )
}
export default AdminLayout(Users)