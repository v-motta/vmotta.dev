'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFormState } from '@/hooks/use-form-state'
import { Label } from '@radix-ui/react-label'
import { sendContactForm } from './action'

export function ContactMeForm() {
  const [{ errors, message, success }, handleSubmit, isPending] =
    useFormState(sendContactForm)

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="Vinicius Motta" />

        {errors?.name && (
          <p className="font-medium text-red-500 text-xs">{errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="viniciusmotta0806@gmail.com"
        />

        {errors?.email && (
          <p className="font-medium text-red-500 text-xs">{errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Write your message..."
        />

        {errors?.message && (
          <p className="font-medium text-red-500 text-xs">
            {errors.message[0]}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Send message
      </Button>
    </form>
  )
}
