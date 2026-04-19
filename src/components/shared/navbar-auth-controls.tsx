'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/80 py-1 pl-1 pr-2 shadow-sm">
        <Avatar className="h-9 w-9 border border-neutral-200">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback className="text-sm font-semibold">{user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="hidden max-w-[100px] truncate text-xs font-medium text-neutral-800 sm:inline">{user?.name}</span>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => logout()}
        aria-label="Sign out"
        className="h-9 gap-1.5 rounded-full border-neutral-300 px-3 text-neutral-800 hover:bg-neutral-50"
      >
        <LogOut className="h-4 w-4" />
        <span className="hidden sm:inline">Sign out</span>
      </Button>
    </div>
  )
}
