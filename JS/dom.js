<main>
<h1>
    ABBA INGENIERIA 
</h1>
<div>
    <section>
        <p>Base de empleados:</p>
        <form action="#">
            <label for="titulo">Nombre del Empleado :
                <input type="text" id="nombre" name="titulo" required>
            </label>

            <label for="genero">Cargo del Empleado :
                <input type="text" id="cargo" name="genero" required>
            </label>

            <label for="paginas">Edad del Empleado
                <input type="number" id="edad" required>
            </label>

            <label for="paginas">Años Activo en la empresa
                <input type="number" id="años" required>
            </label>

            <div class="buttons">
                <input type="reset" value="Limpiar entradas">
                <input 
                type="button" 
                id="boton-Enviar" 
                onclick="botonEnviar();" 
                value="Enviar">
            </div>
        </form>
    </section>
    <section>

        <!--IMPRESION DEL EMPLEADO-->

        <p>Empleado:</p>
        <div>
            <ol id="Base"></ol>
        </div>
    </section>
</div>
</main>