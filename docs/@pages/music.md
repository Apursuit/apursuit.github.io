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
<h3 id="currentTrack">当前播放：</h3>
<br>
<audio id="audioPlayer" controls>
    <source id="audioSource" src="" type="audio/mp3">
</audio>
<ul class="mp3-list"></ul>

> 如果没有显示歌单，请尝试刷新页面