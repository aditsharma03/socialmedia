import LeftSideBar from '@components/layout/LeftSideBar';
import MainContainer from '@components/layout/MainContainer';
import TopBar from '@components/layout/TopBar';
import RightSideBar from '@components/layout/RightSideBar';
import BottomBar from '@components/layout/BottomBar';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'social media app',
    description: 'Next Js Social Media Application',
};

export default function RootLayout({ children }) {
    return (
        <>
            <main className='flex flex-row h-screen w-screen'>
                <LeftSideBar />
                <div className='flex flex-col h-full w-full'>
                    <TopBar />
                    <div className='flex flex-row h-full w-full'>
                        <div className='h-full w-full'>
                            <MainContainer>{children}</MainContainer>
                        </div>
                        <RightSideBar />
                    </div>
                </div>
            </main>
            <BottomBar />
        </>
    );
}
