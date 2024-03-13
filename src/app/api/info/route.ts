import { NextRequest, NextResponse } from 'next/server'
import getIcon from '../res/functions/getIcon'
import requestObject from '../res/functions/requestObject'

export async function GET(req: NextRequest) {
  const query = requestObject(req.nextUrl.searchParams)
  return new NextResponse((await getIcon(query)).info, { headers: { 'content-type': 'application/json' } })
}
