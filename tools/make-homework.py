#!/usr/bin/env python3
"""Homework PDF maker for ClivEdu Class.

    python3 tools/make-homework.py 7        # reads lessons/07/homework.json, writes lessons/07/homework.pdf

homework.json (see LESSON-BUILDER.md, section "Homework"):
{
  "lesson": 7, "title": "Present simple or continuous?", "minutes": 30,
  "intro": "Today's grammar and words, plus what we learnt before.", "intro_uz": "…",
  "message": "optional text the bot sends with the PDF",
  "parts": [ { "type": "...", "title": "...", "uz": "...", "bank": ["optional", "word bank"], "items": [...] }, ... ]
}
Part types and their items:
  circle     "She {works|is working} in a bank."        → choose one (2–3 options in {a|b|c})
  gaps       "My mother ___ (cook) plov."                → write the word
  transform  ["He plays football.", "-" or "?"]          → negative / question
  match      ["wake up", "uyg‘onmoq"]                    → English ↔ Uzbek (Uzbek is shuffled)
  order      "seven / I / at / get up"                   → put the words in order
  odd        "teacher · doctor · kitchen · driver"       → circle the odd one out
  translate  "Men har kuni choy ichaman."                → write it in English
  write      { "prompt": "...", "hint": "...", "lines": 6 } (one object, not a list)
Every item is worth 1 point; "write" is worth its number of lines. No answers are printed.
"""
import json, os, random, re, sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------- fonts: DejaVu (has every Uzbek letter); Helvetica if it is missing ----------
D = "/usr/share/fonts/truetype/dejavu/"
if os.path.exists(D + "DejaVuSans.ttf"):
    pdfmetrics.registerFont(TTFont("S", D + "DejaVuSans.ttf"))
    pdfmetrics.registerFont(TTFont("SB", D + "DejaVuSans-Bold.ttf"))
    pdfmetrics.registerFont(TTFont("SI", D + "DejaVuSans-Oblique.ttf"))
    pdfmetrics.registerFont(TTFont("H", D + "DejaVuSerif-Bold.ttf"))
    pdfmetrics.registerFontFamily("S", normal="S", bold="SB", italic="SI", boldItalic="SB")
    F, FB, FI, FH = "S", "SB", "SI", "H"
else:
    F, FB, FI, FH = "Helvetica", "Helvetica-Bold", "Helvetica-Oblique", "Times-Bold"

INK = colors.HexColor("#12263A"); TEAL = colors.HexColor("#0B6E70"); YEL = colors.HexColor("#FFC93C")
SLATE = colors.HexColor("#4B5F73"); GREY = "#9AA7B5"
TINTS = [colors.HexColor(c) for c in ("#DCE8FB", "#D5F1E3", "#FFE3D3", "#FFEFB8", "#EDE3FB")]
body = ParagraphStyle("b", fontName=F, fontSize=10.5, leading=16, textColor=INK)
small = ParagraphStyle("s", parent=body, fontSize=8.5, leading=12, textColor=SLATE)
uz = ParagraphStyle("uz", parent=body, fontSize=9, leading=12, textColor=TEAL, fontName=FI)
H = ParagraphStyle("h", fontName=FH, fontSize=12.5, leading=16, textColor=INK)
W, Hh = A4
CW = W - 28 * mm

def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
def line(n=14):
    return '<font color="%s">%s</font>' % (GREY, "_" * n)
def P(t, st=body):
    return Paragraph(t, st)
def sp(h=3):
    return Spacer(1, h * mm)

def box(txt, color):
    t = Table([[P(txt)]], colWidths=[CW])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), color), ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                           ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5), ("ROUNDEDCORNERS", [5, 5, 5, 5])]))
    return t

def header(n, title, uztxt, color):
    t = Table([[P("<b>%d</b>" % n, ParagraphStyle("n", parent=body, alignment=1, fontSize=11, fontName=FB)), [P(esc(title), H), P(esc(uztxt), uz)]]], colWidths=[10 * mm, None])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (0, 0), color), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (1, 0), (1, 0), 8),
                           ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    return t

def cols(items, ncol=2, widths=None):
    """numbered items in columns, filled top to bottom"""
    rows = (len(items) + ncol - 1) // ncol
    data = [[P(items[c * rows + r]) if c * rows + r < len(items) else "" for c in range(ncol)] for r in range(rows)]
    t = Table(data, colWidths=widths or [CW / ncol] * ncol)
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
    return t

def choices(s):
    """She {works|is working} → She <b>works / is working</b>"""
    return re.sub(r"\{([^}]+)\}", lambda m: "<b>" + " / ".join(esc(x.strip()) for x in m.group(1).split("|")) + "</b>", esc(s).replace("{", "{").replace("}", "}"))

def gapline(s):
    return esc(s).replace("___", line(10))

