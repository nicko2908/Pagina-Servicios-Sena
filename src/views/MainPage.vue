<template>
    <div>
        <section>
            <h4 class="q-px-xl q-pb-md text-primary green-8">¿Quienes somos?</h4>
            <p class="q-px-xl">El Centro Agroturístico del SENA, sede principal en San Gil, Santander, es una institución 
                líder en la formación técnica y tecnológica orientada al desarrollo económico, social y sostenible de la región de Guanentá. 
                Su modelo educativo integra la vocación agropecuaria y la transformación agroindustrial con el fortalecimiento 
                del sector turístico, la contabilidad y el desarrollo de tecnologías de la información, ofreciendo ambientes de aprendizaje prácticos
                e innovadores que capacitan a aprendices capaces de responder a los retos del entorno productivo y empresarial actual.</p>
        </section>
        <section class="row justify-center">
            <div class="frontalSena-contenedor q-py-xl">
                <q-img src="../assets/ImagenFontalSenaCAMBIARURGENTE.jpg" alt="Parte frontal entrada del sena" fit="cover" style="width: 1200px; height: 500px;" class="frontalSena"/>
            </div>
        </section>
        <section class="q-px-xl q-pb-md">
            <h4 class="text-primary green-8 q-pb-md">Nuestras ofertas educativas</h4>
            <div class="ofertaEducativa">
                <div class="cont1">
                    <h5 class="text-center">Modalidad Presencial</h5>
                    <p>TECNOLOGÍAS</p>
                </div>
                <div class="cont2">
                    <h5 class="text-center">Modalidad virtual</h5>
                    <p>TECNOLOGÍAS</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

p{
    font-size: 1.3rem;
}

.frontalSena{
    border-radius: 50px;
    border: solid 5px var(--color-sena);
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
}

.frontalSena:hover{
    transform: scale(1.03);
    transition: all .5s;
}

.ofertaEducativa{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
}

.cont1{
    background-color: rgb(242, 240, 240);
}

.cont2{
    background-color: rgb(242, 240, 240);
}
</style>