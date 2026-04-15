import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// 訪問カウントをインクリメントして返す
export async function POST() {
  const { data, error } = await supabase.rpc('increment_visitors')
  if (error) return NextResponse.json({ count: 1000 }, { status: 200 })
  return NextResponse.json({ count: data })
}

// 現在のカウントを返す（インクリメントなし）
export async function GET() {
  const { data, error } = await supabase
    .from('page_views')
    .select('count')
    .eq('id', 1)
    .single()
  if (error) return NextResponse.json({ count: 1000 })
  return NextResponse.json({ count: data.count })
}
