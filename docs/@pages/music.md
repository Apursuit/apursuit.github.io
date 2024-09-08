---
title: 音乐
date: 2024-9-8 13:28:01
permalink: /music/
article: false
---

<style>
.mp3-list {
    padding: 0;
    margin: 0;
    color: #000;
}

.mp3-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ffffff; 
    border: 1px solid #ddd; /* Border color */
    border-radius: 5px; /* Border radius */
    cursor: pointer; /* Cursor pointer */
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; /* Transition effects */
}

.mp3-list li:hover {
    background-color: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transform: translateY(-2px); 
}

#audioPlayer{
    width: 100%;
}
</style>
<body>
    <h1>音乐</h1>
    <h3 id="currentTrack">当前播放：</h3>
    <!-- 音频播放器 -->
    <audio id="audioPlayer" controls>
        <source id="audioSource" src="" type="audio/mpeg">
        您的浏览器不支持音频播放。
    </audio>

<div class="content">
    <ul class="mp3-list">
            <!-- 动态生成列表项 -->
    </ul>
</div>
</body>