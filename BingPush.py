import requests
import xml.etree.ElementTree as ET

# 定义基本信息
sitemap_url = 'https://the0n3.top/sitemap.xml'
api_url = 'https://www.bing.com/indexnow'
api_key = '24ecbc0943c8486dbf9e1cf532eb6620'
key_location = 'https://the0n3.top/24ecbc0943c8486dbf9e1cf532eb6620.txt'
host = 'https://the0n3.top'

# 1. 下载并解析 sitemap.xml
response = requests.get(sitemap_url)
root = ET.fromstring(response.content)

# 2. 提取所有 URL
namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [elem.text for elem in root.findall('.//ns:loc', namespaces=namespace)]

# 3. 构建请求体
data = {
    'host': host,
    'key': api_key,
    'keyLocation': key_location,  # 添加 keyLocation 字段
    'urlList': urls
}

# 4. 发送 API 请求
response = requests.post(api_url, json=data)
print(f"Status Code: {response.status_code}")
print(response.text)
