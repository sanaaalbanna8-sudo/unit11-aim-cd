const SPEAKER = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z"/></svg>';

const NAV = [
  { title: "البداية", links: [
    ["index.html#home", "خريطة الهدف"],
    ["index.html#school", "مدرسة الريادة"],
    ["index.html#path", "ترتيب الشرح"]
  ]},
  { title: "ج1 · الثغرات", links: [
    ["c1.html#c1-open", "الثغرة قبل اسم الأداة"],
    ["c1.html#ports", "فاحص المنافذ"],
    ["c1.html#registry", "مدقق السجل"],
    ["c1.html#web", "ماسح المواقع"],
    ["c1.html#manage", "اكتشاف الثغرات وإدارتها"],
    ["c1.html#users", "ثغرات المستخدم"],
    ["c1.html#review", "مراجعة خارجية قبل التشغيل"],
    ["c1.html#pentest", "اختبار الاختراق"],
    ["c1.html#owasp", "أكبر عشرة تهديدات"],
    ["c1.html#owasp-a", "خمسة تهديدات أولى"],
    ["c1.html#owasp-b", "خمسة تهديدات تالية"]
  ]},
  { title: "ج2 · شدة المخاطر", links: [
    ["c2.html#c2-open", "ليست كل الثغرات سواء"],
    ["c2.html#formula", "المعادلة"],
    ["c2.html#likelihood", "الاحتمالية"],
    ["c2.html#impact", "الأثر"],
    ["c2.html#matrix", "المصفوفة"],
    ["c2.html#cases", "ثلاث حالات من المدرسة"],
    ["c2.html#when", "متى نقيّم"],
    ["c2.html#method", "خطوات التقييم"]
  ]},
  { title: "ج3 · الخطة", links: [
    ["c3.html#c3-open", "الخطة تقنع الإدارة"],
    ["c3.html#choose", "ماذا نحمي أولًا"],
    ["c3.html#hardware", "حماية الأجهزة"],
    ["c3.html#software", "حماية البرامج"],
    ["c3.html#physical", "الحماية المادية"],
    ["c3.html#alternatives", "نقل وتجنّب وقبول"],
    ["c3.html#justify", "التبرير بلغة المدير"],
    ["c3.html#limits", "القيود"],
    ["c3.html#legal-use", "القانون وسهولة الاستخدام"],
    ["c3.html#cost", "التكلفة والمنفعة"],
    ["c3.html#test", "خطة الاختبار"]
  ]},
  { title: "ج4 · السياسات", links: [
    ["c4.html#c4-open", "لماذا نكتب السياسة"],
    ["c4.html#pdca", "خطط نفّذ تحقق تصرّف"],
    ["c4.html#netmail", "الإنترنت والبريد"],
    ["c4.html#password", "كلمة المرور والموظف"],
    ["c4.html#people", "التدريب والتدقيق"],
    ["c4.html#backup", "النسخ الاحتياطي"],
    ["c4.html#datap", "حماية البيانات"]
  ]},
  { title: "ج4 · الحادث والتعافي", links: [
    ["incident.html#inc-open", "قبل أن يقع الحادث"],
    ["incident.html#team", "فريق الاستجابة"],
    ["incident.html#report", "الإبلاغ"],
    ["incident.html#assess", "التقييم الأولي"],
    ["incident.html#contain", "الاحتواء وحماية الناس"],
    ["incident.html#evidence", "تحديد الحادث وحفظ الدليل"],
    ["incident.html#outside", "الجهات الخارجية"],
    ["incident.html#recover", "الاستعادة والتوثيق"],
    ["incident.html#review", "المراجعة بعد الحادث"],
    ["incident.html#dr-why", "خطة الكوارث"],
    ["incident.html#rto", "وقتا الاسترداد"],
    ["incident.html#structure", "هيكل الخطة"]
  ]},
  { title: "ج5 · مزود الخدمة", links: [
    ["c5.html#c5-open", "طرف خارجي لا يلغي المسؤولية"],
    ["c5.html#kinds", "سحابة وأجهزة وبرامج"],
    ["c5.html#law", "الملكية والبلد"],
    ["c5.html#security", "الأمان في الاتفاقية"],
    ["c5.html#dispute", "النزاع والمسؤولية"]
  ]},
  { title: "د1 · جمع الدليل", links: [
    ["d1.html#d1-open", "لماذا نجمع الدليل"],
    ["d1.html#desktop", "إجراءات الجهاز"],
    ["d1.html#image", "النسخة المكررة"],
    ["d1.html#analysis", "تحليل القرص"],
    ["d1.html#traces", "الملفات والسجلات والنشاط"],
    ["d1.html#live", "الجهاز وهو يعمل"],
    ["d1.html#network", "إذن ومنهج الشبكة"],
    ["d1.html#devices", "الجدران والعناوين"]
  ]},
  { title: "د2 · التقرير", links: [
    ["d2.html#record", "السجل في وقته"],
    ["d2.html#snapshots", "اللقطات والدليل المرئي"],
    ["d2.html#credible", "مصداقية الدليل"],
    ["d2.html#meaning", "ماذا يثبت الدليل"],
    ["d2.html#theft", "سرقة القرص من غرفة الخادم"],
    ["d2.html#recommend", "التوصيات الثلاث"],
    ["d2.html#case", "رسالة هدى من أولها لآخرها"],
    ["d2.html#close", "من الخطة إلى الدليل"]
  ]},
  { title: "المعجم", links: [
    ["glossary.html#glossary", "الأسماء الإنجليزية كاملة"]
  ]}
];

