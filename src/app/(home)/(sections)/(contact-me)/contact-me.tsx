import { Separator } from '@/components/ui/separator'
import { ContactMeForm } from './contact-me-form'
import { WaysToContactMe } from './ways-to-contact-me'

export function ContactMe() {
  return (
    <section
      id="contact_me"
      className="flex flex-col bg-topography px-5 py-20 md:px-20 lg:px-5 2xl:min-h-[calc(100vh-4rem)] 2xl:px-36"
    >
      <div className="grid flex-1 grid-cols-1 gap-10 gap-y-8 rounded-2xl border border-primary bg-background/75 p-5 sm:p-10 lg:grid-cols-[1fr_auto_1fr]">
        <WaysToContactMe />

        <Separator orientation="vertical" className="hidden lg:block" />

        <div className="mx-auto my-auto w-full space-y-10 sm:w-auto sm:pb-4 lg:w-auto lg:pb-0">
          <h1 className="text-center font-extrabold text-lg md:text-2xl">
            Send an e-mail to me
          </h1>

          <ContactMeForm />
        </div>
      </div>
    </section>
  )
}
