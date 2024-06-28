<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>Sobre mim</title>
    <style>
        body {
            background-image: url(xpxdxd.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .contentContainer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            border: 2px solid #8b8b8b;
            padding: 80px;
            border-radius: 15px;
            background-color: rgba(204, 204, 204, 0.9);
            justify-content: center;
        }

        .imgPhoto {
            overflow: hidden;
            width: 300px;
            height: 300px;
            border-radius: 15em;
            margin: 0 auto;
        }

        #socoro {
            justify-content: center;
            width: 300px;
            margin-top: -100px;
        }

        .aboutMe {
            word-break: break-word;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            font-size: 25px;
            width: 400px;
        }

        #sobreMIM {
            margin-top: -15px;
            font-size: 50px;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="contentContainer">
        <h1 id="sobreMIM">SOBRE MIM</h1>
        <div class="imgPhoto">
            <img src="euJoia.png" id="socoro" alt="img">
        </div>
        <div class="aboutMe">
            <p>Olá! Me chamo Renan e tenho 16 anos. Estou cursando o ensino médio no Colégio Mondrone. Além disso, tenho interesse em desenvolvimento de sites e jogos. Nas horas vagas, assisto às aulas do Curso em Vídeo e pratico o desenvolvimento de jogos em JavaScript. É uma honra fazer parte do Prometheus Tech!</p>
        </div>
    </div>
</body>

</html>