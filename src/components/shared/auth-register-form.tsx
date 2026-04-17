'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'
import { toast } from '@/components/ui/use-toast'

export function AuthRegisterForm({ actionClassName }: { actionClassName: string }) {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password) {
      toast({ title: 'Missing fields', description: 'Add your name, email, and password to create an account.' })
      return
    }
    try {
      await signup(name.trim(), email.trim(), password)
      toast({ title: 'Welcome', description: 'Your account is saved on this device.' })
      router.push('/articles')
      router.refresh()
    } catch {
      toast({ title: 'Could not register', description: 'Please try again.' })
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <Input
        name="name"
        autoComplete="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        placeholder="Full name"
        className="h-12 rounded-full border-border/80 px-4"
      />
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
        autoComplete="new-password"
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
        {isLoading ? 'Creating…' : 'Create account'}
      </button>
    </form>
  )
}
