'use client'

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const moms_list = [
    {
      name: "John Doe",
      client_id: "1234567890",
      account_number: "1234567890",
      status: "Active"
    },
    {
      name: "Jane Doe",
      client_id: "1234567890",
      account_number: "1234567890",
      status: "Active"
    },
    {
      name: "John Doe",
      client_id: "1234567890",
      account_number: "1234567890",
      status: "Active"
    },
    {
      name: "John Doe",
      client_id: "1234567890",
      account_number: "1234567890",
      status: "Active"
    },
    {
      name: "John Doe",
      client_id: "1234567890",
      account_number: "1234567890",
      status: "Active"
    },
    {
      name: "John Doe",
      client_id: "1234567890",
      account_number: "1234567890",
      status: "Active"
    },
  ];

function MomPathSystem() {
  return (
    <div className="w-full">
        <div className="flex gap-2 py-4 items-center">
            <h1 className="text-2xl font-bold">MOM Pathway System</h1>
            <Button variant="outline">
                <Link href="/data_collection/new">Add MOM</Link>
            </Button>
            <div className="relative max-w-sm w-full">
                <Input placeholder="Filter plants..." className="pl-10"/>
                <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
            </div>
        </div>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>#</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>CLIENT ID</TableHead>
            <TableHead>ACCOUNT NUMBER</TableHead>
            <TableHead>STATUS</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {moms_list.map((mom, index) => (
            <TableRow
                className={index % 2 === 0 ? "bg-muted/50" : ""}
                key={index}
            >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{mom.name}</TableCell>
                <TableCell>{mom.client_id}</TableCell>
                <TableCell>{mom.account_number}</TableCell>
                <TableCell>{mom.status}</TableCell>
                <TableCell>
                    <Button variant="outline">
                        <Link href={`/data_collection/${mom.client_id}`}>View</Link>
                    </Button>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </div>
  )
}

export default MomPathSystem