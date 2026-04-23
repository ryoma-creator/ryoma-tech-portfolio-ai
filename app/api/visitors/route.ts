import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ビルド時ではなくリクエスト時に初期化
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

// 訪問カウントをインクリメントして返す
export async function POST() {
  const supabase = getSupabase()
  if (!supabase) return NextResponse.json({ count: 1000 })
  const { data, error } = await supabase.rpc('increment_visitors')
  if (error) return NextResponse.json({ count: 1000 }, { status: 200 })
  return NextResponse.json({ count: data })
}

// 現在のカウントを返す（インクリメントなし）
export async function GET() {
  const supabase = getSupabase()
  if (!supabase) return NextResponse.json({ count: 1000 })
  const { data, error } = await supabase
    .from('page_views')
    .select('count')
    .eq('id', 1)
    .single()
  if (error) return NextResponse.json({ count: 1000 })
  return NextResponse.json({ count: data.count })
}
