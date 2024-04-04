import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(req: NextRequest) {
  return new NextResponse(await fs.readFile(path.join(process.cwd(), 'res/releases.json'), 'utf8'), {
    headers: {
      'content-type': 'application/json'
    }
  })
}
