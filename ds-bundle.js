/* @ds-bundle: {"format":4,"namespace":"SORSODesignSystem_8425a7","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"AROMA_FAMILIES","sourcePath":"components/data-display/AromaChip.jsx"},{"name":"AromaChip","sourcePath":"components/data-display/AromaChip.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"TasteTag","sourcePath":"components/data-display/TasteTag.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5954cb6ba778","components/actions/TextLink.jsx":"2e4cea0ca3f0","components/content/Card.jsx":"67d24f8180dc","components/content/Eyebrow.jsx":"669f430cc0b7","components/content/ProductCard.jsx":"351597c7e740","components/data-display/AromaChip.jsx":"534931c5385a","components/data-display/Badge.jsx":"5872dbcee194","components/data-display/TasteTag.jsx":"8e60651772a7","ui_kits/sorso-web/GiftScreen.jsx":"5d87b2c343d6","ui_kits/sorso-web/HomeScreen.jsx":"a85eb6aa9c23","ui_kits/sorso-web/Nav.jsx":"0e34f2f3462d","ui_kits/sorso-web/ProductScreen.jsx":"c97c81a3a79d","ui_kits/sorso-web/Shared.jsx":"89ff2de8119c","ui_kits/sorso-web/WheelScreen.jsx":"7472ffd6c7ea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SORSODesignSystem_8425a7 = window.SORSODesignSystem_8425a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SORSO Button — strong CTA as a box button.
 * Variants: primary (solid ink), secondary (hairline outline), quiet (soft fill).
 * Set tone="onDark" when placed on a near-black section.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  tone = "light",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.12em"
    },
    md: {
      padding: "13px 26px",
      fontSize: "var(--text-sm)",
      letterSpacing: "0.14em"
    },
    lg: {
      padding: "17px 36px",
      fontSize: "var(--text-base)",
      letterSpacing: "0.16em"
    }
  };
  const onDark = tone === "onDark";
  const palettes = {
    primary: onDark ? {
      background: "var(--moon-white)",
      color: "var(--near-black)",
      border: "1px solid var(--moon-white)"
    } : {
      background: "var(--ink)",
      color: "var(--moon-white)",
      border: "1px solid var(--ink)"
    },
    secondary: onDark ? {
      background: "transparent",
      color: "var(--moon-white)",
      border: "1px solid var(--border-on-dark)"
    } : {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--hairline)"
    },
    quiet: onDark ? {
      background: "rgba(244,241,234,0.08)",
      color: "var(--moon-white)",
      border: "1px solid transparent"
    } : {
      background: "var(--moon-white)",
      color: "var(--ink)",
      border: "1px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-medium)",
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-xs)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "transform var(--dur-hover) var(--ease-sorso), box-shadow var(--dur-hover) var(--ease-sorso), background var(--dur-hover) var(--ease-sorso), color var(--dur-hover) var(--ease-sorso)",
    ...sizes[size],
    ...palettes[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      e.currentTarget.style.transform = "translateY(-1px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0)";
    },
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(0) scale(0.985)";
    },
    onMouseUp: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(-1px)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SORSO TextLink — weak/secondary CTA as an underlined text link.
 * Underline sits on a hairline and warms to full ink on hover.
 */
function TextLink({
  children,
  href = "#",
  tone = "light",
  size = "md",
  withArrow = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: "var(--text-xs)",
    md: "var(--text-sm)",
    lg: "var(--text-base)"
  };
  const onDark = tone === "onDark";
  const color = onDark ? "var(--moon-white)" : "var(--ink)";
  const line = onDark ? "var(--border-on-dark)" : "var(--hairline)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-kr)",
      fontWeight: "var(--weight-medium)",
      fontSize: sizes[size],
      color,
      textDecoration: "underline",
      textDecorationColor: line,
      textUnderlineOffset: "4px",
      transition: "text-decoration-color var(--dur-hover) var(--ease-sorso)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.textDecorationColor = color;
    },
    onMouseLeave: e => {
      e.currentTarget.style.textDecorationColor = line;
    }
  }, rest), children, withArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      textDecoration: "none",
      transform: "translateY(0.5px)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SORSO Card — generic surface container.
 * surface: white (default) / soft (moon-white) / cream / dark (near-black).
 */
