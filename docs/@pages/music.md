---
title: 音乐
date: 2024-9-8 13:28:01
permalink: /music/
article: false
comment: false
---

<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        h3 {
            margin-bottom: 20px;
        }

        #audioPlayer {
            width: 100%;
            max-width: 600px;
            margin-bottom: 20px;
        }

        .mp3-list {
            padding: 0;
            margin: 0;
            color: #000;
            list-style-type: none;
            width: 100%;
            max-width: 600px;
        }

        .mp3-list li {
            display: flex;
            align-items: center;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .mp3-list li:hover {
            background-color: #f0f0f0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }

        .control-btns {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }

        .control-btn {
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        .control-btn:hover {
            background-color: #2980b9;
        }

        .control-btn.active {
            background-color: #e74c3c;
        }
    </style>
</head>
<body>

<h3 id="currentTrack">当前播放：</h3>
<br>
<audio id="audioPlayer" controls>
    <source id="audioSource" src="" type="audio/mp3">
</audio>
<ul class="mp3-list"></ul>

<div class="control-btns">
    <button class="control-btn" id="singleLoopBtn">单曲循环</button>
</div>


> 如果没有显示歌单，请尝试刷新页面

![鼠鼠](https://the0n3.top/medias/zz-meme/mouse.jpg)