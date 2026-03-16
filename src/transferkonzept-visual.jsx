import { useState } from "react";

const colors = {
  bg: "#FAFAF5",
  bgDark: "#1A2F3A",
  primary: "#1B6B7D",
  primaryLight: "#2A9BB0",
  accent: "#D4943A",
  accentLight: "#E8B86D",
  sol: "#2A9BB0",
  solLight: "#D5EEF3",
  lde: "#D4943A",
  ldeLight: "#F5E6D0",
  text: "#2C3E50",
  textLight: "#6B7B8D",
  white: "#FFFFFF",
  card: "#FFFFFF",
  phase0: "#7F8C8D",
  phase1: "#2A9BB0",
  phase2: "#27AE60",
  phase3: "#D4943A",
  phase4: "#8E44AD",
};

const ButterflyView = () => {
  const [hoveredWing, setHoveredWing] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);

  const solElements = [
    { label: "Kompetenzraster", desc: "Transparente Lernziele für alle Beteiligten" },
    { label: "Lernateliers", desc: "Individuelle Arbeitsplätze mit Flüsterkultur" },
    { label: "Coaching", desc: "Regelmäßige 1:1-Gespräche mit Lernbegleiter:innen" },
    { label: "DiLer / Nextcloud", desc: "Digitale Plattform für Materialien & Fortschritt" },
    { label: "Graduierung", desc: "Einsteiger → Lerngestalter → Profi → Experte" },
  ];

  const ldeElements = [
    { label: "Clubs", desc: "Dreistündige Projekte, trimesterweise wählbar" },
    { label: "Praxisorte", desc: "Kitas, Betriebe, Werkstätten, Sozialeinrichtungen" },
    { label: "Kooperationen", desc: "Gemeinde, Vereine, Unternehmen als Lernpartner" },
    { label: "Projektarbeit", desc: "Handlungsorientiert, fächerübergreifend" },
    { label: "Exkursionen", desc: "Außerschulische Lernorte systematisch nutzen" },
  ];

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "28px",
        color: colors.bgDark,
        marginBottom: "8px",
        letterSpacing: "-0.5px"
      }}>
        Schmetterlingspädagogik
      </h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        color: colors.textLight,
        marginBottom: "40px"
      }}>
        adaptiert für das BBZ RD-ECK
      </p>

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* SVG Butterfly */}
        <svg viewBox="0 0 800 420" style={{ width: "100%", maxWidth: "800px" }}>
          {/* Left Wing - SoL */}
          <g
            onMouseEnter={() => setHoveredWing("sol")}
            onMouseLeave={() => setHoveredWing(null)}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M400,210 C380,100 320,30 200,20 C100,12 30,70 20,160 C10,250 80,340 180,350 C260,358 360,300 400,210"
              fill={hoveredWing === "sol" ? colors.sol : colors.solLight}
              stroke={colors.sol}
              strokeWidth="2"
              style={{ transition: "fill 0.4s ease" }}
              opacity={hoveredWing === "sol" ? 0.3 : 0.6}
            />
            <path
              d="M400,210 C380,100 320,30 200,20 C100,12 30,70 20,160 C10,250 80,340 180,350 C260,358 360,300 400,210"
              fill="none"
              stroke={colors.sol}
              strokeWidth="2.5"
            />
            {/* Wing veins */}
            <path d="M400,210 C350,150 280,80 160,50" fill="none" stroke={colors.sol} strokeWidth="1" opacity="0.4" />
            <path d="M400,210 C340,170 220,130 60,130" fill="none" stroke={colors.sol} strokeWidth="1" opacity="0.4" />
            <path d="M400,210 C360,240 280,290 140,320" fill="none" stroke={colors.sol} strokeWidth="1" opacity="0.4" />
            <text x="180" y="170" textAnchor="middle" fill={colors.primary} fontFamily="'Playfair Display', Georgia, serif" fontSize="22" fontWeight="700">SoL</text>
            <text x="180" y="195" textAnchor="middle" fill={colors.primary} fontFamily="'DM Sans', sans-serif" fontSize="11">Selbstorganisiertes Lernen</text>
          </g>

          {/* Right Wing - LdE */}
          <g
            onMouseEnter={() => setHoveredWing("lde")}
            onMouseLeave={() => setHoveredWing(null)}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M400,210 C420,100 480,30 600,20 C700,12 770,70 780,160 C790,250 720,340 620,350 C540,358 440,300 400,210"
              fill={hoveredWing === "lde" ? colors.accent : colors.ldeLight}
              stroke={colors.accent}
              strokeWidth="2"
              style={{ transition: "fill 0.4s ease" }}
              opacity={hoveredWing === "lde" ? 0.3 : 0.6}
            />
            <path
              d="M400,210 C420,100 480,30 600,20 C700,12 770,70 780,160 C790,250 720,340 620,350 C540,358 440,300 400,210"
              fill="none"
              stroke={colors.accent}
              strokeWidth="2.5"
            />
            {/* Wing veins */}
            <path d="M400,210 C450,150 520,80 640,50" fill="none" stroke={colors.accent} strokeWidth="1" opacity="0.4" />
            <path d="M400,210 C460,170 580,130 740,130" fill="none" stroke={colors.accent} strokeWidth="1" opacity="0.4" />
            <path d="M400,210 C440,240 520,290 660,320" fill="none" stroke={colors.accent} strokeWidth="1" opacity="0.4" />
            <text x="620" y="170" textAnchor="middle" fill={colors.accent} fontFamily="'Playfair Display', Georgia, serif" fontSize="22" fontWeight="700">LdE</text>
            <text x="620" y="195" textAnchor="middle" fill={colors.accent} fontFamily="'DM Sans', sans-serif" fontSize="11">Lernen durch Erleben</text>
          </g>

          {/* Body */}
          <ellipse cx="400" cy="210" rx="12" ry="60" fill={colors.bgDark} />
          <circle cx="400" cy="140" r="14" fill={colors.bgDark} />
          {/* Antennae */}
          <path d="M400,126 C390,90 370,70 355,55" fill="none" stroke={colors.bgDark} strokeWidth="2" />
          <path d="M400,126 C410,90 430,70 445,55" fill="none" stroke={colors.bgDark} strokeWidth="2" />
          <circle cx="355" cy="55" r="4" fill={colors.accent} />
          <circle cx="445" cy="55" r="4" fill={colors.sol} />

          {/* Center label */}
          <text x="400" y="400" textAnchor="middle" fill={colors.textLight} fontFamily="'DM Sans', sans-serif" fontSize="12" fontStyle="italic">
            Verbindende Mitte: Digitale Plattform · Coaching · Haltung
          </text>
        </svg>

        {/* Element cards below */}
        <div style={{ display: "flex", gap: "24px", marginTop: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {/* SoL elements */}
          <div style={{ flex: "1 1 340px", maxWidth: "380px" }}>
            <div style={{
              background: colors.solLight,
              borderRadius: "12px",
              padding: "20px",
              border: `2px solid ${colors.sol}`,
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "16px",
                color: colors.primary,
                marginBottom: "12px",
                textAlign: "left"
              }}>
                ◀ Selbstorganisiertes Lernen
              </h3>
              {solElements.map((el, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredElement(`sol-${i}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    marginBottom: "4px",
                    background: hoveredElement === `sol-${i}` ? "rgba(42, 155, 176, 0.15)" : "transparent",
                    transition: "background 0.2s ease",
                    cursor: "default",
                    textAlign: "left"
                  }}
                >
                  <span style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: colors.sol, marginTop: "6px", flexShrink: 0
                  }} />
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: colors.text }}>
                      {el.label}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: colors.textLight }}>
                      {el.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LdE elements */}
          <div style={{ flex: "1 1 340px", maxWidth: "380px" }}>
            <div style={{
              background: colors.ldeLight,
              borderRadius: "12px",
              padding: "20px",
              border: `2px solid ${colors.accent}`,
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "16px",
                color: colors.accent,
                marginBottom: "12px",
                textAlign: "left"
              }}>
                Lernen durch Erleben ▶
              </h3>
              {ldeElements.map((el, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredElement(`lde-${i}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    marginBottom: "4px",
                    background: hoveredElement === `lde-${i}` ? "rgba(212, 148, 58, 0.15)" : "transparent",
                    transition: "background 0.2s ease",
                    cursor: "default",
                    textAlign: "left"
                  }}
                >
                  <span style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: colors.accent, marginTop: "6px", flexShrink: 0
                  }} />
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: colors.text }}>
                      {el.label}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: colors.textLight }}>
                      {el.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadmapView = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phases = [
    {
      id: 0,
      label: "Phase 0",
      title: "Fundament legen",
      time: "Monate 1–6",
      color: colors.phase0,
      icon: "🔍",
      items: [
        "Kernteam bilden (mit IK-Kolleg:innen!)",
        "IN-SOL-Modell erkunden & dokumentieren",
        "Alemannenschule Wutöschingen hospitieren",
        "Bestandsaufnahme: Räume, Technik, Bereitschaft",
        "Vision formulieren",
        "Experimentierklausel SH prüfen"
      ]
    },
    {
      id: 1,
      label: "Phase 1",
      title: "Pilotprojekt",
      time: "Monate 6–18",
      color: colors.phase1,
      icon: "🌱",
      items: [
        "SPA oder Vollzeitschulform als Pilot wählen",
        "Ersten Raum zum Lernatelier umgestalten",
        "Kompetenzraster für Pilotfach entwickeln",
        "Coaching-Gespräche einführen",
        "SoL-Blöcke im Stundenplan verankern",
        "Systematisch dokumentieren"
      ]
    },
    {
      id: 2,
      label: "Phase 2",
      title: "Vertiefen",
      time: "Monate 18–30",
      color: colors.phase2,
      icon: "🦋",
      items: [
        "Pilot evaluieren (Ergebnisse, Zufriedenheit)",
        "LdE-Flügel stärken (Clubs, Praxisprojekte)",
        "Graduierungssystem einführen",
        "Lernmaterialien digitalisieren",
        "Offene Hospitationen für Kollegium",
        "Materialnetzwerk eG kontaktieren"
      ]
    },
    {
      id: 3,
      label: "Phase 3",
      title: "Skalieren",
      time: "Monate 30–48",
      color: colors.phase3,
      icon: "🚀",
      items: [
        "Weitere Vollzeitbildungsgänge einbeziehen",
        "IN-SOL auf andere duale Berufe übertragen",
        "Räumliches Gesamtkonzept entwickeln",
        "Systematisches Fortbildungsprogramm",
        "Permanente Schulentwicklungsgruppe"
      ]
    },
    {
      id: 4,
      label: "Phase 4",
      title: "Verstetigen",
      time: "Ab Monat 48",
      color: colors.phase4,
      icon: "🏛️",
      items: [
        "Leitbild-Update: Neue Lernkultur als DNA",
        "Regelmäßige Qualitätssicherung",
        "Eigene Besuchstage anbieten",
        "Netzwerk beruflicher SOL-Schulen",
        "Onboarding-Konzept für neue Lehrkräfte"
      ]
    },
  ];

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "28px",
        color: colors.bgDark,
        marginBottom: "8px",
        textAlign: "center",
        letterSpacing: "-0.5px"
      }}>
        Transformationsfahrplan
      </h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        color: colors.textLight,
        marginBottom: "36px",
        textAlign: "center"
      }}>
        5 Phasen — vom Fundament zur neuen Lernkultur
      </p>

      {/* Timeline */}
      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
        {/* Horizontal line */}
        <div style={{
          position: "absolute",
          top: "28px",
          left: "40px",
          right: "40px",
          height: "3px",
          background: `linear-gradient(to right, ${colors.phase0}, ${colors.phase1}, ${colors.phase2}, ${colors.phase3}, ${colors.phase4})`,
          borderRadius: "2px",
          zIndex: 0
        }} />

        {/* Phase dots */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
          padding: "0 20px"
        }}>
          {phases.map((phase) => (
            <div
              key={phase.id}
              onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                flex: "1"
              }}
            >
              <div style={{
                width: activePhase === phase.id ? "56px" : "48px",
                height: activePhase === phase.id ? "56px" : "48px",
                borderRadius: "50%",
                background: activePhase === phase.id ? phase.color : colors.white,
                border: `3px solid ${phase.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: activePhase === phase.id ? "24px" : "20px",
                transition: "all 0.3s ease",
                boxShadow: activePhase === phase.id
                  ? `0 4px 20px ${phase.color}40`
                  : "0 2px 8px rgba(0,0,0,0.08)"
              }}>
                {phase.icon}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: phase.color,
                marginTop: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {phase.label}
              </div>
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "13px",
                fontWeight: 600,
                color: colors.text,
                marginTop: "2px"
              }}>
                {phase.title}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                color: colors.textLight,
                marginTop: "2px"
              }}>
                {phase.time}
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {activePhase !== null && (
          <div style={{
            marginTop: "32px",
            background: colors.white,
            borderRadius: "16px",
            padding: "28px 32px",
            border: `2px solid ${phases[activePhase].color}20`,
            boxShadow: `0 8px 32px ${phases[activePhase].color}15`,
            transition: "all 0.3s ease"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "28px" }}>{phases[activePhase].icon}</span>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "20px",
                  color: phases[activePhase].color,
                  margin: 0
                }}>
                  {phases[activePhase].title}
                </h3>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: colors.textLight
                }}>
                  {phases[activePhase].time}
                </span>
              </div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "10px"
            }}>
              {phases[activePhase].items.map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "10px 14px",
                  background: `${phases[activePhase].color}08`,
                  borderRadius: "10px",
                  borderLeft: `3px solid ${phases[activePhase].color}`,
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: phases[activePhase].color,
                    minWidth: "20px"
                  }}>
                    {i + 1}.
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: colors.text,
                    lineHeight: "1.4"
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePhase === null && (
          <p style={{
            textAlign: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: colors.textLight,
            marginTop: "32px",
            fontStyle: "italic"
          }}>
            ↑ Klicke auf eine Phase für Details
          </p>
        )}
      </div>
    </div>
  );
};

const BridgeView = () => {
  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "28px",
        color: colors.bgDark,
        marginBottom: "8px",
        letterSpacing: "-0.5px"
      }}>
        Die Brücke: Von innen nach außen
      </h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        color: colors.textLight,
        marginBottom: "40px"
      }}>
        Warum das BBZ RD-ECK nicht bei Null startet
      </p>

      <div style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "0",
        maxWidth: "860px",
        margin: "0 auto",
        flexWrap: "wrap"
      }}>
        {/* Left: ASW */}
        <div style={{
          flex: "1 1 220px",
          maxWidth: "260px",
          background: `linear-gradient(135deg, ${colors.solLight}, ${colors.white})`,
          borderRadius: "16px 0 0 16px",
          padding: "28px 20px",
          border: `2px solid ${colors.sol}`,
          borderRight: "none",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "36px", marginBottom: "12px" }}>🏫</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "16px",
            color: colors.primary,
            marginBottom: "6px"
          }}>
            Alemannenschule
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: colors.textLight,
            marginBottom: "16px"
          }}>
            Wutöschingen (extern)
          </p>
          {["Schmetterlingsp\u00E4dagogik", "15 Jahre Erfahrung", "Dt. Schulpreis 2019 + 2021", "Materialnetzwerk eG", "Buch: \u201EDas k\u00F6nnte Schule machen\u201C"].map((item, i) => (
            <div key={i} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: colors.primary,
              padding: "5px 10px",
              background: "rgba(42, 155, 176, 0.1)",
              borderRadius: "6px",
              marginBottom: "4px"
            }}>
              {item}
            </div>
          ))}
        </div>

        {/* Center: IN-SOL Bridge */}
        <div style={{
          flex: "1 1 240px",
          maxWidth: "300px",
          background: `linear-gradient(135deg, ${colors.bgDark}, #2C4A58)`,
          padding: "28px 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 8px 32px rgba(26, 47, 58, 0.3)"
        }}>
          <div style={{ fontSize: "36px", marginBottom: "12px" }}>🌉</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "18px",
            color: colors.accentLight,
            marginBottom: "6px"
          }}>
            IN-SOL-Modell
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "20px"
          }}>
            Die interne Brücke am BBZ RD-ECK
          </p>
          {[
            { icon: "✓", text: "Bereits gelebte SOL-Praxis" },
            { icon: "✓", text: "Reale BBZ-Bedingungen" },
            { icon: "✓", text: "Kolleg:innen als Expert:innen" },
            { icon: "✓", text: "Hospitation im eigenen Haus" },
            { icon: "✓", text: "Proof of Concept vorhanden" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              background: "rgba(212, 148, 58, 0.15)",
              borderRadius: "8px",
              marginBottom: "5px"
            }}>
              <span style={{ color: colors.accentLight, fontSize: "13px", fontWeight: 700 }}>{item.icon}</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.9)",
                textAlign: "left"
              }}>
                {item.text}
              </span>
            </div>
          ))}

          {/* Arrows */}
          <div style={{
            position: "absolute", left: "-8px", top: "50%", transform: "translateY(-50%)",
            fontSize: "18px", color: colors.accentLight
          }}>◀</div>
          <div style={{
            position: "absolute", right: "-8px", top: "50%", transform: "translateY(-50%)",
            fontSize: "18px", color: colors.accentLight
          }}>▶</div>
        </div>

        {/* Right: BBZ Zukunft */}
        <div style={{
          flex: "1 1 220px",
          maxWidth: "260px",
          background: `linear-gradient(135deg, ${colors.ldeLight}, ${colors.white})`,
          borderRadius: "0 16px 16px 0",
          padding: "28px 20px",
          border: `2px solid ${colors.accent}`,
          borderLeft: "none",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "36px", marginBottom: "12px" }}>🦋</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "16px",
            color: colors.accent,
            marginBottom: "6px"
          }}>
            BBZ der Zukunft
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: colors.textLight,
            marginBottom: "16px"
          }}>
            Alle Schulformen (Ziel)
          </p>
          {["SPA: Vollzeit-Pilot", "BFS / FOS / BG: Skalierung", "Duale Ausbildung: IN-Transfer", "Lernateliers & Coaching", "Modellschule Digital + BNE"].map((item, i) => (
            <div key={i} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: colors.accent,
              padding: "5px 10px",
              background: "rgba(212, 148, 58, 0.1)",
              borderRadius: "6px",
              marginBottom: "4px"
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        color: colors.textLight,
        marginTop: "32px",
        maxWidth: "600px",
        margin: "32px auto 0",
        lineHeight: "1.6",
        fontStyle: "italic"
      }}>
        „Wir starten nicht bei Null — das SOL-Modell der Industriekaufleute ist unser interner Beweis, dass selbstorganisiertes Lernen unter BBZ-Bedingungen funktioniert."
      </p>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("butterfly");

  const tabs = [
    { id: "butterfly", label: "Schmetterling", icon: "🦋" },
    { id: "roadmap", label: "Fahrplan", icon: "🗺️" },
    { id: "bridge", label: "Die Brücke", icon: "🌉" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: colors.bg,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.bgDark}, #2C4A58)`,
        padding: "32px 20px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "32px",
          color: colors.white,
          margin: 0,
          letterSpacing: "-0.5px"
        }}>
          Transferkonzept
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          margin: "6px 0 0"
        }}>
          Alemannenschule Wutöschingen → BBZ RD-ECK
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "12px",
          flexWrap: "wrap"
        }}>
          {["Modellschule Digitales Lernen", "BNE \u2013 SDG 4", "Zukunftsschule SH"].map((label, i) => (
            <span key={i} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              color: "rgba(255,255,255,0.8)",
              background: "rgba(255,255,255,0.12)",
              padding: "4px 10px",
              borderRadius: "12px",
              letterSpacing: "0.3px"
            }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        padding: "16px 20px",
        background: colors.white,
        borderBottom: `1px solid ${colors.bg}`,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: activeTab === tab.id ? 700 : 500,
              color: activeTab === tab.id ? colors.primary : colors.textLight,
              background: activeTab === tab.id ? colors.solLight : "transparent",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {activeTab === "butterfly" && <ButterflyView />}
        {activeTab === "roadmap" && <RoadmapView />}
        {activeTab === "bridge" && <BridgeView />}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px",
        color: colors.textLight
      }}>
        BBZ Rendsburg-Eckernförde · Arbeitsdokument März 2026
      </div>
    </div>
  );
}
