
import * as React from 'react';
import { redirect } from 'next/navigation';
import { getAuthenticatedUser, getUserRole } from '@/app/actions/auth';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UsersTable } from '@/components/admin/users-table';
import { ReportsTable } from '@/components/admin/reports-table';
import { PostsTable } from '@/components/admin/posts-table';
import { getAllUsers } from '@/app/actions/admin';
import { getAllReports } from '@/app/actions/reports';
import { getAllPosts } from '@/app/actions/posts';

export default async function AdminPage() {
    const user = await getAuthenticatedUser();
    const role = user ? await getUserRole(user.uid) : 'user';

    if (role !== 'admin' && role !== 'superadmin') {
        redirect('/');
    }

    const users = await getAllUsers();
    const reports = await getAllReports();
    const posts = await getAllPosts();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-muted/40">
                <div className="container mx-auto py-8 md:py-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl font-headline">관리자 대시보드</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="users">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="users">사용자 관리</TabsTrigger>
                                    <TabsTrigger value="reports">제보 관리</TabsTrigger>
                                    <TabsTrigger value="posts">게시물 관리</TabsTrigger>
                                </TabsList>
                                <TabsContent value="users" className="mt-4">
                                    <UsersTable initialUsers={users} currentUserRole={role} />
                                </TabsContent>
                                <TabsContent value="reports" className="mt-4">
                                    <ReportsTable initialReports={reports} />
                                </TabsContent>
                                <TabsContent value="posts" className="mt-4">
                                    <PostsTable initialPosts={posts} />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
