import * as Input from '@/app/components/input'
import { Textarea } from '@/app/components/textarea'

export default function ContactPage() {
  return (
    <div className="flex flex-col py-5 xl:h-[calc(100vh-6rem)]">
      <div className="my-auto grid gap-y-5 lg:grid-cols-2">
        <div>
          <h1 className="text-center font-mono text-3xl font-bold">
            Ways to contact me
          </h1>
        </div>
        <div className="space-y-5">
          <h1 className="text-center font-mono text-3xl font-bold">
            Contact me
          </h1>
          <form className="space-y-3 lg:px-32">
            <div>
              <Input.Label htmlFor="name" mandatory>
                Name
              </Input.Label>
              <Input.Root>
                <Input.Control
                  id="name"
                  type="text"
                  placeholder="Vinicius Motta"
                />
              </Input.Root>
            </div>

            <div>
              <Input.Label htmlFor="email" mandatory>
                E-mail
              </Input.Label>
              <Input.Root>
                <Input.Control
                  id="email"
                  type="text"
                  placeholder="viniciusmotta0806@gmail.com"
                />
              </Input.Root>
            </div>

            <div>
              <Input.Label htmlFor="message" mandatory>
                Message
              </Input.Label>
              <Textarea id="message" placeholder="Write your message..." />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
