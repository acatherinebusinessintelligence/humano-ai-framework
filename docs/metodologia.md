# HUMANO

## Framework metodológico para diseñar y auditar sistemas de inteligencia artificial centrados en las personas

Una metodología para complementar la evaluación técnica de sistemas de IA con análisis de propósito, impacto, datos, transparencia, responsabilidad y auditoría continua.

---

## Autoría

**Autora:** Alejandra Catherine Montaña Acevedo

**Formación:**

- Ingeniera de Sistemas
- MSc. Supply Chain Management and Logistic
- MSc. Big Data and Business Analytics
- MSc. Inteligencia Artificial

**Áreas:**

- Inteligencia Artificial
- Ciencia de Datos
- Gobernanza de IA
- IA Responsable
- Analítica
- Transformación Digital

---

## Resumen

HUMANO es un framework metodológico para analizar sistemas de inteligencia artificial desde una perspectiva técnica, humana, ética, de gobernanza y de riesgo.

No sustituye métricas técnicas como accuracy, precision, recall, FPR, FNR, calibration, robustness o fairness metrics. Las complementa con preguntas sobre propósito, personas afectadas, necesidad de los datos, transparencia, autonomía, responsabilidad, monitoreo y corrección.

HUMANO no es una certificación, un estándar regulatorio ni una garantía de cumplimiento legal. Distingue tres planos que no deben confundirse:

- **análisis:** las preguntas que se formulan;
- **evidencia:** lo que se observa, mide o documenta;
- **decisión:** el juicio contextual sobre si un sistema puede usarse, con qué condiciones o si aún no debe aprobarse.

---

## Problema que aborda HUMANO

Un modelo puede tener buen desempeño global, alcanzar alta accuracy y superar métricas técnicas, y aun así:

- producir errores diferentes entre grupos;
- utilizar información innecesaria;
- depender de atributos sensibles o de proxies;
- ser difícil de explicar;
- no tener responsables claros;
- permanecer desplegado sin monitoreo adecuado.

> Un sistema técnicamente correcto no es necesariamente un sistema adecuado para ser utilizado sobre personas.

HUMANO busca estructurar esas preguntas antes, durante y después del desarrollo de un sistema de IA, de modo que la evaluación no se reduzca al desempeño agregado del modelo.

---

## Principios de HUMANO

### Centralidad de las personas

La evaluación debe considerar a quienes reciben los beneficios, los errores y las consecuencias del sistema.

### Propósito antes que tecnología

La pregunta inicial no es qué modelo utilizar, sino qué problema se intenta resolver y si corresponde automatizarlo.

### Minimización y proporcionalidad

No todo dato disponible debe utilizarse. El uso de información debe justificarse frente al propósito y al impacto.

### Transparencia proporcional al impacto

A mayor impacto sobre derechos, oportunidades o acceso a servicios, mayor necesidad de explicación y supervisión.

### Responsabilidad humana

La organización mantiene la responsabilidad sobre las decisiones apoyadas por IA. El algoritmo no es un sujeto responsable.

### Auditoría continua

La evaluación no termina al desplegar el modelo. El contexto, la población y el desempeño pueden cambiar.

### Corrección iterativa

Una intervención debe volver a medirse y auditarse. Corregir no equivale a haber verificado el efecto de la corrección.

---

## Las seis dimensiones de HUMANO

HUMANO está compuesto por seis dimensiones:

- **H** — Humanizar el propósito
- **U** — Ubicar personas e impactos
- **M** — Minimizar datos y riesgos
- **A** — Asegurar autonomía y transparencia
- **N** — Nombrar responsables
- **O** — Observar, auditar y corregir

---

### H — Humanizar el propósito

#### Pregunta central

¿Para qué se utilizará la IA y qué consecuencias puede producir?

#### Objetivo

Definir el propósito, el contexto de uso, la decisión apoyada, las personas afectadas y las consecuencias posibles.

#### Preguntas de análisis

- ¿Qué problema se pretende resolver?
- ¿Es necesario utilizar IA?
- ¿Qué decisión apoya o automatiza el sistema?
- ¿La salida es una recomendación o una decisión?
- ¿Quién puede beneficiarse?
- ¿Quién puede verse perjudicado?
- ¿Cuál es el costo de un falso positivo?
- ¿Cuál es el costo de un falso negativo?
- ¿Existen decisiones que no deberían automatizarse?
- ¿Qué ocurriría si el modelo falla?

#### Evidencias posibles

- declaración de propósito;
- caso de uso;
- descripción de la decisión;
- análisis de impacto;
- escenarios de error;
- definición de límites de uso.

#### Riesgos que ayuda a identificar

- automatizar un problema mal definido;
- tratar una recomendación como si fuera una decisión;
- omitir el costo desigual de distintos tipos de error;
- usar IA donde no es necesaria o no es proporcional.