function Card({
  children,
  surface = "white",
  radius = "lg",
  padded = true,
  hairline = true,
  elevated = false,
  interactive = false,
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: "var(--pure-white)",
      color: "var(--text-primary)"
    },
    soft: {
      background: "var(--moon-white)",
      color: "var(--text-primary)"
    },
    cream: {
      background: "var(--hanji-cream)",
      color: "var(--text-primary)"
    },
    dark: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    }
  };
  const isDark = surface === "dark";
  const radii = {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius] || radius,
      padding: padded ? "var(--space-5)" : 0,
      border: hairline ? isDark ? "1px solid var(--border-on-dark)" : "1px solid var(--hairline)" : "none",
      boxShadow: elevated ? "var(--shadow-card)" : "none",
      transition: "box-shadow var(--dur-hover) var(--ease-sorso), transform var(--dur-hover) var(--ease-sorso)",
      ...surfaces[surface],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      e.currentTarget.style.transform = "translateY(-2px)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = elevated ? "var(--shadow-card)" : "none";
      e.currentTarget.style.transform = "translateY(0)";
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SORSO Eyebrow — uppercase, wide-tracked label above a heading.
 * DM Sans, muted ink. The recurring "SINGLE ORIGIN", "SORSO PICK" kicker.
 */
function Eyebrow({
  children,
  tone = "light",
  as = "p",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      color: tone === "onDark" ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/AromaChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AROMA_FAMILIES = {
  floral: {
    ko: "플로럴",
    en: "Floral",
    color: "var(--aroma-floral)"
  },
  fruity: {
    ko: "프루티",
    en: "Fruity",
    color: "var(--aroma-fruity)"
  },
  citrus: {
    ko: "시트러스",
    en: "Citrus",
    color: "var(--aroma-citrus)"
  },
  sweet: {
    ko: "스위트",
    en: "Sweet & Caramel",
    color: "var(--aroma-sweet)"
  },
  nutty: {
    ko: "너티",
    en: "Nutty & Grain",
    color: "var(--aroma-nutty)"
  },
  cacao: {
    ko: "카카오",
    en: "Chocolate & Cacao",
    color: "var(--aroma-cacao)"
  },
  winey: {
    ko: "와이니",
    en: "Winey",
    color: "var(--aroma-winey)"
  },
  roasted: {
    ko: "로스티",
    en: "Roasted",
    color: "var(--aroma-roasted)"
  },
  earthy: {
    ko: "어씨",
    en: "Earthy",
    color: "var(--aroma-earthy)"
  },
  herb: {
    ko: "허브",
    en: "Tea & Herb",
    color: "var(--aroma-herb)"
  }
};

/**
 * SORSO AromaChip — a flavor-family pill with a color dot.
 * Color is only ever used to denote flavor. Pass a `family` key or an explicit `color`+`label`.
 */
function AromaChip({
  family,
  label,
  color,
  active = false,
  size = "md",
  onClick,
  style,
  ...rest
}) {
  const fam = family ? AROMA_FAMILIES[family] : null;
  const dot = color || fam?.color || "var(--sub)";
  const text = label || fam?.ko || "";
  const sizes = {
    sm: {
      padding: "5px 11px 5px 9px",
      fontSize: "var(--text-xs)",
      dot: 8
    },
    md: {
      padding: "8px 15px 8px 12px",
      fontSize: "var(--text-sm)",
      dot: 10
    }
  }[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-kr)",
      fontSize: sizes.fontSize,
      lineHeight: 1,
      padding: sizes.padding,
      borderRadius: "var(--radius-pill)",
      cursor: onClick ? "pointer" : "default",
      background: active ? "var(--ink)" : "var(--pure-white)",
      color: active ? "var(--moon-white)" : "var(--ink-grey)",
      border: active ? "1px solid var(--ink)" : "1px solid var(--hairline)",
      transition: "background var(--dur-hover) var(--ease-sorso), color var(--dur-hover) var(--ease-sorso)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: sizes.dot,
      height: sizes.dot,
      borderRadius: "50%",
      background: dot,
      flex: "none",
      boxShadow: "inset 0 0 0 1px rgba(58,52,46,0.08)"
    }
  }), text);
}
Object.assign(__ds_scope, { AROMA_FAMILIES, AromaChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/AromaChip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SORSO Badge — small status pill for product/data state.
 * warn: sale conflict / restock · muted: needs-check / placeholder · neutral: hairline chip · info: soft cream chip.
 */
function Badge({
  children,
  variant = "neutral",
  style,
  ...rest
}) {
  const variants = {
    warn: {
      background: "var(--warn-bg)",
      color: "var(--warn-ink)",
      border: "none"
    },
    muted: {
      background: "var(--muted-chip-bg)",
      color: "var(--sub)",
      border: "none"
    },
    neutral: {
      background: "rgba(255,255,255,0.6)",
      color: "var(--ink-grey)",
      border: "1px solid var(--hairline)"
    },
    info: {
      background: "var(--moon-white)",
      color: "var(--sub)",
      border: "1px solid var(--hairline)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-kr)",
      fontSize: "var(--text-xs)",
      lineHeight: 1,
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/TasteTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SORSO TasteTag — conveys how closely a bean matches the chosen note.
 * Match type shown by text + icon (never color alone): exact ● / adjacent ◐ / family_fallback ○.
 */
function TasteTag({
  label,
  matchType = "exact",
  style,
  ...rest
}) {
  const meta = {
    exact: {
      text: "정확",
      icon: "●"
    },
    adjacent: {
      text: "가까운",
      icon: "◐"
    },
    family_fallback: {
      text: "계열 추천",
      icon: "○"
    }
  }[matchType];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-kr)",
      fontSize: "var(--text-xs)",
      lineHeight: 1,
      padding: "6px 11px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,0.6)",
      border: "1px solid var(--hairline)",
      color: "var(--ink-grey)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "10px",
      color: "var(--sub)"
    }
  }, meta.icon), label, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sub)"
    }
  }, "\xB7 ", meta.text));
}
Object.assign(__ds_scope, { TasteTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/TasteTag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function formatPrice(won) {
  return `${Number(won).toLocaleString("ko-KR")}원`;
}

/**
 * SORSO ProductCard — a roaster-bean recommendation card.
 * Warm, honest: sale conflicts and low-confidence data surface as badges, never faked.
 * Composes Badge, TasteTag, TextLink.
 */
function ProductCard({
  category = "Single Origin",
  name,
  price,
  imageSrc,
  imageLabel = "이미지 준비 중 · 임시 데이터",
  badges = [],
  tags = [],
  roasterNote,
  curationCopy,
  defaultExpanded = false,
  style,
  ...rest
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      minWidth: "240px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--hairline)",
      background: "var(--surface-card)",
      backdropFilter: "blur(2px)",
      padding: "16px",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "128px",
      borderRadius: "var(--radius-md)",
      background: "var(--moon-white)",
      border: "1px solid var(--hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--sub)",
      background: "var(--pure-white)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-pill)",
      padding: "3px 10px"
    }
  }, imageLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "var(--text-2xs)",
      color: "var(--sub)"
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--ink)"
    }
  }, name), price != null && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--sub)"
    }
  }, formatPrice(price))), badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px"
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    variant: b.variant || "muted"
  }, b.label))), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.TasteTag, {
    key: i,
    label: t.label,
    matchType: t.matchType || "exact"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "2px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    size: "sm",
    href: "#",
    onClick: e => {
      e.preventDefault();
      setExpanded(v => !v);
    }
  }, expanded ? "접기" : "자세히 보기")), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      borderTop: "1px solid var(--hairline)",
      paddingTop: "10px",
      fontSize: "var(--text-xs)",
      color: "var(--sub)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, roasterNote && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\uB85C\uC2A4\uD130 \uB178\uD2B8 \xB7 ", roasterNote), curationCopy && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--ink-grey)"
    }
  }, curationCopy)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sorso-web/GiftScreen.jsx
