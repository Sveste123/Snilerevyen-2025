<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konseptvideo</title>
    <style>
        body {
            background-color: #717cff;
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }
        .video-container {
            max-width: 100%;
            border: 4px solid white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        iframe {
            width: 600px;
            height: 350px;
            border: none;
        }
        /* Watermark */
        .watermark-container {
            position: relative;
            width: 80%;
            height: 80%;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }
        .watermark {
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            font-size: 24px;
            color: rgba(0, 0, 0, 0.3); /* Semi-transparent farge */
            white-space: nowrap;
            pointer-events: none; /* Gjør det ikke-klikkbart */
        }
    </style>
</head>
<body>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/KV9tyDtX304" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Konseptvideo</iframe>
    </div>
    <div class="watermark">Alle rettigheter tilhører © Snilerevyen | Org.nr. 916 144 989</div>
</body>
</html>