#### Resultado esperado

Una declaración explícita de propósito y límites.

---

### U — Ubicar personas e impactos

#### Pregunta central

¿Quién está representado y quién puede verse afectado?

#### Objetivo

Identificar grupos, usuarios, personas impactadas y posibles diferencias en resultados.

#### Preguntas de análisis

- ¿Quién aparece en los datos?
- ¿Quién no aparece?
- ¿Hay grupos subrepresentados?
- ¿Existen diferencias en resultados?
- ¿Existen diferencias en errores?
- ¿Quién recibe falsos positivos?
- ¿Quién recibe falsos negativos?
- ¿Hay grupos pequeños donde las métricas sean inestables?
- ¿Quién puede apelar o cuestionar la decisión?

#### Evidencias posibles

- distribución de población;
- tasas de selección;
- accuracy por grupo;
- FPR;
- FNR;
- matrices de confusión;
- análisis de subgrupos;
- análisis de impacto.

#### Riesgos que ayuda a identificar

- invisibilidad de grupos no representados;
- diferencias de error concentradas en ciertos grupos;
- métricas inestables en muestras pequeñas;
- ausencia de vías para cuestionar la decisión.

#### Resultado esperado

Un mapa de quién está representado, quién puede verse afectado y qué diferencias se observan.

Una diferencia estadística no demuestra por sí sola discriminación o causalidad. Es una señal para investigar.

---

### M — Minimizar datos y riesgos

#### Pregunta central

¿Qué datos son realmente necesarios y qué riesgos pueden introducir?

#### Objetivo

Revisar necesidad, proporcionalidad, calidad y sensibilidad de los datos.

#### Preguntas de análisis

- ¿Qué variables son necesarias para el propósito?
- ¿Qué variables sensibles existen?
- ¿Existen proxies?
- ¿Es posible alcanzar un desempeño adecuado con menos variables?
- ¿Los datos contienen información histórica sesgada?
- ¿Los datos son representativos?
- ¿Hay valores faltantes sistemáticos?
- ¿Qué variables podrían amplificar desigualdades existentes?
- ¿El dato fue obtenido para este propósito?

#### Evidencias posibles

- inventario de variables;
- clasificación de datos sensibles;
- análisis de correlaciones;
- pruebas de proxies;
- comparación de modelos con y sin variables;
- análisis de calidad;
- documentación de procedencia.

#### Riesgos que ayuda a identificar

- uso de datos innecesarios o desproporcionados;
- reintroducción de atributos sensibles a través de proxies;
- datos de baja calidad o no representativos;
- reutilización de información fuera de su propósito original.

#### Resultado esperado

Una justificación de las variables usadas y de los riesgos que introducen.

Eliminar atributos sensibles no garantiza eliminar sesgos si existen variables correlacionadas.

---

### A — Asegurar autonomía y transparencia

#### Pregunta central

¿Podemos explicar y cuestionar las decisiones del sistema?

#### Objetivo

Evaluar explicabilidad, supervisión humana, posibilidad de cuestionar decisiones y límites de automatización.

#### Preguntas de análisis

- ¿Puede explicarse una predicción?
- ¿Se conocen las variables que influyen?
- ¿Existe supervisión humana?
- ¿Puede una persona solicitar revisión?
- ¿Existe una vía para corregir errores?
- ¿La persona sabe que intervino una IA?
- ¿Se distingue recomendación de decisión?
- ¿La explicación es comprensible para la persona afectada?

#### Evidencias posibles

- coeficientes;
- importancia de variables;
- SHAP u otras técnicas;
- model cards;
- documentación;
- interfaz de revisión;
- políticas de intervención humana.

#### Riesgos que ayuda a identificar

- opacidad de las predicciones;
- ausencia de revisión humana;
- explicaciones técnicas que no son comprensibles para la persona afectada;
- automatización sin vía de corrección.

#### Resultado esperado

Condiciones claras para explicar, supervisar y cuestionar el sistema.

La explicabilidad estadística no equivale automáticamente a explicación causal.

---

### N — Nombrar responsables

#### Pregunta central

¿Quién responde por los datos, el modelo y sus decisiones?

#### Objetivo

Asignar responsabilidad organizacional clara.

#### Preguntas de análisis

- ¿Quién es responsable del propósito?
- ¿Quién es Data Owner?
- ¿Quién desarrolla el modelo?
- ¿Quién valida?
- ¿Quién aprueba el despliegue?
- ¿Quién monitorea?
- ¿Quién recibe reclamaciones?
- ¿Quién puede detener el sistema?
- ¿Quién documenta cambios?
- ¿Quién responde ante un incidente?

#### Evidencias posibles

- RACI;
- matriz de responsabilidades;
- Model Owner;
- Data Owner;
- responsable de riesgo;
- responsable de validación;
- responsable de aprobación;
- procedimiento de escalamiento.

