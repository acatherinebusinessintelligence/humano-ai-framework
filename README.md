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
