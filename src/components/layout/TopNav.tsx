import Icon from '@/components/common/Icon';

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-background-secondary z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-4">
          <button className="text-muted hover:text-foreground lg:hidden">
            <Icon name="menu" size={24} />
          </button>
          <h1 className="text-2xl font-bold text-foreground">BOO</h1>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-background-secondary text-foreground placeholder-muted rounded-lg px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
              <Icon name="search" size={18} />
            </span>
          </div>
        </div>

        {/* Right: Notifications, Coins, Profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="text-muted hover:text-foreground">
            <Icon name="bell" size={24} />
          </button>

          {/* Coins */}
          <div className="flex items-center gap-2 bg-background-secondary px-3 py-1.5 rounded-full">
            <span className="text-yellow-500"><Icon name="coins" size={20} /></span>
            <span className="text-foreground font-semibold">500</span>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
							{/* Initial Avatar */}
              <div className="text-sm font-medium text-foreground">
                WH
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-foreground">{"Wahyu Haryanto"}</p>
              </div>
              <span className="text-muted"><Icon name="down" size={12} /></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