#### Riesgos que ayuda a identificar

- responsabilidad diluida o inexistente;
- ausencia de quién puede detener el sistema;
- falta de canal para reclamaciones;
- cambios no documentados.

#### Resultado esperado

Una asignación explícita de responsables por dato, modelo, decisión y monitoreo.

“El algoritmo” no puede ser considerado responsable.

---

### O — Observar, auditar y corregir

#### Pregunta central

¿El sistema funciona de manera consistente entre grupos y qué hacemos cuando encontramos diferencias?

#### Objetivo

Medir desempeño, detectar cambios, intervenir y volver a auditar.

#### Preguntas de análisis

- ¿Cuál es el desempeño global?
- ¿Cómo cambia por grupo?
- ¿Cómo cambian FPR y FNR?
- ¿Cómo cambia Selection Rate?
- ¿Existe drift?
- ¿Cambió la población?
- ¿Cambió el contexto?
- ¿Qué ocurre después de una intervención?
- ¿La corrección redujo el problema?
- ¿La mejora de una métrica empeoró otra?

#### Evidencias posibles

- accuracy;
- precision;
- recall;
- FPR;
- FNR;
- selection rate;
- calibration;
- fairness metrics;
- drift;
- monitoreo;
- auditorías periódicas;
- comparación antes/después.

#### Riesgos que ayuda a identificar

- diferencias de error no observadas en el agregado;
- intervenciones no reevaluadas;
- deterioro del desempeño por cambio de contexto;
- mejora de una métrica a costa de otra.

#### Resultado esperado

Una auditoría que se puede repetir después de cada intervención.

> Auditar → intervenir → volver a auditar.

---

## Tabla resumen

| Dimensión | Pregunta | Evidencia principal | Resultado esperado |
|---|---|---|---|
| **H** — Humanizar el propósito | ¿Para qué se utilizará la IA y qué consecuencias puede producir? | Declaración de propósito, caso de uso y escenarios de error | Propósito y límites explícitos |
| **U** — Ubicar personas e impactos | ¿Quién está representado y quién puede verse afectado? | Representación, selection rate, accuracy, FPR y FNR por grupo | Mapa de personas afectadas y diferencias observadas |
| **M** — Minimizar datos y riesgos | ¿Qué datos son realmente necesarios y qué riesgos pueden introducir? | Inventario de variables, datos sensibles, proxies y procedencia | Justificación de datos y riesgos residuales |
| **A** — Asegurar autonomía y transparencia | ¿Podemos explicar y cuestionar las decisiones del sistema? | Coeficientes, documentación, supervisión y vías de revisión | Condiciones para explicar y cuestionar |
| **N** — Nombrar responsables | ¿Quién responde por los datos, el modelo y sus decisiones? | RACI, owners y procedimiento de escalamiento | Responsabilidad organizacional asignada |
| **O** — Observar, auditar y corregir | ¿El sistema funciona de manera consistente entre grupos y qué hacemos cuando encontramos diferencias? | Métricas globales y por grupo, monitoreo y comparación antes/después | Auditoría repetible tras cada intervención |

---

## Flujo de aplicación de HUMANO

```text
H
↓
U
↓
M
↓
A
↓
N
↓
O
↺
```

El orden H → U → M → A → N → O ayuda a organizar el trabajo, pero no debe interpretarse como una secuencia rígida.

La dimensión **O** puede hacer necesario regresar a **U**, **M**, **A** o **H**. Una diferencia observada, un proxy identificado o un cambio de contexto pueden reabrir preguntas de propósito, datos o responsabilidad.

HUMANO se aplica como un ciclo iterativo: analizar, evidenciar, decidir, intervenir y volver a auditar.

---

## ¿Cuándo aplicar HUMANO?

### Antes del desarrollo

Priorizar **H**, **U** y **M**: propósito, personas e impactos, y necesidad de los datos.

### Durante el desarrollo

Priorizar **M**, **A** y **N**: minimización de datos, explicabilidad y asignación de responsables.

### Antes del despliegue

Priorizar **A**, **N** y **O**: transparencia, gobernanza y auditoría inicial.

### Durante operación

Priorizar **O** y **N**, con revisión periódica de **H**, **U** y **M**.

---

## Niveles de evidencia

Clasificación metodológica interna. No es regulatoria ni equivale a certificación.

### Nivel 0 — No evaluado

La dimensión no se ha revisado o no existe evidencia asociada.

### Nivel 1 — Evidencia descriptiva

Existe una descripción cualitativa, un relato de caso o una declaración, sin medición o documentación formal suficiente.

### Nivel 2 — Evidencia cuantitativa o documentada

Existen métricas, inventarios, matrices de responsabilidad u otros registros verificables.

### Nivel 3 — Evidencia auditada y acciones verificadas

