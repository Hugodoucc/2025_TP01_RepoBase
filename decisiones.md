# decisiones.md – TP01 (2025)

## 1) Contexto y setup
- **Origen del repo**: Fork desde el repo de la catedra (evita romper el repo base y me habilita PRs y permisos completos).
- **URL del remoto (origin)**: `git@github.com:Hugodoucc/2025_TP01_RepoBase.git`
- **Config Git (local, solo para este repo)**  
  Usé la cuenta academica para que los commits queden asociados a la facu:
  git config user.name "Hugodoucc"
  git config user.email "2010329@ucc.edu.ar"
- **Autenticación: SSH sobre puerto 443**

## 2) Flujo de trabajo elegido
- **Modelo:** GitHub Flow.
- **Ramas:**
	•	main: estable/desplegable.
	•	feature/mostrar-info: desarrollo de funcionalidad.
	•	hotfix/bug-linea: corrección urgente sobre main.
- **Justificacion:** Simple, claro y compatible con PRs y revisiones. Mantiene main siempre estable y favorece integración continua.

## 3) Funcionalidad desarrollada
- **Rama:** feature/mostrar-info
- **Descripcion:** en src/app.js agregué loadInfo() que lee data/info.txt, lo imprime junto con el saludo.
- **Commits atomicos:**
	1.	feat(app): agrega loadInfo() y muestra data/info.txt al ejecutar
	2.	docs(readme): documenta uso de loadInfo() y salida esperada
	3.	chore: agrega .gitignore (.DS_Store, node_modules)
	4.	chore: elimina .DS_Store del repo 

## 4) Bug simulado y hotfix
- **Bug introducido:** agregue una línea // BUG SIMULADO en main 
- **Rama de fix:** hotfix/bug-linea.
- **Integración a main:**
  git checkout main
  git merge --no-ff hotfix/bug-linea -m "merge: integra hotfix/bug-linea"
  
  Motivo de --no-ff: deja un commit de merge explicito que documenta el hotfix en la historia (trazabilidad).

- **Propagacion del fix a la feature:** merge main -> feature/mostrar-info (Trae todo lo nuevo de main)

## 5) Pull Request de la feature
- **PR:** feature/mostrar-info → main en mi repositorio.
- **Conflicto:** en src/app.js.
Resolucion: combine saludar() + loadInfo() y elimine el marcador de bug; deje un unico punto de entrada que imprime ambas lineas.
- **Estrategia de merge del PR:** Squash & merge.
Motivo: main queda con 1 commit por funcionalidad → historia prolija y facil de revertir una feature completa.

## 6) Versionado y tag

- **Tag:**
  git tag -a v1.0 -m "release: v1.0 (primer corte estable del TP01)"
  git push origin v1.0

  Motivo: el tag anotado guarda mensaje y metadatos (autor, fecha), útil para auditoría.

## 7) Problemas encontrados y resolución
- **Conflicto en src/app.js:** resuelto manteniendo saludo + nueva función y removiendo el bug simulado.
- **.DS_Store trackeado:**
	•	Añadí a .gitignore y lo saqué del índice con git rm --cached .DS_Store.
	•	Además, configuración global para ignorarlo siempre (~/.gitignore_global + core.excludesfile).
- **Permisos 403/puerto 22 bloqueado:** cambié remoto a SSH y usé ssh.github.com:443.

## 8) Uso de IA
- **Que genero la IA:** plan de ejecucion, guias de merge, textos base.
- **Como lo verifique:** ejecute todos los comandos en mi entorno, valide los resultados (git log --oneline --graph --decorate --all), probe la app (node src/app.js) y revisé el PR/merge final.

