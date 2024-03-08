import { NextRequest, NextResponse } from 'next/server'
import { Query } from '../../res/types'
import getIcon from '../../res/functions/getIcon'

export async function GET(_: NextRequest, context: Query) {
  const query = context.params.shorthand
  return new NextResponse((await getIcon(query)).info, { headers: { 'content-type': 'application/json' } })
}
