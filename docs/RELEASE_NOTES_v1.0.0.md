# HUMANO v1.0.0

## Primera versión estable

HUMANO es un framework metodológico para diseñar y auditar sistemas de inteligencia artificial centrados en las personas. Esta versión consolida la definición del método, el laboratorio demostrativo, la reproducibilidad técnica y la documentación necesaria para citar el trabajo. No es una certificación ni un estándar regulatorio.

### Propósito del framework

Complementar la evaluación técnica de un sistema de IA con preguntas sobre propósito, personas afectadas, necesidad de los datos, transparencia, responsabilidad y auditoría continua.

La pregunta que organiza el método es: un sistema técnicamente correcto no es necesariamente un sistema adecuado para usarse sobre personas.

### Las seis dimensiones

- **H** — Humanizar el propósito
- **U** — Ubicar personas e impactos
- **M** — Minimizar datos y riesgos
- **A** — Asegurar autonomía y transparencia
- **N** — Nombrar responsables
- **O** — Observar, auditar y corregir

### Arquitectura técnica

```text
Kaggle
→ genera resultados
→ resultados_humano.json
→ GitHub Actions
→ GitHub
→ GitHub Pages
```

El visor lee `data/resultados_humano.json`. Las métricas numéricas no se escriben a mano en el HTML.

### Caso demostrativo

El laboratorio Adult Census ilustra el método con un modelo de clasificación de ingresos. Es un caso educativo. No debe usarse para decisiones reales sobre personas. Las diferencias observadas son señales para investigar y no demuestran causalidad.

### Reproducibilidad

Los resultados se generan en Kaggle, se sincronizan hacia GitHub y se publican en el visor. El dataset Adult conserva su propia licencia y su DOI.

### Licencias

- Código: MIT (`LICENSE-CODE`)
- Framework y documentación: CC BY 4.0 (`LICENSE-DOCS.md`)
- Dataset Adult: licencia independiente

### Estado de citación

La referencia actual es provisional, asociada a v1.0.0. El DOI de HUMANO está pendiente de asignación en Zenodo.

---

## Recursos

Repositorio:  
https://github.com/acatherinebusinessintelligence/humano-ai-framework

Visor:  
https://acatherinebusinessintelligence.github.io/humano-ai-framework/

Laboratorio Kaggle:  
https://www.kaggle.com/code/alejandramontana/humano-adult-census-kaggle

Metodología:  
[docs/metodologia.md](metodologia.md)

Dataset demostrativo:  
UCI Adult Dataset  
DOI: `10.24432/C5XW20`

---

## DOI

Pendiente de asignación mediante Zenodo.
