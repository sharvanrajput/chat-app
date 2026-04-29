import React from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'
import { sampleAllUsers } from '@/constants/sampleData'

export default function AllUserTable() {
    return (
        <div className='mx' >
            <div className={"border overflow-hidden rounded-2xl  "}>
                <Table  >
                    <TableHeader className={"bg-black"}>
                        <TableRow>
                            <TableHead className={"text-white w-10"}>S.NO.</TableHead>
                            <TableHead className={"text-white w-10"}  >Avatar</TableHead>
                            <TableHead className={"text-white  "} >Name</TableHead>
                            <TableHead className={"text-white "} >User Name</TableHead>
                            <TableHead className={"text-white w-10 "} >Friends</TableHead>
                            <TableHead className={"text-white w-10 text-end pe-3"} >Groups</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sampleAllUsers.map(e => (
                            <TableRow className={"divide-x"} >
                                <TableHead className={"py-1   text-center"} >{e.id} </TableHead>
                                <TableHead className={"py-1  "} ><img src={e.avatar} className='rounded-full h-10 w-10' alt={e.name} /> </TableHead>
                                <TableHead className={"py-1  "} >{e.name} </TableHead>
                                <TableHead className={"py-1  "} >{e.username} </TableHead>
                                <TableHead className={"py-1  "} >{e.friends} </TableHead>
                                <TableHead className={"py-1   text-center pe-3"} >{e.groups} </TableHead>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
