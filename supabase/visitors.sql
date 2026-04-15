-- 訪問者カウンターテーブル（1行のみ）
CREATE TABLE IF NOT EXISTS page_views (
  id integer PRIMARY KEY DEFAULT 1,
  count bigint NOT NULL DEFAULT 1000,
  updated_at timestamptz DEFAULT now()
);

-- 初期値 1000 で1行挿入
INSERT INTO page_views (id, count) VALUES (1, 1000) ON CONFLICT (id) DO NOTHING;

-- インクリメント用RPC関数
CREATE OR REPLACE FUNCTION increment_visitors()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count bigint;
BEGIN
  UPDATE page_views SET count = count + 1, updated_at = now() WHERE id = 1
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;

-- RLS（誰でも読める・更新はservice roleのみ）
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
CREATE POLICY "全ユーザーがpage_viewsを読める" ON page_views FOR SELECT USING (true);
