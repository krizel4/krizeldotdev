import { useState, useCallback, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import pageTransitionManager from '../utils/page-transitions';
// ─── Data ─────────────────────────────────────────────────────────────
const RANK_WEIGHTS = { 1: 6, 2: 4, 3: 2, 4: 1 };

const PRODUCTS = {
  hm: 'HydroMARK',
  hmplus: 'HydroMARK+',
  mammomark: 'MammoMARK',
  mammostar: 'MammoSTAR',
  lumimark: 'LumiMARK',
  biomarc: 'BiomarC',
};

const PRODUCT_SHORT = {
  hm: 'HM',
  hmplus: 'HM+',
  mammomark: 'MMK',
  mammostar: 'MST',
  lumimark: 'LMK',
  biomarc: 'BMC',
};

const FEATURES = [
  'Long-term US visibility',
  'Anti-migration',
  'Ease of locating',
  'Affordability',
];

const CAPABILITIES = {
  'Long-term US visibility': { hm: 4, hmplus: 4, mammomark: 2, mammostar: 4, lumimark: 3, biomarc: 1 },
  'Anti-migration':          { hm: 2, hmplus: 4, mammomark: 5, mammostar: 3, lumimark: 3, biomarc: 1 },
  'Ease of locating':        { hm: 5, hmplus: 5, mammomark: 1, mammostar: 2, lumimark: 3, biomarc: 1 },
  'Affordability':           { hm: 2, hmplus: 1, mammomark: 5, mammostar: 3, lumimark: 4, biomarc: 5 },
};

const PRODUCT_KEYS = Object.keys(PRODUCTS);

// ─── Scoring helpers ──────────────────────────────────────────────────
function computeScores(order) {
  const mult = {};
  const add = {};
  PRODUCT_KEYS.forEach((p) => { mult[p] = 0; add[p] = 0; });

  order.forEach((feat, i) => {
    const w = RANK_WEIGHTS[i + 1];
    PRODUCT_KEYS.forEach((p) => {
      const cap = CAPABILITIES[feat][p];
      mult[p] += cap * w;
      add[p] += cap + w;
    });
  });

  return { mult, add };
}

function sortedByScore(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

// ─── Insight generator ────────────────────────────────────────────────
function generateInsight(rankOrder, mult, add) {
  const multSorted = sortedByScore(mult);
  const addSorted = sortedByScore(add);
  const multWinner = multSorted[0][0];
  const addWinner = addSorted[0][0];
  const multRanks = Object.fromEntries(multSorted.map(([p], i) => [p, i + 1]));
  const addRanks = Object.fromEntries(addSorted.map(([p], i) => [p, i + 1]));
  const lowestFeat = rankOrder[rankOrder.length - 1];

  if (multWinner !== addWinner) {
    const aw = PRODUCTS[addWinner];
    const mw = PRODUCTS[multWinner];
    const cap = CAPABILITIES[lowestFeat][addWinner];
    const multContrib = cap * RANK_WEIGHTS[4];
    const addContrib = cap + RANK_WEIGHTS[4];

    return (
      <>
        <strong>Winner diverges.</strong> Multiplication recommends{' '}
        <span className="hl-mult">{mw}</span>, addition recommends{' '}
        <span className="hl-add">{aw}</span>.
        The gap comes from <em>{lowestFeat}</em> (rank 4, your lowest priority).
        {aw} has a capability of <strong>{cap}</strong> for it —
        addition scores that as <span className="hl-add">{cap}+1 = {addContrib}</span>{' '}
        regardless of rank, while multiplication reduces it to{' '}
        <span className="hl-mult">{cap}×1 = {multContrib}</span>.
        That&apos;s the override problem multiplication prevents.
      </>
    );
  }

  const mw = PRODUCTS[multWinner];
  let maxDelta = 0;
  let diverger = null;
  PRODUCT_KEYS.forEach((p) => {
    const d = Math.abs(multRanks[p] - addRanks[p]);
    if (d > maxDelta) { maxDelta = d; diverger = p; }
  });

  if (diverger && maxDelta > 0) {
    const mr = multRanks[diverger];
    const ar = addRanks[diverger];
    const cap = CAPABILITIES[lowestFeat][diverger];
    const direction = ar < mr ? 'inflates' : 'deflates';
    return (
      <>
        Both formulas agree on <span className="hl-mult">{mw}</span> as the top pick.
        But notice <strong>{PRODUCTS[diverger]}</strong> — ranked{' '}
        <span className="hl-mult">#{mr} by ×</span> vs{' '}
        <span className="hl-add">#{ar} by +</span>.
        Addition <strong>{direction}</strong> its score because of its{' '}
        <strong>{cap}/5</strong> rating on <em>{lowestFeat}</em> (your lowest priority).
        Try moving <em>Affordability</em> to rank 1 for the sharpest divergence.
      </>
    );
  }

  return (
    <>
      Both formulas agree on <span className="hl-mult">{mw}</span> and rank all products identically here.
      Try moving <em>Affordability</em> to rank 1 — BioMaRC and LumiMARK have affordability ratings of 5,
      which addition inflates more than multiplication across all four features.
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────

function CapabilityGrid() {
  return (
    <div className="ms-capability-legend">
      <div className="ms-cap-legend-title">Capability ratings (1–5)</div>
      <div className="ms-cap-grid">
        <div className="ms-cap-row ms-cap-header">
          <div className="ms-cap-feat"></div>
          {PRODUCT_KEYS.map((p) => (
            <div key={p} style={{ textAlign: 'center', color: 'var(--ms-text)', fontSize: '0.6rem' }}>
              {PRODUCT_SHORT[p]}
            </div>
          ))}
        </div>
        {FEATURES.map((feat) => (
          <div className="ms-cap-row" key={feat}>
            <div className="ms-cap-feat" title={feat}>{feat}</div>
            {PRODUCT_KEYS.map((p) => {
              const v = CAPABILITIES[feat][p];
              return (
                <div key={p} className={`ms-cap-dot ms-cap-${v}`}>{v}</div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function RankList({ rankOrder, onReorder }) {
  const dragSrc = useRef(null);

  const handleDragStart = useCallback((i, e) => {
    dragSrc.current = i;
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => {
      e.target.classList.add('dragging');
    }, 0);
  }, []);

  const handleDragEnd = useCallback((e) => {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.ms-rank-item').forEach((el) => el.classList.remove('drag-over'));
    dragSrc.current = null;
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDragEnter = useCallback((e) => {
    document.querySelectorAll('.ms-rank-item').forEach((el) => el.classList.remove('drag-over'));
    e.currentTarget.classList.add('drag-over');
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.currentTarget.classList.remove('drag-over');
  }, []);

  const handleDrop = useCallback((targetIdx, e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const srcIdx = dragSrc.current;
    if (srcIdx === null || srcIdx === targetIdx) return;
    const newOrder = [...rankOrder];
    const [moved] = newOrder.splice(srcIdx, 1);
    newOrder.splice(targetIdx, 0, moved);
    onReorder(newOrder);
  }, [rankOrder, onReorder]);

  const move = useCallback((i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= rankOrder.length) return;
    const newOrder = [...rankOrder];
    [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    onReorder(newOrder);
  }, [rankOrder, onReorder]);

  return (
    <ul className="ms-rank-list">
      {rankOrder.map((feat, i) => {
        const rank = i + 1;
        return (
          <li
            key={feat}
            className="ms-rank-item"
            draggable
            onDragStart={(e) => handleDragStart(i, e)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(i, e)}
          >
            <div className="ms-rank-badge">{rank}</div>
            <div className="ms-rank-name">{feat}</div>
            <div className="ms-rank-weight">×{RANK_WEIGHTS[rank]}</div>
            <div className="ms-drag-handle">
              <span /><span /><span />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexShrink: 0 }}>
              <button className="ms-move-btn" disabled={i === 0} onClick={() => move(i, -1)}>▲</button>
              <button className="ms-move-btn" disabled={i === rankOrder.length - 1} onClick={() => move(i, 1)}>▼</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function ScoreGrid({ mult, add }) {
  const multSorted = sortedByScore(mult);
  const addSorted = sortedByScore(add);
  const multWinner = multSorted[0][0];
  const addWinner = addSorted[0][0];
  const multMax = multSorted[0][1];
  const addMax = addSorted[0][1];

  return (
    <div className="ms-score-grid">
      {PRODUCT_KEYS.map((p) => {
        const mv = mult[p];
        const av = add[p];
        const isMultW = p === multWinner;
        const isAddW = p === addWinner;

        let cardClass = 'ms-score-card';
        if (isMultW && isAddW) cardClass += ' winner-both';
        else if (isMultW) cardClass += ' winner-mult';
        else if (isAddW) cardClass += ' winner-add';

        return (
          <div key={p} className={cardClass}>
            <div className="ms-card-name">{PRODUCTS[p]}</div>
            <div className="ms-card-scores">
              <div className="ms-card-score-row">
                <span className="ms-score-type mt">×</span>
                <div className="ms-score-bar-wrap">
                  <div className="ms-score-bar mb" style={{ width: `${Math.round((mv / multMax) * 100)}%` }} />
                </div>
                <span className="ms-score-num mn">{mv}</span>
              </div>
              <div className="ms-card-score-row">
                <span className="ms-score-type at">+</span>
                <div className="ms-score-bar-wrap">
                  <div className="ms-score-bar ab" style={{ width: `${Math.round((av / addMax) * 100)}%` }} />
                </div>
                <span className="ms-score-num an">{av}</span>
              </div>
            </div>
            {(isMultW || isAddW) && (
              <div className="ms-card-badges">
                {isMultW && <span className="ms-badge ms-badge-mult">× #1</span>}
                {isAddW && <span className="ms-badge ms-badge-add">+ #1</span>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function RankTable({ mult, add }) {
  const multSorted = sortedByScore(mult);
  const addSorted = sortedByScore(add);
  const multRanks = Object.fromEntries(multSorted.map(([p], i) => [p, i + 1]));
  const addRanks = Object.fromEntries(addSorted.map(([p], i) => [p, i + 1]));

  const rankClass = (r) => {
    if (r === 1) return 'ms-rank-num-cell rank-1';
    if (r === 2) return 'ms-rank-num-cell rank-2';
    if (r === 3) return 'ms-rank-num-cell rank-3';
    return 'ms-rank-num-cell';
  };

  return (
    <div className="ms-table-wrap">
      <div className="ms-table-label">Rank comparison</div>
      <table className="ms-rank-table">
        <thead>
          <tr>
            <th>Product</th>
            <th className="ms-mult-col">× rank</th>
            <th className="ms-mult-col">× score</th>
            <th className="ms-add-col">+ rank</th>
            <th className="ms-add-col">+ score</th>
            <th>Δ rank</th>
          </tr>
        </thead>
        <tbody>
          {multSorted.map(([p, mv]) => {
            const mr = multRanks[p];
            const ar = addRanks[p];
            const av = add[p];
            const delta = mr - ar;

            let deltaEl;
            if (delta === 0) {
              deltaEl = <span className="ms-delta-cell ms-delta-same">—</span>;
            } else if (delta > 0) {
              deltaEl = <span className="ms-delta-cell ms-delta-up">+{Math.abs(delta)} vs +</span>;
            } else {
              deltaEl = <span className="ms-delta-cell ms-delta-down">{delta} vs +</span>;
            }

            return (
              <tr key={p}>
                <td className="ms-prod-cell">{PRODUCTS[p]}</td>
                <td className={`${rankClass(mr)} ms-mult-col`}>#{mr}</td>
                <td style={{ fontFamily: 'var(--ms-sans)', fontSize: '0.78rem', color: 'var(--ms-accent)' }}>{mv}</td>
                <td className={`${rankClass(ar)} ms-add-col`}>#{ar}</td>
                <td style={{ fontFamily: 'var(--ms-sans)', fontSize: '0.78rem', color: 'var(--ms-add)' }}>{av}</td>
                <td>{deltaEl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Password gate ────────────────────────────────────────────────────
function PasswordGate({ onAuthenticated }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/verify-marker-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        sessionStorage.setItem('ms-auth', '1');
        onAuthenticated();
      } else {
        setError('Incorrect password');
        setPassword('');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="marker-scoring-page">
      <div className="ms-noise" />
      <div className="ms-password-gate">
        <div className="ms-password-card">
          <div className="ms-password-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className="ms-password-title">Password Required</h2>
          <p className="ms-password-desc">Enter the password to access Marker Scoring.</p>
          <form onSubmit={handleSubmit} className="ms-password-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="ms-password-input"
              autoFocus
              disabled={loading}
            />
            <button type="submit" className="ms-password-btn" disabled={loading || !password}>
              {loading ? 'Verifying...' : 'Unlock'}
            </button>
          </form>
          {error && <p className="ms-password-error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

// ─── Page component ───────────────────────────────────────────────────
export default function MarkerScoring({ globalData }) {
  const [rankOrder, setRankOrder] = useState([...FEATURES]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (pageTransitionManager) {
      pageTransitionManager.switchPage('/marker-scoring');
    }
    if (sessionStorage.getItem('ms-auth') === '1') {
      setAuthenticated(true);
    }
  }, []);

  const { mult, add } = computeScores(rankOrder);

  if (!authenticated) {
    return (
      <>
        <SEO title="Marker Scoring" description="Password protected" />
        <PasswordGate onAuthenticated={() => setAuthenticated(true)} />
      </>
    );
  }

  return (
    <div className="marker-scoring-page">
      <div className="ms-noise" />

      <SEO title="Marker Scoring" description="Multiplication vs Addition scoring comparison for Mammotome markers" />

      <header className="ms-header">
        <div>
          <div className="ms-header-eyebrow">Mammotome Marker App</div>
          <h1 className="ms-header-title">Marker Scoring</h1>
        </div>
      </header>

      {/* Calculation Logic Section */}
      <section className="ms-logic">
        <div className="ms-panel-header">
          <h2 className="ms-progression-title">Calculation Logic</h2>
        </div>

        <section className="ms-progression-section">
          <h2 className="ms-progression-title">Rank Order Centroid (ROC Weighting)</h2>
          <p className="ms-panel-desc">ROC is a method used in data analysis. It might be helpful to imagine a pie contest.</p>
          <p className="ms-panel-desc">If you win first place, you should be awarded by proportionally getting the largest pie (see Winner Pie chart below). But if it&apos;s addition, someone with a capability of 5, but ranked at the last position would somewhat get a &quot;bonus pie.&quot; In the end, people may get close to similar pie sizes.</p>
          <p className="ms-panel-desc">For example, let&apos;s look at <strong>MammoMARK</strong> which has scores of 5 for affordability. If a user ranks affordability as first, when it&apos;s multiplied, (5x6 = 30), it&apos;s awarded a larger portion of the pie. If it&apos;s addition (5 + 1 = 6), this will cause a smaller gap from products like <strong>HydroMARK Plus</strong>, which outperforms in all the other criteria against MammoMARK.</p>
          <p className="ms-panel-desc">For example, let&apos;s look at this ranking: 1) affordability, 2) long-term US visibility, 3) ease of locating and 4) anti-migration. We&apos;ll attribute 6, 4, 2, and 1 respectively for addition.</p>

          <div className="two-column-comparison">
            <div className="comparison-column">
            <strong className="winner">ROC Weighting</strong>

              <ul>
                <li><strong>HM+</strong></li>
                <li>Affordability: 1×6 = 6</li>
                <li>US Visibility: 4×4 = 16</li>
                <li>Ease of locating: 5×2 = 10</li>
                <li>Anti-migration: 4×1 = 4</li>
                <li>Total: 36</li>
              </ul>
              <ul>
                <li><strong>MammoMARK</strong></li>
                <li>Affordability: 5×6 = 30</li>
                <li>US Visibility: 2×4 = 16</li>
                <li>Ease of locating: 1×2 = 2</li>
                <li>Anti-migration: 5×1 = 5</li>
                <li>Total: 53</li>
              </ul>
              <strong className="winner">Winner is MammoMARK</strong>
            </div>

            <div className="comparison-column">
            <strong className="winner">Addition</strong>
              <ul>
                <li><strong>HM+</strong></li>
                <li>Affordability: 1+6 = 7</li>
                <li>US Visibility: 4+4 = 8</li>
                <li>Ease of locating: 5+2 = 7</li>
                <li>Anti-migration: 4+1 = 5</li>
                <li>Total: 27</li>
              </ul>
              <ul>
                <li><strong>MammoMARK</strong></li>
                <li>Affordability: 5+6 = 11</li>
                <li>US Visibility: 2+4 = 6</li>
                <li>Ease of locating: 1+2 = 3</li>
                <li>Anti-migration: 5+1 = 6</li>
                <li>Total: 26</li>
              </ul>
              <strong className="winner">Winner is HydroMARK Plus</strong>
            </div>
          </div>

          <h2 className="ms-pie">Winners Pie Slices</h2>
          <table className="ms-progression-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Weight</th>
                <th>% of total weight</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>6</td><td>46%</td></tr>
              <tr><td>2</td><td>4</td><td>31%</td></tr>
              <tr><td>3</td><td>2</td><td>15%</td></tr>
              <tr><td>4</td><td>1</td><td>8%</td></tr>
              <tr className="total-row">
                <td><strong>Total</strong></td>
                <td><strong>13</strong></td>
                <td><strong>100%</strong></td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      {/* Interactive Panels */}
      <div className="ms-main">
        {/* LEFT: Priority Ranker */}
        <section className="ms-panel ms-panel-rank">
          <div className="ms-panel-header">
            <span className="ms-panel-num">01</span>
            <h2 className="ms-panel-title">Set your priorities</h2>
            <p className="ms-panel-desc">Drag to reorder. Rank 1 carries the most weight.</p>
          </div>

          <div className="ms-rank-weights">
            <div className="ms-weight-pill">Rank 1 <strong>×6</strong></div>
            <div className="ms-weight-pill">Rank 2 <strong>×4</strong></div>
            <div className="ms-weight-pill">Rank 3 <strong>×2</strong></div>
            <div className="ms-weight-pill">Rank 4 <strong>×1</strong></div>
          </div>

          <RankList rankOrder={rankOrder} onReorder={setRankOrder} />
          <CapabilityGrid />
        </section>

        {/* RIGHT: Results */}
        <section className="ms-panel ms-panel-results">
          <div className="ms-panel-header">
            <span className="ms-panel-num">02</span>
            <h2 className="ms-panel-title">Scores &amp; ranks</h2>
            <p className="ms-panel-desc">Live results for both formulas. Winners highlighted.</p>
          </div>

          <div className="ms-formula-legend">
            <div className="ms-formula-chip ms-mult-chip">
              <span className="ms-formula-symbol">×</span>
              Multiplication — rank_weight × capability
            </div>
            <div className="ms-formula-chip ms-add-chip">
              <span className="ms-formula-symbol">+</span>
              Addition — rank_weight + capability
            </div>
          </div>

          <div className="ms-insight-box">
            {generateInsight(rankOrder, mult, add)}
          </div>

          <ScoreGrid mult={mult} add={add} />
          <RankTable mult={mult} add={add} />
        </section>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
