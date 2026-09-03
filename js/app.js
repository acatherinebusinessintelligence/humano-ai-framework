/* ===== HUMANO · app.js ===== */
(function () {
  "use strict";

  const DATA_URL = "data/resultados_humano.json";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const pct = (v) => (parseFloat(v) * 100).toFixed(2) + " %";
  const num = (v) => Number(v).toLocaleString("es-CO");

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

  document.querySelectorAll(".info-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".info-btn").forEach((other) => {
        other.setAttribute("aria-expanded", "false");
      });
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".info-btn").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
    });
  });

  function initReveal() {
    const items = document.querySelectorAll(
      ".dim-card, .kpi-card, .sem-item, .meta-card, .compare-card, .bridge-item, .decision-card"
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

  const COLORS = [
    "#6c5ce7", "#00cec9", "#fdcb6e", "#55efc4", "#a29bfe",
    "#e17055", "#74b9ff", "#ff7675",
  ];
  const COLORS_A = COLORS.map((c) => c + "cc");

  function chartDefaults() {
    Chart.defaults.color = "#a8b0c4";
    Chart.defaults.borderColor = "rgba(255,255,255,.06)";
    Chart.defaults.font.family =
      "'Segoe UI', system-ui, -apple-system, sans-serif";
  }

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

  function sortByNDesc(rows) {
    return rows.slice().sort((a, b) => Number(b.n) - Number(a.n));
  }

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

  function metricDatasets(rows, metrics, names, colorOffset) {
    return metrics.map((m, i) => ({
      label: names[i],
      data: rows.map((r) => parseFloat(r[m])),
      backgroundColor: COLORS_A[i + colorOffset],
      borderColor: COLORS[i + colorOffset],
      borderWidth: 1,
      borderRadius: 4,
    }));
  }

  function renderAuditChart(canvasId, rows, metrics, names, colorOffset) {
    const labels = rows.map((r) => r.grupo);
    groupedBar(canvasId, labels, metricDatasets(rows, metrics, names, colorOffset || 0));
  }

  function maxBy(rows, key) {
    return rows.reduce((best, row) =>
      parseFloat(row[key]) > parseFloat(best[key]) ? row : best
    );
  }

  function interpretSex(rows) {
    const box = $("#observe-sex");
    const body = $("#observe-sex-body");
    if (!box || !body || !rows.length) return;

    const acc = maxBy(rows, "accuracy");
    const sel = maxBy(rows, "selection_rate");
    const fpr = maxBy(rows, "fpr");
    const fnr = maxBy(rows, "fnr");
    const accFnr = parseFloat(acc.fnr);

    const parts = [];
    parts.push(
      `La mayor accuracy corresponde a ${acc.grupo} (${pct(acc.accuracy)}).`
    );
    parts.push(
      `La mayor selection rate corresponde a ${sel.grupo} (${pct(sel.selection_rate)}): una diferencia observada en la proporción de resultados positivos.`
    );
    parts.push(
      `El mayor FPR corresponde a ${fpr.grupo} (${pct(fpr.fpr)}): una señal para investigar el patrón de error entre los casos realmente negativos.`
    );
    parts.push(
      `El mayor FNR corresponde a ${fnr.grupo} (${pct(fnr.fnr)}): una señal para investigar el impacto diferencial del error entre los casos realmente positivos.`
    );

    if (acc.grupo === fnr.grupo) {
      parts.push(
        `La mayor accuracy corresponde a ${acc.grupo}, pero este grupo también presenta el FNR más alto (${pct(accFnr)}). Esto evidencia que una accuracy alta no implica necesariamente menor impacto de error.`
      );
    } else {
      parts.push(
        `${acc.grupo} concentra la mayor accuracy y, al mismo tiempo, ${fnr.grupo} concentra el mayor FNR. El patrón de error no se reduce a un único indicador de desempeño.`
      );
    }

    body.innerHTML = parts.map((p) => `<p>${p}</p>`).join("");
    box.hidden = false;
  }

  function showError() {
    const banner = $("#error-banner");
    if (banner) banner.hidden = false;
  }

  fetch(DATA_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      chartDefaults();

      const ds = data.dataset || {};
      const setT = (id, v) => { const el = $(`#${id}`); if (el && v != null) el.textContent = v; };
      setT("meta-registros", num(ds.registros_modelo));
      setT("meta-variables", ds.variables_modelo);
      setT("meta-dataset", ds.nombre);

      setT("kpi-acc-orig", pct(data.modelo_original?.accuracy));
      setT("kpi-acc-sin", pct(data.modelo_sin_sensibles?.accuracy));
      setT("kpi-registros", num(ds.registros_modelo));
      setT("kpi-variables", ds.variables_modelo);

      if (data.auditoria_sex) {
        const sexRows = sortByNDesc(data.auditoria_sex);
        renderTable("table-sex", sexRows);
        renderAuditChart(
          "chart-sex",
          sexRows,
          ["accuracy", "selection_rate", "fpr", "fnr"],
          ["Accuracy", "Selection Rate", "FPR", "FNR"],
          0
        );
        interpretSex(sexRows);
      }

      if (data.auditoria_race) {
        const raceRows = sortByNDesc(data.auditoria_race);
        renderTable("table-race", raceRows);
        renderAuditChart(
          "chart-race-perf",
          raceRows,
          ["accuracy", "selection_rate"],
          ["Accuracy", "Selection Rate"],
          0
        );
        renderAuditChart(
          "chart-race-error",
          raceRows,
          ["fpr", "fnr"],
          ["FPR", "FNR"],
          2
        );
      }

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

      if (data.metadata?.updated || data.updated) {
        setT("meta-update", "Última actualización desde Kaggle: " + (data.metadata?.updated || data.updated));
      }
    })
    .catch((err) => {
      console.error("Error cargando resultados HUMANO:", err);
      showError();
    });
})();
