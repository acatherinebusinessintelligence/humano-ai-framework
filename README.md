# HUMANO

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

Estado actual: estructura inicial del repositorio.

Incluido:

- documentación del framework en `README.md`;
- marcador de resultados en `data/resultados_humano.json`;
- carpetas reservadas para `css/`, `js/`, `notebooks/` y `.github/workflows/`.

Pendiente, de forma deliberada:

- visor HTML (`index.html`, `styles.css`, `app.js`);
- workflow definitivo de GitHub Actions;
- configuración de GitHub Pages;
- archivo `LICENSE`;
- archivo `CITATION.cff`.

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

Montaña Acevedo, A. C. (2026). *HUMANO: Framework para diseñar y auditar sistemas de inteligencia artificial centrados en las personas*. GitHub. https://github.com/acatherinebusinessintelligence/humano-ai-framework

Este proyecto no tiene DOI propio. No se debe citar un DOI de HUMANO mientras no exista uno asignado.

Para citar el dataset del caso demostrativo:

Becker, B., & Kohavi, R. (1996). *Adult* [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5XW20

---

# Licencia

El archivo `LICENSE` aún no forma parte de este repositorio. Hasta que se publique, el material se destina a uso educativo y de consulta del framework HUMANO.