const OFFSETS = {
  "index.html": 0,
  "c1.html": 3,
  "c2.html": 14,
  "c3.html": 22,
  "c4.html": 33,
  "incident.html": 40,
  "c5.html": 52,
  "d1.html": 57,
  "d2.html": 65,
  "glossary.html": 73
};
const TOTAL = 74;

function toast(message) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.style.display = "block";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.style.display = "none"; }, 3200);
}

function buildNav() {
  const side = document.getElementById("side");
  if (!side) return;
  const here = location.pathname.split(/[/\\]/).pop() || "index.html";
  const hash = location.hash;
  side.innerHTML = `
    <div class="brand-block">
      <a href="index.html">
        <div class="brand-k">الوحدة 11 · الهدفان ج و د</div>
        <strong>خطة الحماية والدليل بعد الحادث</strong>
        <span>الوحدة 11 · الهدفان ج و د</span>
        <span class="rights">© Sanaa Albanna · جميع الحقوق محفوظة · All rights reserved</span>
      </a>
    </div>
    ${NAV.map((group) => `
      <h2>${group.title}</h2>
      ${group.links.map(([href, label]) => {
        const [file, id] = href.split("#");
        const active = here === file && hash === "#" + id;
        return `<a class="item${active ? " active" : ""}" href="${href}">${label}</a>`;
      }).join("")}
    `).join("")}
  `;
}

function upgradeTerms() {
  document.querySelectorAll(".t").forEach((el) => {
    if (el.dataset.ready) return;
    el.dataset.ready = "1";
    const en = el.dataset.en || "";
    const say = el.dataset.say || en;
    const ar = (el.dataset.ar || el.textContent || "").trim();
    el.textContent = "";
    el.classList.add("term");
    if (ar) {
      const label = document.createElement("span");
      label.className = "ar";
      label.textContent = ar;
      el.append(label);
    }
    if (en) {
      const bdi = document.createElement("bdi");
      bdi.className = "en";
      bdi.textContent = en;
      el.append(bdi);
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "say";
    btn.dataset.en = say;
    btn.setAttribute("aria-label", "نطق " + (en || say));
    btn.innerHTML = SPEAKER;
    el.append(btn);
  });
}

function pickVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return voices.find((v) => v.lang.toLowerCase().startsWith("en-gb"))
    || voices.find((v) => v.lang.toLowerCase().startsWith("en"));
}

function speak(text, button) {
  if (!window.speechSynthesis) {
    toast("هذا المتصفح لا يشغّل النطق. الاسم الإنجليزي ظاهر بجانب الزر.");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-GB";
  utter.rate = 0.9;
  const voice = pickVoice();
  if (voice) utter.voice = voice;
  document.querySelectorAll(".say.on").forEach((b) => b.classList.remove("on"));
  if (button) button.classList.add("on");
  utter.onend = () => button && button.classList.remove("on");
  window.speechSynthesis.speak(utter);
}

function wireReveal() {
  document.querySelectorAll(".reveal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const box = btn.nextElementSibling;
      if (!box || !box.classList.contains("reveal")) return;
      const open = box.hasAttribute("hidden");
      if (open) {
        box.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "أخفي الإجابة";
      } else {
        box.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "أظهري ما نناقشه بعد التفكير";
      }
    });
  });
}

