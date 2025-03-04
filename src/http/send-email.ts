import ky from 'ky'

interface SendEmailRequest {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: SendEmailRequest) {
  const GOMAILER_API_URL = process.env.GOMAILER_API_URL

  await ky.post(`${GOMAILER_API_URL}/send`, { json: data })
}
