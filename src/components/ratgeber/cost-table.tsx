/** Hairline cost/comparison table used across Ratgeber pages. */
export function CostTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="breakout mt-6 overflow-x-auto border border-line">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-paper-2/70">
            {head.map((h) => (
              <th
                key={h}
                className="label border-b border-line px-4 py-3 text-left text-ink-soft"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="even:bg-paper-2/30">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`border-t border-line px-4 py-3 align-top ${
                    j === 0 ? "font-medium" : "text-ink-soft"
                  }`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
