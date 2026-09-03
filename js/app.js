/* ===== HUMANO · app.js ===== */
(function () {
  "use strict";

  const DATA_URL = "data/resultados_humano.json";

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const pct = (v) => (parseFloat(v) * 100).toFixed(2) + " %";
  const num = (v) => Number(v).toLocaleString("es-CO");

  /* ---------- nav toggle ---------- */
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll(
      ".dim-card, .kpi-card, .sem-item, .meta-card, .compare-card"
    );
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => obs.observe(el));
  }
  initReveal();

  /* ---------- chart palette ---------- */
  const COLORS = [
    "#6c5ce7", "#00cec9", "#fdcb6e", "#55efc4", "#a29bfe",
    "#e17055", "#74b9ff", "#ff7675",
  ];
  const COLORS_A = COLORS.map((c) => c + "cc");

  /* ---------- chart defaults ---------- */
  function chartDefaults() {
    Chart.defaults.color = "#8b93a8";
    Chart.defaults.borderColor = "rgba(255,255,255,.06)";
    Chart.defaults.font.family =
      "'Segoe UI', system-ui, -apple-system, sans-serif";
  }

  /* ---------- build grouped bar ---------- */
  function groupedBar(canvasId, labels, datasets) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
      type: "bar",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { position: "bottom", labels: { padding: 16, usePointStyle: true } },
          tooltip: {
            callbacks: {
              label: (tip) => `${tip.dataset.label}: ${(tip.raw * 100).toFixed(2)} %`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true, max: 1,
            ticks: { callback: (v) => (v * 100).toFixed(0) + " %" },
          },
        },
      },
    });
  }

  /* ---------- build horizontal compare ---------- */
  function compareBar(canvasId, labels, values) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [COLORS[0] + "cc", COLORS[1] + "cc"],
            borderColor: [COLORS[0], COLORS[1]],
            borderWidth: 1,
            borderRadius: 6,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (tip) => (tip.raw * 100).toFixed(2) + " %",
            },
          },
        },
        scales: {
          x: {
            min: 0.7, max: 1,
            ticks: { callback: (v) => (v * 100).toFixed(0) + " %" },
          },
        },
      },
    });
  }

  /* ---------- render audit table ---------- */
  function renderTable(tableId, rows) {
    const tbody = $(`#${tableId} tbody`);
    if (!tbody) return;
    tbody.innerHTML = "";
    rows.forEach((r) => {
      const tr = document.createElement("tr");
      tr.innerHTML =
        `<td>${r.grupo}</td>` +
        `<td>${num(r.n)}</td>` +
        `<td>${pct(r.accuracy)}</td>` +
        `<td>${pct(r.selection_rate)}</td>` +
        `<td>${pct(r.fpr)}</td>` +
        `<td>${pct(r.fnr)}</td>`;
      tbody.appendChild(tr);
    });
  }

  /* ---------- render audit chart ---------- */
  function renderAuditChart(canvasId, rows) {
    const labels = rows.map((r) => r.grupo);
    const metrics = ["accuracy", "selection_rate", "fpr", "fnr"];
    const names = ["Accuracy", "Selection Rate", "FPR", "FNR"];
    const datasets = metrics.map((m, i) => ({
      label: names[i],
      data: rows.map((r) => parseFloat(r[m])),
      backgroundColor: COLORS_A[i],
      borderColor: COLORS[i],
      borderWidth: 1,
      borderRadius: 4,
    }));
    groupedBar(canvasId, labels, datasets);
  }

  /* ---------- show error ---------- */
  function showError() {
    const banner = $("#error-banner");
    if (banner) banner.hidden = false;
  }

  /* ---------- main load ---------- */
  fetch(DATA_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      chartDefaults();

      /* caso meta */
      const ds = data.dataset || {};
      const setT = (id, v) => { const el = $(`#${id}`); if (el && v != null) el.textContent = v; };
      setT("meta-registros", num(ds.registros_modelo));
      setT("meta-variables", ds.variables_modelo);
      setT("meta-dataset", ds.nombre);

      /* KPI */
      setT("kpi-acc-orig", pct(data.modelo_original?.accuracy));
      setT("kpi-acc-sin", pct(data.modelo_sin_sensibles?.accuracy));
      setT("kpi-registros", num(ds.registros_modelo));
      setT("kpi-variables", ds.variables_modelo);

      /* auditoría sexo */
      if (data.auditoria_sex) {
        renderTable("table-sex", data.auditoria_sex);
        renderAuditChart("chart-sex", data.auditoria_sex);
      }

      /* auditoría raza */
      if (data.auditoria_race) {
        renderTable("table-race", data.auditoria_race);
        renderAuditChart("chart-race", data.auditoria_race);
      }

      /* comparación */
      const accOrig = data.modelo_original?.accuracy;
      const accSin = data.modelo_sin_sensibles?.accuracy;
      setT("cmp-orig", pct(accOrig));
      setT("cmp-sin", pct(accSin));
      if (accOrig != null && accSin != null) {
        compareBar(
          "chart-compare",
          ["Modelo original", "Sin atributos sensibles"],
          [accOrig, accSin]
        );
      }

      /* metadata / fecha */
      if (data.metadata?.updated || data.updated) {
        setT("meta-update", "Última actualización desde Kaggle: " + (data.metadata?.updated || data.updated));
      }
    })
    .catch((err) => {
      console.error("Error cargando resultados HUMANO:", err);
      showError();
    });
})();
