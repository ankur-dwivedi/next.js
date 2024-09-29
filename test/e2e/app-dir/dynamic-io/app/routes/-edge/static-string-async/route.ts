import type { NextRequest } from 'next/server'

import { getSentinelValue } from '../../../getSentinelValue'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const response = JSON.stringify({
    value: getSentinelValue(),
    message: 'string response',
  })
  return new Response(response)
}
