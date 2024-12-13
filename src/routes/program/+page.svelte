<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program</title>
    <style>
        body {
            background-color: #717cff;
            color: white;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1 {
            text-align: center;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 10px 0;
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
    <div class="container">
        <h1>Program</h1>
        <p><strong>Premiere:</strong> 3. Januar</p>
        <p><strong>Forestillinger spilles på Lillestrøm VGS disse datoene:</strong></p>
        <ul>
            <li>03. Januar (kl. 19:00)</li>
            <li>04. Januar (kl. 14:00 og kl. 18:00)</li>
            <li>05. Januar (kl. 14:00 og kl. 18:00)</li>
            <li>07. Januar (kl. 18:00)</li>
            <li>08. Januar (kl. 18:00)</li>
            <li>10. Januar (kl. 18:00)</li>
            <li>11. Januar (kl. 14:00 og kl. 18:00)</li>
        </ul>
    </div>
    <div class="watermark">Alle rettigheter tilhører © Snilerevyen | Org.nr. 916 144 989</div>
</body>
</html>