try { (() => {
// SORSO Web — Gift set screen.
function GiftScreen() {
  const DS = window.SORSODesignSystem_8425a7;
  const {
    Button,
    TextLink,
    Eyebrow,
    Card
  } = DS;
  const includes = [{
    k: "드립백 10개입",
    d: "원두 5종 × 2"
  }, {
    k: "Sorso Guide",
    d: "입문자용 브루잉 가이드"
  }, {
    k: "Sorso Note",
    d: "취향 기록 테이스팅 카드"
  }, {
    k: "리추얼 카드",
    d: "한 모금의 순간을 위한 문장"
  }, {
    k: "Sorso Letter",
    d: "선물 메시지 카드"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: 460
    }
  }, /*#__PURE__*/React.createElement(window.WarmImage, {
    tone: "plum",
    radius: 0,
    style: {
      minHeight: 460
    },
    label: "Sorso Gift Set"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "60px 56px",
      background: "var(--pure-white)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sorso Gift Set"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "14px 0 18px",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 38,
      lineHeight: 1.35,
      color: "var(--ink)"
    }
  }, "\uD55C \uC794\uC758 \uCDE8\uD5A5\uC774", /*#__PURE__*/React.createElement("br", null), "\uC870\uC6A9\uD788 \uC804\uD574\uC9C0\uB294 \uC120\uBB3C."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 30px",
      maxWidth: 440,
      fontSize: 15,
      lineHeight: 1.75,
      color: "var(--sub)"
    }
  }, "\uC88B\uC740 \uCEE4\uD53C\uB97C \uB098\uB204\uACE0\uC790 \uD558\uB294 \uC12C\uC138\uD55C \uB9C8\uC74C\uACFC, \uCDE8\uD5A5\uC744 \uC804\uD558\uB294 \uAC10\uAC01\uC744 \uD568\uAED8 \uB2F4\uC558\uC2B5\uB2C8\uB2E4. \uAE30\uD504\uD2F0\uCF58\uBCF4\uB2E4 \uC870\uAE08 \uB354 \uC624\uB798 \uB0A8\uB294 \uC120\uBB3C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-en)",
      fontSize: 26,
      color: "var(--ink)"
    }
  }, "42,000\uC6D0"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\uC120\uBB3C \uC2DC\uC791\uD558\uAE30")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--hanji-cream)",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What's Inside"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "10px 0 32px",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--ink)"
    }
  }, "\uAD6C\uC131\uD488"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 16
    }
  }, includes.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    surface: "white",
    style: {
      padding: 20,
      minHeight: 150,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      color: "var(--sub)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "auto 0 4px",
      fontFamily: "var(--font-kr)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, it.k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: "var(--sub)",
      lineHeight: 1.5
    }
  }, it.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pure-white)",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sorso Letter"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "10px 0 8px",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--ink)"
    }
  }, "\uBA54\uC2DC\uC9C0\uB97C \uD568\uAED8 \uB2F4\uC544\uBCF4\uC138\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: 14,
      color: "var(--sub)"
    }
  }, "\uC120\uBB3C \uC0C1\uC790\uC5D0 \uC190\uD3B8\uC9C0\uCC98\uB7FC \uC778\uC1C4\uB418\uC5B4 \uC804\uD574\uC9D1\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      background: "var(--moon-white)",
      padding: "28px 30px",
      textAlign: "left",
      minHeight: 130,
      fontFamily: "var(--font-kr)",
      fontSize: 16,
      color: "var(--ink-grey)",
      lineHeight: 1.8
    }
  }, "\uC544\uB07C\uB294 \uB9C8\uC74C\uC744 \uB2F4\uC544, \uC88B\uC740 \uCEE4\uD53C \uD55C \uC794\uC758 \uC5EC\uC720\uB97C \uC120\uBB3C\uD569\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--hairline)"
    }
  }, "\u2502")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--sub)"
    }
  }, "0 / 120\uC790"), /*#__PURE__*/React.createElement(TextLink, {
    size: "sm"
  }, "\uC608\uC2DC \uBB38\uAD6C \uBD88\uB7EC\uC624\uAE30")))));
}
Object.assign(window, {
  GiftScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sorso-web/GiftScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sorso-web/HomeScreen.jsx
try { (() => {
// SORSO Web — Home / landing screen.
function HomeScreen({
  onNavigate
}) {
  const DS = window.SORSODesignSystem_8425a7;
  const {
    Button,
    TextLink,
    Eyebrow,
    AromaChip
  } = DS;
  const lineup = [{
    id: "starter",
    cat: "Starter",
    name: "First Specialty Drip Set",
    desc: "드립백 5개입 · 브루잉 가이드",
    price: "18,000원",
    tone: "amber"
  }, {
    id: "explore",
    cat: "Explore",
    name: "Roaster's Pick Bean Set",
    desc: "원두 3종 · 테이스팅 노트",
    price: "29,000원",
    tone: "cream"
  }, {
    id: "daily",
    cat: "Daily",
    name: "SORSO Whole Bean",
    desc: "단일 원두 · Whole / Ground",
    price: "15,000원",
    tone: "dark"
  }, {
    id: "gift",
    cat: "Gift",
    name: "SORSO Gift Set",
    desc: "드립백 10개입 · 메시지 카드",
    price: "42,000원",
    tone: "plum"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "96px 40px 84px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hanji-grain",
    style: {
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 900,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Online Specialty Coffee Curation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "20px 0 0",
      fontFamily: "var(--font-kr)",
      fontWeight: 500,
      fontSize: 46,
      lineHeight: 1.32,
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, "\uAC01\uC790\uC758 \uCDE8\uD5A5\uC774 \uC870\uC6A9\uD788", /*#__PURE__*/React.createElement("br", null), "\uC120\uBA85\uD574\uC9C0\uB294 \uCEE4\uD53C \uACBD\uD5D8."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px auto 0",
      maxWidth: 520,
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--sub)"
    }
  }, "\uC88B\uC740 \uC6D0\uB450\uB294 \uC774\uBBF8 \uC900\uBE44\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. SORSO\uB294 \uADF8 \uC6D0\uB450\uB97C \uB354 \uC27D\uAC8C \uACE0\uB974\uACE0, \uB354 \uB098\uB2F5\uAC8C \uC990\uAE38 \uC218 \uC788\uB294 \uBC29\uC2DD\uC73C\uB85C \uB2E4\uC2DC \uC81C\uC548\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("wheel")
  }, "\uD5A5\uBBF8\uB85C \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("product")
  }, "\uC6D0\uB450 \uB458\uB7EC\uBCF4\uAE30")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pure-white)",
      borderTop: "1px solid var(--hairline-soft)",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Launch Lineup"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "10px 0 0",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 28,
      color: "var(--ink)"
    }
  }, "\uCC98\uC74C\uC740 \uC27D\uAC8C, \uCDE8\uD5A5\uC740 \uAE4A\uAC8C, \uC120\uBB3C\uC740 \uC6B0\uC544\uD558\uAC8C.")), /*#__PURE__*/React.createElement(TextLink, {
    withArrow: true,
    onClick: e => {
      e.preventDefault();
      onNavigate("product");
    }
  }, "\uC804\uCCB4 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, lineup.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onNavigate(p.id === "gift" ? "gift" : "product"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(window.WarmImage, {
    tone: p.tone,
    style: {
      aspectRatio: "4/5"
    },
    label: p.cat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--sub)"
    }
  }, p.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "5px 0 4px",
      fontFamily: "var(--font-en)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: "var(--sub)"
    }
  }, p.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "var(--ink)"
    }
  }, p.price))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--near-black)",
      padding: "84px 40px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hanji-grain",
    style: {
      opacity: 0.14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 60,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Taste & Aroma Wheel"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "14px 0 0",
      fontFamily: "var(--font-kr)",
      fontWeight: 500,
      fontSize: 34,
      lineHeight: 1.4,
      color: "var(--moon-white)"
    }
  }, "\uD5A5\uC73C\uB85C \uC2DC\uC791\uD558\uB294", /*#__PURE__*/React.createElement("br", null), "\uCEE4\uD53C \uD0D0\uC0C9."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 26px",
      maxWidth: 420,
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-on-dark-muted)"
    }
  }, "\uB9C8\uC74C\uC774 \uAC00\uB294 \uD5A5\uBBF8\uB97C \uACE0\uB974\uBA74, \uB85C\uC2A4\uD130\uAC00 \uD050\uB808\uC774\uD305\uD55C \uC6D0\uB450\uB97C \uC18C\uAC1C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4. \uC804\uBB38 \uC6A9\uC5B4 \uC5C6\uC774, \uAC10\uAC01\uC73C\uB85C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 28
    }
  }, ["floral", "fruity", "citrus", "sweet", "nutty", "cacao"].map(f => /*#__PURE__*/React.createElement(AromaChip, {
    key: f,
    family: f
  }))), /*#__PURE__*/React.createElement(Button, {
    tone: "onDark",
    variant: "primary",
    onClick: () => onNavigate("wheel")
  }, "\uC544\uB85C\uB9C8 \uD720 \uC5F4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/aroma-wheel-en.svg",
    alt: "SORSO Aroma Wheel",
    style: {
      width: 400,
      maxWidth: "100%",
      filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.4))"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pure-white)",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 40,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(window.WarmImage, {
    tone: "plum",
    style: {
      minHeight: 300
    },
    label: "Gift"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sorso Gift Set"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "12px 0 16px",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 30,
      color: "var(--ink)",
      lineHeight: 1.4
    }
  }, "\uC88B\uC740 \uCEE4\uD53C\uB97C \uB098\uB204\uB294", /*#__PURE__*/React.createElement("br", null), "\uC12C\uC138\uD55C \uB9C8\uC74C."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      maxWidth: 440,
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--sub)"
    }
  }, "\uB2E8\uC21C\uD788 \uCEE4\uD53C\uB97C \uC8FC\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uCDE8\uD5A5\uC744 \uD568\uAED8 \uC804\uD558\uB294 \uC120\uBB3C. \uB4DC\uB9BD\uBC31 10\uAC1C\uC785\uACFC \uB9AC\uCD94\uC5BC \uCE74\uB4DC, \uADF8\uB9AC\uACE0 \uBA54\uC2DC\uC9C0 \uCE74\uB4DC\uB97C \uB2F4\uC558\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("gift")
  }, "\uC120\uBB3C \uC138\uD2B8 \uBCF4\uAE30"))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sorso-web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sorso-web/Nav.jsx
