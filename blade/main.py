from datetime import datetime

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from pydantic import BaseModel

app = FastAPI()

tareas = []


class Mensaje(BaseModel):
    texto: str


@app.get("/", response_class=HTMLResponse)
def home():
    with open("static/index.html", encoding="utf-8") as archivo:
        return archivo.read()


@app.post("/mensaje")
def responder(mensaje: Mensaje):
    texto = mensaje.texto.lower()

    if "hora" in texto:
        ahora = datetime.now().strftime("%H:%M")
        return {"respuesta": f"Son las {ahora}"}

    if texto.startswith("tarea:"):
        tarea = mensaje.texto.split(":", 1)[1].strip()
        tareas.append(tarea)
        return {"respuesta": f"Agregué la tarea: {tarea}"}

    if "tareas" in texto:
        if not tareas:
            return {"respuesta": "No tenés tareas pendientes"}
        return {"respuesta": "Tus tareas son: " + ", ".join(tareas)}

    if "hola" in texto:
        return {"respuesta": "Hola, soy Blade. ¿En qué te ayudo?"}

    return {"respuesta": "Todavía no sé responder eso, pero voy a ir aprendiendo."}