def render_part(no, p, color):
    t = p.get("type"); items = p.get("items", [])
    flow = [header(no, p.get("title", ""), (p.get("uz", "") + " · %d ball" % points(p)).strip(" ·"), color), sp(2)]
    if p.get("bank"):
        flow += [box("<b>Word bank:</b>  " + "  ·  ".join(esc(w) for w in p["bank"]), color), sp(2)]
    if t == "circle":
        flow.append(cols(["%d.  %s" % (i + 1, choices(x)) for i, x in enumerate(items)], 1 if max(map(len, items)) > 46 else 2))
    elif t == "gaps":
        flow.append(cols(["%d.  %s" % (i + 1, gapline(x)) for i, x in enumerate(items)], 1 if max(map(len, items)) > 44 else 2))
    elif t == "transform":
        rows = [[P("%d.  %s" % (i + 1, esc(s))), P("(%s)  %s" % ("−" if k in ("-", "−", "neg") else "?", line(34)))] for i, (s, k) in enumerate(items)]
        tb = Table(rows, colWidths=[72 * mm, None])
        tb.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
        flow += [P('<font color="%s">(−) = negative · inkor,  (?) = question · so‘roq</font>' % SLATE.hexval().replace("0x", "#"), small), sp(1.5), tb]
    elif t == "match":
        rnd = random.Random("%s-%s" % (no, p.get("title")))
        uzs = [u for _, u in items]; rnd.shuffle(uzs)
        letters = "abcdefghij"
        rows = [[P("%d.  %s   %s" % (i + 1, esc(e), line(4))), P("%s)  %s" % (letters[i], esc(uzs[i])))] for i, (e, _) in enumerate(items)]
        tb = Table(rows, colWidths=[CW / 2] * 2)
        tb.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)]))
        flow += [P("Write the letter. · Harfni yozing.", small), sp(1.5), tb]
    elif t == "order":
        flow.append(cols(["%d.  <i>%s</i><br/>%s" % (i + 1, esc(x), line(44)) for i, x in enumerate(items)], 1))
    elif t == "odd":
        flow.append(cols(["%d.  %s" % (i + 1, esc(x)) for i, x in enumerate(items)], 2))
    elif t == "translate":
        flow.append(cols(["%d.  <i>%s</i><br/>%s" % (i + 1, esc(x), line(52)) for i, x in enumerate(items)], 1))
    elif t == "write":
        w = items if isinstance(items, dict) else p
        flow += [P(esc(w.get("prompt", "Write sentences."))), sp(1)]
        if w.get("hint"):
            flow += [P("<i>%s</i>" % esc(w["hint"]), small), sp(1.5)]
        for _ in range(int(w.get("lines", 6))):
            flow.append(Table([[""]], colWidths=[CW], rowHeights=[8.5 * mm], style=TableStyle([("LINEBELOW", (0, 0), (-1, -1), 0.6, colors.HexColor("#B8C3CF"))])))
    else:
        raise SystemExit("unknown part type: %s" % t)
    flow.append(sp(3))
    return KeepTogether(flow)

def points(p):
    if p.get("type") == "write":
        w = p.get("items") if isinstance(p.get("items"), dict) else p
        return int(w.get("lines", 6))
    return len(p.get("items", []))

def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    n = int(sys.argv[1]); nn = "%02d" % n
    src = os.path.join(ROOT, "lessons", nn, "homework.json")
    out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "lessons", nn, "homework.pdf")
    spec = json.load(open(src, encoding="utf-8"))
    parts = spec["parts"]
    total = sum(points(p) for p in parts)
    title = spec.get("title", "Lesson %d" % n)

    def deco(c, doc):
        c.saveState()
        c.setFillColor(INK); c.rect(0, Hh - 9 * mm, W, 9 * mm, stroke=0, fill=1)
        c.setFillColor(YEL); c.rect(0, Hh - 9 * mm, 38 * mm, 9 * mm, stroke=0, fill=1)
        c.setFont(FB, 8); c.setFillColor(INK); c.drawString(14 * mm, Hh - 6 * mm, "ClivEdu Class")
        c.setFillColor(colors.white); c.setFont(F, 8)
        c.drawRightString(W - 14 * mm, Hh - 6 * mm, ("Homework · Lesson %d · %s" % (n, title))[:90])
        c.setFillColor(SLATE); c.drawString(14 * mm, 8 * mm, "clivedu.me")
        c.drawRightString(W - 14 * mm, 8 * mm, "Page %d" % doc.page)
        c.restoreState()

    doc = BaseDocTemplate(out, pagesize=A4, leftMargin=14 * mm, rightMargin=14 * mm, topMargin=16 * mm, bottomMargin=15 * mm,
                          title="Homework · Lesson %d · %s" % (n, title), author="Clive · ClivEdu Class")
    doc.addPageTemplates([PageTemplate(id="p", frames=[Frame(14 * mm, 15 * mm, W - 28 * mm, Hh - 31 * mm, id="f", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)], onPage=deco)])
    S = [P('<font name="%s" size="22">Homework</font>  <font color="#0B6E70" name="%s" size="11">Lesson %d · %s · Uyga vazifa</font>' % (FH, FI, n, esc(title)), ParagraphStyle("t", parent=body, leading=28)), sp(1.5)]
    nm = Table([[P("Name: " + line(26)), P("Date: " + line(12)), P("Score: " + line(3) + " / %d" % total)]], colWidths=[85 * mm, 47 * mm, None])
    nm.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0)]))
    S += [nm, sp(2)]
    intro = "<b>Time: %d minutes.</b> %s" % (int(spec.get("minutes", 30)), esc(spec.get("intro", "")))
    if spec.get("intro_uz"):
        intro += ' <font color="#0B6E70"><i>%s</i></font>' % esc(spec["intro_uz"])
    S += [box(intro, colors.HexColor("#FFEFB8")), sp(4)]
    for i, p in enumerate(parts):
        S.append(render_part(i + 1, p, TINTS[i % len(TINTS)]))
    S += [sp(2), P("<b>Good luck!</b> Omad! — see you in the next lesson. <font color=\"#0B6E70\">Clive · @clive077</font>", small)]
    doc.build(S)
    print("homework: %s (%d parts, %d points)" % (os.path.relpath(out, ROOT), len(parts), total))

if __name__ == "__main__":
    main()
