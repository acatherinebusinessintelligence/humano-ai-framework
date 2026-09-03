# HUMANO

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22285253.svg)](https://doi.org/10.5281/zenodo.22285253)

## Framework para diseñar y auditar sistemas de inteligencia artificial centrados en las personas

HUMANO es un framework metodológico orientado a evaluar sistemas de inteligencia artificial desde una perspectiva técnica, ética y de gobernanza.

Su objetivo es complementar las métricas tradicionales de desempeño de los modelos con preguntas relacionadas con propósito, personas afectadas, uso de datos, transparencia, responsabilidad y monitoreo continuo.

---

## Framework HUMANO

HUMANO está compuesto por seis dimensiones:

| Letra | Dimensión | Pregunta central |
|---|---|---|
| **H** | Humanizar el propósito | ¿Para qué se utilizará la IA y qué consecuencias puede producir? |
| **U** | Ubicar personas e impactos | ¿Quién está representado y quién puede verse afectado? |
| **M** | Minimizar datos y riesgos | ¿Qué datos son realmente necesarios y qué riesgos pueden introducir? |
| **A** | Asegurar autonomía y transparencia | ¿Podemos explicar y cuestionar las decisiones del sistema? |
| **N** | Nombrar responsables | ¿Quién responde por los datos, el modelo y sus decisiones? |
| **O** | Observar, auditar y corregir | ¿El sistema funciona de manera consistente entre grupos y qué hacemos cuando encontramos diferencias? |

---

## Documentación metodológica

La descripción formal de principios, dimensiones, evidencias, decisión y limitaciones está en:

[Consultar metodología HUMANO](docs/metodologia.md)

[Changelog](CHANGELOG.md) · [Notas de la versión v1.0.0](docs/RELEASE_NOTES_v1.0.0.md)

---

# Objetivo

El objetivo de HUMANO es ayudar a responder una pregunta que va más allá del desempeño técnico:

> **¿Un modelo que funciona bien técnicamente también puede considerarse adecuado para ser utilizado sobre personas?**

El framework propone analizar un sistema de inteligencia artificial desde seis dimensiones complementarias antes de aprobar su uso.

---

# Caso demostrativo

La primera implementación de HUMANO utiliza el dataset **Adult Census Income** del UCI Machine Learning Repository.

El ejercicio consiste en construir un modelo de clasificación que intenta predecir si los ingresos anuales de una persona superan los USD 50.000.

El dataset contiene información relacionada con:

- edad;
- educación;
- ocupación;
- estado civil;
- horas trabajadas;
- sexo;
- categoría racial;
- país de origen;
- entre otras variables.

La finalidad del laboratorio no es recomendar el uso real de este modelo para tomar decisiones sobre personas.

El dataset se utiliza como **caso educativo para analizar riesgos, representación, explicabilidad y diferencias de desempeño entre grupos**.

Fuente oficial:

UCI Machine Learning Repository  
Adult Dataset  
DOI: `10.24432/C5XW20`

---

# Laboratorio técnico

El laboratorio se ejecuta en Kaggle:

**HUMANO · Adult Census**

https://www.kaggle.com/code/alejandramontana/humano-adult-census-kaggle

En el notebook se realizan las siguientes etapas:

### H · Humanizar el propósito

Se analiza:

- qué variable intenta predecir el modelo;
- para qué podría utilizarse;
- cuáles serían las consecuencias de una predicción incorrecta.

### U · Ubicar personas e impactos

Se explora:

- representación de grupos;
- distribución por sexo;
- distribución por categoría racial;
- diferencias en los resultados observados.

### M · Minimizar datos y riesgos

Se revisan:

- atributos sensibles;
- variables potencialmente innecesarias;
- posibles relaciones indirectas o proxies.

### A · Asegurar autonomía y transparencia

Se construye una regresión logística y se analizan:

- variables con mayor influencia;
- coeficientes del modelo;
- capacidad de explicar las predicciones.

### N · Nombrar responsables

Se propone una estructura de gobernanza que identifica responsables para:

- propósito del sistema;
- datos;
- desarrollo;
- validación;
- decisiones;
- reclamaciones;
- monitoreo.

### O · Observar, auditar y corregir

Se calculan métricas globales y por grupos:

- Accuracy;
- Selection Rate;
- False Positive Rate (FPR);
- False Negative Rate (FNR).

También se realiza un experimento comparando:

- un modelo con atributos sensibles;
- un modelo sin `sex` y `race`.

El objetivo es demostrar que:

> **eliminar atributos sensibles no garantiza automáticamente la eliminación de diferencias entre grupos.**

---

# Arquitectura del proyecto

HUMANO integra tres componentes:

```text
Kaggle
   │
   │ ejecuta el análisis
   ▼
resultados_humano.json
   │
   │ sincronización
   ▼
GitHub
   │
   │ publica los resultados
   ▼
GitHub Pages
   │
   ▼
Visor interactivo HUMANO
```

Estructura actual del repositorio:

```text
README.md
data/resultados_humano.json
css/
js/
notebooks/
.github/workflows/
```

En esta fase el repositorio solo deja preparada esa estructura. El visor HTML, la automatización con Kaggle, GitHub Pages y el workflow definitivo de GitHub Actions aún no se han creado.

---

# Resultados reproducibles

Los resultados del laboratorio se publicarán en:

`data/resultados_humano.json`

El archivo es el punto de sincronización entre el notebook de Kaggle y este repositorio. El estado actual es `pending`: todavía no se ha realizado la primera sincronización automática desde Kaggle.

Notebook de origen:

https://www.kaggle.com/code/alejandramontana/humano-adult-census-kaggle

---

# Principio fundamental

Un modelo que funciona bien técnicamente no es, por ese solo hecho, adecuado para usarse sobre personas.

HUMANO exige revisar propósito, personas afectadas, datos, transparencia, responsabilidad y monitoreo antes de aprobar un sistema. El laboratorio Adult Census también muestra que eliminar atributos sensibles no garantiza automáticamente la eliminación de diferencias entre grupos.

---

# Estado del proyecto

**Versión actual:** v1.0.0

- [x] Framework HUMANO
- [x] Caso Adult Census
- [x] Notebook en Kaggle
- [x] Modelo de clasificación
- [x] Auditoría por grupos
- [x] Exportación de resultados JSON
- [x] Sincronización automática Kaggle → GitHub
- [x] Visor interactivo GitHub Pages
- [x] Documentación metodológica ampliada
- [x] CITATION.cff
- [x] Licencias
- [x] Publicación en Zenodo
- [x] DOI

Más detalle en [CHANGELOG.md](CHANGELOG.md) y [docs/RELEASE_NOTES_v1.0.0.md](docs/RELEASE_NOTES_v1.0.0.md).

---

# Tecnologías

Tecnologías usadas o previstas en el laboratorio y en este repositorio:

- Kaggle, para ejecutar el notebook demostrativo;
- JSON, para publicar resultados reproducibles;
- GitHub, para versionar el framework y los resultados;
- GitHub Pages, previsto para publicar el visor interactivo cuando exista.

El notebook construye una regresión logística sobre el UCI Adult Dataset. No se declara aquí una pila adicional que aún no esté en el repositorio.

---

# Uso educativo

Este repositorio y el laboratorio Adult Census tienen finalidad educativa y de auditoría metodológica.

No se recomienda usar el modelo demostrativo para tomar decisiones reales sobre personas, créditos, empleo, acceso a servicios u otros impactos individuales.

---

# Fuente de datos

UCI Machine Learning Repository  
Adult Dataset  
DOI: `10.24432/C5XW20`

Notebook de Kaggle:

https://www.kaggle.com/code/alejandramontana/humano-adult-census-kaggle

---

# Autora

Alejandra Catherine Montaña Acevedo  
Ingeniera de Sistemas  
MSc. Big Data and Business Analytics  
MSc. Inteligencia Artificial

---

# Citación

Los metadatos de citación están en [`CITATION.cff`](CITATION.cff).

Montaña Acevedo, A. C. (2026). HUMANO: Framework metodológico para diseñar y auditar sistemas de inteligencia artificial centrados en las personas (v1.0.0). Zenodo. https://doi.org/10.5281/zenodo.22285253

Para citar el dataset del caso demostrativo:

Becker, B., & Kohavi, R. (1996). *Adult* [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5XW20

---

## Licencias

HUMANO diferencia el código fuente de la metodología y la documentación.

### Código

El código fuente de HUMANO se distribuye bajo licencia MIT.

[Licencia del código](LICENSE-CODE)

### Framework y documentación

La metodología HUMANO y su documentación se distribuyen bajo licencia Creative Commons Attribution 4.0 International (CC BY 4.0).

[Licencia de documentación y metodología](LICENSE-DOCS.md)

Las fuentes de datos utilizadas mantienen sus propias licencias y condiciones. El dataset Adult del caso demostrativo no se redistribuye bajo las licencias de HUMANO.