function wireRisk() {
  const root = document.getElementById("riskPicker");
  if (!root) return;
  const matrix = {
    very: { minor: ["متوسطة", "mid"], moderate: ["مرتفعة", "high"], major: ["متطرفة", "ext"] },
    possible: { minor: ["منخفضة", "low"], moderate: ["متوسطة", "mid"], major: ["مرتفعة", "high"] },
    unlikely: { minor: ["منخفضة", "low"], moderate: ["منخفضة", "low"], major: ["متوسطة", "mid"] }
  };
  const names = {
    very: "محتمل للغاية", possible: "محتمل", unlikely: "غير محتمل",
    minor: "أثر طفيف", moderate: "أثر معتدل", major: "أثر كبير"
  };
  let likelihood = null;
  let impact = null;
  const out = document.getElementById("riskOut");
  root.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const axis = btn.dataset.axis;
      if (axis === "l") likelihood = btn.dataset.v;
      if (axis === "i") impact = btn.dataset.v;
      root.querySelectorAll('button[data-axis="' + axis + '"]').forEach((item) => {
        item.classList.toggle("on", item === btn);
      });
      document.querySelectorAll(".matrix td[data-cell]").forEach((cell) => cell.classList.remove("is-on"));
      if (!likelihood || !impact) {
        out.className = "out";
        out.textContent = "اختاري الاحتمالية والأثر معًا حتى تضيء الخلية.";
        return;
      }
      const cell = matrix[likelihood][impact];
      const found = document.querySelector('.matrix td[data-cell="' + likelihood + "-" + impact + '"]');
      if (found) found.classList.add("is-on");
      out.className = "out tone-" + cell[1];
      out.textContent = names[likelihood] + " × " + names[impact] + " = شدة " + cell[0] + ".";
    });
  });
}

function wireGlossary() {
  const input = document.getElementById("glossarySearch");
  if (!input) return;
  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    document.querySelectorAll(".gloss article").forEach((article) => {
      article.hidden = Boolean(value) && !article.innerText.toLowerCase().includes(value);
    });
  });
}

function wireBackup() {
  const root = document.getElementById("backupQ");
  if (!root) return;
  const out = document.getElementById("backupOut");
  const answers = {
    full: "نسخة الجمعة وحدها تُرجع المدرسة إلى الجمعة. ما كتبته هدى يوم الإثنين والثلاثاء والأربعاء يضيع.",
    thu: "نسخة الخميس لم تُؤخذ بعد، ولو وُجدت فهي الملفات التي تغيرت ذلك اليوم فقط، لا السنة كلها.",
    chain: "صحيح. العطل صباح الخميس قبل نسخة الخميس. نرجّع نسخة الجمعة الكاملة، ثم نسخ الإثنين والثلاثاء والأربعاء التزايدية بالترتيب."
  };
  root.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelectorAll("button").forEach((item) => item.classList.toggle("on", item === btn));
      out.hidden = false;
      out.textContent = answers[btn.dataset.backup] || "";
    });
  });
}

document.addEventListener("click", (event) => {
  const say = event.target.closest(".say");
  if (!say) return;
  event.preventDefault();
  speak(say.dataset.en, say);
});

document.getElementById("btnMenu")?.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.body.classList.remove("nav-open");
});

if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => pickVoice();
}

buildNav();
upgradeTerms();
wireReveal();
wireRisk();
wireBackup();
wireGlossary();
bootDeck();

function bootDeck() {
  const slides = [...document.querySelectorAll(".slide")];
  if (!slides.length) return;
  const here = location.pathname.split(/[/\\]/).pop() || "index.html";
  const offset = OFFSETS[here] || 0;
  let index = 0;
  if (location.hash === "#end") index = slides.length - 1;
  else if (location.hash) {
    const found = slides.findIndex((slide) => "#" + slide.id === location.hash);
    if (found >= 0) index = found;
  }

  const bar = document.createElement("div");
  bar.className = "deck-bar";
  bar.innerHTML = '<p class="rights">© Sanaa Albanna · جميع الحقوق محفوظة · All rights reserved</p><button type="button" id="deckPrev">السابق</button><div class="track" aria-hidden="true"><span id="deckFill"></span></div><span class="count" id="deckCount"></span><button type="button" class="go" id="deckNext">التالي</button>';
  document.body.append(bar);

  function show(nextIndex) {
    index = nextIndex;
    slides.forEach((slide, i) => slide.classList.toggle("on", i === index));
    slides[index].scrollTop = 0;
    const id = slides[index].id;
    history.replaceState(null, "", location.pathname + "#" + id);
    document.getElementById("deckCount").textContent = (offset + index + 1) + " / " + TOTAL;
    document.getElementById("deckFill").style.width = ((offset + index + 1) / TOTAL * 100) + "%";
    document.querySelectorAll(".side a.item").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href").endsWith("#" + id));
    });
  }

  function goNext() {
    if (index < slides.length - 1) show(index + 1);
    else if (document.body.dataset.next) location.href = document.body.dataset.next;
  }

  function goPrev() {
    if (index > 0) show(index - 1);
    else if (document.body.dataset.prev) location.href = document.body.dataset.prev + "#end";
  }

  document.getElementById("deckNext").addEventListener("click", goNext);
  document.getElementById("deckPrev").addEventListener("click", goPrev);
  document.getElementById("side")?.addEventListener("click", (event) => {
    const link = event.target.closest("a.item");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const [file, hash] = href.split("#");
    if ((file === here || file === "") && hash) {
      const found = slides.findIndex((slide) => slide.id === hash);
      if (found >= 0) {
        event.preventDefault();
        show(found);
        document.body.classList.remove("nav-open");
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      goPrev();
    }
  });
  show(index);
}
