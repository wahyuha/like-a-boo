import { ReactNode } from 'react';
import TopNav from './TopNav';

interface LayoutProps {
  children: ReactNode;
  rightSidebar?: ReactNode;
}

export default function Layout({ children, rightSidebar }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      LeftSidebar Section

      {/* Main Content Area */}
      <div className="pt-16 lg:pl-64">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 p-6">
            {/* Main Content */}
            <main className="min-w-0">{children}</main>

            {/* Right Sidebar */}
            {rightSidebar && (
              <aside className="hidden xl:block">
                {rightSidebar}
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
