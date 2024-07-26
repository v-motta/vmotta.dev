'use client'

import { Button } from '@/app/components/button'
import { LinkedinIcon, WhatsappIcon } from '@/app/components/icons'
import * as Input from '@/app/components/input'
import { Textarea } from '@/app/components/textarea'
import {
  contactFormValidationSchema,
  type ContactFormValues,
} from '@/app/schemas/contact-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Copy, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [numberCopied, setNumberCopied] = useState(false)

  const { register, handleSubmit, formState } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function handleContact(data: ContactFormValues) {
    console.log(data)
  }

  function handleCopyContact(contact: number) {
    if (contact === 1) {
      navigator.clipboard.writeText('viniciusmottadacosta@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    }

    if (contact === 2) {
      navigator.clipboard.writeText('5511987977427')
      setNumberCopied(true)
      setTimeout(() => setNumberCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col py-5 md:py-0 lg:h-[calc(100vh-6rem)]">
      <div className="my-auto grid gap-x-8 gap-y-5 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-center font-mono text-3xl font-bold">
            Ways to contact me
          </h1>
          <div className="grid gap-5 md:grid-cols-3 md:px-16 lg:px-0 xl:px-16 2xl:px-36">
            <Button
              asChild
              className="border-whatsapp bg-whatsapp text-white hover:border-whatsapp/80 hover:bg-whatsapp/80"
            >
              <Link
                href="https://wa.me/5511987977427"
                className="flex items-center justify-center gap-3"
                aria-label="Contact me via Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="size-5 fill-white" /> Whatsapp
              </Link>
            </Button>
            <Button
              asChild
              className="border-linkedin bg-linkedin text-white hover:border-linkedin/80 hover:bg-linkedin/80"
            >
              <Link
                href="https://linkedin.com/in/viniciusmottadacosta/"
                className="flex items-center justify-center gap-3"
                aria-label="Contact me via Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="size-5 fill-white" /> Linkedin
              </Link>
            </Button>
            <Button>
              <Link
                href="mailto:viniciusmotta0806@gmail.com"
                className="flex items-center justify-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="size-6" /> E-mail
              </Link>
            </Button>
            <div className="flex flex-col md:col-span-3">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="text-zinc-300">
                  viniciusmotta0806@gmail.com
                </span>
                <div>
                  <Button variant="ghost" onClick={() => handleCopyContact(1)}>
                    {emailCopied ? (
                      <Check className="size-4 text-emerald-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="text-zinc-300">+55 11 98797-7427</span>
                <div>
                  <Button variant="ghost" onClick={() => handleCopyContact(2)}>
                    {numberCopied ? (
                      <Check className="size-4 text-emerald-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-center font-mono text-3xl font-bold">
            Contact me
          </h1>
          <form
            onSubmit={handleSubmit(handleContact)}
            className="flex flex-col gap-3 md:px-16 lg:px-0 xl:px-16 2xl:px-36"
          >
            <div>
              <Input.Label htmlFor="name" mandatory>
                Name
              </Input.Label>
              <Input.Root withError={!!formState.errors.name}>
                <Input.Control
                  id="name"
                  type="text"
                  placeholder="Vinicius Motta"
                  {...register('name')}
                />
              </Input.Root>
            </div>

            <div>
              <Input.Label htmlFor="email" mandatory>
                E-mail
              </Input.Label>
              <Input.Root withError={!!formState.errors.email}>
                <Input.Control
                  id="email"
                  type="text"
                  placeholder="viniciusmotta0806@gmail.com"
                  {...register('email')}
                />
              </Input.Root>
            </div>

            <div>
              <Input.Label htmlFor="message" mandatory>
                Message
              </Input.Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                withError={!!formState.errors.message}
                {...register('message')}
              />
            </div>

            <Button type="submit" className="mt-3 w-full">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
