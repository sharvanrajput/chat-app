import BarCharts from '@/components/charts/Chart'
import { ChartPieDonutText } from '@/components/charts/PiCharts'
import AdminLayout from '@/components/Layout/AdminLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Group, GroupIcon, User, Users } from 'lucide-react'
import moment from 'moment'
import { FaUserShield } from 'react-icons/fa'

const widgetData = [
  {
    value: 20,
    Icon: User,
    title: "User"
  },
  {
    value: 3,
    Icon: Users,
    title: "Users"
  },
  {
    value: 250,
    Icon: GroupIcon,
    title: "Group"
  },
]

function Widget({ value, Icon, title }) {
  return (
    <Card>
      <CardContent>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Icon />
            <p>{title}</p>
          </div>
          <div className=' border-6 size-15 flex justify-center items-center font-bold rounded-full border-black '>
            {value}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
function Dashboard() {
  return (
    <main className='px-3 pt-5 grid gap-3' >
      
      <Card>
        <CardContent>
          <div className="flex gap-4 items-center flex-wrap">
            <FaUserShield className='size-10' />
            <div className='flex items-center gap-4 '>
              <Input type={"text"} placeholder={"Search..."} className={"rounded-full w-full "} />
              <Button className={"rounded-full"} >Search</Button>
            </div>
            <div className='flex-1' />
            <div className='md:block hidden'>
              {moment().format("MMMM DD YYYY")}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {
          widgetData.map((e, i) => <Widget key={i} {...e} />)
        }
      </div>

      <div className="grid   md:grid-cols-2 grid-cols-1 gap-2">
        <div className="w-full mb-10">
          <BarCharts />
        </div>

        <div className="w-full mb-10">
          <ChartPieDonutText />
        </div>
      </div>

    </main>
  )
}

export default AdminLayout(Dashboard)