La evidencia se revisó, se documentó una intervención cuando correspondía y se volvió a medir el efecto.

Estos niveles son una herramienta metodológica interna de HUMANO y no constituyen certificación.

---

## Decisión HUMANO

El framework no produce una certificación automática. La salida es un juicio informado, no un sello técnico.

### Aprobar

Cuando no se identifican riesgos materiales pendientes dentro del alcance evaluado y existen evidencias suficientes.

### Aprobar con condiciones

Cuando el sistema puede continuar bajo controles, mejoras, monitoreo o restricciones explícitas.

### No aprobar todavía

Cuando existen riesgos relevantes sin control, evidencia insuficiente o impactos no evaluados.

La decisión depende del contexto y no debe calcularse automáticamente a partir de una sola métrica. Una accuracy alta, por sí sola, no justifica aprobación.

---

## Caso demostrativo: Adult Census

El laboratorio Adult Census sirve para demostrar cómo se aplica HUMANO. No es un caso de producción.

**Dataset:** Adult Census Income

**Fuente:** UCI Machine Learning Repository

**DOI:** `10.24432/C5XW20`

**Laboratorio:** https://www.kaggle.com/code/alejandramontana/humano-adult-census-kaggle

**Visor:** https://acatherinebusinessintelligence.github.io/humano-ai-framework/

Aclaraciones:

- es un caso educativo;
- no debe utilizarse para decisiones reales sobre personas;
- las categorías reflejan un dataset histórico;
- las diferencias observadas no implican causalidad;
- los grupos pequeños deben interpretarse con cautela.

En el visor, la decisión pedagógica del caso es **Aprobar con condiciones**. Esa clasificación ilustra el método; no constituye una certificación ni una evaluación regulatoria.

---

## Limitaciones del framework

- HUMANO no sustituye análisis legal;
- no sustituye auditorías especializadas;
- no garantiza ausencia de sesgo;
- no garantiza fairness;
- no determina causalidad;
- no sustituye evaluación de seguridad;
- no reemplaza estándares técnicos;
- no es certificación;
- depende de la calidad de la evidencia disponible;
- requiere adaptación al contexto;
- las métricas de fairness pueden entrar en tensión entre sí.

---

## Relación con otras prácticas de IA responsable

HUMANO puede complementarse con prácticas ya existentes, entre ellas:

- Model Cards;
- Datasheets for Datasets;
- evaluaciones de impacto de IA;
- evaluaciones de riesgo;
- auditorías de fairness;
- técnicas de explicabilidad;
- marcos de gobernanza;
- supervisión humana;
- monitoreo en producción.

Esta lista no afirma equivalencia con estándares específicos ni pretende absorberlos.

---

## Cómo reutilizar HUMANO

El framework puede aplicarse a casos como:

- contratación;
- crédito;
- seguros;
- educación;
- salud;
- seguridad;
- servicios públicos;
- recomendación;
- clasificación;
- detección de fraude.

Las métricas y las evidencias deben cambiar según el caso. Un laboratorio de clasificación de ingresos no transfiere automáticamente sus indicadores a un sistema de salud o de contratación.

---

## Reproducibilidad

Arquitectura actual del proyecto demostrativo:

```text
Kaggle
→ genera resultados
→ resultados_humano.json
→ GitHub Actions
→ GitHub
→ GitHub Pages
```

El visor consume resultados computacionales generados por el laboratorio. Las métricas numéricas no se escriben a mano en el HTML: se leen desde `data/resultados_humano.json`.

---

## Versionado

**Versión actual:** Pre-v1.0

**Convención futura:**

- `v1.0.0`
- `v1.1.0`
- `v2.0.0`

Semantic versioning previsto:

- **MAJOR:** cambios metodológicos incompatibles.
- **MINOR:** nuevas dimensiones, evidencias o funcionalidades compatibles.
- **PATCH:** correcciones menores.

La versión 1.0.0 se reserva para una publicación formal, con citación académica y, cuando corresponda, depósito en Zenodo.

---

## Citación

La versión 1.0.0 será preparada para publicación en Zenodo.

Este proyecto **no tiene DOI propio**. No debe citarse un DOI de HUMANO mientras no exista uno asignado.

Referencia provisional:

Montaña Acevedo, Alejandra Catherine. *HUMANO: Framework metodológico para diseñar y auditar sistemas de inteligencia artificial centrados en las personas*. Versión de desarrollo.

Esta referencia será sustituida por la citación oficial cuando exista DOI.

El dataset del caso demostrativo sí tiene DOI propio:

Becker, B., & Kohavi, R. (1996). *Adult* [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5XW20

---

## Historial de cambios

### Pre-v1.0

- definición inicial del framework;
- laboratorio Adult Census;
- auditoría por grupos;
- integración Kaggle → GitHub;
- visor GitHub Pages;
- documentación metodológica inicial.