try { (() => {
// SORSO Web — top navigation bar.
function Nav({
  current,
  onNavigate
}) {
  const items = [{
    id: "home",
    label: "홈"
  }, {
    id: "wheel",
    label: "향미 탐색"
  }, {
    id: "product",
    label: "원두"
  }, {
    id: "gift",
    label: "선물"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 40px",
      background: "rgba(250,244,234,0.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--hairline-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "SORSO",
    style: {
      height: 22,
      cursor: "pointer"
    },
    onClick: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 30
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNavigate(it.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-kr)",
      fontSize: 14,
      padding: "4px 0",
      color: current === it.id ? "var(--ink)" : "var(--sub)",
      borderBottom: current === it.id ? "1.5px solid var(--ink)" : "1.5px solid transparent",
      transition: "color var(--dur-hover) var(--ease-sorso)"
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: "0.1em",
      color: "var(--sub)",
      cursor: "pointer"
    }
  }, "LOGIN"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: "0.1em",
      color: "var(--ink)",
      cursor: "pointer"
    }
  }, "CART (0)")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sorso-web/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sorso-web/ProductScreen.jsx
try { (() => {
// SORSO Web — Product (bean) detail screen.
function ProductScreen() {
  const DS = window.SORSODesignSystem_8425a7;
  const {
    Button,
    TextLink,
    Eyebrow,
    AromaChip,
    Card,
    Badge
  } = DS;
  const profile = [{
    label: "산미 Acidity",
    v: 0.8
  }, {
    label: "바디 Body",
    v: 0.55
  }, {
    label: "단맛 Sweetness",
    v: 0.7
  }, {
    label: "향 Aroma",
    v: 0.9
  }];
  const recipe = [{
    k: "원두",
    v: "18g"
  }, {
    k: "물 온도",
    v: "92°C"
  }, {
    k: "추출량",
    v: "250ml"
  }, {
    k: "권장 시간",
    v: "2:30"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 40px 90px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    size: "sm"
  }, "\u2190 \uC6D0\uB450 \uBAA9\uB85D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(window.WarmImage, {
    tone: "amber",
    style: {
      aspectRatio: "1/1"
    },
    label: "Ethiopia Guji"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Single Origin \xB7 \uAE40\uC9C4\uC218 \uB85C\uC2A4\uD130\uB9AC"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "12px 0 6px",
      fontFamily: "var(--font-en)",
      fontWeight: 600,
      fontSize: 40,
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, "Ethiopia Guji"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 18px",
      fontFamily: "var(--font-kr)",
      fontSize: 16,
      color: "var(--sub)"
    }
  }, "\uAD6C\uC9C0 \uD568\uBCA8\uB77C \xB7 G1 \uB0B4\uCD94\uB7F4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(AromaChip, {
    family: "fruity",
    label: "\uBE14\uB8E8\uBCA0\uB9AC"
  }), /*#__PURE__*/React.createElement(AromaChip, {
    family: "floral",
    label: "\uC7AC\uC2A4\uBBFC"
  }), /*#__PURE__*/React.createElement(AromaChip, {
    family: "sweet",
    label: "\uAFC0"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      maxWidth: 460,
      fontSize: 15,
      lineHeight: 1.75,
      color: "var(--ink-grey)"
    }
  }, "\uC798 \uC775\uC740 \uBCA0\uB9AC\uC640 \uC740\uC740\uD55C \uAF43\uD5A5\uC774 \uCC9C\uCC9C\uD788 \uBC88\uC9C0\uB294 \uC6D0\uB450. \uBA3C\uC800 \uD5A5\uC744 \uB9E1\uACE0, \uD55C \uBAA8\uAE08\uC758 \uC778\uC0C1\uC744 \uAE30\uC5B5\uD574\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-en)",
      fontSize: 26,
      color: "var(--ink)"
    }
  }, "19,000\uC6D0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--sub)"
    }
  }, "200g \xB7 Whole Bean")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "Whole Bean"), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "Ground \uC120\uD0DD"), /*#__PURE__*/React.createElement(Badge, {
    variant: "info"
  }, "\uC2E0\uC120 \uB85C\uC2A4\uD305")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30"), /*#__PURE__*/React.createElement(TextLink, {
    withArrow: true
  }, "\uC815\uAE30\uAD6C\uB3C5\uC73C\uB85C \uBC1B\uAE30")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "white",
    elevated: true,
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sorso Note \xB7 \uD14C\uC774\uC2A4\uD305"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, profile.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-grey)"
    }
  }, p.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: "var(--moon-white)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${p.v * 100}%`,
      background: "var(--aroma-sweet)",
      borderRadius: 999
    }
  })))))), /*#__PURE__*/React.createElement(Card, {
    surface: "dark",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Sorso Recipe \xB7 \uBE0C\uB8E8\uC789 \uAC00\uC774\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, recipe.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      borderTop: "1px solid var(--border-on-dark)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--text-on-dark-muted)"
    }
  }, r.k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--font-en)",
      fontSize: 26,
      color: "var(--moon-white)"
    }
  }, r.v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px 0 0",
      fontSize: 13,
      color: "var(--text-on-dark-muted)",
      lineHeight: 1.7
    }
  }, "\uAC00\uC7A5 \uC88B\uC740 \uD5A5\uC744 \uC704\uD574 Whole Bean\uC744 \uCD94\uCC9C\uD569\uB2C8\uB2E4. \uBD84\uC1C4\uAE30\uAC00 \uC5C6\uB2E4\uBA74 \uC0AC\uC6A9\uD558\uB294 \uCD94\uCD9C \uB3C4\uAD6C\uC5D0 \uB9DE\uCDB0 \uBD84\uC1C4 \uC635\uC158\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694."))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sorso-web/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sorso-web/Shared.jsx
