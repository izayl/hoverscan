import { type PlasmoMessaging } from '@plasmohq/messaging'

type RequestBody = {
  type: 'hoverscan'
  text: string
}

type ResponseBody = string

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  ResponseBody
> = async (req, res) => {
  const { text } = req.body
  res.send(text)
}

export default handler
