import type { ProjectGuide as ProjectGuideType } from "@/types";

interface Props {
  guide: ProjectGuideType;
}

// 初心者向けの使い方ガイドを番号付きステップで表示する
export function ProjectGuide({ guide }: Props) {
  return (
    <section
      className="mb-6 rounded-xl"
      style={{
        background: "rgba(217,164,65,0.04)",
        border: "1px solid rgba(217,164,65,0.16)",
        padding: "18px 18px 20px",
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span aria-hidden style={{ color: "#d9a441", fontSize: 14 }}>
          ✦
        </span>
        <h3
          style={{
            color: "#f5f1e8",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          使い方ガイド（初心者向け）
        </h3>
      </div>

      {guide.intro && (
        <p
          className="mb-4 text-sm"
          style={{ color: "#a09a94", lineHeight: 1.7 }}
        >
          {guide.intro}
        </p>
      )}

      <ol className="flex flex-col gap-3">
        {guide.steps.map((step, i) => (
          <li key={i} className="flex gap-3">
            <span
              className="shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
              style={{
                width: 24,
                height: 24,
                background: "linear-gradient(135deg, #f1c56b, #b98224)",
                color: "#080808",
                marginTop: 1,
              }}
            >
              {i + 1}
            </span>
            <div>
              <p
                style={{
                  color: "#f5f1e8",
                  fontSize: 13.5,
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                {step.title}
              </p>
              <p
                className="text-sm"
                style={{ color: "#a09a94", lineHeight: 1.65, marginTop: 2 }}
              >
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