try { (() => {
// Shared presentational helpers for the SORSO Web UI kit.
// Loaded before the screens; registers helpers on window.

// "빛이 드는 테이블" — warm daylight gradient stands in for photography.
function WarmImage({
  tone = "cream",
  radius = 20,
  style,
  children,
  label
}) {
  const tones = {
    cream: "linear-gradient(118deg, #EAE0CF 0%, #FBF6EE 46%, #F1E7D6 100%)",
    amber: "linear-gradient(118deg, #E7C79A 0%, #F6E6CB 55%, #EAD3AC 100%)",
    olive: "linear-gradient(120deg, #6E6A4E 0%, #9AA07A 60%, #C7C9A6 100%)",
    plum: "linear-gradient(120deg, #4A1F30 0%, #7B3B52 60%, #A9718A 100%)",
    dark: "linear-gradient(125deg, #2B2925 0%, #3E3A34 60%, #524C43 100%)",
    teal: "linear-gradient(120deg, #1F5C69 0%, #3E8494 60%, #A7C9D0 100%)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: radius,
      background: tones[tone] || tones.cream,
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hanji-grain",
    style: {
      opacity: 0.1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 90% at 80% 0%, rgba(255,255,255,0.35), transparent 55%)",
      pointerEvents: "none"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      margin: 12,
      fontFamily: "var(--font-display)",
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "rgba(58,52,46,0.5)"
    }
  }, label), children);
}
Object.assign(window, {
  WarmImage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sorso-web/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sorso-web/WheelScreen.jsx
try { (() => {
// SORSO Web — Aroma Wheel explore screen (simplified interactive recreation).
function WheelScreen() {
  const DS = window.SORSODesignSystem_8425a7;
  const {
    ProductCard,
    AromaChip,
    Eyebrow,
    TextLink,
    AROMA_FAMILIES
  } = DS;
  const [family, setFamily] = React.useState("fruity");
  const families = ["floral", "fruity", "citrus", "sweet", "nutty", "cacao", "winey", "roasted", "earthy", "herb"];
  const POOL = [{
    name: "에티오피아 예가체프 G1",
    cat: "Single Origin",
    price: 16000,
    fams: ["floral", "citrus"],
    tags: [{
      label: "재스민",
      matchType: "exact"
    }, {
      label: "레몬",
      matchType: "adjacent"
    }],
    note: "재스민, 레몬, 홍차",
    copy: "밝고 투명한 산미로 하루를 여는 한 잔."
  }, {
    name: "에티오피아 구지 함벨라 내추럴",
    cat: "Single Origin",
    price: 19000,
    fams: ["fruity", "floral"],
    tags: [{
      label: "블루베리",
      matchType: "exact"
    }, {
      label: "베리",
      matchType: "exact"
    }],
    note: "블루베리, 딸기, 와인",
    copy: "잘 익은 베리의 향이 천천히 번지는 원두."
  }, {
    name: "케냐 키암부 AA TOP",
    cat: "Single Origin",
    price: 18000,
    fams: ["fruity", "citrus"],
    tags: [{
      label: "자몽",
      matchType: "exact"
    }, {
      label: "블랙커런트",
      matchType: "adjacent"
    }],
    note: "자몽, 블랙커런트, 토마토",
    copy: "선명한 산미와 묵직한 바디의 균형."
  }, {
    name: "수피아 / Supia",
    cat: "Blending",
    price: 15000,
    fams: ["citrus", "nutty"],
    tags: [{
      label: "레몬",
      matchType: "exact"
    }, {
      label: "호두",
      matchType: "adjacent"
    }],
    note: "레몬, 호두, 부드러운 단맛",
    badges: [{
      label: "재입고 알림 · 확인 필요",
      variant: "warn"
    }],
    copy: "산뜻함과 고소함이 함께 오는 데일리 블렌드."
  }, {
    name: "브라질 카파라오",
    cat: "Single Origin",
    price: 14000,
    fams: ["nutty", "sweet"],
    tags: [{
      label: "아몬드",
      matchType: "exact"
    }, {
      label: "브라운슈거",
      matchType: "adjacent"
    }],
    note: "아몬드, 브라운슈거, 밀크초콜릿",
    copy: "고소하고 달큰한, 부담 없는 입문 원두."
  }, {
    name: "과테말라 엘 인헤르또",
    cat: "Single Origin",
    price: 21000,
    fams: ["cacao", "sweet"],
    tags: [{
      label: "다크초콜릿",
      matchType: "exact"
    }, {
      label: "캐러멜",
      matchType: "adjacent"
    }],
    note: "다크초콜릿, 캐러멜, 견과",
    copy: "묵직한 단맛과 카카오의 여운."
  }, {
    name: "라온 / Raon",
    cat: "Blending",
    price: 15000,
    fams: ["cacao", "winey"],
    tags: [{
      label: "카카오",
      matchType: "exact"
    }, {
      label: "와인",
      matchType: "family_fallback"
    }],
    note: "카카오, 붉은 과일, 와인",
    copy: "깊고 우아한, 저녁의 블렌드."
  }, {
    name: "예멘 모카 마타리",
    cat: "Rare",
    price: 32000,
    fams: ["winey", "fruity"],
    tags: [{
      label: "와인",
      matchType: "exact"
    }, {
      label: "건포도",
      matchType: "adjacent"
    }],
    note: "와인, 건포도, 스파이스",
    badges: [{
      label: "소량 입고",
      variant: "muted"
    }],
    copy: "발효된 과실의 복합적인 향."
  }, {
    name: "인도네시아 G1 만델링",
    cat: "Single Origin",
    price: 15000,
    fams: ["earthy", "roasted"],
    tags: [{
      label: "허브",
      matchType: "adjacent"
    }, {
      label: "흙내음",
      matchType: "exact"
    }],
    note: "허브, 흙, 다크초콜릿",
    badges: [{
      label: "정보 확인 중",
      variant: "muted"
    }],
    copy: "묵직하고 스모키한 클래식."
  }, {
    name: "너울 / Neoul",
    cat: "Blending",
    price: 14000,
    fams: ["herb", "earthy"],
    tags: [{
      label: "홍차",
      matchType: "exact"
    }, {
      label: "레몬그라스",
      matchType: "adjacent"
    }],
    note: "홍차, 레몬그라스, 삼나무",
    copy: "차분하고 은은한 허브 계열 블렌드."
  }, {
    name: "코스타리카 따라주",
    cat: "Single Origin",
    price: 17000,
    fams: ["citrus", "sweet"],
    tags: [{
      label: "오렌지",
      matchType: "exact"
    }, {
      label: "꿀",
      matchType: "adjacent"
    }],
    note: "오렌지, 꿀, 사탕수수",
    copy: "맑은 단맛과 시트러스의 균형."
  }, {
    name: "미리내 / Mirinae",
    cat: "Blending",
    price: 15000,
    fams: ["floral", "sweet"],
    tags: [{
      label: "장미",
      matchType: "exact"
    }, {
      label: "꿀",
      matchType: "adjacent"
    }],
    note: "장미, 꿀, 백도",
    copy: "은은한 꽃향과 부드러운 단맛."
  }];
  const fam = AROMA_FAMILIES[family];
  const results = POOL.filter(p => p.fams.includes(family)).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "48px 40px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Taste & Aroma Wheel"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "10px 0 6px",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 30,
      color: "var(--ink)"
    }
  }, "\uD5A5\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uCEE4\uD53C \uD0D0\uC0C9"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: 15,
      color: "var(--sub)",
      lineHeight: 1.7
    }
  }, "\uB9C8\uC74C\uC774 \uAC00\uB294 \uD5A5\uBBF8\uB97C \uACE8\uB77C\uBCF4\uC138\uC694. \uB85C\uC2A4\uD130\uAC00 \uD050\uB808\uC774\uD305\uD55C \uC6D0\uB450\uB97C \uC18C\uAC1C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 420,
      margin: "0 auto 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/aroma-wheel-en.svg",
    alt: "SORSO Aroma Wheel",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      justifyContent: "center"
    }
  }, families.map(f => /*#__PURE__*/React.createElement(AromaChip, {
    key: f,
    family: f,
    active: f === family,
    onClick: () => setFamily(f)
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: fam.color,
      boxShadow: "inset 0 0 0 1px rgba(58,52,46,0.1)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--sub)"
    }
  }, fam.en)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-kr)",
      fontWeight: 600,
      fontSize: 24,
      color: "var(--ink)"
    }
  }, fam.ko, " \uACC4\uC5F4\uC758 \uCD94\uCC9C \uC6D0\uB450"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: 14,
      color: "var(--sub)"
    }
  }, "\uC774 \uACC4\uC5F4\uC774 \uB9C8\uC74C\uC5D0 \uB4E0\uB2E4\uBA74, \uC774\uB7F0 \uC6D0\uB450\uBD80\uD130 \uC2DC\uC791\uD574\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, results.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, {
    key: i,
    category: p.cat,
    name: p.name,
    price: p.price,
    badges: p.badges || [],
    tags: p.tags,
    roasterNote: p.note,
    curationCopy: p.copy
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    withArrow: true
  }, "\uC774 \uD5A5\uBBF8 \uB354 \uC54C\uC544\uBCF4\uAE30"))));
}
Object.assign(window, {
  WheelScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sorso-web/WheelScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.AROMA_FAMILIES = __ds_scope.AROMA_FAMILIES;

__ds_ns.AromaChip = __ds_scope.AromaChip;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.TasteTag = __ds_scope.TasteTag;

})();
