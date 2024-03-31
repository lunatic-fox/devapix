import { NextRequest, NextResponse } from 'next/server'
import getIcon from './res/functions/getIcon'
import requestObject from './res/functions/requestObject'
import badRequest from './res/functions/badRequest'

export async function GET(req: NextRequest) {
  const query = requestObject(req.nextUrl.searchParams)

  if (query.tag)
    return new NextResponse(badRequest.wrongWay, { headers: { 'content-type': 'application/json' } })
  return new NextResponse((await getIcon(query)).svg, { headers: { 'content-type': 'image/svg+xml' } })
}
