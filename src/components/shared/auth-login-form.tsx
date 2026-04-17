'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'
import { toast } from '@/components/ui/use-toast'

export function AuthLoginForm({ actionClassName }: { actionClassName: string }) {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password) {
      toast({ title: 'Missing fields', description: 'Enter your email and password to continue.' })
      return
    }
    try {
      await login(email.trim(), password)
      toast({ title: 'Signed in', description: 'Your session is saved on this device.' })
      router.push('/articles')
      router.refresh()
    } catch {
      toast({ title: 'Sign in failed', description: 'Please try again.' })
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        placeholder="Email address"
        className="h-12 rounded-full border-border/80 px-4"
      />
      <Input
        type="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        placeholder="Password"
        className="h-12 rounded-full border-border/80 px-4"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          'inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-opacity disabled:opacity-60',
          actionClassName,
        )}
      >
        {isLoading ? 'Signing in…' : 'Sign in'}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Sessions persist locally in your browser for this demo workspace.
      </p>
    </form>
  )
}
