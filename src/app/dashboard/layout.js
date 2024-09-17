'use client';

import { usePathname } from 'next/navigation'; // Hook to get the current path
import Link from 'next/link';

export default function DashboardLayout({children})
{
    const path = usePathname(); // Get the current path
    const isAdministrator = path.startsWith('/dashboard/administrator');
    const isProfessor = path.startsWith('/dashboard/professor');
    const isMarketing = path.startsWith('/dashboard/marketing');

    return (
        
        isAdministrator ? (
            <>
                <ul>
                    <li>
                        <Link href="/dashboard/administrator">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/administrator/users">Users</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/administrator/roles">Roles</Link>
                    </li>
                </ul>

                <section>{children}</section>
            </>
            
        ) : isProfessor ? (
            <>
                <ul>
                    <li>
                        <Link href="/dashboard/professor">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/professor/courses">Courses</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/professor/students">Students</Link>
                    </li>
                </ul>

                <section>{children}</section>

            </>
        ) : isMarketing ? (
            <>
                <ul>
                    <li>
                        <Link href="/dashboard/marketing">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/marketing/campaigns">Campaigns</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/marketing/leads">Leads</Link>
                    </li>
                </ul>

                <section>{children}</section>

            </>
        ) : (
            <div>
                <ul>
                    <li>
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/administrator">Administrator</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/professor">Professor</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/marketing">Marketing</Link>
                    </li>
                </ul>
            </div>
        )
    )
}